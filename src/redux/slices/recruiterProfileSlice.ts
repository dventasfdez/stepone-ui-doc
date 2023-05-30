import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import * as Api from "../../api";
import { setProperties, setIsAvailability, setTenantScope } from "./tenantSlice";
import moment from "moment";
import { UserProperties } from "../../types";

export interface RecruiterProfileState {
  defaultCalendar: any;
  timezone: string;
  error: string;
  update: boolean;
  changed: boolean;
  customCalendar: any;
  fromDate: string;
  toDate: string;
  initDates: boolean;
  firstLoad: boolean;
  isDefaultLoading: boolean;
  isCustomLoading: boolean;
  isPaginationLoading: boolean;
  loadMoreCustom: boolean;
}

const initialState: RecruiterProfileState = {
  defaultCalendar: [],
  timezone: "",
  error: "",
  update: true,
  changed: false,
  customCalendar: [],
  fromDate: "",
  toDate: "",
  initDates: true,
  firstLoad: true,
  isDefaultLoading: true,
  isCustomLoading: true,
  isPaginationLoading: false,
  loadMoreCustom: true,
};

export const recruiterProfileSlice = createSlice({
  name: "inactive",
  initialState: initialState,
  reducers: {
    fetchDefaulCalendarSucces: (state, action) => {
      const { response, availabilityDays, halfDayFormat } = action.payload;
      const newState: RecruiterProfileState = {
        defaultCalendar: extractDays(response.availabilityDays, availabilityDays, halfDayFormat),
        timezone: response.timeZone,
        error: "",
        update: false,
        changed: false,
        customCalendar: state.customCalendar,
        fromDate: state.fromDate,
        toDate: state.toDate,
        initDates: state.initDates,
        firstLoad: state.firstLoad,
        isDefaultLoading: false,
        isCustomLoading: state.isCustomLoading,
        isPaginationLoading: state.isPaginationLoading,
        loadMoreCustom: true,
      };
      return newState;
    },
    fetchDefaulCalendarFailed: (state, action) => {
      const { error } = action.payload;
      if (error === "EntityNotFoundError") {
        state.defaultCalendar = [];
        state.timezone = "";
        state.error = "";
        state.update = false;
      } else {
        state.error = error;
      }
      state.isDefaultLoading = false;
    },
    hideError: (state) => {
      state.error = "";
    },
    updateDefaultCalendar: (state, action) => {
      const { calendar } = action.payload;
      state.defaultCalendar = calendar;
      state.changed = true;
    },
    setUpdated: (state) => {
      state.update = true;
      state.firstLoad = false;
    },
    fetchCustomCalendarSucces: (state, action) => {
      const { response, length } = action.payload;
      state.customCalendar = extractCustomWeeks(response.availabilityDays, length);
      state.fromDate = response.fromDate;
      state.toDate = response.toDate;
      state.isCustomLoading = false;
      state.isPaginationLoading = false;
      state.loadMoreCustom = false;
    },
    fetchCustomCalendarFailed: (state, action) => {
      const { error } = action.payload;
      if (error === "EntityNotFoundError") {
        state.customCalendar = [];
        state.error = "";
        state.update = false;
      } else {
        state.error = error;
      }
      state.isPaginationLoading = false;
      state.isCustomLoading = false;
      state.loadMoreCustom = false;
    },
    initFromAndToDate: (state, action) => {
      const { availabilityDays } = action.payload;
      let dates: string[] = [];
      dates = getDates(availabilityDays);
      state.fromDate = dates[0];
      state.toDate = dates[1];
      state.initDates = false;
    },
    restoreInitialState: () => {
      const newState = { ...initialState };
      return newState;
    },
    setTimeZone: (state, action) => {
      const { timeZone } = action.payload;
      state.timezone = timeZone;
      state.changed = true;
    },
    setDefaultLoading: (state) => {
      state.isDefaultLoading = true;
    },
    setCustomLoading: (state) => {
      state.isCustomLoading = true;
    },
    setPaginationLoading: (state) => {
      state.isPaginationLoading = true;
    },
    setLoadMoreCustom: (state) => {
      state.loadMoreCustom = true;
    },
  },
});

function getDates(availabilityDays: string[]) {
  let dates: string[] = [];
  const fromDateDiference = 1 - moment().day();
  const toDay =
    moment().year() +
    "-" +
    ((moment().month() + 1).toString().length === 2 ? moment().month() + 1 : "0" + (moment().month() + 1)) +
    "-" +
    (moment().date().toString().length === 2 ? moment().date() : "0" + moment().date());
  let fromDateMoment = moment(toDay, "YYYY-MM-DD").subtract(fromDateDiference * -1, "days");
  let fromDate = fromDateMoment.format("YYYY") + "-" + fromDateMoment.format("MM") + "-" + fromDateMoment.format("DD");
  let toDateMoment = moment(fromDate, "YYYY-MM-DD").add(6, "days");
  let toDate = toDateMoment.format("YYYY") + "-" + toDateMoment.format("MM") + "-" + toDateMoment.format("DD");

  dates.push(fromDate);
  dates.push(toDate);

  return dates;
}

function extractCustomWeeks(response: any, length: number) {
  let calendar: any[] = [];
  let daysCount = 0;
  let weeksCount = 0;
  response.forEach((day: any) => {
    if (daysCount === 0) {
      calendar.push([]);
      calendar[weeksCount].push(day);
      daysCount++;
    } else if (daysCount < length) {
      calendar[weeksCount].push(day);
      if (daysCount === length - 1) {
        daysCount = 0;
        weeksCount++;
      } else {
        daysCount++;
      }
    }
  });
  calendar = checkEmptyCustom(calendar);
  return calendar;
}

function checkEmptyCustom(calendar: any) {
  calendar.forEach((week: any, superIndex: number) => {
    week.forEach((day: any, index: number) => {
      if (day.availabilityHours[0] === "00:00-00:00") {
        calendar[superIndex][index].availabilityHours = [];
      }
    });
  });
  return calendar;
}

function extractDays(defaulCalendar: any, availabilityDays: string[], halfDayFormat: boolean) {
  let days: any = [];
  for (let i = 0; i <= 6; i++) {
    if (defaulCalendar[i] && availabilityDays.includes(i.toString())) {
      days.push(changeFormat(defaulCalendar[i], halfDayFormat));
    } else if (!defaulCalendar[i] && availabilityDays.includes(i.toString())) {
      days.push([]);
    }
  }

  return days;
}

function changeFormat(day: string[], halfDayFormat: boolean) {
  let newDay: any[] = [];
  day.forEach((interval: string) => {
    const firstHour = interval.split("-")[0];
    const secondHour = interval.split("-")[1];
    let newFirstHour = firstHour;
    let newSecondHour = secondHour;
    if (halfDayFormat) {
      newFirstHour = transformHour(firstHour.split(":")[0], false)[0] + ":" + firstHour.split(":")[1];
      newSecondHour = transformHour(secondHour.split(":")[0], false)[0] + ":" + secondHour.split(":")[1];
    }
    const newInterval = newFirstHour + "-" + newSecondHour;
    newDay.push({
      interval: newInterval,
      format: [transformHour(firstHour.split(":")[0], false)[1], transformHour(secondHour.split(":")[0], false)[1]],
    });
  });
  return newDay;
}

function transformHour(hour: string, post: boolean, format?: any) {
  let newHour = hour;
  let transformed = false;
  if (!post) {
    switch (hour) {
      case "12":
        newHour = "12";
        transformed = true;
        break;
      case "13":
        newHour = "01";
        transformed = true;
        break;
      case "14":
        newHour = "02";
        transformed = true;
        break;
      case "15":
        newHour = "03";
        transformed = true;
        break;
      case "16":
        newHour = "04";
        transformed = true;
        break;
      case "17":
        newHour = "05";
        transformed = true;
        break;
      case "18":
        newHour = "06";
        transformed = true;
        break;
      case "19":
        newHour = "07";
        transformed = true;
        break;
      case "20":
        newHour = "08";
        transformed = true;
        break;
      case "21":
        newHour = "09";
        transformed = true;
        break;
      case "22":
        newHour = "10";
        transformed = true;
        break;
      case "23":
        newHour = "11";
        transformed = true;
        break;
    }
  } else {
    switch (hour) {
      case "01":
        if (!format) newHour = "01";
        else newHour = "13";
        break;
      case "02":
        if (!format) newHour = "02";
        else newHour = "14";
        break;
      case "03":
        if (!format) newHour = "03";
        else newHour = "15";
        break;
      case "04":
        if (!format) newHour = "04";
        else newHour = "16";
        break;
      case "05":
        if (!format) newHour = "05";
        else newHour = "17";
        break;
      case "06":
        if (!format) newHour = "06";
        else newHour = "18";
        break;
      case "07":
        if (!format) newHour = "07";
        else newHour = "19";
        break;
      case "08":
        if (!format) newHour = "08";
        else newHour = "20";
        break;
      case "09":
        if (!format) newHour = "09";
        else newHour = "21";
        break;
      case "10":
        if (!format) newHour = "10";
        else newHour = "22";
        break;
      case "11":
        if (!format) newHour = "11";
        else newHour = "23";
        break;
      case "12":
        if (!format) newHour = "00";
        else newHour = "12";
        break;
    }
  }

  return [newHour, transformed];
}

function convertDefaultCalendarToObject(calendar: any, timezone: string, availabilityDays: any, halfDayFormat: boolean) {
  const newAvailabilityDays: { [k: string]: any } = {};
  availabilityDays.forEach((day: string, index: number) => {
    if (calendar[index]) {
      let newIntervals: any[] = [];
      calendar[index].forEach((interval: any) => {
        let newInterval = getNewIntervalsFormat(interval, halfDayFormat);
        newIntervals.push(newInterval);
      });
      newAvailabilityDays[day] = newIntervals;
    } else {
      newAvailabilityDays[day] = [];
    }
  });
  const newCalendar = {
    timeZone: timezone,
    availabilityDays: newAvailabilityDays,
  };
  return newCalendar;
}

function getNewIntervalsFormat(interval: any, halfDayFormat: boolean) {
  let newInterval = interval.interval;
  const firstHour = interval.interval.split("-")[0];
  const secondHour = interval.interval.split("-")[1];
  let newFirstHour = firstHour;
  let newSecondHour = secondHour;
  if (halfDayFormat) {
    newFirstHour = transformHour(firstHour.split(":")[0], true, interval.format[0])[0] + ":" + firstHour.split(":")[1];

    newSecondHour = transformHour(secondHour.split(":")[0], true, interval.format[1])[0] + ":" + secondHour.split(":")[1];
  }

  newInterval = newFirstHour + "-" + newSecondHour;
  return newInterval;
}

const {
  fetchDefaulCalendarSucces,
  fetchDefaulCalendarFailed,
  hideError,
  updateDefaultCalendar,
  setUpdated,
  fetchCustomCalendarSucces,
  initFromAndToDate,
  restoreInitialState,
  fetchCustomCalendarFailed,
  setTimeZone,
  setDefaultLoading,
  setCustomLoading,
  setPaginationLoading,
  setLoadMoreCustom,
} = recruiterProfileSlice.actions;

export const fetchDefaulCalendar =
  (availabilityDays: string[], halfDayFormat: boolean): AppThunk =>
  async (dispatch) => {
    await Api.getDefaultRecruiterCalendar()
      .then((response) => {
        if (response) {
          dispatch(
            fetchDefaulCalendarSucces({
              response: response,
              availabilityDays: availabilityDays,
              halfDayFormat: halfDayFormat,
            })
          );
        } else {
          console.warn("No availability for the user in this tenant");
        }
      })
      .catch((e: Error) => {
        dispatch(fetchDefaulCalendarFailed({ error: e.message }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const postDefaulCalendar =
  (calendar: any, timezone: string, availabilityDays: any, halfDayFormat: boolean): AppThunk =>
  async (dispatch) => {
    dispatch(setDefaultLoading());
    await Api.postDefaultCalendar(convertDefaultCalendarToObject(calendar, timezone, availabilityDays, halfDayFormat))
      .then((response) => {
        let availabilityTenant = false;
        for (let index = 0; index < availabilityDays.length; index++) {
          if (response.availabilityDays[`${availabilityDays[index]}`].length > 0) availabilityTenant = true;
        }
        dispatch(setIsAvailability(availabilityTenant));
        dispatch(setUpdated());
      })
      .catch((e: Error) => {
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const updateCalendar =
  (calendar: any): AppThunk =>
  async (dispatch) => {
    dispatch(updateDefaultCalendar({ calendar: calendar }));
  };

export const cancelActions = (): AppThunk => async (dispatch) => {
  dispatch(setUpdated());
};

export const fetchCustomCalendar =
  (fromDate: string, toDate: string, length: number, timeZone: string): AppThunk =>
  async (dispatch) => {
    dispatch(setPaginationLoading());
    await Api.getCustomRecruiterCalendar(fromDate, toDate, timeZone)
      .then((response) => {
        dispatch(fetchCustomCalendarSucces({ response: response, length: length }));
      })
      .catch((e: Error) => {
        dispatch(fetchCustomCalendarFailed({ error: e.message }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const postCustomCalendar =
  (calendar: any): AppThunk =>
  async (dispatch) => {
    dispatch(setCustomLoading());
    await Api.postCustomCalendar(calendar)
      .then((response) => {
        dispatch(setUpdated());
      })
      .catch((e: Error) => {
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const initializeFromAndToDates =
  (availabilityDays: any): AppThunk =>
  async (dispatch) => {
    dispatch(initFromAndToDate({ availabilityDays: availabilityDays }));
  };

export const updateTimeZone =
  (value: string): AppThunk =>
  async (dispatch) => {
    dispatch(setTimeZone({ timeZone: value }));
  };

export const loadMoreCustomTrue = (): AppThunk => async (dispatch) => {
  dispatch(setLoadMoreCustom());
};

export const reset = (): AppThunk => (dispatch) => dispatch(restoreInitialState());

export const errorShown = (): AppThunk => (dispatch) => dispatch(hideError());

export const putUserProperties =
  (userProperties: UserProperties, callback?: Function): AppThunk =>
  (dispatch) => {
    return Api.putUserProperties(userProperties)
      .then((_response) => {
        dispatch(setProperties(userProperties));
        if (callback) callback(true);
      })
      .catch((_e: Error) => {
        dispatch(setProperties({ disableSpam: !userProperties.disableSpam, onConfigurationChangeEmail: !userProperties.onConfigurationChangeEmail }));
        if (callback) callback(false);
      });
  };

export default recruiterProfileSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import store, { AppThunk } from "../store";
import * as Api from "../../api";
import { setTenantScope } from "./tenantSlice";
import { Calendar, CalendarAvailabilitySlot } from "../../types";
import { ORDER_AD_USER_NAME_ASC } from "../../constants";

export interface UserCalendarsState {
  page: number;
  numPages: number;
  totalCount: number;
  order: string;
  calendars: Calendar[];
  error: string;
  isLoading: boolean;
  update: boolean;
}

const initialState: UserCalendarsState = {
  calendars: [],
  page: 1,
  numPages: 1,
  totalCount: 0,
  order: ORDER_AD_USER_NAME_ASC,
  error: "",
  isLoading: false,
  update: false,
};

export const calendarsSlice = createSlice({
  name: "inactive",
  initialState: initialState,
  reducers: {
    fetchUserCalendarsSucces: (state, action) => {
      const { response } = action.payload;
      const newState: UserCalendarsState = {
        calendars: response.calendars,
        page: response.page,
        numPages: response.numPages,
        totalCount: response.totalCount,
        order: state.order,
        error: "",
        isLoading: false,
        update: false,
      };
      return newState;
    },
    updateUserCalendarSuccess: (state) => {
      state.update = true;
    },
    updatePage: (state, action) => {
      const { newPage } = action.payload;
      state.page = newPage;
    },
    setLoading: (state, action) => {
      const { isLoading } = action.payload;
      state.isLoading = isLoading;
    },
    restoreInitialState: () => {
      return { ...initialState };
    },
    apiCallFailed: (state, action) => {
      const { error } = action.payload;
      state.error = error;
      state.isLoading = false;
    },
    hideError: (state) => {
      state.error = "";
    },
  },
});

const { fetchUserCalendarsSucces, updatePage, setLoading, hideError, restoreInitialState, updateUserCalendarSuccess, apiCallFailed } = calendarsSlice.actions;

export const fetchUserCalendars =
  (page: number, size: number, order: string, searchValue: string): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading({ isLoading: true }));
    const regionId = store.getState().tenant.selectedTenant.regionId as string;
    const zoneId = store.getState().tenant.selectedTenant.zoneId;
    const branchId = store.getState().tenant.selectedTenant.branchId as string;
    await Api.fetchCalendarsList(page, size, order, searchValue, regionId, zoneId, branchId)
      .then((response) => {
        dispatch(fetchUserCalendarsSucces({ response: response }));
      })
      .catch((e: Error) => {
        dispatch(apiCallFailed({ error: e.message }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const updateUserCalendar =
  (updatedCalendar: Calendar): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading({ isLoading: true }));

    updatedCalendar = {
      ...updatedCalendar,
      availabilitySlots: updatedCalendar.availabilitySlots.map((availabilitySlot: CalendarAvailabilitySlot) => {
        delete availabilitySlot.endHourFormat;
        delete availabilitySlot.startHourFormat;
        return availabilitySlot;
      }),
    };

    await Api.updateCalendar(updatedCalendar)
      .then(() => {
        dispatch(updateUserCalendarSuccess());
      })
      .catch((e: Error) => {
        dispatch(apiCallFailed({ error: e.message }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const handlePageChange =
  (page: number): AppThunk =>
  (dispatch) => {
    dispatch(updatePage({ newPage: page }));
  };

export const fetchNewCalendars = (): AppThunk => (dispatch) => dispatch(restoreInitialState());

export const errorShown = (): AppThunk => (dispatch) => dispatch(hideError());

export const getSlotsbyMonth =
  (processId: string, candidateId: string, start: number, end: number, phase: number, callback: Function, extraLive?: string): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading({ isLoading: true }));
    await Api.getSlotsByMonth(processId, candidateId, start, end, phase, extraLive)
      .then((data: any) => {
        dispatch(setLoading({ isLoading: false }));
        callback(data);
      })
      .catch((e: Error) => {
        dispatch(apiCallFailed({ error: e.message }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export default calendarsSlice.reducer;

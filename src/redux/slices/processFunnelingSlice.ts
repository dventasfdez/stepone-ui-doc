import { createSlice } from "@reduxjs/toolkit";
import * as Api from "../../api";
import { AppThunk } from "../store";

export interface ProcessFunnelingState {
  error: string;
  isLoading: boolean;
  phasesStatsData: any[];
  invitedStatsData: any[];
  startedStatsData: any;
  process: any;
}

const initialState: ProcessFunnelingState = {
  error: "",
  isLoading: true,
  phasesStatsData: [],
  invitedStatsData: [],
  startedStatsData: { candidates: 0, started: 0 },
  process: {},
};

export const slice = createSlice({
  name: "processFunneling",
  initialState: initialState,
  reducers: {
    fetchPhasesProcessSuccess: (state, action) => {
      const { stats } = action.payload;
      state.phasesStatsData = stats;
      state.isLoading = false;
      state.error = "";
    },
    fetchPhasesProcessError: (state, action) => {
      const { error } = action.payload;
      state.phasesStatsData = [];
      state.isLoading = false;
      state.error = error;
    },
    fetchPhasesStatsSuccess: (state, action) => {
      const { stats } = action.payload;
      state.startedStatsData = stats;
      state.isLoading = false;
      state.error = "";
    },
    fetchPhasesStatsError: (state, action) => {
      const { error } = action.payload;
      state.startedStatsData = { candidates: 0, started: 0 };
      state.isLoading = false;
      state.error = error;
    },
    fetchInvitedProcessSuccess: (state, action) => {
      const { stats } = action.payload;
      state.invitedStatsData = stats;
      state.isLoading = false;
      state.error = "";
    },
    fetchInvitedProcessError: (state, action) => {
      const { error } = action.payload;
      state.invitedStatsData = [];
      state.isLoading = false;
      state.error = error;
    },
    fetchProcessSuccess: (state, action) => {
      const { process } = action.payload;
      state.process = process;
      state.error = "";
    },
    fetchProcessError: (state, action) => {
      const { error } = action.payload;
      state.process = {};
      state.isLoading = false;
      state.error = error;
    },
    setIsLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    hideError: (state) => {
      state.error = "";
    },
    resetState: () => {
      return initialState;
    },
  },
});

const {
  fetchPhasesProcessSuccess,
  fetchPhasesProcessError,
  fetchPhasesStatsSuccess,
  fetchPhasesStatsError,
  fetchInvitedProcessSuccess,
  fetchInvitedProcessError,
  fetchProcessSuccess,
  fetchProcessError,
  setIsLoading,
  resetState,
  hideError,
} = slice.actions;

export const getProcess =
  (processId: string): AppThunk =>
  (dispatch) => {
    dispatch(resetState());
    Api.fetchProcess(processId)
      .then((response) => {
        dispatch(fetchProcessSuccess({ process: response }));
      })
      .catch((e: Error) => {
        dispatch(fetchProcessError({ error: e.message }));
        console.error(e);
      });
  };

export const getProcessPhasesStats =
  (processId: string, initDate: number, endDate: number, utmSource?: string, utmCampaign?: string, utmContent?: string, utmMedium?: string, utmTerm?: string, candidateIds?: string[]): AppThunk =>
  (dispatch) => {
    dispatch(setIsLoading());
    Api.fetchPhasesProcessFunneling(processId, initDate, endDate, utmSource, utmCampaign, utmContent, utmMedium, utmTerm, candidateIds)
      .then((response) => {
        dispatch(fetchPhasesProcessSuccess({ stats: response }));
      })
      .catch((e: Error) => {
        dispatch(fetchPhasesProcessError({ error: e.message }));
        console.error(e);
      });
  };

export const getProcessStartedStats =
  (processId: string, candidateIds?: string[]): AppThunk =>
  (dispatch) => {
    dispatch(setIsLoading());
    Api.fetchPhaseStatusReportFunneling(processId, candidateIds)
      .then((response) => {
        dispatch(fetchPhasesStatsSuccess({ stats: response }));
      })
      .catch((e: Error) => {
        dispatch(fetchPhasesStatsError({ error: e.message }));
        console.error(e);
      });
  };

export const getProcessCandidateActivityStats =
  (processId: string, initDate: number, endDate: number, candidateIds?: string[]): AppThunk =>
  (dispatch) => {
    dispatch(setIsLoading());
    Api.fetchCandidateActivityReportFunneling(processId, initDate, endDate, candidateIds)
      .then((response) => {
        dispatch(fetchInvitedProcessSuccess({ stats: response }));
      })
      .catch((e: Error) => {
        dispatch(fetchInvitedProcessError({ error: e.message }));
        console.error(e);
      });
  };

export const sendFunnelingReport =
  (processId: string, file: File, emails: string[], fileName: string): AppThunk =>
  (dispatch) => {
    dispatch(setIsLoading());
    Api.uploadFunnelingReport(processId, emails, file, fileName)
      .then((response) => {
        dispatch(setIsLoading());
      })
      .catch((e: Error) => {
        dispatch(setIsLoading());
        console.error(e);
      });
  };

export const errorShown = (): AppThunk => (dispatch) => {
  dispatch(hideError());
};

export const resetDetailsState = (): AppThunk => (dispatch) => dispatch(resetState());

export default slice.reducer;

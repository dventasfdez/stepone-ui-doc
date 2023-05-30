import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../store";

export interface AdministratorIntegrationsErrorLogsState {
  page: number;
  numPages: number;
  totalCount: number;
  logs: any[];
  error: string;
  isLoadingLogs: boolean;
}

const initialState: AdministratorIntegrationsErrorLogsState = {
  page: 1,
  numPages: 1,
  totalCount: 0,
  logs: [],
  error: "",
  isLoadingLogs: false,
};

export const administratorIntegrationsErrorLogsSlice = createSlice({
  name: "integrationErrorLogs",
  initialState: initialState,
  reducers: {
    fetchLogsSucces: (state, action) => {
      const { response } = action.payload;
      const newState: AdministratorIntegrationsErrorLogsState = {
        logs: response.logs,
        page: response.page > response.numPages ? (response.numPages > 0 ? response.numPages : "1") : response.page,
        numPages: response.numPages,
        totalCount: response.totalCount,
        error: "",
        isLoadingLogs: false,
      };
      return newState;
    },
    fetchLogsFailed: (state, action) => {
      const { error } = action.payload;
      state.error = error;
      state.isLoadingLogs = false;
    },
    isLoading: (state, action) => {
      const { loading } = action.payload;
      state.isLoadingLogs = loading;
    },
    restoreInitialState: () => {
      const newState = { ...initialState };
      return newState;
    },
  },
});

const { isLoading } = administratorIntegrationsErrorLogsSlice.actions;

export const setIsLoading =
  (loading: boolean): AppThunk =>
  async (dispatch) => {
    dispatch(isLoading({ loading: loading }));
  };

export default administratorIntegrationsErrorLogsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import * as Api from "../../api";
import { setTenantScope } from "./tenantSlice";

export interface AdministratorStatsState {
  stats: [
    {
      year: number;
      type: string;
      num: number;
      dateStarting: string;
      totalUsers: number;
      activeUsers: number;
      totalInterviews: number;
      autoInterviews: number;
      autoInterviewsDone: number;
      liveInterviews: number;
      tenant: {
        name: string;
      };
      totalVideoInterviewsRatio: number;
      liveInterviewsRatio: number;
    }
  ];
  isLoading: boolean;
  error: string;
}

const initialState: AdministratorStatsState = {
  stats: [
    {
      year: 0,
      type: "",
      num: 0,
      dateStarting: "",
      totalUsers: 0,
      activeUsers: 0,
      totalInterviews: 0,
      autoInterviews: 0,
      autoInterviewsDone: 0,
      liveInterviews: 0,
      tenant: {
        name: "",
      },
      totalVideoInterviewsRatio: 0,
      liveInterviewsRatio: 0,
    },
  ],
  isLoading: false,
  error: "",
};

export const administratorStatsSlice = createSlice({
  name: "inactive",
  initialState: initialState,
  reducers: {
    fetchStatsSucces: (state, action) => {
      const { response } = action.payload;
      const newState: AdministratorStatsState = {
        stats: response,
        isLoading: false,
        error: "",
      };
      return newState;
    },
    fetchStatsFailed: (state, action) => {
      const { error } = action.payload;
      state.isLoading = false;
      state.error = error;
    },
    restoreInitialState: () => {
      const newState = { ...initialState };
      return newState;
    },
    setIsLoading: (state, action) => {
      const { isLoading } = action.payload;
      state.isLoading = isLoading;
    },
  },
});

const { fetchStatsSucces, fetchStatsFailed, setIsLoading, restoreInitialState } = administratorStatsSlice.actions;

export const fetchStats =
  (tenants: string[], initDate: string, endDate: string, format: string): AppThunk =>
  async (dispatch) => {
    dispatch(setIsLoading({ isLoading: true }));
    await Api.fetchStatsForAdmintrator(tenants, initDate, endDate, format)
      .then((response: any) => {
        dispatch(fetchStatsSucces({ response: response }));
      })
      .catch((e: Error) => {
        dispatch(fetchStatsFailed({ error: e.message }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const fetchNewStats = (): AppThunk => (dispatch) => dispatch(restoreInitialState());

export default administratorStatsSlice.reducer;

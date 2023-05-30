import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import * as Api from "../../api";
import { setTenantScope } from "./tenantSlice";

export interface AdministratorExternalSystemOperationTenantState {
  page: number;
  numPages: number;
  totalCount: number;
  externalSystemsOperationsTenant: any[];
  error: string;
  isLoading: boolean;
  updated: boolean;
  deleteError: boolean;
}

const initialState: AdministratorExternalSystemOperationTenantState = {
  externalSystemsOperationsTenant: [],
  page: 1,
  numPages: 1,
  totalCount: 0,
  error: "",
  isLoading: false,
  updated: true,
  deleteError: false,
};

export const administratorExternalSystemOperationTenantSlice = createSlice({
  name: "administratorExternalSystemsTenant",
  initialState: initialState,
  reducers: {
    fetchExternalSystemOperationSuccess: (state, action) => {
      const { response } = action.payload;
      const newState: AdministratorExternalSystemOperationTenantState = {
        externalSystemsOperationsTenant: response,
        page: 1,
        numPages: 1,
        totalCount: 1,
        error: "",
        isLoading: false,
        updated: false,
        deleteError: state.deleteError,
      };
      return newState;
    },
    updateExternalSystemOperationSuccess: (state, _action) => {
      state.updated = true;
    },
    deleteExternalSystemOperationSuccess: (state, _action) => {
      state.updated = true;
    },
    setLoading: (state, action) => {
      const { isLoading } = action.payload;
      state.isLoading = isLoading;
    },
    apiCallFailed: (state, action) => {
      const { error } = action.payload;
      state.error = error;
      state.isLoading = false;
    },
    hideError: (state) => {
      state.error = "";
    },
    setDeleteError: (state) => {
      state.deleteError = !state.deleteError;
    },
  },
});

const { updateExternalSystemOperationSuccess, deleteExternalSystemOperationSuccess, hideError, apiCallFailed, setDeleteError } =
  administratorExternalSystemOperationTenantSlice.actions;


export const updateExternalSystemOperation =
  (data: any, callback?: Function): AppThunk =>
  async (dispatch) => {
    await Api.updateExternalSystemOperationTenant(data)
      .then((response) => {
        dispatch(updateExternalSystemOperationSuccess({ response: response }));
      })
      .catch((e: Error) => {
        dispatch(apiCallFailed({ error: e.message }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
    if (callback) callback();
  };

export const deleteExternalSystemOperation =
  (form: any, callback?: Function): AppThunk =>
  async (dispatch) => {
    await Api.deleteExternalSystemOperationTenant(form)
      .then((response) => {
        dispatch(deleteExternalSystemOperationSuccess({ response: response }));
      })
      .catch((e: Error) => {
        dispatch(setDeleteError());
        dispatch(apiCallFailed({ error: e.message }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
    if (callback) callback();
  };

export const errorShown = (): AppThunk => (dispatch) => dispatch(hideError());

export const setDeleteErrorTrue = (): AppThunk => (dispatch) => dispatch(setDeleteError());

export default administratorExternalSystemOperationTenantSlice.reducer;

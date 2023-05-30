import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import * as Api from "../../api";
import { setTenantScope } from "./tenantSlice";

export interface AdministratorMailjetState {
  mailjets: any[];
  error: string;
  isLoading: boolean;
  deleteError: boolean;
  uploadError: boolean;
  editInUseError: boolean;
  editIdError: boolean;
  updated: boolean;
}

const initialState: AdministratorMailjetState = {
  mailjets: [],
  error: "",
  isLoading: false,
  deleteError: false,
  uploadError: false,
  editInUseError: false,
  editIdError: false,
  updated: true,
};

export const administratorMailjetSlice = createSlice({
  name: "inactive",
  initialState: initialState,
  reducers: {
    fetchMailjetsSucces: (state, action) => {
      const { response } = action.payload;
      const newState: AdministratorMailjetState = {
        mailjets: response,
        error: "",
        isLoading: false,
        deleteError: false,
        uploadError: false,
        editInUseError: false,
        editIdError: false,
        updated: false,
      };
      return newState;
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
    setUploadError: (state) => {
      state.uploadError = !state.uploadError;
    },
    setEditInUseError: (state) => {
      state.editInUseError = !state.editInUseError;
    },
    setEditIdError: (state) => {
      state.editIdError = !state.editIdError;
    },
    setUpdated: (state) => {
      state.updated = true;
    },
  },
});

const { fetchMailjetsSucces, setLoading, apiCallFailed, hideError, setDeleteError, setUploadError, setEditInUseError, setEditIdError, setUpdated } = administratorMailjetSlice.actions;

export const fetchMailjets =
  (filter: string, order: string): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading({ isLoading: true }));
    await Api.fetchMailJetList(filter, order)
      .then((response) => {
        dispatch(fetchMailjetsSucces({ response: response }));
      })
      .catch((e: Error) => {
        dispatch(apiCallFailed({ error: e.message }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const posthMailjet =
  (mailjet: any): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading({ isLoading: true }));
    await Api.postMailJetTemplate(mailjet)
      .then((response) => {
        dispatch(setUpdated());
      })
      .catch((e: Error) => {
        dispatch(setUploadError());
        dispatch(apiCallFailed({ error: e.message }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const updateMailJetTemplate =
  (id: string, mailjet: any): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading({ isLoading: true }));
    await Api.updateMailJetTemplate(id, mailjet)
      .then((response) => {
        dispatch(setUpdated());
      })
      .catch((e: Error) => {
        if (e.message === "EntityIdExist") dispatch(setEditIdError());
        if (e.message === "EntityInUse") dispatch(setEditInUseError());
        dispatch(apiCallFailed({ error: e.message }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const deleteMailjets =
  (id: string): AppThunk =>
  async (dispatch) => {
    await Api.deleteMailJet(id)
      .then((response) => {
        dispatch(setUpdated());
      })
      .catch((e: Error) => {
        dispatch(setDeleteError());
        dispatch(apiCallFailed({ error: e.message }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const errorShown = (): AppThunk => (dispatch) => dispatch(hideError());
export const setDeleteErrorTrue = (): AppThunk => (dispatch) => dispatch(setDeleteError());
export const setEditIdErrorTrue = (): AppThunk => (dispatch) => dispatch(setEditIdError());
export const setEditInUseErrorTrue = (): AppThunk => (dispatch) => dispatch(setEditInUseError());
export const setUploadErrorTrue = (): AppThunk => (dispatch) => dispatch(setUploadError());

export default administratorMailjetSlice.reducer;

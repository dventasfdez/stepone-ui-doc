import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import * as Api from "../../api";
import { TenantSendUser } from "../../types";
import { setTenantUpdated, setTenantScope } from "./tenantSlice";

export interface AdministratorUsersState {
  page: number;
  numPages: number;
  totalCount: number;
  users: any;
  isLoadingUsers: boolean;
  isLoadingModal: boolean;
  error: string;
  role: string;
}

const initialState: AdministratorUsersState = {
  users: [],
  page: 1,
  numPages: 1,
  totalCount: 0,
  isLoadingUsers: true,
  isLoadingModal: false,
  role: "",
  error: "",
};

export const administratorUsersSlice = createSlice({
  name: "inactive",
  initialState: initialState,
  reducers: {
    fetchUsersSuccess: (state, action) => {
      const { response } = action.payload;
      const newState: AdministratorUsersState = {
        users: response.users,
        page: response.page > response.numPages ? 1 : response.page,
        numPages: response.numPages,
        totalCount: response.totalCount,
        role: state.role,
        isLoadingUsers: false,
        isLoadingModal: false,
        error: "",
      };
      return newState;
    },
    restoreInitialState: () => {
      return initialState;
    },
    startLoadingUsers: (state) => {
      state.isLoadingUsers = true;
    },
    toggleLoadingModal: (state, action) => {
      const { showLoading } = action.payload;
      state.isLoadingModal = showLoading;
    },
    updatePage: (state, action) => {
      const { page } = action.payload;
      state.page = page;
    },
    updateRole: (state, action) => {
      const { role } = action.payload;
      state.role = role;
    },
    apiCallFailed: (state, action) => {
      const { error } = action.payload;
      state.error = error;
      state.isLoadingUsers = false;
      state.isLoadingModal = false;
    },
    hideError: (state) => {
      state.error = "";
    },
  },
});

const { fetchUsersSuccess, restoreInitialState, startLoadingUsers, updatePage, updateRole, toggleLoadingModal, apiCallFailed, hideError } = administratorUsersSlice.actions;

export const fetchUsers =
  (page: number, size: number, order: string, searchValue: string, role: string): AppThunk =>
  async (dispatch) => {
    dispatch(startLoadingUsers());
    await Api.fetchTenantUsers(page, size, order, searchValue, role)
      .then((response: any) => {
        dispatch(fetchUsersSuccess({ response: response }));
      })
      .catch((e: Error) => {
        dispatch(apiCallFailed({ error: e.message }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const insertUser =
  (user: TenantSendUser, page: number, size: number, order: string, searchValue: string, role: string): AppThunk =>
  async (dispatch) => {
    dispatch(toggleLoadingModal({ showLoading: true }));
    await Api.insertTenantUser(user)
      .then((response: any) => {
        tenantResponseSuccess(dispatch, page, size, order, searchValue, role);
      })
      .catch((e: Error) => {
        tenantResponseError(dispatch, e);
      });
  };

export const updateUser =
  (user: TenantSendUser, page: number, size: number, order: string, searchValue: string, role: string): AppThunk =>
  async (dispatch) => {
    dispatch(toggleLoadingModal({ showLoading: true }));
    await Api.updateTenantUser(user)
      .then((response: any) => {
        tenantResponseSuccess(dispatch, page, size, order, searchValue, role);
      })
      .catch((e: Error) => {
        tenantResponseError(dispatch, e);
      });
  };

export const deleteUser =
  (userId: string, page: number, size: number, order: string, searchValue: string, role: string): AppThunk =>
  async (dispatch) => {
    dispatch(toggleLoadingModal({ showLoading: true }));
    await Api.removeTenantUser(userId)
      .then((response: any) => {
        tenantResponseSuccess(dispatch, page, size, order, searchValue, role);
      })
      .catch((e: Error) => {
        tenantResponseError(dispatch, e);
      });
  };

const tenantResponseSuccess = (dispatch: any, page: number, size: number, order: string, searchValue: string, role: string) => {
  dispatch(toggleLoadingModal({ showLoading: false }));
  dispatch(fetchUsers(page, size, order, searchValue, role));
  dispatch(setTenantUpdated(true));
};

const tenantResponseError = (dispatch: any, e: any) => {
  dispatch(apiCallFailed({ error: e.message }));
  if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
};

export const errorShown = (): AppThunk => (dispatch) => dispatch(hideError());
export const fetchNewUsers = (): AppThunk => (dispatch) => dispatch(restoreInitialState());

export const changePage =
  (page: number): AppThunk =>
  (dispatch) =>
    dispatch(updatePage({ page: page }));
export const changeRole =
  (role: string): AppThunk =>
  (dispatch) =>
    dispatch(updateRole({ role: role }));
export default administratorUsersSlice.reducer;

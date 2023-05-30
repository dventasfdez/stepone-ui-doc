import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import * as Api from "../../api";
import { setTenantScope } from "./tenantSlice";
import { Skill } from "../../types";

export interface AdministratorSkillsState {
  skills: Skill[];
  error: string;
  isLoading: boolean;
  updated: boolean;
  deleteError: boolean;
}

const initialState: AdministratorSkillsState = {
  skills: [],
  error: "",
  isLoading: false,
  updated: true,
  deleteError: false,
};

export const administratorSkillsSlice = createSlice({
  name: "inactive",
  initialState: initialState,
  reducers: {
    fetchSkillsSucces: (state, action) => {
      const { response } = action.payload;
      const newState: AdministratorSkillsState = {
        skills: response.skills,
        error: "",
        isLoading: false,
        updated: false,
        deleteError: state.deleteError,
      };
      return newState;
    },
    updateSkillsSucces: (state, action) => {
      state.updated = true;
    },
    deleteSkillsSucces: (state, action) => {
      state.updated = true;
    },
    setLoading: (state, action) => {
      const { isLoading } = action.payload;
      state.isLoading = isLoading;
    },
    restoreInitialState: () => {
      const newState = { ...initialState };
      return newState;
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

const { fetchSkillsSucces, apiCallFailed, updateSkillsSucces, deleteSkillsSucces, setLoading, hideError, restoreInitialState, setDeleteError } = administratorSkillsSlice.actions;

export const fetchSkills =
  (searchValue: string): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading({ isLoading: true }));
    await Api.fetchGlobalSkillList(searchValue)
      .then((response) => {
        dispatch(fetchSkillsSucces({ response: response }));
      })
      .catch((e: Error) => {
        dispatch(apiCallFailed({ error: e.message }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const updateSkills =
  (skill: any): AppThunk =>
  async (dispatch) => {
    if (skill.id) {
      await Api.updateGlobalSkill(skill)
        .then((response) => {
          dispatch(updateSkillsSucces(response));
        })
        .catch((e: Error) => {
          dispatch(apiCallFailed({ error: e.message }));
          if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
        });
    } else {
      await Api.uploadGlobalSkill(skill.name, skill.info)
        .then((response) => {
          dispatch(updateSkillsSucces(response));
        })
        .catch((e: Error) => {
          dispatch(apiCallFailed({ error: e.message }));
          if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
        });
    }
  };

export const deleteSkills =
  (skillId: string): AppThunk =>
  async (dispatch) => {
    await Api.deleteGlobalSkill(skillId)
      .then((response) => {
        dispatch(deleteSkillsSucces(response));
      })
      .catch((e: Error) => {
        dispatch(setDeleteError());
        dispatch(apiCallFailed({ error: e.message }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const fetchNewUsers = (): AppThunk => (dispatch) => dispatch(restoreInitialState());

export const errorShown = (): AppThunk => (dispatch) => dispatch(hideError());

export const setDeleteErrorTrue = (): AppThunk => (dispatch) => dispatch(setDeleteError());

export default administratorSkillsSlice.reducer;

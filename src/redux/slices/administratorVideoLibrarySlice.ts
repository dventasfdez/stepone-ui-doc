import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import * as Api from "../../api";
import { setTenantScope } from "./tenantSlice";
import { VideoLibraryI } from "../../types";

export interface AdministratorVideoLibraryState {
  inputValue: string;
  searchValue: string;
  page: number;
  numPages: number;
  totalCount: number;
  videoLibrary: VideoLibraryI[];
  error: string;
  errorUpdate: string;
  errorUpload: string;
  isLoading: boolean;
}

const initialState: AdministratorVideoLibraryState = {
  inputValue: "",
  searchValue: "",
  page: 1,
  numPages: 1,
  totalCount: 0,
  videoLibrary: [],
  error: "",

  errorUpdate: "",
  errorUpload: "",
  isLoading: true,
};

export const administratorVideoLibrarySlice = createSlice({
  name: "inactive",
  initialState: initialState,
  reducers: {
    fetchVideoLibrarySucces: (state, action) => {
      const { response } = action.payload;
      const newState: AdministratorVideoLibraryState = {
        inputValue: state.inputValue,
        searchValue: state.searchValue,
        videoLibrary: response.videoLibrary,
        page: response.page > response.numPages ? 1 : response.page,
        numPages: response.numPages,
        totalCount: response.totalCount,
        error: "",

        errorUpdate: "",
        errorUpload: "",
        isLoading: false,
      };
      return newState;
    },
    apiCallFailed: (state, action) => {
      const { error } = action.payload;
      state.error = error;
      state.isLoading = false;
    },
    updateCallFailed: (state, action) => {
      const { error } = action.payload;
      state.errorUpdate = error;
      state.isLoading = false;
    },
    uploadCallFailed: (state, action) => {
      const { error } = action.payload;
      state.errorUpload = error;
      state.isLoading = false;
    },
    setIsLoading: (state, action) => {
      const { isLoading } = action.payload;
      state.isLoading = isLoading;
    },
    restoreInitialState: () => {
      const newState = { ...initialState };
      return newState;
    },
    setErrorUploadSuccess: (state) => {
      state.errorUpload = "";
    },
    setErrorUpdateSuccess: (state) => {
      state.errorUpdate = "";
    },
    setErrorSuccess: (state) => {
      state.error = "";
    },

    updateFilterVideoLibrary: (state, action) => {
      const { value } = action.payload;
      state.inputValue = value;
    },
    updateSearchVideoLibrary: (state, action) => {
      const { value } = action.payload;
      state.searchValue = value;
    },
    updateDataVideoLibrary: (state, action) => {
      const { page, searchValue } = action.payload;
      state.page = page;
      state.searchValue = searchValue;
    },
  },
});

const {
  fetchVideoLibrarySucces,
  setIsLoading,
  apiCallFailed,
  updateCallFailed,
  uploadCallFailed,
  setErrorSuccess,
  setErrorUpdateSuccess,
  setErrorUploadSuccess,
  updateDataVideoLibrary,
  updateFilterVideoLibrary,
  updateSearchVideoLibrary,
} = administratorVideoLibrarySlice.actions;

export const fetchVideoLibrary =
  (page: number, size: number, order: string, searchValue: string, isPersonal: boolean): AppThunk =>
  async (dispatch) => {
    dispatch(setIsLoading({ isLoading: true }));
    await Api.fetchAllVideoLibrary(page, size, order, searchValue, "", isPersonal)
      .then((response) => {
        dispatch(fetchVideoLibrarySucces({ response: response }));
      })
      .catch((e: Error) => {
        dispatch(apiCallFailed({ error: e.message }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const uploadVideoLibrary =
  (video: VideoLibraryI, page: number, size: number, order: string, searchValue: string, isPersonal: boolean): AppThunk =>
  async (dispatch) => {
    dispatch(setIsLoading({ isLoading: true }));
    await Api.uploadVideoLibrary(video)
      .then((response) => {
        dispatch(fetchVideoLibrary(page, size, order, searchValue, isPersonal));
      })
      .catch((e: Error) => {
        dispatch(uploadCallFailed({ error: e.message }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const updateVideoLibrary =
  (videoLibraryId: string, video: VideoLibraryI, page: number, size: number, order: string, searchValue: string, isPersonal: boolean): AppThunk =>
  async (dispatch) => {
    dispatch(setIsLoading({ isLoading: true }));

    await Api.updateVideoLibrary(videoLibraryId, video)
      .then((response) => {
        dispatch(fetchVideoLibrary(page, size, order, searchValue, isPersonal));
      })
      .catch((e: Error) => {
        dispatch(updateCallFailed({ error: e.message }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const deleteVideoLibrary =
  (videoLibraryId: string, page: number, size: number, order: string, searchValue: string, isPersonal: boolean): AppThunk =>
  async (dispatch) => {
    dispatch(setIsLoading({ isLoading: true }));
    await Api.deleteVideoLibrary(videoLibraryId)
      .then((response) => {
        dispatch(fetchVideoLibrary(page, size, order, searchValue, isPersonal));
      })
      .catch((e: Error) => {
        dispatch(apiCallFailed({ error: e.message }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const deleteFetchError = (): AppThunk => (dispatch) => {
  dispatch(setErrorSuccess());
};

export const deleteUpdateError = (): AppThunk => (dispatch) => {
  dispatch(setErrorUpdateSuccess());
};

export const deleteUploadError = (): AppThunk => (dispatch) => {
  dispatch(setErrorUploadSuccess());
};

export const updateListDataVideoLibrary =
  (page: number, order: any, searchValue: string): AppThunk =>
  (dispatch) => {
    dispatch(
      updateDataVideoLibrary({
        page: page,
        order: order,
        searchValue: searchValue,
      })
    );
  };

export const updateInputValueVideoLibrary =
  (inputValue: string): AppThunk =>
  (dispatch) => {
    dispatch(updateFilterVideoLibrary({ value: inputValue }));
  };
export const updateSearchValueVideoLibrary =
  (searchValue: string): AppThunk =>
  (dispatch) => {
    dispatch(updateSearchVideoLibrary({ value: searchValue }));
  };

export default administratorVideoLibrarySlice.reducer;

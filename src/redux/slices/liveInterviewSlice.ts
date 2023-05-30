import { createSlice } from "@reduxjs/toolkit";
import * as Api from "../../api";
import { AppThunk } from "../store";
import { LiveInterviewExtra, PhaseStatus } from "../../types";

export interface LiveInterviewState {
  error: string;
  liveInterview: LiveInterviewExtra;
  isUploading: boolean;
  rescheduled: boolean;
}

const initialState: LiveInterviewState = {
  error: "",
  liveInterview: {
    id: "",
    inviteLiveInterviewOption: "",
  },
  isUploading: true,
  rescheduled: false,
};

export const liveInterviewSlice = createSlice({
  name: "liveInterview",
  initialState: initialState,
  reducers: {
    fetchLiveInterviewSuccess: (state, action) => {
      const { liveInterview } = action.payload;
      if ((state.liveInterview.status === PhaseStatus.opened || state.liveInterview.status === PhaseStatus.started) && liveInterview.status === PhaseStatus.created) {
        state.rescheduled = true;
      } else if (state.rescheduled) {
        state.rescheduled = false;
      }
      state.liveInterview = liveInterview;
    },
    fetchLiveInterviewFailed: (state, action) => {
      const { error } = action.payload;
      state.error = error;
    },
    setIsUploading: (state, action) => {
      const { loading } = action.payload;
      state.isUploading = loading;
    },
    hideError: (state) => {
      state.error = "";
    },
  },
});

const { hideError, setIsUploading, fetchLiveInterviewSuccess, fetchLiveInterviewFailed } = liveInterviewSlice.actions;

export const errorShown = (): AppThunk => (dispatch) => dispatch(hideError());
export const fetchLiveInterview = (processId: string, candidateId: string, liveInterviewId: string): AppThunk => async (dispatch) => {
  Api.fetchCandidateLiveInterview(processId, candidateId, liveInterviewId)
    .then((liveInterview) => {
      dispatch(
        fetchLiveInterviewSuccess({
          liveInterview: liveInterview as LiveInterviewExtra,
        })
      );
      dispatch(setIsUploading({ loading: false }));
    })
    .catch((e) => {
      dispatch(fetchLiveInterviewFailed({ error: e }));
    });
};

export const updateLiveInterview = (processId: string, candidateId: string, liveInterviewId: string, data: any): AppThunk => async (dispatch) => {
  dispatch(setIsUploading({ loading: true }));
  Api.updateCandidateExtraLiveInterview(processId, candidateId, liveInterviewId, data)
    .then((liveInterview) => {
      dispatch(fetchLiveInterviewSuccess({ liveInterview: liveInterview }));
      dispatch(setIsUploading({ loading: false }));
    })
    .catch((e) => {
      dispatch(fetchLiveInterviewFailed({ error: e }));
    });
};

export default liveInterviewSlice.reducer;

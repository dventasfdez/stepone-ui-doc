import { createSlice } from "@reduxjs/toolkit";
import * as Api from "../../api";
import { FormInterface } from "../../components/candidate-web/components/reference-form";
import { TrackingStorage } from "../../helper/tracking-storage";
import { Candidate, PhaseStatus, PhaseType, ProcessPhasesStats } from "../../types";
import { AppThunk } from "../store";

const tracking = new TrackingStorage();

export interface CandidateWebState {
  candidate: Candidate;
  phase: number;
  approved: boolean;
  denied: boolean;
  ended: boolean;
  rescheduled: boolean;
  isUploading: boolean;
  error: string;
  questionPopUp: boolean;
  isLoading: boolean;
}

const initialState: CandidateWebState = {
  candidate: {} as Candidate,
  phase: 0,
  approved: false,
  denied: false,
  ended: false,
  rescheduled: false,
  isUploading: true,
  error: "",
  questionPopUp: false,
  isLoading: false,
};

export const slice = createSlice({
  name: "candidateWeb",
  initialState: initialState,
  reducers: {
    updateCandidateSuccess: (state, action) => {
      const { candidate } = action.payload;
      if (
        (candidate.phasesStats[state.phase].type === 3 || candidate.phasesStats[state.phase].type === 6) &&
        (state.candidate.phasesStats[state.phase].status === PhaseStatus.opened || state.candidate.phasesStats[state.phase].status === PhaseStatus.started) &&
        candidate.phasesStats[state.phase].status === PhaseStatus.created
      ) {
        state.rescheduled = true;
      } else if (state.rescheduled) {
        state.rescheduled = false;
      }
      state.candidate = candidate;
      state.isUploading = false;
      state.isLoading = false;

      if (candidate.phasesResults[state.phase].type === 1 && candidate.phasesStats[state.phase].status === PhaseStatus.completed) {
        state.questionPopUp = true;
      }
      tracking.saveTrackingData("rc_y", candidate.personId ? candidate.personId : candidate.id);
    },
    updateCandidateFailed: (state, action) => {
      const { error } = action.payload;
      state.error = error.message;
      state.isUploading = false;
      state.isLoading = false;
    },
    hideError: (state) => {
      state.error = "";
    },
    setIsUploading: (state, action) => {
      const { loading } = action.payload;
      state.isLoading = loading;
    },
    setOnFinish: (state, action) => {
      const { phase, aproved, ended, denied } = action.payload;
      state.phase = phase;
      state.approved = aproved;
      state.ended = ended;
      state.denied = denied;
      state.questionPopUp = false;
      state.isLoading = false;
    },
  },
});

const { updateCandidateFailed, updateCandidateSuccess, hideError, setIsUploading, setOnFinish } = slice.actions;

export const fetchCandidate =
  (processId: string, candidateId: string): AppThunk =>
  async (dispatch) => {
    await Api.fetchCandidate(processId, candidateId)
      .then((candidate: Candidate) => {
        if (candidate) {
          dispatch(updateCandidateSuccess({ candidate: candidate }));
          const getPhaseStatus = getPhase(candidate.phasesStats);
          if (getPhaseStatus) {
            dispatch(
              setOnFinish({
                phase: getPhaseStatus.phaseCount,
                aproved: getPhaseStatus.approved,
                ended: getPhaseStatus.ended,
                denied: getPhaseStatus.denied,
              })
            );
          }
        }
      })
      .catch((e) => {
        dispatch(updateCandidateFailed({ error: e }));
      });
  };

export const updateCandidate =
  (
    processId: string,
    candidate: Candidate,
    phase: number,
    terms: boolean = true,
    termsId?: string,
    language?: string,
    version?: string,
    formData?: Array<FormInterface>,
    callbackFunction?: Function
  ): AppThunk =>
  async (dispatch) => {
    dispatch(setIsUploading({ loading: true }));

    await Api.updateCandidate(processId, candidate, phase, language, version, formData, termsId, terms)
      .then((candidateResponse: Candidate) => {
        dispatch(updateCandidateSuccess({ candidate: { ...candidateResponse, files: candidateResponse?.files || candidate?.files } }));
        updateCandidateSuccessHandler(candidateResponse, phase, dispatch);
        if (callbackFunction) {
          callbackFunction(candidateResponse);
        }
      })
      .catch((e) => {
        dispatch(updateCandidateFailed({ error: e }));
      });
  };

export const qualifyingCandidate =
  (processId: string, candidate: Candidate, phase: number): AppThunk =>
  async (dispatch) => {
    dispatch(setIsUploading({ loading: true }));
    let newCandidate = {
      ...candidate,
      phaseChange: { from: PhaseStatus.started, to: PhaseStatus.started },
    };
    await Api.updateCandidate(processId, newCandidate, phase)
      .then((candidateResponse: Candidate) => {
        if (candidateResponse) {
          dispatch(updateCandidateSuccess({ candidate: { ...candidateResponse, files: candidateResponse?.files || candidate?.files } }));
          const getPhaseStatus = getPhase(candidateResponse.phasesStats);
          if (getPhaseStatus) {
            dispatch(
              setOnFinish({
                phase: getPhaseStatus.phaseCount,
                aproved: getPhaseStatus.approved,
                ended: getPhaseStatus.ended,
                denied: getPhaseStatus.denied,
              })
            );
          }
        }
      })
      .catch((e) => {
        dispatch(updateCandidateFailed({ error: e }));
      });
  };

export const updatePhaseStatsToOpened =
  (processId: string, candidate: Candidate, phase: number): AppThunk =>
  async (dispatch) => {
    let candidateChange = {} as Candidate;

    if (candidate.phasesStats[phase].type !== 3 && candidate.phasesStats[phase].type !== 6) {
      candidateChange = {
        ...candidate,
        phaseChange: { from: "waiting", to: "opened" },
      };
    } else if (candidate.phasesStats[phase].status === "created") {
      candidateChange = {
        ...candidate,
        phaseChange: { from: "created", to: "opened" },
      };
    }
    if (candidateChange.id && (candidate.phasesStats[phase].status === "created" || candidate.phasesStats[phase].status === "waiting")) {
      dispatch(setIsUploading({ loading: true }));
      await Api.updateCandidate(processId, candidateChange, phase)
        .then((candidateResponse: Candidate) => {
          dispatch(updateCandidateSuccess({ candidate: { ...candidateResponse, files: candidateResponse?.files || candidate?.files } }));
        })
        .catch((e) => {
          dispatch(updateCandidateFailed({ error: e }));
        });
    }
  };

export const updatePhaseStatsToStarted =
  (processId: string, candidate: Candidate, phase: number): AppThunk =>
  async (dispatch) => {
    const candidateChange = {
      ...candidate,
      phaseChange: { from: "opened", to: "started" },
    };
    await Api.updateCandidate(processId, candidateChange, phase)
      .then((candidateResponse: Candidate) => {
        dispatch(updateCandidateSuccess({ candidate: { ...candidateResponse, files: candidateResponse?.files || candidate?.files } }));
      })
      .catch((e) => {
        dispatch(updateCandidateFailed({ error: e }));
      });
  };

export const updatePhaseStatsToSkipped =
  (processId: string, candidate: Candidate, phase: number, setters: any): AppThunk =>
  async (dispatch) => {
    const candidateChange = {
      ...candidate,
      phaseChange: { from: candidate.phasesStats[phase].status, to: "skipped" },
    };
    await _updateCandidate(processId, candidateChange, phase, dispatch, setters);
  };

export const updatePhaseStatsToCompleted =
  (processId: string, candidate: Candidate, phase: number, setters: any): AppThunk =>
  async (dispatch) => {
    let candidateChange;
    const toStatus = candidate.phasesResults[phase].candidatePresentation?.manualApproval === true ? "pending" : "completed";
    candidateChange = {
      ...candidate,
      phaseChange: { from: "started", to: toStatus },
    };
    await _updateCandidate(processId, candidateChange, phase, dispatch, setters);
  };

async function _updateCandidate(processId: string, candidateChange: any, phase: number, dispatch: any, setters: any) {
  await Api.updateCandidate(processId, candidateChange, phase)
    .then((candidateResponse: any) => {
      dispatch(updateCandidateSuccess({ candidate: candidateResponse }));
      updateCandidateSuccessHandler(candidateResponse, phase, dispatch);
      setters?.setHaveVideo(false);
      setters?.setIsRecorded(false);
      setters?.setRecordedFile(null);
    })
    .catch((e) => {
      dispatch(updateCandidateFailed({ error: e }));
    });
}

function updateCandidateSuccessHandler(candidateResponse: any, phase: any, dispatch: any) {
  if (
    (candidateResponse.phasesStats[phase].type !== PhaseType.screeningQuestions || candidateResponse.phasesStats[phase].status === "failed") &&
    candidateResponse.phasesStats[phase].type !== PhaseType.hardSkill &&
    candidateResponse.phasesStats[phase].type !== PhaseType.softSkill
  ) {
    const getPhaseStatus = getPhase(candidateResponse.phasesStats);
    dispatch(
      setOnFinish({
        phase: getPhaseStatus.phaseCount,
        aproved: getPhaseStatus.approved,
        ended: getPhaseStatus.ended,
        denied: getPhaseStatus.denied,
      })
    );
  }
}

export const updateNextPhase =
  (candidate: Candidate): AppThunk =>
  async (dispatch) => {
    dispatch(setIsUploading({ loading: true }));
    const getPhaseStatus = getPhase(candidate.phasesStats);
    dispatch(
      setOnFinish({
        phase: getPhaseStatus.phaseCount,
        aproved: getPhaseStatus.approved,
        ended: getPhaseStatus.ended,
        denied: getPhaseStatus.denied,
        questionPopUp: false,
      })
    );
  };

const getPhase = (phases: ProcessPhasesStats[]) => {
  let phaseCount: number = 0;
  let approved: boolean = false;
  let denied: boolean = false;
  let ended: boolean = false;

  phases.forEach((phase: ProcessPhasesStats) => {
    if (phase.status === "completed" || phase.status === "skipped") {
      phaseCount++;
      if (phaseCount === phases.length) {
        phaseCount = phases.length - 1;
        approved = true;
        ended = true;
      }
    }
    if (phase.status === "failed") {
      phaseCount = phases.length;
      denied = true;
      ended = true;
    }
  });

  return { phaseCount, approved, denied, ended };
};

//New implementatio of stats:
export const updateStateRegistration =
  (candidateId: string, type: number, phase: number, status: string): AppThunk =>
  async () => {
    await Api.updateStateRegistrationStats(candidateId, type, phase, status).catch((e) => {
      console.error(e);
    });
  };

export const errorShown = (): AppThunk => (dispatch) => dispatch(hideError());

export default slice.reducer;

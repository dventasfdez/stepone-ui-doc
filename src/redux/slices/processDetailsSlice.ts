import { Candidate, ProcessResponse, DetailsOrder, PublicCandidate, ProcessPhase } from "../../types";
import { createSlice } from "@reduxjs/toolkit";
import * as Api from "../../api";
import { AppThunk } from "../store";
import { setTenantScope } from "./tenantSlice";
import { MAX_CANDIDATES_UPLOAD_PER_CALL, ORDER_SCORE_DESC } from "../../constants";
import moment from "moment";
export interface FiltersDetailsTable {
  process: string;
  page: number;
  order: DetailsOrder;
  size: number;
  search: string;
  tagFilter: string[];
  filterTagsType: string;
  filterPhases: any[];
  totalCandidates: number;
  filterAnyPending: boolean;
  filterDate: boolean;
  initDate?: number;
  endDate?: number;
  searchField: string;
  screeningFilter: any[];
}

export const defaultFiltersTable: FiltersDetailsTable = {
  process: "",
  page: 1,
  order: {
    isCandidateActive: false,
    isDateActive: false,
    isScoreActive: false,
    isHiredActive: true,
    isAscending: false,
    name: ORDER_SCORE_DESC,
  },
  size: 10,
  search: "",
  tagFilter: [],
  filterTagsType: "AND",
  filterPhases: [] as string[],
  totalCandidates: 0,
  filterAnyPending: false,
  filterDate: false,
  initDate: undefined,
  endDate: undefined,
  searchField: "",
  screeningFilter: [],
};
export interface ProcessDetailsState {
  candidates: Candidate[];
  process: ProcessResponse | undefined;
  filters: FiltersDetailsTable;
  isLoading: boolean;
  error: string;
  hasInvitedCandidates: boolean;
  hasUpdatedCandidate: boolean;
  uploadError: string;
  isCloseSuccess: boolean;
  isLoadingCandidates: boolean;
  tags: any[];
  movePhaseError: boolean;
  createdCandidates: any[];
  existingCandidates: any[];
  existingPersons: any[];
  allFilteredCandidatesIds: string[];
}

const initialState: ProcessDetailsState = {
  candidates: [],
  process: undefined,
  filters: defaultFiltersTable,
  isLoading: false,
  error: "",
  hasInvitedCandidates: false,
  hasUpdatedCandidate: false,
  isCloseSuccess: false,
  uploadError: "",
  isLoadingCandidates: false,
  tags: [],
  movePhaseError: false,
  createdCandidates: [],
  existingCandidates: [],
  existingPersons: [],
  allFilteredCandidatesIds: [],
};

export const slice = createSlice({
  name: "processDetails",
  initialState: initialState,
  reducers: {
    fetchProcessDetailsSuccess: (state, action) => {
      const { response, id } = action.payload;

      const newState: ProcessDetailsState = {
        candidates: response.candidates,
        process: response,
        filters: {
          ...state.filters,
          process: id,
          page: response.page > response.numPages ? (response.numPages > 0 ? response.numPages : 1) : response.page,
          totalCandidates: parseInt(response.totalCount),
          initDate: state.filters?.initDate ? moment(state.filters.initDate).valueOf() : moment(response.createdAt).valueOf(),
          endDate: state.filters?.endDate ? moment(state.filters.endDate).valueOf() : moment(response.expiryDate).valueOf(),
        },
        isLoading: false,
        error: "",
        hasInvitedCandidates: false,
        hasUpdatedCandidate: false,
        isCloseSuccess: state.isCloseSuccess,
        uploadError: "",
        isLoadingCandidates: false,
        tags: state.tags,
        movePhaseError: false,
        createdCandidates: state.createdCandidates,
        existingCandidates: state.existingCandidates,
        existingPersons: state.existingPersons,
        allFilteredCandidatesIds: response.allCandidates,
      };

      localStorage.setItem("process-candidates-list", JSON.stringify(newState.filters));
      return newState;
    },
    fetchProcessDetailsFailed: (state, action) => {
      const { error } = action.payload;
      state.error = error.message;
      state.isLoadingCandidates = false;
    },
    inviteCandidatesFailed: (state, action) => {
      const { error } = action.payload;
      state.uploadError = error;
      state.error = error.message;
    },
    hideError: (state) => {
      state.error = "";
    },
    inviteCandidatesSuccess: (state, action) => {
      const { response } = action.payload;
      state.createdCandidates = response.createdCandidates;
      state.existingCandidates = response.existingCandidates;
      state.existingPersons = response.existingPersons;
      state.hasInvitedCandidates = true;
      state.isLoadingCandidates = false;
    },
    updatedSuccess: (state) => {
      state.hasUpdatedCandidate = true;
    },
    updatedSuccessFalset: (state) => {
      state.hasUpdatedCandidate = false;
    },
    closedSuccess: (state, action) => {
      const { response } = action.payload;
      const newState: ProcessDetailsState = {
        candidates: response.candidates,
        process: response,
        filters: { ...state.filters, page: response.page, totalCandidates: parseInt(response.totalCount) },
        isLoading: false,
        error: "",
        hasInvitedCandidates: false,
        hasUpdatedCandidate: false,
        isCloseSuccess: true,
        uploadError: "",
        isLoadingCandidates: false,
        tags: state.tags,
        movePhaseError: false,
        createdCandidates: state.createdCandidates,
        existingCandidates: state.existingCandidates,
        existingPersons: state.existingPersons,
        allFilteredCandidatesIds: state.allFilteredCandidatesIds,
      };

      localStorage.setItem("process-candidates-list", JSON.stringify(newState.filters));
      return newState;
    },
    closedSuccessClose: (state) => {
      state.isCloseSuccess = false;
    },

    loadCandidates: (state) => {
      state.isLoadingCandidates = true;
    },

    isLoading: (state, action) => {
      const { loading } = action.payload;
      state.isLoadingCandidates = loading;
    },

    updateFilters: (state, action) => {
      const { filters } = action.payload;
      state.filters = filters;
    },
    resetState: () => {
      return initialState;
    },
    apiCallFailed: (state, action) => {
      const { error } = action.payload;
      state.error = error;
      state.isLoadingCandidates = false;
    },
    fetchTagsSucces: (state, action) => {
      const { response } = action.payload;
      state.tags = response;
      state.isLoadingCandidates = false;
    },
    setMovePhaseError: (state) => {
      state.movePhaseError = !state.movePhaseError;
    },
  },
});

const {
  closedSuccessClose,
  closedSuccess,
  updatedSuccess,
  updatedSuccessFalset,
  fetchProcessDetailsSuccess,
  updateFilters,
  resetState,
  fetchProcessDetailsFailed,
  hideError,
  inviteCandidatesSuccess,
  inviteCandidatesFailed,
  loadCandidates,
  isLoading,
  apiCallFailed,
  fetchTagsSucces,
  setMovePhaseError,
} = slice.actions;

export const fetchProcessDetails =
  (
    id: string,
    page: number,
    size: number,
    order: DetailsOrder,
    searchValue: string,
    tagFilter: any,
    filterTagsType: string,
    filterPhases: any[],
    filterAnyPending: boolean,
    searchField?: string,
    initDate?: number,
    endDate?: number,
    screeningFilter?: any[]
  ): AppThunk =>
  async (dispatch) => {
    dispatch(loadCandidates());

    await Api.fetchCandidatesForProcess(id, page, size, order.name, searchField || "filter", searchValue, tagFilter, filterTagsType, filterPhases, filterAnyPending, initDate, endDate, screeningFilter)
      .then((response: any) => {
        dispatch(fetchProcessDetailsSuccess({ response: response, id }));
      })
      .catch((e) => {
        dispatch(fetchProcessDetailsFailed({ error: e }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const fetchTagsDetails =
  (processId: string): AppThunk =>
  async (dispatch) => {
    dispatch(loadCandidates());
    await Api.fetchAllTagsDetailsProcess(processId)
      .then((response) => {
        dispatch(fetchTagsSucces({ response: response }));
      })
      .catch((e: Error) => {
        dispatch(apiCallFailed({ error: e.message }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const closeProcess =
  (id: string, filtersTable: FiltersDetailsTable): AppThunk =>
  async (dispatch) => {
    await Api.closeProcesses(id)
      .then((response: any) => {
        dispatch(closedSuccess({ response: response }));
      })
      .catch((e) => {
        dispatch(fetchProcessDetailsFailed({ error: e }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      })
      .then(() =>
        dispatch(
          fetchProcessDetails(
            id,
            filtersTable.page,
            filtersTable.size,
            filtersTable.order,
            filtersTable.search,
            filtersTable.tagFilter,
            filtersTable.filterTagsType,
            filtersTable.filterPhases,
            filtersTable.filterAnyPending,
            filtersTable.searchField,
            filtersTable.filterDate ? filtersTable.initDate : undefined,
            filtersTable.filterDate ? filtersTable.endDate : undefined
          )
        )
      );
  };

export const closedSuccessClicked = (): AppThunk => async (dispatch) => {
  dispatch(closedSuccessClose());
};

export const updateCandidates =
  (processId: string, candidateId: string, hired: boolean): AppThunk =>
  async (dispatch) => {
    await Api.updateCandidateHired(processId, candidateId, hired)
      .then((response: any) => {
        dispatch(updatedSuccess());
      })
      .catch((e) => {
        dispatch(fetchProcessDetailsFailed({ error: e }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const updateCandidatesToFalse = (): AppThunk => async (dispatch) => {
  dispatch(updatedSuccessFalset());
};

export const resetAssessmentPhases =
  (candidates: string[], processId: string): AppThunk =>
  async (dispatch) => {
    await Api.resetAssessmentPhases(candidates, processId)
      .then((response: any) => {
        dispatch(updatedSuccess());
      })
      .catch((e) => {
        dispatch(fetchProcessDetailsFailed({ error: e }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const updateCandidatesTag =
  (tag: any, candidates: string[], processId: string): AppThunk =>
  async (dispatch) => {
    await Api.updateCandidateTag(tag, candidates, processId)
      .then((response: any) => {
        dispatch(updatedSuccess());
      })
      .catch((e) => {
        dispatch(fetchProcessDetailsFailed({ error: e }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const removeCandidatesTag =
  (tag: any, candidateId: string): AppThunk =>
  async (dispatch) => {
    await Api.removeCandidateTag(tag, candidateId)
      .then((response: any) => {
        dispatch(updatedSuccess());
      })
      .catch((e) => {
        dispatch(fetchProcessDetailsFailed({ error: { message: "removeTag" } }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const updateCandidatePhase =
  (candidates: any, phaseIndex?: number): AppThunk =>
  async (dispatch) => {
    if (phaseIndex !== undefined) {
      await Api.changeCandidatePhaseBulk(candidates, phaseIndex)
        .then((response: any) => {
          dispatch(updatedSuccess());
        })
        .catch((e) => {
          if (e.message === "PhaseNotFailed") dispatch(setMovePhaseError());
        });
    } else {
      await Api.changeCandidatePhase(candidates)
        .then((response: any) => {
          dispatch(updatedSuccess());
        })
        .catch((e) => {
          if (e.message === "PhaseNotFailed") dispatch(setMovePhaseError());
        });
    }
  };

export const setMovePhaseErrorToFalse = (): AppThunk => async (dispatch) => {
  dispatch(setMovePhaseError());
};

export const inviteCandidateInterview =
  (processId: string, candidateId: string, phaseIndex: number, phasePrepare: any): AppThunk =>
  async (dispatch) => {
    dispatch(loadCandidates());
    Api.inviteCandidateInterview(processId, candidateId, phaseIndex, phasePrepare)
      .then((response) => {
        dispatch(updatedSuccess());
      })
      .catch((e) => {
        dispatch(fetchProcessDetailsFailed({ error: e }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const inviteCandidateLiveInterviewPhase =
  (processId: string, candidateId: any[], phasePrepare: any): AppThunk =>
  async (dispatch) => {
    dispatch(loadCandidates());
    Api.inviteCandidateLiveInterviewPhase(processId, candidateId, phasePrepare)
      .then((liveIResp: any) => {
        dispatch(updatedSuccess());
      })
      .catch((e: any) => {
        dispatch(fetchProcessDetailsFailed({ error: e }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const errorShown = (): AppThunk => (dispatch) => {
  dispatch(hideError());
};
export const uploadCandidates =
  (processId: string, candidates: PublicCandidate[]): AppThunk =>
  async (dispatch) => {
    let chunks = Math.ceil(candidates.length / MAX_CANDIDATES_UPLOAD_PER_CALL);
    let createdCandidates: any[] = [],
      existingCandidates: any[] = [],
      existingPersons: any[] = [];

    for (let i = 0; i < chunks; i++) {
      const candidatesChunk = candidates.slice(i * MAX_CANDIDATES_UPLOAD_PER_CALL, i * MAX_CANDIDATES_UPLOAD_PER_CALL + MAX_CANDIDATES_UPLOAD_PER_CALL);

      let newCandidates: PublicCandidate[] = [];

      candidatesChunk.forEach((candidate) => {
        newCandidates.push({
          firstName: candidate.firstName,
          lastName: candidate.lastName,
          email: candidate.email,
          phone: candidate.phone,
          location: candidate.location,
          externalUserId: candidate.externalUserId,
          denomination: candidate?.denomination,
          preferredLanguage: candidate?.preferredLanguage,
          phonePrefix: candidate?.phonePrefix,
        });
      });
      await Api.uploadCandidateList(processId, newCandidates)
        // eslint-disable-next-line no-loop-func
        .then((responseCandidates: any) => {
          createdCandidates = [...createdCandidates, ...responseCandidates.createdCandidates];
          existingCandidates = [...existingCandidates, ...responseCandidates.existingCandidates];
          existingPersons = [...existingPersons, ...responseCandidates.existingPersons];

          if (i === chunks - 1) {
            dispatch(
              inviteCandidatesSuccess({
                response: {
                  createdCandidates,
                  existingCandidates,
                  existingPersons,
                },
              })
            );
          }
        })
        .catch((e: Error) => {
          dispatch(inviteCandidatesFailed({ error: e.message }));
          if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
        })
        .finally(() => {});
    }
  };

export const reviewShortlist =
  (processId: string, candidateId: string, phaseIndex: number, phaseReview: ProcessPhase, isFailed: boolean): AppThunk =>
  async (dispatch) => {
    dispatch(loadCandidates());
    await Api.reviewCandidate(processId, candidateId, phaseIndex, phaseReview, isFailed)
      .then(() => {
        dispatch(updatedSuccess());
      })
      .catch((e: Error) => {
        dispatch(fetchProcessDetailsFailed({ error: e }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };
export const updateProcessFilters =
  (idProcess: string, newFilters: FiltersDetailsTable): AppThunk =>
  async (dispatch) => {
    dispatch(updateFilters({ filters: newFilters, process: idProcess }));
    dispatch(loadCandidates());
    await Api.fetchCandidatesForProcess(
      idProcess,
      newFilters.page,
      newFilters.size,
      newFilters.order.name,
      newFilters.searchField,
      newFilters.search,
      newFilters.tagFilter,
      newFilters.filterTagsType,
      newFilters.filterPhases,
      newFilters.filterAnyPending,
      newFilters.filterDate ? newFilters.initDate : undefined,
      newFilters.filterDate ? newFilters.endDate : undefined,
      newFilters.screeningFilter
    )
      .then((response: any) => {
        if (response.numPages === 0 && response.page !== 1) {
          dispatch(
            fetchProcessDetails(
              idProcess,
              1,
              newFilters.size,
              newFilters.order,
              newFilters.search,
              newFilters.tagFilter,
              newFilters.filterTagsType,
              newFilters.filterPhases,
              newFilters.filterAnyPending,
              newFilters.searchField,
              newFilters.filterDate ? newFilters.initDate : undefined,
              newFilters.filterDate ? newFilters.endDate : undefined,
              newFilters.screeningFilter
            )
          );
        } else {
          dispatch(fetchProcessDetailsSuccess({ response: response, id: idProcess }));
        }
      })
      .catch((e) => {
        dispatch(fetchProcessDetailsFailed({ error: e }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };
export const fetchNewProcess =
  (id: string): AppThunk =>
  (dispatch) =>
    dispatch(
      fetchProcessDetails(
        id,
        defaultFiltersTable.page,
        defaultFiltersTable.size,
        defaultFiltersTable.order,
        defaultFiltersTable.search,
        defaultFiltersTable.tagFilter,
        defaultFiltersTable.filterTagsType,
        defaultFiltersTable.filterPhases,
        defaultFiltersTable.filterAnyPending,
        defaultFiltersTable.searchField,
        defaultFiltersTable.initDate,
        defaultFiltersTable.endDate
      )
    );
export const resetDetailsState = (): AppThunk => (dispatch) => dispatch(resetState());

export const setIsLoading =
  (loading: boolean): AppThunk =>
  async (dispatch) => {
    dispatch(isLoading({ loading: loading }));
  };

export const transferAllCandidates =
  (fromProcessId: string, toProcessId: string, allFilteredCandidatesIds: string[]): AppThunk =>
  async (dispatch) => {
    Api.transferAllCandidates(fromProcessId, toProcessId, allFilteredCandidatesIds)
      .then((response) => {
        dispatch(
          inviteCandidatesSuccess({
            response: {
              createdCandidates: response?.createdCandidates,
              existingCandidates: response?.existingCandidates,
              existingPersons: response?.existingPersons,
            },
          })
        );
      })
      .catch((e: Error) => {
        dispatch(inviteCandidatesFailed({ error: e.message }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      })
      .finally(() => dispatch(setIsLoading(false)));
  };

export default slice.reducer;

import { Category, PhaseType } from "../../types";
import { createSlice } from "@reduxjs/toolkit";
import * as Api from "../../api";
import { AppThunk } from "../store";
import { setTenantScope } from "./tenantSlice";

import { LiveInterviewConfigI, LiveInterviewConfigInviteOption, ServiceCreationI, VideoInterviewConfigI } from "../../types/service-types";
import { getFeatureConfigurationValues } from "../../helper/feature-configuration-helper";
import { toLiteral } from "../../helper/locale-utils";
import { addNotification } from "../../components/shared/notifications/notifications-service";

export interface ServiceCreationState {
  isLoading: boolean;
  professions: Category[];
  isLoadingProfessions: boolean;
  industries: any[];
  isLoadingIndustries: boolean;
  templates: any[];
  isLoadingTemplates: boolean;
  brands: any[];
  isLoadingBrands: boolean;
  coBrands: any[];
  isLoadingCoBrands: boolean;
  showError: boolean;
  serviceCreation: ServiceCreationI;
  isSaved: boolean;
  error: string;
  isCompleted: boolean;
  serviceTemplateConfig: Object; //? For create service from templates
}

const initialState: ServiceCreationState = {
  isLoading: false,
  professions: [],
  isLoadingProfessions: true,
  industries: [],
  isLoadingIndustries: true,
  templates: [],
  isLoadingTemplates: false,
  brands: [],
  isLoadingBrands: true,
  coBrands: [],
  isLoadingCoBrands: true,
  showError: false,
  serviceCreation: {
    isGlobal: false,
    name: "",
    type: 0,
    config: null,
  },
  isSaved: false,
  isCompleted: false,
  error: "",
  serviceTemplateConfig: {},
};

export const serviceCreationSlice = createSlice({
  name: "serviceCreation",
  initialState: initialState,
  reducers: {
    fetchProfessionsSuccess: (state, action) => {
      const { response } = action.payload;
      if (response.length > 0) {
        state.professions = response;
      }
      state.error = "";
      state.isLoadingProfessions = false;
    },

    fetchIndustriesSuccess: (state, action) => {
      const { response } = action.payload;
      if (response.industries.length > 0) {
        state.industries = response.industries;
      }
      state.error = "";
      state.isLoadingIndustries = false;
    },

    fetchTemplatesSuccess: (state, action) => {
      const { templates } = action.payload;
      if (templates.length > 0) {
        state.templates = templates;
      }
      state.error = "";
      state.isLoadingTemplates = false;
    },

    fetchBrandsSuccess: (state, action) => {
      const { response } = action.payload;
      if (response.length > 0) {
        state.brands = response;
      }
      state.error = "";
      state.isLoadingBrands = false;
    },

    fetchCoBrandsSuccess: (state, action) => {
      const { response } = action.payload;
      if (response.length > 0) {
        state.coBrands = response;
      }
      state.error = "";
      state.isLoadingCoBrands = false;
    },

    updateServiceCreationConfig: (state, action) => {
      const { config } = action.payload;
      state.serviceCreation.config = config;
      state.isLoading = false;
    },

    updateServiceCreation: (state, action) => {
      const { serviceCreation } = action.payload;
      state.serviceCreation = serviceCreation;
      state.isLoading = false;
    },

    updateServiceTemplateConfig: (state, action) => {
      const { config } = action.payload;
      state.serviceTemplateConfig = config;
      state.isLoading = false;
    },

    saveServiceCreation: (state, action) => {
      state.serviceCreation = action.payload;
      state.isLoading = false;
    },

    restoreInitialState: () => {
      return initialState;
    },
    apiCallFailed: (state, action) => {
      const { error } = action.payload;
      state.error = error;
      state.isLoadingProfessions = false;
      state.isLoadingTemplates = false;
      state.isLoadingIndustries = false;
      state.isLoading = false;
    },
    hideError: (state) => {
      state.error = "";
    },
    loadProfessions: (state) => {
      state.isLoadingProfessions = true;
    },
    loadTemplates: (state) => {
      state.isLoadingTemplates = true;
    },
    loadIndustries: (state) => {
      state.isLoadingIndustries = true;
    },
    loadBrands: (state) => {
      state.isLoadingBrands = true;
    },
    loadCoBrands: (state) => {
      state.isLoadingCoBrands = true;
    },
    loading: (state) => {
      state.isLoading = true;
    },
  },
});

const {
  fetchProfessionsSuccess,
  loadProfessions,
  fetchIndustriesSuccess,
  loadIndustries,
  fetchTemplatesSuccess,
  loadTemplates,
  fetchBrandsSuccess,
  loadBrands,
  fetchCoBrandsSuccess,
  loadCoBrands,
  updateServiceCreationConfig,
  updateServiceCreation,
  saveServiceCreation,
  loading,
  restoreInitialState,
  apiCallFailed,
  hideError,
  updateServiceTemplateConfig,
} = serviceCreationSlice.actions;

export const fetchIndustries = (): AppThunk => async (dispatch) => {
  dispatch(loadIndustries());
  await Api.fetchAllIndustriesAdmin(1, 7, "localeName,asc", "")
    .then((response: Category[]) => {
      dispatch(fetchIndustriesSuccess({ response: response }));
    })
    .catch((e: Error) => {
      dispatch(apiCallFailed({ error: e.message }));
      if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
    });
};

export const fetchBrands = (): AppThunk => async (dispatch) => {
  dispatch(loadBrands());
  await Api.getAllBrands()
    .then((response: any[]) => {
      dispatch(fetchBrandsSuccess({ response: response }));
    })
    .catch((e: Error) => {
      dispatch(apiCallFailed({ error: e.message }));
      if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
    });
};

export const fetchCoBrands = (): AppThunk => async (dispatch) => {
  dispatch(loadCoBrands());
  await Api.getAllCoBrands()
    .then((response: any[]) => {
      dispatch(fetchCoBrandsSuccess({ response: response }));
    })
    .catch((e: Error) => {
      dispatch(apiCallFailed({ error: e.message }));
      if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
    });
};

export const fetchProfessions =
  (industryId?: string): AppThunk =>
  async (dispatch) => {
    dispatch(loadProfessions());
    if (industryId) {
      await Api.fetchCategoriesList(industryId)
        .then((response: Category[]) => {
          dispatch(fetchProfessionsSuccess({ response: response }));
        })
        .catch((e: Error) => {
          dispatch(apiCallFailed({ error: e.message }));
          if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
        });
    } else {
      await Api.fetchCategoriesList()
        .then((response: Category[]) => {
          dispatch(fetchProfessionsSuccess({ response: response }));
        })
        .catch((e: Error) => {
          dispatch(apiCallFailed({ error: e.message }));
          if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
        });
    }
  };

export const fetchServiceTemplatesFilters =
  (type?: number, professionId?: string): AppThunk =>
  async (dispatch) => {
    dispatch(loadTemplates());
    await Api.fetchServiceTemplatesFilters(type, professionId)
      .then((response: any) => {
        dispatch(fetchTemplatesSuccess({ templates: response }));
      })
      .catch((e: Error) => {
        dispatch(apiCallFailed({ error: e.message }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const fetchServiceTemplate =
  (templateId: string, type: number, isUse: boolean = false, callback?: Function): AppThunk =>
  async (dispatch) => {
    dispatch(loading());
    await Api.fetchServiceTemplateByIdAndType(templateId, type)
      .then((response: any) => {
        if (response) {
          dispatch(updateServiceTemplateConfig({ config: response.config })); //? Update the config of the template
          dispatch(updateServiceCreation({ serviceCreation: response }));
          if (callback) callback(response.config);
        }
      })
      .catch((e: Error) => {
        dispatch(apiCallFailed({ error: e.message }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const onServiceCreationUpdate =
  (serviceCreation: ServiceCreationI): AppThunk =>
  (dispatch) =>
    dispatch(updateServiceCreation({ serviceCreation }));

export const onServiceCreationConfigUpdate =
  (config: VideoInterviewConfigI | any): AppThunk =>
  (dispatch) =>
    dispatch(updateServiceCreationConfig({ config }));

export const onServiceCreationTypeConfiguration =
  (type: number): AppThunk =>
  async (dispatch) => {
    dispatch(loading());
    switch (type) {
      case PhaseType.videoInterview:
        const videoInterviewConfig = getFeatureConfigurationValues("CAMMIO", "cammio-integration");
        const newConfigVideoInterview: VideoInterviewConfigI = {
          skillsToMatch: 0,
          cammioAnswerTime: videoInterviewConfig?.answerTime,
          cammioBrandingId: videoInterviewConfig?.brandingId,
          cammioMaxRetries: videoInterviewConfig?.maxRetries,
        };
        dispatch(updateServiceCreationConfig({ config: newConfigVideoInterview }));
        break;
      case PhaseType.liveInterview:
        const newConfigLiveInterview: LiveInterviewConfigI = {
          duration: 0,
          inviteOption: LiveInterviewConfigInviteOption.auto,
        };
        dispatch(updateServiceCreationConfig({ config: newConfigLiveInterview }));

        break;
    }
  };

export const fetchServiceData =
  (id: string): AppThunk =>
  async (dispatch) => {
    dispatch(loading());
    Api.fetchOneService(id)
      .then((response: ServiceCreationI) => {
        dispatch(saveServiceCreation(response));
      })
      .catch((e: Error) => {
        dispatch(apiCallFailed({ error: e.message }));
        if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
      });
  };

export const onSaveServiceCreation =
  (newServiceCreation: ServiceCreationI, isDraft: boolean, isTemplate: boolean, templateConfig: Object, callback?: Function, isGlobal: boolean = false): AppThunk =>
  async (dispatch) => {
    const { type } = newServiceCreation;
    let newCleanServiceCreation: ServiceCreationI = { ...newServiceCreation, isDraft: isDraft };
    const config = Object.keys(templateConfig).length ? templateConfig : newCleanServiceCreation.config;
    let defaultConf;
    switch (type) {
      case PhaseType.liveInterview:
        if (isDraft && !newCleanServiceCreation.isTemplate) {
          defaultConf = {
            duration: 0,
            inviteOption: LiveInterviewConfigInviteOption.auto,
            ...config,
          };
          newCleanServiceCreation = { ...newCleanServiceCreation, config: defaultConf };
        } else {
          if (config.inviteOption === LiveInterviewConfigInviteOption.manual) {
            if (config.recruiters) delete config.recruiters;
            if (config.calendars) delete config.calendars;
          } else {
            if (config.recruiters) {
              newCleanServiceCreation = {
                ...newCleanServiceCreation,
                config: { ...config, recruiters: config.recruiters.map((recruiter: any) => recruiter.id) },
              };
            }
          }
        }
        break;
      case PhaseType.videoInterview:
        if (isDraft) {
          const videoInterviewConfig = config || getFeatureConfigurationValues("CAMMIO", "cammio-integration");
          const newDefaultConf: VideoInterviewConfigI = {
            skillsToMatch: 0,
            cammioAnswerTime: videoInterviewConfig?.cammioAnswerTime || videoInterviewConfig?.answerTime,
            cammioBrandingId: videoInterviewConfig?.cammioBrandingId || videoInterviewConfig?.brandingId,
            cammioMaxRetries: videoInterviewConfig?.cammioMaxRetries || videoInterviewConfig?.maxRetries,
          };
          newCleanServiceCreation = { ...newCleanServiceCreation, config: newDefaultConf };
        }
        break;
      default:
        break;
    }

    if ((newCleanServiceCreation.config.cammioBrandingId && newCleanServiceCreation.subBrandName) || !newCleanServiceCreation.subBrandName) {
      dispatch(loading());
      //? Delete redundant data
      if (newCleanServiceCreation && newCleanServiceCreation.profession) delete newCleanServiceCreation.profession;
      if (newCleanServiceCreation && newCleanServiceCreation.industry) delete newCleanServiceCreation.industry;
      if (newCleanServiceCreation && newCleanServiceCreation.serviceTemplate) delete newCleanServiceCreation.serviceTemplate;

      //? Build only necesary fields for update
      if (!isDraft) {
        newCleanServiceCreation = {
          config: newCleanServiceCreation.config,
          id: newCleanServiceCreation.id,
          name: newCleanServiceCreation.name,
          type: newCleanServiceCreation.type,
          isGlobal: isTemplate && isGlobal,
          subBrandId: newCleanServiceCreation.subBrandId,
          coBrandId: newCleanServiceCreation.coBrandId,
          professionId: newCleanServiceCreation.professionId,
          industryId: newCleanServiceCreation.industryId,
        };
      }

      if (!isTemplate) {
        Api.postService(newCleanServiceCreation)
          .then((response) => {
            dispatch(saveServiceCreation(response));
            if (callback) callback(response);
          })
          .catch((e: Error) => {
            dispatch(apiCallFailed({ error: e.message }));
            if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
          });
      } else {
        Api.uploadServiceTemplate({ ...newCleanServiceCreation, isGlobal: isGlobal || newCleanServiceCreation?.isGlobal })
          .then((response) => {
            dispatch(saveServiceCreation(response));
            if (callback) callback(response);
          })
          .catch((e: Error) => {
            dispatch(apiCallFailed({ error: e.message }));
            if (e.message === "Insufficient scope") dispatch(setTenantScope(false));
          });
      }
    } else {
      addNotification({ id: "addBrandError", timer: 3, type: "error", content: toLiteral({ id: `Error on Brand` }) });
    }
  };

export const setNewCreation = (): AppThunk => (dispatch) => dispatch(restoreInitialState());
export const errorShown = (): AppThunk => (dispatch) => dispatch(hideError());

export default serviceCreationSlice.reducer;

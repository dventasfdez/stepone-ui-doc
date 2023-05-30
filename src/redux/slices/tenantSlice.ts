import * as Api from "../../api";
import { TrackingStorage } from "./../../helper/tracking-storage";
import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import { Branch, FeatureConfigurationType, TenantObject, SelectedTenantObject, UserProperties } from "../../types";
import { TenantStorage } from "../../helper/tenant-storage";
import { CURRENT_LOCALE, DEFAULT_LOCALES, setCurrentLocale } from "../../helper/locale-utils";
import { DEFAULT_TENANT_ALIAS } from "../../constants";

export interface TenantState {
  tenants: TenantObject[];
  selectedTenant: SelectedTenantObject;
  selectedTenantAlias: string;
  updated: boolean;
  scope: boolean;
  userName: string;
  userId: string;
  userProperties: UserProperties;
  selectedUserProfile?: string;
  selectedClientLogo?: string;
  selectedClientLogoColored?: string;
  clientBrand?: boolean;
  photo: any;
  userEmail?: string;
  userPhone?: string;
  releaseVersion?: string;
  frontendVersion?: string;
  availability: boolean;
  featureConfigurations?: any[];
  selectedLanguage: string;
  isoCountryCode?: string;
  userTenant: any;
}

const tenantStorage = new TenantStorage();
const tracking = new TrackingStorage();

const initialState: any = {
  tenants: [],
  selectedTenant: {
    id: tenantStorage.getTenant()?.id || null,
    alias: tenantStorage.getTenant()?.alias || "",
    tenant: -1,
    theme: "",
    languages: [],
    selectedTenantConfiguration: [{ channel: "", feature: "", isEnabled: false }],
    regions: [],
    regionId: tenantStorage.getTenant()?.regionId || "",
    branchId: tenantStorage.getTenant()?.branchId || "",
    zoneId: tenantStorage.getTenant()?.zoneId || "",
  },
  selectedTenantAlias: tenantStorage.getTenant() ? tenantStorage.getTenant()?.alias : "",
  updated: true,
  scope: true,
  userName: "",
  userId: "",
  userProperties: {
    disableSpam: false,
  },
  photo: null,
  userEmail: "",
  userPhone: "",
  releaseVersion: "",
  frontendVersion: "",
  availability: true,
  selectedLanguage: CURRENT_LOCALE,
  selectedUserProfile: "",
  selectedClientLogo: "",
  selectedClientLogoColored: "",
  clientBrand: false,
};

export const tenantSlice = createSlice({
  name: "tenant",
  initialState: initialState as TenantState,
  reducers: {
    setTenantDetails: (state, action) => {
      const { tenants = [], tenantAlias = "", configurations = [], branch } = action.payload;
      // Get index tenant
      let indexTenant = getIndex(tenantAlias, tenants);
      if (indexTenant === -1) indexTenant = 0; // Avoid error not found

      // Get tenant and associated info
      const receivedTenant = tenants[indexTenant] || {};
      let branchIdSelected = "",
        zoneIdSelected = "",
        regionIdSelected = "";
      // Check feature configuration branch
      const isFeatureBranchFound = configurations.find((conf: any) => conf.feature === "tenant-branches");
      const isFeatureBranchEnabled = isFeatureBranchFound?.isEnabled || false;
      if (isFeatureBranchEnabled) {
        // Default branch
        const defaultBranch = receivedTenant.branches?.length ? receivedTenant.branches[0] : ({} as any);
        // Check branch exist in the tenant before assign
        let branchSelected;
        if (branch && receivedTenant.branches?.findIndex((_branch: Branch) => _branch.branchId === branch.branchId)) branchSelected = branch;
        else if (!branchSelected && receivedTenant.branches?.findIndex((_branch: Branch) => _branch.branchId === state.selectedTenant?.branchId) !== -1) branchSelected = state.selectedTenant;
        else branchSelected = defaultBranch;
        // Set the branch
        branchIdSelected = branchSelected.branchId || "";
        zoneIdSelected = branchSelected.zoneId || "";
        regionIdSelected = branchSelected.regionId || "";
      }
      // Storage change of tenant
      tenantStorage.setTenant({
        id: receivedTenant.id,
        alias: receivedTenant.alias,
        branchId: branchIdSelected,
        regionId: regionIdSelected,
        zoneId: zoneIdSelected,
      });
      // State change
      state.tenants = tenants;
      state.updated = false;
      state.selectedTenant = {
        id: receivedTenant.id,
        alias: receivedTenant.alias,
        tenant: indexTenant,
        theme: receivedTenant.brand ? receivedTenant?.brand?.name : "adecco-theme",
        languages: receivedTenant.languages,
        selectedTenantConfiguration: configurations,
        branches: receivedTenant.branches,
        branchId: branchIdSelected,
        regionId: regionIdSelected,
        zoneId: zoneIdSelected,
        brand: receivedTenant.brand,
        additionalData: receivedTenant.additionalData,
        isoCountryCode: receivedTenant?.isoCountryCode || undefined,
      };
      tracking.saveTrackingData("rc_x", receivedTenant.alias);
    },
    setTenantInfo: (state, action) => {
      const { id, tenantAlias, theme, languages, branches, configuration, additionalData } = action.payload;
      const indexTenant = getIndex(tenantAlias, state.tenants);
      // Default tenant and configuration
      const stateTenant = state?.tenants?.length > 0 ? state.tenants[indexTenant] : ({} as any);
      const newConfiguration = configuration || stateTenant?.configuration || [];
      // Update
      state.selectedTenant = {
        id: id ? id : stateTenant?.id,
        tenant: indexTenant,
        alias: tenantAlias,
        theme: theme ? theme : "adecco-theme",
        languages: languages,
        selectedTenantConfiguration: newConfiguration,
        branches: branches,
        branchId: state.selectedTenant.branchId,
        regionId: state.selectedTenant.regionId,
        zoneId: state.selectedTenant.zoneId,
        brand: stateTenant?.brand || state.selectedTenant.brand,
        additionalData: additionalData || stateTenant?.additionalData || state.selectedTenant.additionalData,
        isoCountryCode: stateTenant?.isoCountryCode || state.selectedTenant?.isoCountryCode,
      };
      tracking.saveTrackingData("rc_x", tenantAlias);
      state.updated = false;
    },

    setBrandInfo: (state, action) => {
      const { theme } = action.payload;
      state.selectedTenant = {
        id: state.selectedTenant.id,
        tenant: state.selectedTenant.tenant,
        alias: state.selectedTenant.alias,
        theme: theme ? theme : "adecco-theme",
        languages: state.selectedTenant.languages,
        selectedTenantConfiguration: state.selectedTenant.selectedTenantConfiguration,
        branches: state.selectedTenant.branches,
        branchId: state.selectedTenant.branchId,
        regionId: state.selectedTenant.regionId,
        zoneId: state.selectedTenant.zoneId,
        brand: state.selectedTenant.brand,
        additionalData: state.selectedTenant.additionalData,
        isoCountryCode: state.selectedTenant?.isoCountryCode,
      };
      state.updated = false;
    },

    setTenantInfoFromRedirect: (state, action) => {
      const { tenantId, tenantAlias, theme, languages, configuration, regionId, zoneId, branchId, branches, brand, additionalData, isoCountryCode } = action.payload;
      state.selectedTenant = {
        id: tenantId,
        tenant: tenantId,
        alias: tenantAlias,
        theme: theme ? theme : "adecco-theme",
        languages: languages,
        selectedTenantConfiguration: configuration,
        branches: branches,
        branchId: branchId,
        regionId: regionId,
        zoneId: zoneId,
        brand: brand,
        additionalData,
        isoCountryCode,
      };
      tracking.saveTrackingData("rc_x", tenantAlias);
    },
    setTenantConfigurations: (state, action) => {
      const { selectedTenantConfigurations } = action.payload;
      let alias = state.selectedTenant.alias;
      state.selectedTenant.selectedTenantConfiguration = selectedTenantConfigurations;
      let index = getIndex(alias, state.tenants);
      let tenants = [...state.tenants];
      tenants[index].configuration = selectedTenantConfigurations;
      state.tenants = tenants;
    },
    setTenantIsAvailability: (state, action) => {
      const { availability } = action.payload;
      state.availability = availability;
    },
    setByIndex: (state, action) => {
      const { selectedTenantIndex, regionId, branchId, zoneId } = action.payload;
      const tenants = state.tenants;
      let index = selectedTenantIndex < tenants.length ? selectedTenantIndex : 0;
      const receivedTenant = tenants[index];
      tenantStorage.setTenant({
        id: receivedTenant.id,
        alias: receivedTenant.alias,
        branchId: branchId,
        regionId: regionId,
        zoneId: zoneId,
      });
      state.selectedTenantAlias = receivedTenant.alias;
      state.updated = false;
      state.selectedTenant = {
        id: receivedTenant.id,
        alias: receivedTenant.alias,
        tenant: index,
        theme: receivedTenant.brand ? receivedTenant?.brand?.name : "adecco-theme",
        languages: receivedTenant.languages,
        selectedTenantConfiguration: receivedTenant.configuration,
        branches: receivedTenant.branches,
        branchId: branchId,
        regionId: regionId,
        zoneId: zoneId,
        brand: receivedTenant.brand,
        additionalData: receivedTenant.additionalData,
        isoCountryCode: receivedTenant?.isoCountryCode,
      };
      tracking.saveTrackingData("rc_x", receivedTenant.alias);
    },
    setSelectedTenantAlias: (state, action) => {
      const { newTenant } = action.payload;
      state.selectedTenantAlias = newTenant.alias;
      state.selectedTenant.branchId = newTenant.branchId;
      state.selectedTenant.regionId = newTenant.regionId;
      state.selectedTenant.zoneId = newTenant.zoneId;
      tracking.saveTrackingData("rc_x", newTenant.alias);
    },
    setBranchById: (state, action) => {
      const { branchId, regionId, zoneId } = action.payload;
      const currentTenant = state.selectedTenant;
      tenantStorage.setTenant({
        id: currentTenant.id,
        alias: currentTenant.alias,
        branchId: branchId,
        regionId: regionId,
        zoneId: zoneId,
      });
      const newSelectedTenant = { ...state.selectedTenant };
      state.selectedTenant = {
        ...newSelectedTenant,
        branchId: branchId,
        regionId: regionId,
        zoneId: zoneId,
      };
    },
    setUpdated: (state, action) => {
      const { updated } = action.payload;
      state.updated = updated;
    },
    setScope: (state, action) => {
      const { scope } = action.payload;
      state.scope = scope;
    },
    setUser: (state, action) => {
      const { name, id, properties, userTenant } = action.payload;
      state.userName = name;
      state.userId = id;
      state.userProperties = properties;
      state.userTenant = userTenant;
      tracking.saveTrackingData("rc_y", id);
    },
    setUserEmail: (state, action) => {
      const { email } = action.payload;
      state.userEmail = email;
    },
    setUserPhone: (state, action) => {
      const { phone } = action.payload;
      state.userPhone = phone;
    },
    setReleaseVersion: (state, action) => {
      const { releaseVersion, frontendVersion } = action.payload;
      console.info(`Loading ${releaseVersion}`);
      state.releaseVersion = releaseVersion;
      state.frontendVersion = frontendVersion;
    },
    //hacer tb save tracking?
    setUserProperties: (state, action) => {
      const { onConfigurationChangeEmail, disableSpam } = action.payload;
      const previousProperties = { ...state.userProperties };
      previousProperties.disableSpam = disableSpam;
      previousProperties.onConfigurationChangeEmail = onConfigurationChangeEmail;
      state.userProperties = previousProperties;
    },
    setPhoto: (state, action) => {
      const { photo } = action.payload;
      // Avoid SupportId problem
      let _photo = photo;
      if (photo && photo.indexOf("<html>") >= 0) {
        console.error("User photo no valid: ", photo);
        _photo = null;
      }
      state.photo = _photo;
    },
    setSelectedLanguage: (state, action) => {
      const { language } = action.payload;
      state.selectedLanguage = language;
    },
    setSelectedUserProfile: (state, action) => {
      const { userProfile } = action.payload;
      state.selectedUserProfile = userProfile;
    },
    setSelectedClientLogo: (state, action) => {
      const { clientLogo, clientLogoColored, clientBrand } = action.payload;
      state.selectedClientLogo = clientLogo;
      state.selectedClientLogoColored = clientLogoColored;
      state.clientBrand = clientBrand;
    },
  },
});

function getIndex(alias: string, tenants: TenantObject[]): number {
  let index = tenants?.findIndex((tenantItem) => tenantItem.alias === alias);
  if (index < 0 || index === undefined) {
    index = -1;
  }
  return index;
}

const {
  setTenantDetails,
  setTenantInfo,
  setBrandInfo,
  setByIndex,
  setBranchById,
  setUpdated,
  setScope,
  setTenantConfigurations,
  setTenantIsAvailability,
  setUser,
  setUserEmail,
  setUserPhone,
  setReleaseVersion,
  setUserProperties,
  setPhoto,
  setSelectedTenantAlias,
  setTenantInfoFromRedirect,
  setSelectedLanguage,
  setSelectedUserProfile,
  setSelectedClientLogo,
} = tenantSlice.actions;

export const setLanguage =
  (lang: string): AppThunk =>
  (dispatch) => {
    setCurrentLocale(lang);
    return dispatch(setSelectedLanguage({ language: lang }));
  };

export const setUserProfile =
  (userProfile: string): AppThunk =>
  (dispatch) => {
    dispatch(setSelectedUserProfile({ userProfile: userProfile }));
  };

export const setClientLogo =
  (clientLogo: string, clientLogoColored?: string, clientBrand?: boolean): AppThunk =>
  (dispatch) => {
    dispatch(setSelectedClientLogo({ clientLogo: clientLogo, clientLogoColored: clientLogoColored, clientBrand: clientBrand }));
  };
// INITIAL LOAD
export const setTenantsResponse =
  (tenants: TenantObject[], tenantAlias?: string, branch?: Branch): AppThunk =>
  async (dispatch) => {
    // Set tenant by alias, storage or state
    const _tenants = tenants || [];
    const tenantDefault = _tenants.length > 0 ? tenants[0] : ({} as any);
    const storedTenant = tenantStorage.getTenant();
    const tenantAliasToSearch = tenantAlias || storedTenant?.alias || tenantDefault.alias || "";
    const configurations = await fetchFeatureConfigurationsTenant(tenantAliasToSearch);
    if (configurations) {
      // Set tenant data
      dispatch(setTenantDetails({ tenants, tenantAlias: tenantAliasToSearch, configurations, branch }));
      // Set user availability tenant
      dispatch(fetchAvailabilityOnSelectedtenant(configurations));
      // Set user profile
      const tenant = tenants?.find((tenantItem) => tenantItem.alias === tenantAliasToSearch);
      checkAndSetUserProfile(dispatch, tenant);
    } else {
      dispatch(setTenantScope(false));
    }
  };
export const setTenant =
  (id: number, tenantAlias: string, theme: string, languages: string[], branches?: Branch[], configuration?: FeatureConfigurationType, additionalData?: any): AppThunk =>
  (dispatch) => {
    return dispatch(
      setTenantInfo({
        id: id,
        tenantAlias: tenantAlias,
        theme: theme ? theme : "adecco-theme",
        languages: languages,
        branches: branches,
        configuration: configuration,
        additionalData: additionalData,
      })
    );
  };

export const setBrand =
  (theme: string): AppThunk =>
  (dispatch) => {
    return dispatch(
      setBrandInfo({
        theme: theme ? theme : "adecco-theme",
      })
    );
  };

export const setTenantByRedirect =
  (tenantId: number, tenantAlias: string, theme: string, languages: string[], configuration: any[], regionId: string, zoneId: string, branchId: string, branches?: Branch[], brand?: any): AppThunk =>
  (dispatch) => {
    let overWriteBranch = {
      branchId: null,
      regionId: null,
      zoneId: null,
      branches: [],
    } as any;
    // Avoid populate if not have enable feature
    const featureBranch = configuration.find((config) => config.feature === "tenant-branches" && config.channel === "General Settings");
    const isEnabled = featureBranch?.isEnabled;
    if (isEnabled) {
      overWriteBranch = {
        regionId: regionId,
        zoneId: zoneId,
        branchId: branchId,
        branches: branches,
      };
    }
    return dispatch(
      setTenantInfoFromRedirect({
        tenantId: tenantId,
        tenantAlias: tenantAlias,
        theme: theme ? theme : "adecco-theme",
        languages: languages,
        configuration: configuration,
        brand: brand,
        ...overWriteBranch,
      })
    );
  };

export const setTenantAlias =
  (newTenant: any): AppThunk =>
  (dispatch) =>
    dispatch(setSelectedTenantAlias({ newTenant: newTenant }));

export const setDefaultTenant = (): AppThunk => (dispatch) => {
  return dispatch(
    setTenantInfo({
      tenantAlias: DEFAULT_TENANT_ALIAS,
      theme: "adecco-theme",
      languages: DEFAULT_LOCALES,
      branches: [],
    })
  );
};
export const setTenantByIndex =
  (index: number, regionId: string, branchId: string, zoneId: string): AppThunk =>
  (dispatch) => {
    dispatch(
      setByIndex({
        selectedTenantIndex: index,
        regionId: regionId,
        branchId: branchId,
        zoneId: zoneId,
      })
    );
  };
export const setBranch =
  (branchId: string = "", regionId: string = "", zoneId: string = ""): AppThunk =>
  (dispatch) => {
    dispatch(setBranchById({ branchId, regionId, zoneId }));
  };
export const setTenantUpdated =
  (updated: boolean): AppThunk =>
  (dispatch) =>
    dispatch(setUpdated({ updated: updated }));
export const setTenantScope =
  (scope: boolean): AppThunk =>
  (dispatch) =>
    dispatch(setScope({ scope: scope }));
export const setLoginUser =
  (name: string, id: string, properties: any, userTenant: any): AppThunk =>
  (dispatch) =>
    dispatch(setUser({ name: name, id: id, properties: properties, userTenant: userTenant }));
export const setLoginUserEmail =
  (email: string): AppThunk =>
  (dispatch) =>
    dispatch(setUserEmail({ email: email }));
export const setLoginUserPhone =
  (phone: string): AppThunk =>
  (dispatch) =>
    dispatch(setUserPhone({ phone: phone }));
export const setLoginReleaseVersion =
  (releaseVersion: string, frontendVersion: string): AppThunk =>
  (dispatch) =>
    dispatch(setReleaseVersion({ releaseVersion, frontendVersion }));
export const setProperties =
  (userProperties: UserProperties): AppThunk =>
  (dispatch) =>
    dispatch(setUserProperties(userProperties));
export const setPhotoO365 =
  (photo: any): AppThunk =>
  (dispatch) =>
    dispatch(setPhoto({ photo: photo }));

export const refreshFeaturesAndProfileTenant = async (tenantAlias: string, tenants: TenantObject[], newTenant: any, index: number, dispatch: any) => {
  // Set tenant
  dispatch(setTenantByIndex(index, newTenant.regionId, newTenant.branchId, newTenant.zoneId));
  // Set user profile
  const tenant = tenants?.find((tenantItem) => tenantItem.alias === tenantAlias);
  checkAndSetUserProfile(dispatch, tenant);
  // Set configurations and availability tenant
  const configurations = await fetchFeatureConfigurationsTenant(tenantAlias);
  if (configurations) {
    // Set user availability tenant
    dispatch(setTenantConfigurations({ selectedTenantConfigurations: configurations }));
    dispatch(fetchAvailabilityOnSelectedtenant(configurations));
  } else {
    dispatch(setTenantScope(false));
  }
};

export const setFeaturesConfigurations =
  (configurations: any[]): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setTenantConfigurations({ selectedTenantConfigurations: configurations }));
    } catch (error) {
      console.error(error);
    }
  };
export const updateFeaturesConfigurations = (): AppThunk => async (dispatch) => {
  try {
    const selectedTenantConfigurations = await fetchFeatureConfigurationsTenant();
    dispatch(setTenantConfigurations({ selectedTenantConfigurations }));
  } catch (error) {
    console.error(error);
  }
};

export const setIsAvailability =
  (availabilityTenant: boolean): AppThunk =>
  async (dispatch) => {
    dispatch(setTenantIsAvailability({ availability: availabilityTenant }));
  };

/* REFACTOR */
export function checkAndSetUserProfile(dispatch: any, tenant: any) {
  let userProfileToChange = tenantStorage.getUserProfile();
  if (userProfileToChange && tenant?.roles.includes(userProfileToChange)) {
    dispatch(setUserProfile(userProfileToChange));
  } else {
    dispatch(setUserProfile(tenant?.roles[0]));
    tenantStorage.setUserProfile(tenant?.roles[0]);
  }
}

/* UTILS */
const fetchAvailabilityOnSelectedtenant =
  (configurations: any[]): AppThunk =>
  async (dispatch) => {
    const recruiterProfileConf = configurations.find((conf: any) => conf.feature === "recruiter-profile");
    if (recruiterProfileConf && recruiterProfileConf.isEnabled) {
      const availabilityTenant = await fetchAvailabilityTenant(configurations);
      if (availabilityTenant !== null) dispatch(setTenantIsAvailability({ availability: availabilityTenant }));
    }
  };
const fetchAvailabilityTenant = async (recruiterProfileConf: any) => {
  let availabilityTenant = false;
  const availability = await Api.getDefaultRecruiterCalendar().catch((e: Error) => {
    console.error(e);
    return {};
  });
  if (!availability) {
    console.warn("No availability for the user in this tenant");
    return {};
  } else if (availability.availabilityDays) {
    let availabilityDays = recruiterProfileConf.availabilityDays || [];
    for (let index = 0; index < availabilityDays.length; index++) {
      if (availability.availabilityDays[`${availabilityDays[index]}`].length > 0) availabilityTenant = true;
    }
  }
  return availabilityTenant;
};

const fetchFeatureConfigurationsTenant = async (tenantAlias?: string): Promise<any[]> => {
  return Api.fetchFeatureConfigurations(tenantAlias).catch((e: any) => {
    console.error("No feature configurations loaded: ", e);
    return e.message === "Insufficient scope" ? null : [];
  });
};

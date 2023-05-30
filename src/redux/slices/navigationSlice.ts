import { createSlice } from "@reduxjs/toolkit";
import { NavItem } from "../../utilities/navigation";
import { AppThunk } from "../store";

export interface INavigationRename {
  pageId: string;
  name: string;
}
export interface NavigationState {
  currentRoute: NavItem;
  previousRoute: NavItem;
  currentPathName: string;
  breadCrumbNames: INavigationRename[];
}

const initialState: any = {
  currentPathName: "",
  currentRoute: {},
  previousRoute: {},
  breadCrumbNames: [] as INavigationRename[],
};

export const navigationSlice = createSlice({
  name: "tenant",
  initialState: initialState as NavigationState,
  reducers: {
    updateRoute: (state, action) => {
      const { route, pathname } = action.payload;
      state.previousRoute = state.currentRoute;
      state.currentRoute = route;
      state.currentPathName = pathname;
    },
    updateBreadcrumName: (state, action) => {
      const { names: breadCrumbNames } = action.payload;
      state.breadCrumbNames = breadCrumbNames;
    },
  },
});

const { updateRoute, updateBreadcrumName } = navigationSlice.actions;

// Function that updates the current and previous routes
export const setNavigation =
  (route: any, pathname: string): AppThunk =>
  async (dispatch) => {
    dispatch(updateRoute({ route, pathname }));
  };

export const setNavigationNames =
  (navigationRenames: INavigationRename[]): AppThunk =>
  async (dispatch) => {
    dispatch(updateBreadcrumName({ names: navigationRenames }));
  };

export default navigationSlice.reducer;

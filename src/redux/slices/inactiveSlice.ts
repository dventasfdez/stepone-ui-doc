import { createSlice } from "@reduxjs/toolkit";
import { getCurrentRoute } from "../../utilities/navigation";
import { AppThunk } from "../store";

// Inactive time in miliseconds
const limitTime = 30 * 60 * 1000; //900000;
let inactiveTimer: NodeJS.Timeout;

export interface InactiveState {
  inactiveTime: boolean;
}

const initialState: InactiveState = {
  inactiveTime: false,
};

export const slice = createSlice({
  name: "inactive",
  initialState: initialState,
  reducers: {
    setInactiveTime: (state) => {
      state.inactiveTime = true;
    },
  },
});

const { setInactiveTime } = slice.actions;

export const resetInactiveTime = (): AppThunk => async (dispatch) => {
  clearTimeout(inactiveTimer);
  inactiveTimer = setTimeout(function () {
    const currentRoute: any = getCurrentRoute(window.location.pathname);
    if (currentRoute && !currentRoute.public) {
      dispatch(setInactiveTime());
    }
  }, limitTime);
};

export default slice.reducer;

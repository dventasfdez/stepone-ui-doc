import { combineReducers } from "@reduxjs/toolkit";

import notificationsReducer from "../slices/notificationsSlice";

export const rootReducer = combineReducers({
  notifications: notificationsReducer,
});

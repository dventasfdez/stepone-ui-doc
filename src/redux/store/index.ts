import notificationsReducer from "../slices/notificationsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    notifications: notificationsReducer,
  },
});

export default store;

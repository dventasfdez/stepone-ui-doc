import notificationsReducer from "../slices/notificationsSlice";

import { configureStore, combineReducers, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

export interface CombinedState {
  notifications: any;
  literals: any;
}

const rootReducer = combineReducers({
  notifications: notificationsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;

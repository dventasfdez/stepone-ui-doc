import { createSlice } from "@reduxjs/toolkit";

export interface AdministratorHomeState {}

const initialState: AdministratorHomeState = {};

export const administratorHomeSlice = createSlice({
  name: "inactive",
  initialState: initialState,
  reducers: {},
});

export default administratorHomeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export interface JobListingState {}

const initialState: JobListingState = {};

export const JobListingSlice = createSlice({
  name: "inactive",
  initialState: initialState,
  reducers: {},
});

export default JobListingSlice.reducer;

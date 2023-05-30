import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../store";

export interface LiteralState {
  literals: {
    [x: string]: any;
  };
}

const initialState: LiteralState = {
  literals: {},
};

export const literalSlice = createSlice({
  name: "literals",
  initialState: initialState,
  reducers: {
    setLiterals: (state, action) => {
      const literals = action.payload;
      state.literals = literals;
    },
    setLangLiterals: (state, action) => {
      const { literals } = action.payload;
      const previousLiterals = state.literals;
      state.literals = { ...previousLiterals, ...literals };
    },
  },
});

const { setLiterals, setLangLiterals } = literalSlice.actions;

export const setAppLiterals =
  (literals: any): AppThunk =>
  (dispatch) => {
    return dispatch(setLiterals(literals));
  };
export const setLangAppLiterals =
  (literals: any): AppThunk =>
  (dispatch) => {
    return dispatch(setLangLiterals({ literals }));
  };

export default literalSlice.reducer;

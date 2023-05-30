import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TokenStorage } from "../../helper/token-storage";
import { TokenObject } from "../../helper/token-storage-definitions";

const tokenStorage = new TokenStorage();

interface AuthStoreState {
  code: string | null;
  token: string | null;
  tokenExpiry: number | null;
  idToken: string | null;
  error: string | null;

  [key: string]: any;
}

const initialState: any = {
  code: null,
  token: null,
  tokenExpiry: null,
  idToken: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState as AuthStoreState,
  reducers: {
    auth: (state, action: PayloadAction<{ token: TokenObject } | null>) => {
      if (!action.payload) {
        state.code = null;
        state.token = null;
        state.tokenExpiry = null;
        state.idToken = null;
        state.error = null;
      } else {
        state.code = action.payload.token.code;
        state.token = action.payload.token.token;
        state.tokenExpiry = action.payload.token.exp;
      }
      return state;
    },
    removeToken: () => {
      tokenStorage.removeToken();
    },
    removeAuthData: (state) => {
      state.error = initialState.error;
      document.cookie = `refreshToken=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
      state.token = initialState.token;
      state.tokenExpiry = initialState.tokenExpiry;
      state.idToken = initialState.idToken;
      state.code = initialState.code;
    },
    newCode: (state, action: PayloadAction<{ code: string }>) => {
      state.code = action.payload.code;
      state.error = initialState.error;
    },
    setNewToken: (state, action: PayloadAction<{ token: string; tokenExpiry: number; idToken: string }>) => {
      state.token = action.payload.token;
      state.tokenExpiry = action.payload.tokenExpiry;
      state.idToken = action.payload.idToken;
      state.code = initialState.code;
      state.error = initialState.error;
    },
    setError: (state, action: PayloadAction<{ error: string }>) => {
      state.error = action.payload.error;
      document.cookie = `refreshToken=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
      state.token = initialState.token;
      state.tokenExpiry = initialState.tokenExpiry;
      state.idToken = initialState.idToken;
      state.code = initialState.code;
    },
  },
});

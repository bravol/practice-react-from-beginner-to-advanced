import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // actions
    TOGGLE_AUTH: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { TOGGLE_AUTH } = authSlice.actions;
export default authSlice.reducer;

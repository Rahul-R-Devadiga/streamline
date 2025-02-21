import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isToogleMenuOpen: true,
  },
  reducers: {
    toogleMenu: (state) => {
      state.isToogleMenuOpen = !state.isToogleMenuOpen;
    },

    closeMenu: (state) => {
      state.isToogleMenuOpen = false;
    },
  },
});

export const { toogleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;

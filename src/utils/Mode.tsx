import { createSlice } from "@reduxjs/toolkit";
const inistate = { mode: "home" };
const Modeslice = createSlice({
  name: "mode",
  initialState: inistate,
  reducers: {
    Navhome(state) {
      state.mode = "home";
    },
    Navblog(state) {
      state.mode = "blog";
    },
  },
});
export const ModeActions = Modeslice.actions;
export default Modeslice;

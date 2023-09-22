import { configureStore } from "@reduxjs/toolkit";
import Modeslice from "./Mode";
const Store = configureStore({ reducer: { ModeChg: Modeslice.reducer } });

export default Store;

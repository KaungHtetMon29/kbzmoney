import { configureStore } from "@reduxjs/toolkit";
import Modeslice from "./Mode";
import Fetchpostslice from "./fetcher";
const Store = configureStore({
  reducer: { ModeChg: Modeslice.reducer, Fetchpost: Fetchpostslice.reducer },
});

export default Store;

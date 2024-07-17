import { configureStore } from "@reduxjs/toolkit";
import openedEditorsSlice from "../../common/slices/opend_editors_slice";
import sidebarSlice from "../../common/slices/side_bar_slice";

const store = configureStore({
  reducer: { openedEditorsSlice, sidebarSlice },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import openedEditorsSlice from "../../common/slices/opend_editors_slice";

const store = configureStore({
  reducer: {openedEditorsSlice},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

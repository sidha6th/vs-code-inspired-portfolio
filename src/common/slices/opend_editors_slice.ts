import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Constants from "../../constants/Constants";

export interface OpenedPagesState {
  openedEditorsPathStack: Array<string>;
  currentSelectedPath?: string;
}

const initialState: OpenedPagesState = {
  openedEditorsPathStack: new Array(),
};

export const openedEditorsSlice = createSlice({
  name: "active-editor",
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<string>) => {
      const indx = state.openedEditorsPathStack.indexOf(payload);
      const notAddedBefore = indx < 0;
      if (notAddedBefore) {
        state.openedEditorsPathStack.push(payload);
        const lastIndx = state.openedEditorsPathStack.length - 1;
        state.currentSelectedPath =
          lastIndx < 0
            ? Constants.defaultPath
            : state.openedEditorsPathStack[lastIndx];
        return;
      }

      state.currentSelectedPath = payload;
    },
    toggleFocus: (state, { payload }: PayloadAction<string>) => {
      state.currentSelectedPath = payload;
    },
    remove: (state, { payload }: PayloadAction<string>) => {
      const indx = state.openedEditorsPathStack.indexOf(payload);
      state.openedEditorsPathStack.splice(indx, 1);
      state.currentSelectedPath =
        state.openedEditorsPathStack[state.openedEditorsPathStack.length - 1] ??
        Constants.defaultPath;
    },
  },
});

export const { remove, add, toggleFocus } = openedEditorsSlice.actions;

export default openedEditorsSlice.reducer;

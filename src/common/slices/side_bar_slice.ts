import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum WorkBenchVisiblityState {
  hidden,
  overlayed,
}

export interface SideBarState {
  activeTabIndex: number;
  workBenchVisiblity?: WorkBenchVisiblityState;
}

const initialState: SideBarState = {
  activeTabIndex: 0,
};

export const sideBarSlice = createSlice({
  name: "SideBarSlice",
  initialState,
  reducers: {
    toggleWorkbenchVisiblity: (state) => {
      if (state.workBenchVisiblity != WorkBenchVisiblityState.hidden) {
        state.workBenchVisiblity = WorkBenchVisiblityState.hidden;
        return;
      }
      state.workBenchVisiblity = undefined;
    },
    setDisplayingState: (
      state,
      { payload }: PayloadAction<WorkBenchVisiblityState | undefined>
    ) => {
      state.workBenchVisiblity = payload;
    },
    changeTab: (state, { payload }: PayloadAction<number>) => {
      state.workBenchVisiblity = undefined;
      state.activeTabIndex = payload;
    },
  },
});

export const {
  changeTab,
  setDisplayingState,
  toggleWorkbenchVisiblity,
} = sideBarSlice.actions;

export default sideBarSlice.reducer;

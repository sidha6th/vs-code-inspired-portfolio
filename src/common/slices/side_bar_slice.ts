import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum WorkBenchVisiblityState {
  visible,
  hidden,
  overlayed,
}

export interface SideBarState {
  activeTabIndex: number;
  workBenchVisiblity: WorkBenchVisiblityState;
}

const initialState: SideBarState = {
  activeTabIndex: 0,
  workBenchVisiblity: WorkBenchVisiblityState.visible,
};

export const sideBarSlice = createSlice({
  name: "SideBarSlice",
  initialState,
  reducers: {
    toggleWorkbenchVisiblity: (state) => {
      switch (state.workBenchVisiblity) {
        case WorkBenchVisiblityState.hidden:
          state.workBenchVisiblity = WorkBenchVisiblityState.visible;
          return;
        case WorkBenchVisiblityState.visible:
        case WorkBenchVisiblityState.overlayed:
          state.workBenchVisiblity = WorkBenchVisiblityState.hidden;
      }
    },
    toggleOverlayState: (
      state,
      { payload }: PayloadAction<WorkBenchVisiblityState | undefined>
    ) => {
      if (
        payload &&
        state.workBenchVisiblity != WorkBenchVisiblityState.hidden
      ) {
        state.workBenchVisiblity = payload;
        return;
      }
      switch (state.workBenchVisiblity) {
        case WorkBenchVisiblityState.overlayed:
          state.workBenchVisiblity = WorkBenchVisiblityState.visible;
          return;
        case WorkBenchVisiblityState.visible:
          state.workBenchVisiblity = WorkBenchVisiblityState.overlayed;
          return;
      }
    },
    changeTab: (state, { payload }: PayloadAction<number>) => {
      if (
        state.activeTabIndex != payload &&
        state.workBenchVisiblity === WorkBenchVisiblityState.hidden
      ) {
        state.workBenchVisiblity = WorkBenchVisiblityState.visible;
      }
      state.activeTabIndex = payload;
    },
  },
});

export const { changeTab, toggleOverlayState, toggleWorkbenchVisiblity } =
  sideBarSlice.actions;

export default sideBarSlice.reducer;

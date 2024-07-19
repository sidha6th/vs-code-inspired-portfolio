import { useSelector, useDispatch } from "react-redux";
import style from "./SideBar.module.scss";
import { RootState } from "../../../core/store/store";
import {
  changeTab,
  toggleWorkbenchVisiblity,
  WorkBenchVisiblityState,
} from "../../slices/side_bar_slice";

export default function SideBar(arg: {
  tabs: {
    child: JSX.Element;
    onClick: () => void;
  }[];
}) {
  const state = useSelector((state: RootState) => state.sidebarSlice);
  const dispatch = useDispatch();

  return (
    <div id={style.sideBar}>
      {arg.tabs.map((value, index) => {
        const isActive =
          index == state.activeTabIndex &&
          state.workBenchVisiblity != WorkBenchVisiblityState.hidden;
        return (
          <Tab
            isActive={isActive}
            onclick={() => onChangeTab(index)}
            child={value.child}
            key={index}
          />
        );
      })}
    </div>
  );

  function onChangeTab(index: number) {
    if (state.activeTabIndex === index) {
      dispatch(toggleWorkbenchVisiblity());
      return;
    }
    dispatch(changeTab(index));
  }
}

function Tab(arg: {
  isActive: boolean;
  onclick: () => void;
  child: JSX.Element;
}) {
  return (
    <div
      className={arg.isActive ? style.activeTab : style.tab}
      onClick={arg.onclick}
    >
      {arg.child}
    </div>
  );
}

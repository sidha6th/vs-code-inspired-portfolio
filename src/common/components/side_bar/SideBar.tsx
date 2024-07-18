import { useSelector, useDispatch } from "react-redux";
import { Explore } from "../svg";
import style from "./SideBar.module.scss";
import { RootState } from "../../../core/store/store";
import {
  changeTab,
  toggleWorkbenchVisiblity,
} from "../../slices/side_bar_slice";
import SourceControlSVG from "../svg/SourceControl";
import PostmanSVG from "../svg/Postman";

export default function SideBar() {
  const state = useSelector((state: RootState) => state.sidebarSlice);
  const dispatch = useDispatch();
  const tabs = [
    { child: <Explore />, onClick: () => {} },
    { child: <SourceControlSVG />, onClick: () => {} },
    { child: <PostmanSVG />, onClick: () => {},}
  ];

  return (
    <div id={style.sideBar}>
      {tabs.map((value, index) => (
        <Tab
          isActive={index == state.activeTabIndex}
          onclick={() => onChangeTab(index)}
          child={value.child}
          key={index}
        />
      ))}
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

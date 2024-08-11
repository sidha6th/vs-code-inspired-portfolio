import { useRef } from "react";
import { useSelector } from "react-redux";
import { Explorer } from "../../../../common/components/explorer/Explorer";
import SideBar from "../../../../common/components/side_bar/SideBar";
import ExploreSVG from "../../../../common/components/svg/Explore";
import PostmanSVG from "../../../../common/components/svg/Postman";
import SourceControlSVG from "../../../../common/components/svg/SourceControl";
import { explorerFiles } from "../../../../core/pages_data/explorer_files";
import { RootState } from "../../../../core/store/store";
import { EditorsViewHolder } from "../editors_view_holder/EditorsViewHolder";
import { WorkBench } from "../workbench/WorkBench";
import style from "./DashboardBody.module.css";

export default function DashboardBody() {
  const tabsRef = useRef([
    { child: <ExploreSVG />, onClick: () => {} },
    { child: <SourceControlSVG />, onClick: () => {} },
    {
      child: <PostmanSVG />,
      onClick: () => {},
    },
  ]);
  const workBenchChilds = useRef([
    { child: <Explorer />, title: "EXPLORER" },
    { child: <Explorer />, title: "SOURCE CONTROL" },
    { child: <PostmanWorkBench />, title: "POSTMAN" },
  ]);

  const tabIndex = useSelector(
    (state: RootState) => state.sidebarSlice.activeTabIndex
  );

  return (
    <div className={style.body}>
      <SideBar tabs={tabsRef.current} />
      <WorkBench
        child={workBenchChilds.current[tabIndex].child}
        title={workBenchChilds.current[tabIndex].title}
      />
      <EditorsViewHolder pages={explorerFiles} />
    </div>
  );
}

function PostmanWorkBench() {
  return <></>;
}

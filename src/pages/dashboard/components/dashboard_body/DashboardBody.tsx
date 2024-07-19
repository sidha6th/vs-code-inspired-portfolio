import { useRef } from "react";
import SideBar from "../../../../common/components/side_bar/SideBar";
import { EditorsViewHolder } from "../editors_view_holder/EditorsViewHolder";
import { WorkBench } from "../workbench/WorkBench";
import style from "./DashboardBody.module.css";
import SourceControlSVG from "../../../../common/components/svg/SourceControl";
import PostmanSVG from "../../../../common/components/svg/Postman";
import { explorerPages } from "../../../../core/pages_data/explorer_pages";
import ExploreSVG from "../../../../common/components/svg/Explore";
import { Explorer } from "../../../../common/components/explorer/Explorer";
import { useSelector } from "react-redux";
import { RootState } from "../../../../core/store/store";

export default function DashboardBody() {
  const tabsRef = useRef([
    { child: <ExploreSVG />, onClick: () => {} },
    { child: <SourceControlSVG />, onClick: () => {} },
    { child: <PostmanSVG />, onClick: () => {} },
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
      <EditorsViewHolder pages={explorerPages} />
    </div>
  );
}

function PostmanWorkBench() {
  return <></>;
}

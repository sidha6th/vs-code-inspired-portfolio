import { ExpansionTileListView } from "../../../../common/components/expansion_tile_list_view/ExpansionTileListView";
import SideBar from "../../../../common/components/side_bar/SideBar";
import root from "../../../../core/route/pages";
import { WorkBench } from "../workbench/WorkBench";
import style from "./DashboardBody.module.css";

export default function DashboardBody() {
  return (
    <div className={style.body}>
      <SideBar />
      <WorkBench
        child={
          <ExpansionTileListView
            parentPath="/"
            nodes={Array.from(root.node?.entries())}
            padLeftCount={0}
          />
        }
      />
    </div>
  );
}

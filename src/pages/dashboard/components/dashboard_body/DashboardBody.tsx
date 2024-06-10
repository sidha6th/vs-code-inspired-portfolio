import { useEffect, useState } from "react";
import { ExpansionTileListView } from "../../../../common/components/expansion_tile_list_view/ExpansionTileListView";
import SideBar from "../../../../common/components/side_bar/SideBar";
import { EditorsViewHolder } from "../editors_view_holder/EditorsViewHolder";
import { WorkBench } from "../workbench/WorkBench";
import style from "./DashboardBody.module.css";
import { root } from "../../../../core/route/work_bench_setup";
import WorkBenchElements from "../../../../core/config/work_bench_config";

export default function DashboardBody() {
  const [state, setState] = useState<WorkBenchElements>();
  useEffect(() => {
    if (state == undefined) {
      setState(root);
    }
  }, [state]);

  return (
    <div className={style.body}>
      <SideBar />
      <WorkBench
        child={
          <ExpansionTileListView
            parentPath="/"
            nodes={Array.from(state?.node?.entries() ?? [])}
            padLeftCount={0}
          />
        }
      />
      <EditorsViewHolder />
    </div>
  );
}

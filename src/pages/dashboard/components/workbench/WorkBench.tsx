import style from "./WorkBench.module.scss";
import Constants from "../../../../constants/Constants";
import { ResizableComponent } from "../../../../common/components/resizable/ResizableComponent";

export function WorkBench(arg: { child: JSX.Element }) {
  return (
    <ResizableComponent
      initialWidth={Constants.dimension.sidePanelDefaultWidth}
      child={
        <div id={style.workbench}>
          <div className={style.titleBox}>
            <p className={style.workBenchTitle}>Explore</p>
          </div>
          <div className="expansion-tile-list">{arg.child}</div>
        </div>
      }
    ></ResizableComponent>
  );
}

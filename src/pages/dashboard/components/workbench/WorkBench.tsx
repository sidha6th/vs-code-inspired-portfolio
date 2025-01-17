import style from "./WorkBench.module.scss";
import { ResizableComponent } from "../../../../common/components/resizable/ResizableComponent";

export function WorkBench(arg: { child: JSX.Element; title: string }) {
  return (
    <ResizableComponent
      child={
        <div id={style.workbench}>
          <div className={style.titleBox}>
            <p className={style.workBenchTitle}>{arg.title}</p>
          </div>
          <div className="expansion-tile-list">{arg.child}</div>
        </div>
      }
    ></ResizableComponent>
  );
}

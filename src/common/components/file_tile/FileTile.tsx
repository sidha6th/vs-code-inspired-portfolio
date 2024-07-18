import { useEffect, useRef } from "react";
import style from "./FileTile.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../core/store/store";
import { add } from "../../slices/opend_editors_slice";
import {
  toggleWorkbenchVisiblity,
  WorkBenchVisiblityState,
} from "../../slices/side_bar_slice";

function FileTile({
  child,
  marginLeft,
  parentPath,
}: {
  child: JSX.Element;
  parentPath: string;
  marginLeft: number;
}) {
  const tileRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const workBenchVisiblity = useSelector(
    (state: RootState) => state.sidebarSlice.workBenchVisiblity
  );  

  const currentSelectedPath = useSelector(
    ({ openedEditorsSlice }: RootState) =>
      openedEditorsSlice.currentSelectedPath
  );

  useEffect(() => {
    const doc = tileRef.current;
    if (parentPath == currentSelectedPath) {
      doc?.classList.add(style.selected);
    } else {
      doc?.classList.remove(style.selected);
    }
  }, [currentSelectedPath]);

  return (
    <div ref={tileRef} className={style.tileWrapper}>
      <div className={style.clickObserver} onClick={onclick}>
        <div
          style={{ marginLeft: `${marginLeft}px` }}
          className={style.fileTile}
        >
          {child}
        </div>
      </div>
    </div>
  );

  function onclick() {
    dispatch(add(parentPath));
    if (workBenchVisiblity === WorkBenchVisiblityState.overlayed) {
      dispatch(toggleWorkbenchVisiblity());
    }
  }
}

export default FileTile;

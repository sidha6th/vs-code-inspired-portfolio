import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../core/store/store";
import { add } from "../../slices/opend_editors_slice";
import {
  toggleWorkbenchVisiblity,
  WorkBenchVisiblityState,
} from "../../slices/side_bar_slice";
import LineAligners from "../json_template_component/sub_components/aligner/LineAligner";
import style from "./FileTile.module.scss";

function FileTile({
  child,
  parentPath,
  paddCount,
}: {
  paddCount: number;
  child: JSX.Element;
  parentPath: string;
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
    <div ref={tileRef}>
      <div className={style.clickObserver} onClick={onclick}>
        <div className={style.space} />
        <LineAligners width={7} length={paddCount} border={paddCount > 0} />
        {child}
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

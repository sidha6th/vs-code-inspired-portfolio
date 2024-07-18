import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ResizableComponent.scss";
import React from "react";
import Constants from "../../../constants/Constants";
import { setOrGetWidth, updateStyle } from "../../helpers/work_bench_helpers";
import { RootState } from "../../../core/store/store";
import {
  toggleOverlayState,
  WorkBenchVisiblityState,
} from "../../slices/side_bar_slice";

type ResizableComponentArg = {
  child: JSX.Element;
  onDrag?: (width: number) => void;
};

export function ResizableComponent(arg: ResizableComponentArg) {
  const resizableHandle = useRef<HTMLDivElement>(null);
  const workbenchRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const displayingState = useSelector(
    (state: RootState) => state.sidebarSlice.workBenchVisiblity
  );

  let initialWidth =
    setOrGetWidth() ?? Constants.dimension.workBenchDefaultWidth;
  let xCor = useRef(initialWidth);
  let width = useRef(initialWidth);
  useEffect(() => window.addEventListener("resize", listenWidnowResize));
  useEffect(() => updateStyle(initialWidth), [initialWidth]);
  useEffect(changeStateAsOverlayed, []);

  return (
    <div
      ref={workbenchRef}
      id="resizableWorkBench"
      className={`resizable ${getClass()}`}
    >
      {arg.child}
      <div ref={resizableHandle} id="dragger" onMouseDown={onMouseDown}></div>
    </div>
  );

  function listenWidnowResize() {
    changeStateAsOverlayed();
  }

  function getClass() {
    switch (displayingState) {
      case WorkBenchVisiblityState.hidden:
        return "hidden";
      case WorkBenchVisiblityState.overlayed:
        return "overlayed";
      default:
        if (_willNotFit()) {
          dispatch(toggleOverlayState(WorkBenchVisiblityState.overlayed));
          return "overlayed";
        }
        return "";
    }
  }

  function _willNotFit() {
    return (
      window.innerWidth - width.current <
      Constants.dimension.minVWToDisplyWorkbench
    );
  }

  function changeStateAsOverlayed() {
    if (_willNotFit()) {
      dispatch(toggleOverlayState(WorkBenchVisiblityState.overlayed));
    }
    dispatch(toggleOverlayState(displayingState));
  }

  function isMinOrMax(currentWidth: number) {
    return currentWidth < 160 || window.innerWidth - currentWidth < 500;
  }

  function onMouseMove(e: MouseEvent) {
    const dx = e.clientX - xCor.current;
    const newWidth = width.current + dx;
    if (isMinOrMax(newWidth)) {
      return;
    }
    width.current = newWidth;
    xCor.current = e.clientX;
    updateStyle(width.current);
  }

  function onMouseUp() {
    resizableHandle.current?.classList.remove("active");
    document.removeEventListener("mousemove", onMouseMove);
  }

  function onMouseDown(
    e: MouseEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    resizableHandle.current?.classList.add("active");
    xCor.current = e.clientX;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }
}

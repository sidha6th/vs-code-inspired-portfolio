import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ResizableComponent.scss";
import React from "react";
import Constants from "../../../constants/Constants";
import { setOrGetWidth, updateStyle } from "../../helpers/work_bench_helpers";
import { RootState } from "../../../core/store/store";
import {
  setDisplayingState,
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
  let preWidth = useRef(0);
  useEffect(() => window.addEventListener("resize", onResizeWindow), []);
  useEffect(() => updateStyle(initialWidth), [initialWidth]);
  useEffect(onResizeWindow, []);
  useEffect(() => {
    preWidth.current = window.innerWidth;
  }, []);

  const willFit = () =>
    window.innerWidth - width.current >
    Constants.dimension.minVWToDisplyWorkbench;

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

  function onResizeWindow() {
    const isDragingRight = isIncreasingWidth();
    if (isDragingRight) {
      if (displayingState === WorkBenchVisiblityState.hidden) {
        dispatch(setDisplayingState());
      }
    } else {
      if (!willFit() && displayingState != WorkBenchVisiblityState.hidden) {
        dispatch(setDisplayingState(WorkBenchVisiblityState.hidden));
        return;
      }
    }
  }

  function isIncreasingWidth() {
    const currentWidth = window.innerWidth;
    const result = currentWidth > preWidth.current;
    if (currentWidth != preWidth.current) {
      preWidth.current = currentWidth;
    }
    return result;
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

  function getClass() {
    switch (displayingState) {
      case WorkBenchVisiblityState.hidden:
        return "hidden";
      case WorkBenchVisiblityState.overlayed:
        return "overlayed";
      default:
        if (!willFit()) {
          dispatch(setDisplayingState(WorkBenchVisiblityState.overlayed));
          return "overlayed";
        }
        return "";
    }
  }
}

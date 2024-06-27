import { useEffect, useRef } from "react";
import  "./ResizableComponent.scss";
import React from "react";
import Constants from "../../../constants/Constants";
import { displayWorkBench, hideWorkBench, setOrGetWidth, updateStyle } from "../../helpers/work_bench_helpers";

type ResizableComponentArg = {
  child: JSX.Element;
  onDrag?: (width: number) => void;
};

export function ResizableComponent(arg: ResizableComponentArg) {
  const resizableHandle = useRef<HTMLDivElement>(null);
  let initialWidth =
    setOrGetWidth() ?? Constants.dimension.workBenchDefaultWidth;
  let xCor = useRef(initialWidth);
  let width = useRef(initialWidth);
  useEffect(() => {
    window.addEventListener("resize", listenWidnowResize);
  });
  useEffect(() => updateStyle(initialWidth), [initialWidth]);

  return (
    <div id='resizableWorkBench' className='resizable'>
      {arg.child}
      <div
        ref={resizableHandle}
        id='dragger'
        onMouseDown={onMouseDown}
      ></div>
    </div>
  );


  function listenWidnowResize(e: UIEvent) {
    if (e.currentTarget instanceof Window) {
      if (
        window.innerWidth - width.current <
        Constants.dimension.minVWToDisplyWorkbench
      ) {
        hideWorkBench();
      }else{
        displayWorkBench()
      }
    }
  }

  function isMinOrMax(currentWidth: number) {
   return currentWidth < 160 || window.innerWidth - currentWidth < 500
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

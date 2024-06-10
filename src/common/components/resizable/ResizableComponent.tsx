import { useRef, useState } from "react";
import style from "./ResizableComponent.module.scss";
import React from "react";
import Constants from "../../../constants/Constants";

type ResizableComponentArg = {
  child: JSX.Element;
  initialWidth: number;
  onDrag?: (width: number) => void;
};

export function ResizableComponent(arg: ResizableComponentArg) {
  const [widthState, setWidth] = useState(`${arg.initialWidth}px`);
  const resizableHandle = useRef<HTMLDivElement>(null);
  let xCor = useRef(arg.initialWidth);
  let width = useRef(arg.initialWidth);

  const onMouseMove = (e: MouseEvent) => {
    const dx = e.clientX - xCor.current;
    const newWidth = width.current + dx;
    if (newWidth < Constants.dimension.minSidePanelWidth) {
      return;
    }
    width.current = newWidth;
    xCor.current = e.clientX;
    setWidth(`${width.current}px`);
  };

  const onMouseUp = () => {
    resizableHandle.current?.classList.remove('active')
    document.removeEventListener("mousemove", onMouseMove);
  };

  const onMouseDown = (
    e: MouseEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    resizableHandle.current?.classList.add('active')
    xCor.current = e.clientX;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div className={style.resizable} style={{ width: widthState }}>
      {arg.child}
      <div
        ref={resizableHandle}
        id={style.dragger}
        onMouseDown={onMouseDown}
      ></div>
    </div>
  );
}

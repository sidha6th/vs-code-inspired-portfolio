import { useEffect, useRef } from "react";
import style from "./Draggable_Card.module.scss";

export function DraggableCard(arg: { child: JSX.Element }) {
  const draggableCardRef = useRef<HTMLDivElement | null>(null);
  const clickedRef = useRef(false);

  useEffect(() => {
    document.addEventListener("mousemove", dragStart);
    document.addEventListener("mouseup", mouseUp);

    return () => {
      removeDragListner();
      removeMouseUpListner();
    };
  }, []);

  return (
    <div ref={draggableCardRef} onMouseDown={mouseDown}>
      {arg.child}
    </div>
  );

  function mouseDown() {
    clickedRef.current = true;
  }

  function mouseUp() {
    if (clickedRef.current) {
      clickedRef.current = false;
      draggableCardRef.current?.classList.remove(style.dragging);
      updatePosition();
    }
  }

  function dragStart(ev: MouseEvent) {
    if (!clickedRef.current) {
      return;
    }
    draggableCardRef.current?.classList.add(style.dragging);
    updatePosition(ev.clientX, ev.clientY);
  }

  function updatePosition(dx?: number, dy?: number) {
    document.documentElement.style.setProperty("--dragTop", `${dy ?? 0}px`);
    document.documentElement.style.setProperty("--dragLeft", `${dx ?? 0}px`);
  }

  function removeDragListner() {
    document.removeEventListener("mousemove", dragStart);
  }
  function removeMouseUpListner() {
    document.removeEventListener("mouseup", mouseUp);
  }
}

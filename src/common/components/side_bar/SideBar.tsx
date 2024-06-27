import { useEffect, useRef } from "react";
import { Explore } from "../svg";
import style from "./SideBar.module.scss";
import { toggleWorkbenchVisiblity } from "../../helpers/work_bench_helpers";

export default function SideBar() {
  const exploreButtonRef = useRef<HTMLDivElement>(null);
  const codeButtonRef = useRef<HTMLDivElement>(null);
  const settingsButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    _toggleActiveState(null, 0);
  }, []);

  return (
    <div id={style.sideBar}>
      <div
        ref={exploreButtonRef}
        className={style.sideBarButton}
        onClick={() =>
          onClick(exploreButtonRef.current, _onClickExplorerButton)
        }
      >
        <Explore />
      </div>
      <div
        ref={codeButtonRef}
        className={style.sideBarButton}
        onClick={() => onClick(codeButtonRef.current)}
      >
        <Explore />
      </div>
      <div
        ref={settingsButtonRef}
        className={style.sideBarButton}
        onClick={() => onClick(settingsButtonRef.current)}
      >
        <Explore />
      </div>
    </div>
  );

  function _onClickExplorerButton() {
    toggleWorkbenchVisiblity();
  }
  function onClick(element: HTMLDivElement | null, cb?: () => void) {
    cb?.call(cb);
    _toggleActiveState(element);
  }

  function _toggleActiveState(
    element: HTMLDivElement | null,
    index?: number | undefined
  ) {
    const buttons = document.getElementsByClassName(style.sideBarButton);
    if (index != undefined) {
      buttons.item(index)?.classList.add(style.active);
      return;
    }
    for (let index = 0; index < buttons.length; index++) {
      buttons.item(index)?.classList.remove(style.active);
    }
    element?.classList.add(style.active);
  }
}

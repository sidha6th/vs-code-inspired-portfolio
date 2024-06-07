import { Explore } from "../svg";
import style from "./SideBar.module.css";

export default function SideBar() {
  return (
    <div id={style.sideBar}>
      <div className={style.sideBarButton}>
        <Explore />
      </div>
      <div className={style.sideBarButton}>
        <Explore />
      </div>
      <div className={style.sideBarButton}>
        <Explore />
      </div>
      <div className={style.sideBarButton}>
        <Explore />
      </div>
    </div>
  );
}

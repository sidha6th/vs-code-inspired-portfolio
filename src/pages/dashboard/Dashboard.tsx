import { BottomBar } from "../../common/components/bottom_bar/BottomBar";
import TopBar from "../../common/components/top_bar/TopBar";
import style from "./Dashboard.module.css";
import DashboardBody from "./components/dashboard_body/DashboardBody";

export function DashBoard() {
  return (
    <div className={style.dashBoard}>
      <TopBar />
      <DashboardBody />
      <BottomBar />
    </div>
  );
}

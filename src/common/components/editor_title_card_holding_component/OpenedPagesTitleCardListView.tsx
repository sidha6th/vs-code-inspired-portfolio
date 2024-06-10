import { RootState } from "../../../core/store/store";
import { useSelector} from "react-redux";
import "./OpenedPagesTitleCards.scss";
import TitleCard from "./editor_title_card/TitleCard";
export function OpenedPagesTitleCardListView() {
  const state = useSelector(
    ({ openedEditorsSlice }: RootState) => openedEditorsSlice.openedEditorsPathStack
  );

  return (
    <div id="opened-pages-title-card-holder">
      {state.map((value) => (
        <TitleCard key={value} fullPath={value} />
      ))}
    </div>
  );
}

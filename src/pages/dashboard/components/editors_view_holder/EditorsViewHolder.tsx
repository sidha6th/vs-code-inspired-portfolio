import style from "./EditorsViewHolder.module.css";
import { useSelector } from "react-redux";
import { OpenedPagesTitleCardListView } from "../../../../common/components/editor_title_card_holding_component/OpenedPagesTitleCardListView";
import { RootState } from "../../../../core/store/store";

export function EditorsViewHolder(arg: { pages: Map<string, JSX.Element> }) {
  const currentSelectedPath = useSelector(
    ({ openedEditorsSlice }: RootState) =>
      openedEditorsSlice.currentSelectedPath
  );

  return (
    <div className={style.viewHolder}>
      <OpenedPagesTitleCardListView />
      {arg.pages.get(currentSelectedPath ?? "") ?? <></>}
    </div>
  );
}

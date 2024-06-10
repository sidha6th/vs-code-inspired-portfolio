import style from "./EditorsViewHolder.module.css";
import { useSelector } from "react-redux";
import { OpenedPagesTitleCardListView } from "../../../../common/components/editor_title_card_holding_component/OpenedPagesTitleCardListView";
import { RootState } from "../../../../core/store/store";
import { paths } from "../../../../core/route/path";

export function EditorsViewHolder() {
  const currentSelectedPath = useSelector(
    ({ openedEditorsSlice }: RootState) =>
      openedEditorsSlice.currentSelectedPath
  );

  return (
    <div className={style.viewHolder}>
      <OpenedPagesTitleCardListView />
      {paths.get(currentSelectedPath ?? "") ?? <></>}
    </div>
  );
}

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../core/store/store";
import { remove, toggleFocus } from "../../../slices/opend_editors_slice";
import SvgClose from "../../arrow_icon/Close";
import { Button } from "../../button/Button";
import { DraggableCard } from "../../draggable_card/DragableCard";
import style from "./TitleCard.module.scss";

function TitleCard(arg: { fullPath: string }) {
  const dispatch = useDispatch();
  const titleRef = useRef<HTMLDivElement>(null);
  const fileName = useRef(() => {
    const splitedPath = arg.fullPath.split("/");
    return splitedPath.pop();
  });

  const state = useSelector(
    ({ openedEditorsSlice }: RootState) =>
      openedEditorsSlice.currentSelectedPath
  );

  useEffect(() => {
    const doc = titleRef.current;
    if (arg.fullPath == state) {
      doc?.classList.add(style.selected);
    } else {
      doc?.classList.remove(style.selected);
    }
  }, [state]);

  return (
    <DraggableCard
      child={
        <div
          ref={titleRef}
          className={style.titleCardWrapper}
          title={arg.fullPath}
        >
          <div className={style.clickObserver} onClick={onClickCard}>
            <p className={style.title}>{fileName.current()}</p>
          </div>
          <Button child={<SvgClose />} onClick={onClickClose} />
        </div>
      }
    />
  );

  function onClickClose() {
    dispatch(remove(arg.fullPath));
  }

  function onClickCard() {
    dispatch(toggleFocus(arg.fullPath));
  }
}

export default TitleCard;

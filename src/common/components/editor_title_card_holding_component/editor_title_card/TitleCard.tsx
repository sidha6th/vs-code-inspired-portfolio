import "./TitleCard.scss";
import { Button } from "../../button/Button";
import SvgClose from "../../arrow_icon/Close";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { RootState } from "../../../../core/store/store";
import { remove, toggleFocus } from "../../../slices/opend_editors_slice";

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
      doc?.classList.add("selected");
    } else {
      doc?.classList.remove("selected");
    }
  }, [state]);

  return (
    <div
      ref={titleRef}
      className="title-card"
      title={arg.fullPath}
    >
      <div className="click-observer" onClick={onClickCard}>
      <p className="title">{fileName.current()}</p>
      </div>
      <Button child={<SvgClose />} onClick={onClickClose} />
    </div>
  );

  function onClickClose() {
    dispatch(remove(arg.fullPath));
  }

  function onClickCard() {
    dispatch(toggleFocus(arg.fullPath));
  }
}

export default TitleCard;

import style from "./style.module.css";

type SingleLineArg = {
  child: JSX.Element;
  count: number;
};

function SingleLine({ child, count }: SingleLineArg) {
  return (
    <div className={style.SingleLine}>
      <div className={style.lineCountIndicator}>
        <div className={style.breakPointWrapper}>
          <div className={style.breakPoint}></div>
        </div>
        <p className={style.lineCount}>{count}</p>
      </div>
      <div className={style.childWrapper}>{child}</div>
    </div>
  );
}

export default SingleLine;

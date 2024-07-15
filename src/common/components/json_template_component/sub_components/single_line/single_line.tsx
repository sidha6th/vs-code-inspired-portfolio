import style from "./style.module.css";

type SingleLineArg = {
  child: JSX.Element;
  count: number;
};

var c =0;

function SingleLine({ child }: SingleLineArg) {
  return (
    <div className={style.SingleLine}>
      <div className={style.lineCountIndicator}>
        <div className={style.breakPointWrapper}>
          <div className={style.breakPoint}></div>
        </div>
        <p className={style.lineCount}>{c++}</p>
      </div>
      <div className={style.childWrapper}>{child}</div>
    </div>
  );
}

export default SingleLine;

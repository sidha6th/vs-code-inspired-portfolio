import style from "./style.module.css";

type SingleLineArg = {
  child: JSX.Element;
  count: LineCount;
};

export class LineCount {
  private count: number;
  constructor() {
    this.count = 0;
  }

  public increment() {
    this.count++;
  }

  public get value(): number {
    return this.count++;
  }
}

function SingleLine({ child, count }: SingleLineArg) {
  return (
    <div className={style.SingleLine}>
      <div className={style.lineCountIndicator}>
        <div className={style.breakPointWrapper}>
          <div className={style.breakPoint}></div>
        </div>
        <p className={style.lineCount}>{count.value}</p>
      </div>
      <div className={style.childWrapper}>{child}</div>
    </div>
  );
}

export default SingleLine;

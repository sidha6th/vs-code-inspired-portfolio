import style from "./FileTile.module.scss";

function FileTile({ child,marginLeft }: { child: JSX.Element; parentPath: string,marginLeft:number }) {
  return <div className={style.tileWrapper}>
      <div className={style.clickObserver} onClick={onClick}>
        <div style={{ marginLeft: `${marginLeft}px` }} className={style.fileTile}>{child}</div>
      </div>
    </div>
    function onClick() {}
  
}

export default FileTile;

import style from "./LineAligner.module.css";

function LineAligners(arg: { length: number; border?: boolean }) {
    const paddings: JSX.Element[] = [];
    const clasName =
      arg.border ?? false
        ? style.letPadderWithBorder
        : style.letPadderWithoutBorder;
    for (let i = 0; i < arg.length; i++) {
      paddings.push(<div className={clasName} key={i}/>);
    }
    return <>{paddings}</>;
  }

  export default LineAligners;
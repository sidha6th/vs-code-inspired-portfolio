import style from "./KeyValuePairArranger.module.css";

function KeyValuePairTextArranger(arg: {
  jsonKey?: string;
  value?: string;
  specialChar?: string;
  border?: boolean;
  leftPadder?: JSX.Element;
  comma?: boolean;
}) {
  return (
    <div className={style.contentAligner}>
      {arg.leftPadder}
      {arg.jsonKey == undefined ? (
        <></>
      ) : (
        <>
          <p className={style.key}>"{arg.jsonKey}"</p>
          <p content=":">{":"} </p>
        </>
      )}
      {arg.specialChar == null ? (
        <p content={arg.value} className={style.value}>
          "{arg.value}"
        </p>
      ) : (
        <p content={arg.specialChar}>{arg.specialChar}</p>
      )}
      {arg.comma ? <p content=",">{","} </p> : <></>}
    </div>
  );
}

export default KeyValuePairTextArranger;

import style from "./JsonTemplate.module.css";
import { JsonT } from "../../types/json_type";


export type JsonTemplateArg = {
  skills: JsonT[];
  initialIndex?: number;
  leftPadCount: number;
  specilChar?: string;
  border?:boolean;
  headderOrFooterPaddLength: number;
  opening: { key?: string; value: string };
  tail?: { key?: string; value: string };
};

function JsonTemplate(arg: JsonTemplateArg) {
  return (
    <>
      <SingleLine
        count={arg.initialIndex ?? 0}
        child={
          <KeyValuePairText
            leftPadder={<LeftPaddes border={arg.border} length={arg.headderOrFooterPaddLength} />}
            jsonKey={arg.opening.key}
            value={arg.opening.value}
          />
        }
      />
      {arg.skills.map((item, index) => {
        // when there is children
        if (Array.isArray(item.value)) {
          return (
            <JsonTemplate
              headderOrFooterPaddLength={arg.headderOrFooterPaddLength + 1}
              opening={{ key: item.key, value: "{" }}
              leftPadCount={arg.leftPadCount + 1}
              border
              initialIndex={index}
              skills={item.value}
            />
          );
        }

        return (
          <SingleLine
            count={arg.initialIndex ?? 0 + index}
            child={
              <KeyValuePairText
                leftPadder={<LeftPaddes border length={arg.leftPadCount} />}
                jsonKey={item.key}
                value={item.value}
                key={index}
              />
            }
          />
        );
      })}
      <SingleLine
        count={arg.initialIndex ?? 0}
        child={
          <KeyValuePairText
            leftPadder={<LeftPaddes border={arg.border} length={arg.headderOrFooterPaddLength} />}
            value="}"
          />
        }
      />
    </>
  );
}

function LeftPaddes(arg: { length: number; border?: boolean }) {
  const paddings: JSX.Element[] = [];
  const clasName =
    arg.border ?? false
      ? style.letPadderWithBorder
      : style.letPadderWithoutBorder;
  for (let i = 0; i < arg.length; i++) {
    paddings.push(<div className={clasName} />);
  }
  return <>{paddings}</>;
}

function KeyValuePairText(arg: {
  jsonKey?: string;
  value: string;
  border?: boolean;
  specialChar?: string;
  leftPadder?: JSX.Element;
}) {
  return (
    <div className={style.contentAligner}>
      {arg.leftPadder}
      {arg.jsonKey == undefined ? (
        <></>
      ) : (
        <>
          <p className={style.key}>{arg.jsonKey}</p>
          <p content=":">{":"}{" "}</p>
        </>
      )}
      <p content={arg.specialChar} className={style.value}>
        {arg.value}
      </p>
    </div>
  );
}

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
export default JsonTemplate;

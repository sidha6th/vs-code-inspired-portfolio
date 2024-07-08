import { useRef } from "react";
import style from "./JsonTemplate.module.css";

export type Skill = {
  key: string;
  value: string | Skill[];
};

export type JsonTemplateArg = {
  skills: Skill[];
  initialIndex?: number;
  leftPadCount: number;
  specilChar?: string;
  border?: boolean;
  headderOrFooterPaddLength: number;
  head: { key?: string; value: string };
  tail?: { key?: string; value: string };
};

function JsonTemplate(arg: JsonTemplateArg) {
  return (
    <>
      <SingleLine
        count={arg.initialIndex ?? 0}
        child={
          <KeyValuePairText
            leftPadder={<LeftPaddes length={arg.headderOrFooterPaddLength} />}
            border={arg.border}
            jsonKey={arg.head.key}
            value={arg.head.value}
          />
        }
      />
      {arg.skills.map((item, index) => {
        // when there is children
        if (Array.isArray(item.value)) {
          return (
            <JsonTemplate
              headderOrFooterPaddLength={arg.headderOrFooterPaddLength + 1}
              border
              head={{ key: item.key, value: "{" }}
              leftPadCount={arg.leftPadCount + 1}
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
                leftPadder={<LeftPaddes length={arg.leftPadCount} />}
                border
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
            leftPadder={<LeftPaddes length={arg.headderOrFooterPaddLength} />}
            value="}"
          />
        }
      />
    </>
  );
}

function LeftPaddes(arg: { length: number }) {
  const paddings: JSX.Element[] = [];
  for (let i = 0; i < arg.length; i++) {
    paddings.push(<div className={style.letPadder} />);
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
          <p content=":">{":"}</p>
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

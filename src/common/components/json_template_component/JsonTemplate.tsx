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
  head: { key?: string; value: string };
  tail?: { key?: string; value: string };
};

function JsonTemplate(arg: JsonTemplateArg) {
  return (
    <>
      <SingleLine
        leftPaddCount={arg.leftPadCount ?? 0}
        count={arg.initialIndex ?? 0}
        child={
          <KeyValuePairText
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
            leftPaddCount={arg.leftPadCount+1}
            count={arg.initialIndex ?? 0 + index}
            child={
              <KeyValuePairText
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
        leftPaddCount={arg.leftPadCount ?? 0}
        count={arg.initialIndex ?? 0}
        child={<KeyValuePairText value="}" />}
      />
    </>
  );
}

function KeyValuePairText(arg: {
  jsonKey?: string;
  value: string;
  border?: boolean;
  specialChar?: string;
}) {
  return (
    <div
      className={
        arg.border ? style.keyValuePairText : style.keyValuePairTextBoderLess
      }
    >
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
  leftPaddCount: number;
};

function SingleLine({ child, count, leftPaddCount }: SingleLineArg) {
const paddingLeft =`${leftPaddCount * 10}px`;

  return (
    <div className={style.SingleLine}>
      <div className={style.lineCountIndicator}>
        <div className={style.breakPointWrapper}>
          <div className={style.breakPoint}></div>
        </div>
        <p className={style.lineCount}>{count}</p>
      </div>
      <div className={style.childWrapper}>
        <div
          className={style.contentAligner}
          style={{ paddingLeft: paddingLeft! }}
        >
          {child}
        </div>
      </div>
    </div>
  );
}
export default JsonTemplate;

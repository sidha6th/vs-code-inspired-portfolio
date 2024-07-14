import { JsonT } from "../../types/json_type";
import SingleLine from "./sub_components/single_line/single_line";
import LineAligners from "./sub_components/aligner/LineAligner";
import KeyValuePairTextArranger from "./sub_components/key_value_arranger/KeyValuePairArranger";

export type JsonTemplateArg = {
  items: JsonT[] | string[];
  lineCount?: number;
  leftPadCount?: number;
  border?: boolean;
  openingOrClosingPaddingCount?: number;
  opening?: { key?: string; value: string };
  closing?: string;
  commaAfterClosing?: boolean;
};

function JsonTemplate(arg: JsonTemplateArg) {
  const paddLeftCount = arg.leftPadCount ?? 1;
  const openingAndClosingPaddingCount = arg.openingOrClosingPaddingCount ?? 0;
  var lineCount = arg.lineCount ?? 1;

  return (
    <>
      <SingleLine
        count={lineCount}
        child={
          <KeyValuePairTextArranger
            leftPadder={
              <LineAligners
                border={arg.border}
                length={openingAndClosingPaddingCount}
              />
            }
            jsonKey={arg.opening?.key}
            specialChar={arg.opening?.value ?? "{"}
          />
        }
      />
      {arg.items.map((item, index) => {
        if (typeof item === "string") {
          return (
            <SingleLine
              count={lineCount++}
              child={
                <KeyValuePairTextArranger
                  leftPadder={
                    <LineAligners border length={paddLeftCount + 1} />
                  }
                  value={item}
                  key={index}
                  comma
                />
              }
            />
          );
        }
        if (Array.isArray(item.value)) {
          const isNotJson = typeof item.value[0] === "string";
          return (
            <JsonTemplate
              openingOrClosingPaddingCount={openingAndClosingPaddingCount + 1}
              opening={{ key: item.key, value: isNotJson ? "[" : "{" }}
              closing={isNotJson ? "]" : "}"}
              leftPadCount={isNotJson ? paddLeftCount : paddLeftCount + 1}
              commaAfterClosing
              border
              lineCount={lineCount++}
              items={item.value}
            />
          );
        }
        return (
          <SingleLine
            count={lineCount++}
            child={
              <KeyValuePairTextArranger
                leftPadder={<LineAligners border length={paddLeftCount} />}
                jsonKey={item.key}
                value={item.value}
                key={index}
                comma
              />
            }
          />
        );
      })}
      <SingleLine
        count={lineCount++}
        child={
          <KeyValuePairTextArranger
            leftPadder={
              <LineAligners
                border={arg.border}
                length={openingAndClosingPaddingCount}
              />
            }
            specialChar={arg.closing ?? "}"}
            comma={arg.commaAfterClosing}
          />
        }
      />
    </>
  );
}

export default JsonTemplate;

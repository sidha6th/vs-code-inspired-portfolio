import JsonTemplate, {  } from "../../common/components/json_template_component/JsonTemplate";
import { JsonT } from "../../common/types/json_type";


const c: Array<JsonT> = [
  { key: "Flutter", value: "Dart" },
  { key: "Flutter", value:[{key: "alutter", value: "Dart"}] },
];


function SkillsPage() {
  return (
    <>
      <JsonTemplate headderOrFooterPaddLength={0} leftPadCount={1} opening={{value:"{"}} skills={c}/>
    </>

  );
}

export default SkillsPage;


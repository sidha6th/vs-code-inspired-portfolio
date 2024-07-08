import JsonTemplate, { Skill } from "../../common/components/json_template_component/JsonTemplate";


const c: Array<Skill> = [
  { key: "Flutter", value: "Dart" },
  { key: "Flutter", value:[{key: "Flutter", value: "Dart"}] },
];


function SkillsPage() {
  return (
    <>
      <JsonTemplate leftPadCount={0} head={{value:"{"}} skills={c}/>
    </>

  );
}

export default SkillsPage;


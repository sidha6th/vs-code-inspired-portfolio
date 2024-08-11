import JsonTemplate from "../../../common/components/json_template_component/JsonTemplate";
import { skills } from "../../../core/pages_data/skills";
import style from "./SkillsPage.module.css";

function SkillsPage() {
  return (
    <div className={style.page}>
      <JsonTemplate items={skills} key={-1} />
    </div>
  );
}

export default SkillsPage;

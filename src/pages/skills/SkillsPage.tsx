import style from "./SkillsPage.module.css";
import JsonTemplate from "../../common/components/json_template_component/JsonTemplate";
import { skills } from "../../core/pages_data/skills";

function SkillsPage() {
  return (
    <div className={style.page}>
      <JsonTemplate items={skills} />
    </div>
  );
}

export default SkillsPage;

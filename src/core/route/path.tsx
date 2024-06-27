import ReadMePage from "../../pages/readme/ReadMePage";
import SkillsPage from "../../pages/skills/SkillsPage";

export const paths = new Map<string, JSX.Element>([
  ["/ReadMe.md", <ReadMePage />],
  ["/skills/test/Skills.json", <SkillsPage />],
]);
import ReadMePage from "../../pages/readme/ReadMePage";
import SkillsPage from "../../pages/skills/SkillsPage";

export const explorerPages = new Map<string, JSX.Element>([
  ["/ReadMe.md", <ReadMePage />],
  ["/skills/Skills.json", <SkillsPage />],
]);
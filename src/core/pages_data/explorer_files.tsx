import ReadMePage from "../../pages/explorer/readme/ReadMePage";
import SkillsPage from "../../pages/skills/SkillsPage";

export const explorerFiles = new Map<string, JSX.Element>([
  ["/ReadMe.md", <ReadMePage />],
  ["/skills/Skills.json", <SkillsPage />],
]);

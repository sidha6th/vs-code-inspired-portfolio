import WorkBenchElements from "../config/work_bench_config";

const root: INode = new WorkBenchElements("/");

root.create(
  "ReadMe.md",
  "skills/skills.json",
  "test/test.txt",
  "/skills/test/hi.txt"
);

export default root;

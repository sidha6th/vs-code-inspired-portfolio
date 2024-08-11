import WorkBenchElements from "../config/work_bench_config";
import { explorerFiles } from "./explorer_files";

export const explorerElement = new WorkBenchElements("/");

explorerElement?.create(
  ...Array.from(explorerFiles.keys()).map((value): string => value)
);

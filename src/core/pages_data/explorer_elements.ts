import WorkBenchElements from "../config/work_bench_config";
import { explorerPages } from "./explorer_pages";

export const explorerElement = new WorkBenchElements("/");

explorerElement?.create(...Array.from(explorerPages.keys()).map((value): string => value));

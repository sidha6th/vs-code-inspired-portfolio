import WorkBenchElements from "../config/work_bench_config";
import { paths } from "./path";

export const root = new WorkBenchElements("/");

root?.create(...Array.from(paths.keys()).map((value): string => value));

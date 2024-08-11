export interface INode {
  name: string;
  node: Map<string, INode | undefined>;

  get isFile(): boolean;
  get isDir(): boolean;
  get hasChild(): boolean;
  get nameOnly(): string;
  create(...path: string[]): void;
  searchFile(path: string): string | undefined;
}

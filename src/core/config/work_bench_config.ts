class WorkBenchElements implements INode {
  name: string;
  node: Map<string, (INode|undefined)>;

  constructor(name: string, node?: Map<string, (INode|undefined)>) {
    this.name = name;
    this.node = node ?? new Map<string, (INode | undefined)>();
  }

  create(...paths: string[]): void {
    paths.forEach((path) => {
      this._validatePath(path);
      const splittedPath = path.split("/");
      const fileName = this._getFileName(splittedPath);
      if (fileName != undefined) {
        splittedPath.pop();
      }
      this._create(splittedPath, fileName);
    });
  }

  get isFile(): boolean {
    return !this.name.endsWith("/");
  }

  get isDir(): boolean {
    return this.name.endsWith("/");
  }

  get hasChild(): boolean {
    return (this.node.size>0);
  }

  get nameOnly(): string {
    if (this.isFile) {
      return this.name;
    }
    return this.name.substring(0, this.name.length - 1);
  }

  _create(splittedPath: string[], fileName?: string) {
    if (splittedPath.length > 0 && splittedPath[0].trim().length == 0) {
      splittedPath.shift();
    }

    const fileKey = this._key(fileName);
    if (fileKey != undefined && splittedPath.length == 0) {
      this.node.set(fileKey, new WorkBenchElements(fileName!));
      return;
    }
    const pathToFile = this._traverseAndCreatePath(splittedPath);
    if (fileName !== undefined) {
      pathToFile?.set(fileKey!, new WorkBenchElements(fileName));
    }
  }

  _key(name?: string): string | undefined {
    return name?.toLowerCase();
  }

  _validatePath(value: string): boolean {
    if (value.trim().length == 0) {
      throw Error("File name cannot be empty");
    }
    return true;
  }

  _getFileName(splittedPath: string[]) {
    const lastItem = splittedPath[splittedPath.length - 1];
    // its ending with file Name
    if (lastItem.trim().length != 0) {
      return lastItem;
    }
  }

  _traverseAndCreatePath(
    splittedPath: string[],
    nextNode?: Map<string, (INode|undefined)>
  ): Map<string, (INode|undefined)> | undefined {
    const currentNode = nextNode ?? this.node;
    if (splittedPath.length == 0) {
      return currentNode;
    }
    const path = splittedPath.shift() + "/";
    if (!this._validatePath(path!)) {
      return;
    }
    const key = this._key(path!)!;

    const existingNode = currentNode?.get(key);
    if (existingNode != undefined) {
      return this._traverseAndCreatePath(splittedPath, existingNode.node);
    }

    const newNode = new WorkBenchElements(path!);
    currentNode?.set(key, newNode);
    return this._traverseAndCreatePath(splittedPath, newNode.node);
  }
}

export default WorkBenchElements;

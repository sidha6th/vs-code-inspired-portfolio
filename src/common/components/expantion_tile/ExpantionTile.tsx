import { INode } from "../../types/node";
import FileTile from "../file_tile/FileTile";
import FolderTile from "../folder_tile/FolderTile";
import style from "./ExpandsionTile.module.scss";

type FileOrFolderItemArg = {
  parentPath: string;
  node?: INode;
  padLeftCount: number;
};

export function ExpandableTile(arg: FileOrFolderItemArg) {
  if (arg.node?.isFile) {
    return (
      <FileTile
        child={
          <div className={style.title}>
            <p className={style.title}>{arg.node?.name}</p>
          </div>
        }
        paddCount={arg.padLeftCount}
        parentPath={arg.parentPath}
      />
    );
  }

  return (
    <FolderTile
      child={
        <div className={style.title}>
          <p className={style.title}>{arg.node?.nameOnly}</p>
        </div>
      }
      paddLeftCount={arg.padLeftCount}
      parentPath={arg.parentPath}
      node={arg.node}
    />
  );
}

import style from "./ExpandsionTile.module.scss";
import FolderTile from "../folder_tile/FolderTile";
import FileTile from "../file_tile/FileTile";
import Constants from "../../../constants/Constants";
import { useRef } from "react";

type FileOrFolderItemArg = {
  leftBorder?: boolean;
  parentPath: string;
  node?: INode;
  padLeftCount: number;
};

export function ExpandableTile(arg: FileOrFolderItemArg) {
  const marginLeftRef = useRef(
    Constants.dimension.expansionPanelPadLeftWith * arg.padLeftCount
  );

  if (arg.node?.isFile) {
    return (
      <div className={style.wrapper}>
        <FileTile
          child={
            <div className={style.tile}>
              <p className={style.title}>{arg.node?.name}</p>
            </div>
          }
          marginLeft={marginLeftRef.current}
          parentPath={arg.parentPath + arg.node?.name}
        />
      </div>
    );
  }

  return (
    <div className={style.wrapper}>
      <FolderTile
        child={
          <div className={style.tile}>
            <p className={style.title}>{arg.node?.nameOnly}</p>
          </div>
        }
        paddLeftCount={arg.padLeftCount}
        marginLeft={marginLeftRef.current}
        parentPath={arg.parentPath + arg.node?.name}
        node={arg.node}
      />
    </div>
  );
}

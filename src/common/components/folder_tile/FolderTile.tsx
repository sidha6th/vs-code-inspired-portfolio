import { useState } from "react";
import style from './FolderTile.module.scss';
import ArrowIcon from "../arrow_icon/Arrow";
import { ExpansionTileListView } from "../expansion_tile_list_view/ExpansionTileListView";

function FolderTile({
    child,
    parentPath,
    node,
    paddLeftCount,
    marginLeft,
  }: {
    child: JSX.Element;
    parentPath: string;
    node: INode | undefined;
    paddLeftCount:number
    marginLeft:number,
  }) {
    const [opened, setState] = useState(false);
  
    return (
      <div className={style.tileWrapper}>
        <div className={style.clickObserver} onClick={onClick}>
          <div style={{ marginLeft: `${marginLeft}px` }} className={style.folderTile}>
            <ArrowIcon opened={opened} />
            <div className={style.space}></div>
            {child}
          </div>
        </div>
        {opened ? (
          <ExpansionTileListView
            parentPath={parentPath}
            nodes={Array.from(node?.node.entries() ?? [])}
            padLeftCount={paddLeftCount+1}
          />
        ) : (
          <></>
        )}
      </div>
    );
  
    function onClick() {
      setState(!opened);
    }
  }
  

  export default FolderTile;
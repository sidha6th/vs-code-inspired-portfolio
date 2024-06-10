import { useEffect, useRef, useState } from "react";
import style from "./FolderTile.module.scss";
import { useSelector } from "react-redux";
import ArrowIcon from "../arrow_icon/Arrow";
import { ExpansionTileListView } from "../expansion_tile_list_view/ExpansionTileListView";
import { RootState } from "../../../core/store/store";

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
  paddLeftCount: number;
  marginLeft: number;
}) {
  const [opened, setState] = useState(false);
  const tileRef = useRef<HTMLDivElement>(null);

  const currentSelectedPath = useSelector(
    ({ openedEditorsSlice }: RootState) =>
      openedEditorsSlice.currentSelectedPath ?? ""
  );
  useEffect(() => {
    const doc = tileRef.current;
    if (_checkIsSamePaths() && !opened) {
      doc?.classList.add(style.selected);
    } else {
      doc?.classList.remove(style.selected);
    }
  }, [currentSelectedPath,opened]);

  return (
    <div ref={tileRef} className={style.tileWrapper}>
      <div className={style.clickObserver} onClick={onClick}>
        <div
          style={{ marginLeft: `${marginLeft}px` }}
          className={style.folderTile}
        >
          <ArrowIcon opened={opened} />
          <div className={style.space}></div>
          {child}
        </div>
      </div>
      {opened ? (
        <ExpansionTileListView
          parentPath={parentPath}
          nodes={Array.from(node?.node.entries() ?? [])}
          padLeftCount={paddLeftCount + 1}
        />
      ) : (
        <></>
      )}
    </div>
  );

  function _checkIsSamePaths() {
    const splittedParentPath = parentPath.split("/");
    splittedParentPath.pop();
    const splittedCurrentLocation = currentSelectedPath.split("/");
    const slicedPath = splittedCurrentLocation.slice(
      0,
      splittedParentPath.length
    );
    return slicedPath.join("") == splittedParentPath.join("");
  }

  function onClick() {
    setState(!opened);
  }
}

export default FolderTile;

import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../core/store/store";
import { INode } from "../../types/node";
import ArrowIcon from "../arrow_icon/Arrow";
import { ExpansionTileListView } from "../expansion_tile_list_view/ExpansionTileListView";
import LineAligners from "../json_template_component/sub_components/aligner/LineAligner";
import style from "./FolderTile.module.scss";

function FolderTile({
  child,
  parentPath,
  node,
  paddLeftCount,
}: {
  child: JSX.Element;
  parentPath: string;
  node: INode | undefined;
  paddLeftCount: number;
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
  }, [currentSelectedPath, opened]);

  return (
    <div ref={tileRef}>
      <div className={style.clickObserver} onClick={onClick}>
        <div className={style.folderTile}>
          <LineAligners
            width={7}
            length={paddLeftCount}
            border={paddLeftCount > 0}
          />
          <ArrowIcon opened={opened} />
          <div className={style.space} />
          {child}
        </div>
      </div>
      {opened ? (
        <ExpansionTileListView
          currentPath={parentPath}
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

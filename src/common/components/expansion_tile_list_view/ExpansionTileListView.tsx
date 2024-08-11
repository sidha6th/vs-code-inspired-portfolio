import { INode } from "../../types/node";
import { ExpandableTile } from "../expantion_tile/ExpantionTile";
import "./ExpansionTileListView.css";

type ExpansionTileListHolderArg = {
  currentPath: string;
  nodes: [string, INode | undefined][];
  padLeftCount: number;
};

export function ExpansionTileListView(arg: ExpansionTileListHolderArg) {
  return (
    <div className="expansion-tile-list">
      {arg.nodes?.map(([, node], index) => {
        return (
          <ExpandableTile
            key={index}
            node={node}
            parentPath={arg.currentPath + node?.name}
            padLeftCount={arg.padLeftCount}
          />
        );
      })}
    </div>
  );
}

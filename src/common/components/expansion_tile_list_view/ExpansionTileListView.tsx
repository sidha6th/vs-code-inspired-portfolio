import { ExpandableTile } from "../expantion_tile/ExpantionTile";
import "./ExpansionTileListView.css";

type ExpansionTileListHolderArg = {
  parentPath: string;
  nodes: [string, INode | undefined][];
  padLeftCount: number;
};

export function ExpansionTileListView(arg: ExpansionTileListHolderArg) {
  return (
    <div className="expansion-tile-list">
      {arg.nodes?.map(([key, node]) => {
        return (
          <ExpandableTile
            key={key}
            node={node}
            parentPath={arg.parentPath + node?.name}
            padLeftCount={arg.padLeftCount}
          />
        );
      })}
    </div>
  );
}

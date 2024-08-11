import { useRef } from "react";
import { explorerElement } from "../../../core/pages_data/explorer_elements";
import { ExpansionTileListView } from "../expansion_tile_list_view/ExpansionTileListView";

export function Explorer() {
  const rootRef = useRef(Array.from(explorerElement?.node?.entries() ?? []));
  return (
    <ExpansionTileListView
      currentPath="/"
      nodes={rootRef.current}
      padLeftCount={0}
    />
  );
}

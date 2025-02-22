import type { ContextItemWithId, IndexingProgressUpdate } from "../index.js";
import type  { AiderState } from "../../extensions/vscode/src/integrations/aider/types/aiderTypes";

export type ToWebviewFromIdeOrCoreProtocol = {
  configUpdate: [undefined, void];
  getDefaultModelTitle: [undefined, string];
  loadMostRecentChat: [undefined, void];
  indexProgress: [IndexingProgressUpdate, void];
  refreshSubmenuItems: [undefined, void];
  isContinueInputFocused: [undefined, boolean];
  pearAISignedIn: [undefined, void];
  switchModel: [string, void];
  addContextItem: [
    {
      historyIndex: number;
      item: ContextItemWithId;
    },
    void,
  ];
};

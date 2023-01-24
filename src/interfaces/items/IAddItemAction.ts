import { AddItemActionKind } from "../../constants/items/AddItemConstants";
import IAddItemState from "./IAddItemState";

/**
 * This type represents the Action object for AddItem Reducer function
 */
type IAddItemAction =
  | {
      type: AddItemActionKind.CONTENT | AddItemActionKind.TYPE;
      payload: string;
    }
  | { type: AddItemActionKind.OPEN; payload: boolean }
  | { type: AddItemActionKind.ALL; payload: IAddItemState };

export default IAddItemAction;

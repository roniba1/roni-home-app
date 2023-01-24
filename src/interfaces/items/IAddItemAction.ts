import { ADD_ITEM_ACTION_KIND } from "../../constants/items/AddItemConstants";
import IAddItemState from "./IAddItemState";

/**
 * This type represents the Action object for AddItem Reducer function
 */
type IAddItemAction =
  | {
      type: ADD_ITEM_ACTION_KIND.CONTENT | ADD_ITEM_ACTION_KIND.TYPE;
      payload: string;
    }
  | { type: ADD_ITEM_ACTION_KIND.OPEN; payload: boolean }
  | { type: ADD_ITEM_ACTION_KIND.ALL; payload: IAddItemState };

export default IAddItemAction;

import IAddItemState from "../../interfaces/items/IAddItemState";
import IAddItemAction from "../../interfaces/items/IAddItemAction";
import { ADD_ITEM_ACTION_KIND } from "../../constants/items/AddItemConstants";

/**
 * This function is a Reducer function for useReducer hook
 *
 * @param {IAddItemState} state - The current state
 * @param {IAddItemAction} action - The current action to perform
 * @returns {IAddItemState} - The new state
 */
const reducer = (state: IAddItemState, action: IAddItemAction) => {
  const { type, payload } = action;

  switch (type) {
    // Set newContent
    case ADD_ITEM_ACTION_KIND.CONTENT:
      return {
        ...state,
        newContent: payload,
      };

    //Set contentType
    case ADD_ITEM_ACTION_KIND.TYPE:
      return {
        ...state,
        contentType: payload,
      };

    // Set is modal open
    case ADD_ITEM_ACTION_KIND.OPEN:
      return {
        ...state,
        open: payload,
      };

    // Set all pieces of state
    case ADD_ITEM_ACTION_KIND.ALL:
      return payload;

    default:
      return state;
  }
};

export default reducer;

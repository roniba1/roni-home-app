import IAddItemState from "../../interfaces/items/IAddItemState";
import IAddItemAction from "../../interfaces/items/IAddItemAction";
import { AddItemActionKind } from "../../constants/items/AddItemConstants";

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
    case AddItemActionKind.CONTENT:
      return {
        ...state,
        newContent: payload,
      };

    //Set contentType
    case AddItemActionKind.TYPE:
      return {
        ...state,
        contentType: payload,
      };

    // Set is modal open
    case AddItemActionKind.OPEN:
      return {
        ...state,
        open: payload,
      };

    // Set all pieces of state
    case AddItemActionKind.ALL:
      return payload;

    default:
      return state;
  }
};

export default reducer;

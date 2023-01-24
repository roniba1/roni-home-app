/**
 * This interface represents the state object for AddItem useReducer hook
 */
interface IAddItemState {
  newContent: string;
  contentType: string;
  // Is the modal open
  open: boolean;
}

export default IAddItemState;

import ListsPageSettings from "./ListsPageSettings";
import ToDoConstants from "../../constants/lists/ToDoConstants";

/**
 * This class extends abstract class ListsPageSettings with constant data of To Do List page
 */
class ToDoListsPageSettings extends ListsPageSettings {
  constructor() {
    super(
      ToDoConstants.LIST_NAME,
      ToDoConstants.LISTS_TYPES,
      ToDoConstants.ADD_ITEM_TEXT,
      ToDoConstants.DONE_TYPE
    );
  }

  newItemType = () => {
    return ToDoConstants.NEW_ITEM_TYPE;
  };
}

export default ToDoListsPageSettings;

import ListsPageSettings from "./ListsPageSettings";
import GroceryConstants from "../../constants/lists/GroceryConstants";

/**
 * This class extends abstract class ListsPageSettings with constant data of Grocery List page
 */
class GroceryListsPageSettings extends ListsPageSettings {
  constructor() {
    super(
      GroceryConstants.LIST_NAME,
      GroceryConstants.LISTS_TYPES,
      GroceryConstants.ADD_ITEM_TEXT,
      GroceryConstants.DONE_TYPE
    );
  }

  newItemType = () => {
    return "";
  };
}

export default GroceryListsPageSettings;

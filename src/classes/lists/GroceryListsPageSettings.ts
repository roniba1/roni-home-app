import ListsPageSettings from "./ListsPageSettings";
import GroceryConstants from "../../constants/lists/GroceryConstants";

class GroceryListsPageSettings extends ListsPageSettings {
  constructor() {
    super(
      GroceryConstants.LIST_NAME,
      GroceryConstants.LISTS_TYPES,
      GroceryConstants.ADD_ITEM_TEXT
    );
  }

  newItemType = () => {
    return "done";
  };
}

export default GroceryListsPageSettings;

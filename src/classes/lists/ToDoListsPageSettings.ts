import ListsPageSettings from "./ListsPageSettings";
import ToDoConstants from "../../constants/lists/ToDoConstants";

class ToDoListsPageSettings extends ListsPageSettings {
    constructor() {
        super(ToDoConstants.LIST_NAME,
            ToDoConstants.LISTS_TYPES,
            ToDoConstants.ADD_ITEM_TEXT);
    }

    newItemType = () => {
        return ToDoConstants.NEW_ITEM_TYPE;
    }
}

export default ToDoListsPageSettings;
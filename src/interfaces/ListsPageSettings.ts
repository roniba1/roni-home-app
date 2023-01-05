import {groceryConstants, ListType, toDoConstants} from "./Items";

export abstract class ListsPageSettings {
    protected readonly mainListName: string;
    protected readonly listTypesNames: ListType[];
    protected readonly addItemLabel: string;
    abstract newItemType: () => string;

    protected constructor(mainListName: string, listTypesNames: ListType[], addItemLabel: string) {
        this.mainListName = mainListName;
        this.listTypesNames = listTypesNames;
        this.addItemLabel = addItemLabel;
    }

    get listName() {
        return this.mainListName;
    }

    get typesNames() {
        return this.listTypesNames;
    }

    get addItemText() {
        return this.addItemLabel
    }
}

export class ToDoListsPageSettings extends ListsPageSettings {
    constructor() {
        super(toDoConstants.LIST_NAME,
            toDoConstants.LISTS_TYPES,
            toDoConstants.ADD_ITEM_TEXT);
    }

    newItemType = () => {
        return toDoConstants.NEW_ITEM_TYPE;
    }
}

export class GroceryListsPageSettings extends ListsPageSettings {
    constructor() {
        super(groceryConstants.LIST_NAME,
            groceryConstants.LISTS_TYPES,
            groceryConstants.ADD_ITEM_TEXT);
    }

    newItemType = () => {
        return "done";
    }
}
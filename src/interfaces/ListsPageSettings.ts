import {groceryConstants, ListType, toDoConstants} from "./Items";

export abstract class ListsPageSettings {
    protected readonly mainListName: string;
    protected readonly listTypesNames: ListType[];
    abstract newItemType: () => string;

    protected constructor(mainListName: string, listTypesNames: ListType[]) {
        this.mainListName = mainListName;
        this.listTypesNames = listTypesNames;
    }

    get listName() {
        return this.mainListName;
    }

    get typesNames() {
        return this.listTypesNames;
    }
}

export class ToDoListsPageSettings extends ListsPageSettings {
    constructor() {
        super(toDoConstants.LIST_NAME, toDoConstants.LISTS_TYPES);
    }

    newItemType = () => {
        return toDoConstants.NEW_ITEM_TYPE;
    }
}

export class GroceryListsPageSettings extends ListsPageSettings {
    constructor() {
        super(groceryConstants.LIST_NAME, groceryConstants.LISTS_TYPES);
    }

    newItemType = () => {
        return "done";
    }
}
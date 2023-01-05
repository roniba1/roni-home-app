export interface SingleItem {
    content: string,
    type: string,
    id: number
}

export interface ListType {
    type: string,
    displayName: string
}

export class toDoConstants {
    static LIST_NAME = "todo";
    static LISTS_TYPES: ListType[] = [
        {
            type: "todo",
            displayName: "To Do List"
        },
        {
            type: "done",
            displayName: "Done List"
        }
    ];
    static NEW_ITEM_TYPE = "todo";
    static ADD_ITEM_TEXT = "Add New Task";
}

export class groceryConstants {
    static LIST_NAME = "grocery";
    static LISTS_TYPES: ListType[] = [
        {
            type: "dairy",
            displayName: "Dairy"
        },
        {
            type: "fruits",
            displayName: "Fruits"
        },
        {
            type: "vegetables",
            displayName: "Vegetables"
        },
        {
            type: "frozen",
            displayName: "Frozen Foods"
        },
        {
            type: "meat",
            displayName: "Meat"
        },
        {
            type: "cond",
            displayName: "Condiments & Spices"
        },
        {
            type: "beverages",
            displayName: "Beverages"
        },
        {
            type: "bakery",
            displayName: "Bread & Bakery"
        },
        {
            type: "deli",
            displayName: "Deli"
        },
        {
            type: "other",
            displayName: "Other Items"
        },
        {
            type: "done",
            displayName: "Done"
        }
    ];
    static ADD_ITEM_TEXT = "Add New Product";
}

export type Items = SingleItem[] | null;

export interface ItemsListProps {
    itemsList: Items,
    listType: ListType,
    onDoneHandler: (id: number) => void,
    doneButton: boolean,
    onDeleteHandler: (id: number) => void
}

export interface ItemProps {
    item: SingleItem,
    onDoneHandler: (id: number) => void,
    doneButton: boolean
    onDeleteHandler: (id: number) => void
}
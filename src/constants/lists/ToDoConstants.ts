import IListType from "../../interfaces/lists/IListType";

class ToDoConstants {
    static LIST_NAME = "todo";
    static LISTS_TYPES: IListType[] = [
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

export default ToDoConstants;
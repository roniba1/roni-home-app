import React from "react";
import ToDoListsPageSettings from "../classes/lists/ToDoListsPageSettings";
import ListsDisplay from "../components/lists/ListsDisplay";

const ToDoPage: React.FC = () => {
    const toDoListPageSettings = new ToDoListsPageSettings();

    return <ListsDisplay listsSettings={toDoListPageSettings} />
}

export default ToDoPage;
import React from "react";
import {ToDoListsPageSettings} from "../interfaces/ListsPageSettings";
import ListsDisplay from "../components/ListsDisplay";

const ToDoPage: React.FC = () => {
    const toDoListPageSettings = new ToDoListsPageSettings();

    return <ListsDisplay listsSettings={toDoListPageSettings} />
}

export default ToDoPage;
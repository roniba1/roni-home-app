import React from "react";
import ToDoListsPageSettings from "../classes/lists/ToDoListsPageSettings";
import ListsDisplay from "../components/lists/ListsDisplay";

/**
 * This component displays the To Do List page using ListsDisplay reusable component
 */
const ToDoPage: React.FC = () => {
  const toDoListPageSettings = new ToDoListsPageSettings();

  return <ListsDisplay listsSettings={toDoListPageSettings} />;
};

export default ToDoPage;

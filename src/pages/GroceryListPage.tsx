import React from "react";
import GroceryListsPageSettings from "../classes/lists/GroceryListsPageSettings";
import ListsDisplay from "../components/lists/ListsDisplay";

/**
 * This component displays the To Do List page using ListsDisplay reusable component
 */
const GroceryListPage: React.FC = () => {
  const groceryListPageSettings = new GroceryListsPageSettings();

  return <ListsDisplay listsSettings={groceryListPageSettings} />;
};

export default GroceryListPage;

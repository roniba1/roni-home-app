import React from "react";
import {GroceryListsPageSettings} from "../interfaces/ListsPageSettings";
import ListsDisplay from "../components/ListsDisplay";

const GroceryListPage: React.FC = () => {
    const groceryListPageSettings = new GroceryListsPageSettings();

    return <ListsDisplay listsSettings={groceryListPageSettings} />
}

export default GroceryListPage;
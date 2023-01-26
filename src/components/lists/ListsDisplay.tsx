import React, { useCallback, useEffect, useState } from "react";
import IItems from "../../interfaces/items/IItems";
import ISingleItem from "../../interfaces/items/ISingleItem";
import IListsDisplayProps from "../../interfaces/lists/IListsDisplayProps";
import FetcherService from "../../services/FetcherService";
import SubListsGrid from "./SubListsGrid";
import ListsHeader from "./ListsHeader";
import { CLASS_NAMES } from "../../constants/lists/ListsConstants";
import "./Lists.css";

/**
 * This reusable component displays Lists for the received settings from props.
 * It has two main parts: one for adding a new item to the lists (A button that opens modal
 * with a form) and one that displays all the data in sub-lists
 *
 * @param {IListsDisplayProps} props - The settings for the list
 */
const ListsDisplay: React.FC<IListsDisplayProps> = (props) => {
  // The list settings
  const listsSettings = props.listsSettings;

  // The Array that contains all the items
  const [allItemsList, setAllItemsList] = useState<IItems | null>(null);

  /**
   * The fetchData is using useCallback hook and using the FetcherService to fetch all the
   * list data from DB
   */
  const fetchData = useCallback(async () => {
    const response = await FetcherService.fetchData(listsSettings.listName);
    setAllItemsList(response);
  }, [listsSettings.listName]);

  /**
   * The fetching of the data should be called on the first render of the component & if fetchData
   * function has changed
   */
  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    fetchData();
  }, [fetchData]);

  /**
   * This function is the deleteHandler for each item on the list.
   * It receives the id of the clicked item, delete it from DB and update the allItemsList
   * piece of state accordingly
   *
   * @param {number} id - The id of the item to delete
   * @returns {Promise<void>}
   */
  const onDeleteHandler = async (id: number) => {
    // Delete from DB
    await FetcherService.deleteItem(listsSettings.listName, id);

    // Update allItemsList piece of state
    if (allItemsList) {
      const updatedList = allItemsList.filter((item) => {
        return item.id !== id;
      });
      setAllItemsList(updatedList);
    }
  };

  /**
   * This function is a callback for AddItem component and called when the user is adding a new item
   * to the list.
   * It responsible for adding the new item to the appropriate list on DB and update the allItemsList
   * piece of state with it
   *
   * @param {string} itemText - The new item text
   * @param {string} type - The new item type
   * @returns {Promise<void>}
   */
  const onItemAdded = async (itemText: string, type: string) => {
    const itemObj = {
      content: itemText,
      type: type,
    };

    // Add the new item to the DB list
    const response = await FetcherService.addItem(
      listsSettings.listName,
      itemObj
    );

    // Update allItemsList piece of state with new data
    const updatedList = [...allItemsList!, response];
    setAllItemsList(updatedList);
  };

  /**
   * This function is returning a function to check if a given item id is equal to "id"
   *
   * @param {number} id - The given id
   * @returns {(item: ISingleItem) => boolean} - The checking function
   */
  const isItemId = (id: number) => {
    return (item: ISingleItem) => {
      return item.id === id;
    };
  };

  /**
   * This function updates allItemsList with new item data for item with "id"
   *
   * @param {number} id - The id of the item to update
   * @param {ISingleItem} itemToUpdate - The new item data
   * @returns {ISingleItem[]} - The updated list
   */
  const updateSingleItemOnList = (id: number, itemToUpdate: ISingleItem) => {
    return allItemsList!.map((item) => {
      // If the relevant item - update
      if (item.id === id) {
        return { ...item, ...itemToUpdate };
      }

      // Else - return
      return item;
    });
  };

  /**
   * This function is the doneHandler for each item, It's a callback that called when the user
   * presses on the checkbox of the item.
   * It responsible for edit the item's type to the new type on DB and update the allItemsList
   * piece of state with new data.
   *
   * @param {number} id - The id of the item should be changed
   * @returns {Promise<void>}
   */
  const onDoneHandler = async (id: number) => {
    // Find the relevant item with id on the list
    const doneItem = allItemsList!.find(isItemId(id));

    // Create new ISingleItem object with new data
    const newItem = {
      ...doneItem,
      type: listsSettings.doneType,
    } as ISingleItem;

    // Edit DB with new data
    const response = await FetcherService.editItem(
      listsSettings.listName,
      id,
      newItem
    );

    // Build updated list with new data object from DB
    const updatedList = updateSingleItemOnList(id, response);

    // Update allItemsList piece of state with updatedList
    setAllItemsList(updatedList);
  };

  return (
    <div className={CLASS_NAMES.MAIN}>
      <ListsHeader onItemAdded={onItemAdded} listsSettings={listsSettings} />
      <SubListsGrid
        listsSettings={listsSettings}
        itemsList={allItemsList}
        onDeleteHandler={onDeleteHandler}
        onDoneHandler={onDoneHandler}
      />
    </div>
  );
};

export default ListsDisplay;

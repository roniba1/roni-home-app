import React from "react";
import IListType from "../../interfaces/lists/IListType";
import ItemsList from "./ItemsList";
import { List } from "antd";
import ISubListsGridProps from "../../interfaces/lists/ISubListsGridProps";
import {
  SUB_LISTS_GRID,
  LOADER_TEXT,
} from "../../constants/lists/ListsConstants";
import Loader from "../Loader";

/**
 * This component render the ItemsList component for each sub list and display all
 * of those sub lists in a grid
 *
 * @param {ISubListsGridProps} props - The props object
 */
const SubListsGrid: React.FC<ISubListsGridProps> = (props) => {
  let renderedList = null;

  if (props.itemsList === null) {
    return <Loader tip={LOADER_TEXT} />;
  }

  if (props.itemsList) {
    // Map over all types (each type is a sub list) and create an ItemList component for it
    renderedList = props.listsSettings.typesNames.map((listType: IListType) => {
      return (
        <ItemsList
          itemsList={props.itemsList}
          listType={listType}
          onDeleteHandler={props.onDeleteHandler}
          onDoneHandler={props.onDoneHandler}
          doneType={props.listsSettings.doneType}
        />
      );
    });
  }

  let listGrid = null;

  if (renderedList) {
    // Build a List grid from all ItemsList to display
    listGrid = (
      <List
        {...SUB_LISTS_GRID}
        dataSource={renderedList}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    );
  }

  return listGrid;
};

export default SubListsGrid;

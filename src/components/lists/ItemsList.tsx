import React from "react";
import IItemsListProps from "../../interfaces/lists/IItemsListProps";
import Item from "../items/Item";
import { List, Card } from "antd";

/**
 * This component builds a JSX.Element of one sub-list with items
 * using Antd Card & List components
 *
 * @param {IItemsListProps} props - The props object contain the list of items, callbacks for items and more
 */
const ItemsList: React.FC<IItemsListProps> = (props) => {
  // Declare variable for rendered items list
  let renderedList = undefined;
  // Boolean flag to check is list is empty or not
  let hasItems = false;

  /**
   * This piece of code is building the renderedList of items by mapping over the list
   * of items and build Item component for each item with matching type
   */
  if (props.itemsList) {
    renderedList = props.itemsList.map((item) => {
      // Check if current item belong to this sub-list
      if (props.listType.type === item.type) {
        // Change flag - list contains at least one item
        hasItems = true;

        // The Item JSX.Element
        return (
          <Item
            item={item}
            key={item.id}
            onDeleteHandler={props.onDeleteHandler}
            onDoneHandler={props.onDoneHandler}
            doneType={props.doneType}
          />
        );
      } else return null;
    });
  }

  /**
   * This piece of code is filtering the rendered items and removing all null items from list
   */
  if (renderedList) {
    renderedList = renderedList.filter((item) => {
      return item !== null;
    });
  }

  // Declare variable for holding component JSX.Element
  let renderedComponent = null;

  // Change renderedComponent only if items list is not empty
  if (hasItems) {
    renderedComponent = (
      <Card title={props.listType.displayName}>
        <List
          size="small"
          dataSource={renderedList}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Card>
    );
  }

  return renderedComponent;
};

export default ItemsList;

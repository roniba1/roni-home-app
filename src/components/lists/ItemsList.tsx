import React from "react";
import IItemsListProps from "../../interfaces/lists/IItemsListProps";
import Item from "../items/Item";
import { List, Card } from "antd";

const ItemsList: React.FC<IItemsListProps> = (props) => {
  let renderedList = undefined;
  let hasItems = false;
  if (props.itemsList) {
    renderedList = props.itemsList.map((item) => {
      if (props.listType.type === item.type) {
        hasItems = true;
        return (
          <Item
            item={item}
            key={item.id}
            onDeleteHandler={props.onDeleteHandler}
            onDoneHandler={props.onDoneHandler}
            doneButton={props.doneButton}
          />
        );
      } else return null;
    });
  }

  if (renderedList) {
    renderedList = renderedList.filter((item) => {
      return item !== null;
    });
  }

  let renderedComponent = null;
  if (hasItems) {
    renderedComponent = (
      <Card title={<div>{props.listType.displayName}</div>}>
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

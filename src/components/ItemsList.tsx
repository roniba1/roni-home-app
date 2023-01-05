import React from "react";
import { ItemsListProps } from "../interfaces/Items";
import Item from "./Item"
import { Divider } from "antd";

const style = {
    padding: '8px 0'
};

const ItemsList: React.FC<ItemsListProps> = props => {

    let renderedList = null;
    let hasItems = false;
    if (props.itemsList) {
        renderedList = props.itemsList.map((item) => {
            if (props.listType.type === item.type) {
                hasItems = true;
                return <Item
                    item={item}
                    key={item.id}
                    onDeleteHandler={props.onDeleteHandler}
                    onDoneHandler={props.onDoneHandler}
                    doneButton={props.doneButton} />;
            }
            else return null;
        });
    }

    let renderedComponent = null;
    if (hasItems) {
        renderedComponent = (
            <>
                <Divider type="horizontal" orientation="left">{props.listType.displayName}</Divider>
                <div style={style}>
                    {renderedList}
                </div>
            </>
        );
    }

    return <div>
        {renderedComponent}
    </div>;
}

export default ItemsList;
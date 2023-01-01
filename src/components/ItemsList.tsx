import React from "react";
import { ItemsListProps } from "../interfaces/Items";
import Item from "./Item"

const ItemsList: React.FC<ItemsListProps> = props => {

    let renderedList = null;
    if (props.itemsList) {
        renderedList = props.itemsList.map((item) => {
            if (props.listType === item.type) {
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

    return <div>
        {renderedList}
    </div>;
}

export default ItemsList;
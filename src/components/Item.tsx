import React from "react";
import { ItemProps } from "../interfaces/Items";
import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import {Button} from "antd";

const Item: React.FC<ItemProps> = props => {
    const getButtonItem = () => {
        if (props.doneButton) {
            return <Button
                type="primary"
                icon={<CheckOutlined />}
                onClick={() => props.onDoneHandler(props.item.id)}
            />
        } else return null;
    }
    const buttonItem = getButtonItem();

    return <div>
        {buttonItem}
        {props.item.content}
        <Button
            type="primary"
            icon={<DeleteOutlined />}
            onClick={() => props.onDeleteHandler(props.item.id)}
        />
        {/*<button onClick={() => console.log("item with key " + props.item.key + " pressed done")}>Done</button>*/}
    </div>;
}

export default Item;
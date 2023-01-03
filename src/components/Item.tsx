import React from "react";
import { ItemProps } from "../interfaces/Items";
import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";

const Item: React.FC<ItemProps> = props => {
    const getButtonItem = () => {
        if (props.doneButton) {
            return <Button
                icon={<CheckOutlined style={{fontSize: "15px"}}/>}
                onClick={() => props.onDoneHandler(props.item.id)}
            />
        } else return null;
    }
    const buttonItem = getButtonItem();

    return <div>
        <Space size={'middle'}>
            {buttonItem}
            {props.item.content}
            <Button
                icon={<DeleteOutlined style={{fontSize: "15px"}}/>}
                onClick={() => props.onDeleteHandler(props.item.id)}
            />
        </Space>
    </div>;
}

export default Item;
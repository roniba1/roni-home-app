import React from "react";
import { ItemProps } from "../interfaces/Items";
import { DeleteOutlined, BorderOutlined, CheckSquareOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";

const Item: React.FC<ItemProps> = props => {
    const getButtonItem = () => {
        if (props.item.type !== "done") {
            return <Button
                type="text"
                icon={<BorderOutlined style={{fontSize: "15px"}}/>}
                onClick={() => props.onDoneHandler(props.item.id)}
            />
        } else return <CheckSquareOutlined style={{fontSize: "15px"}}/>;
    }
    const buttonItem = getButtonItem();

    return <div>
        <Space size={'small'} align={'center'}>
            {buttonItem}
            {props.item.content}
            <Button
                type="text"
                icon={<DeleteOutlined style={{fontSize: "15px"}}/>}
                onClick={() => props.onDeleteHandler(props.item.id)}
            />
        </Space>
    </div>;
}

export default Item;
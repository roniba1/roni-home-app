import React from "react";
import { ItemProps } from "../interfaces/Items";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Space, Checkbox } from "antd";

const Item: React.FC<ItemProps> = props => {
    const getCheckboxItem = () => {
        const checked = props.item.type === "done";
        return (<Checkbox checked={checked} onChange={() => props.onDoneHandler(props.item.id)}>
            {props.item.content}
        </Checkbox>);
    }
    const checkboxItem = getCheckboxItem();

    return <div>
        <Space size={'small'} align={'center'}>
            {checkboxItem}
            <Button
                type="text"
                icon={<DeleteOutlined style={{fontSize: "15px"}}/>}
                onClick={() => props.onDeleteHandler(props.item.id)}
            />
        </Space>
    </div>;
}

export default Item;

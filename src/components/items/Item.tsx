import React from "react";
import IItemProps from "../../interfaces/items/IItemProps";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Space, Checkbox } from "antd";

const Item: React.FC<IItemProps> = props => {
    const getCheckboxItem = () => {
        const checked = props.item.type === "done";
        return (<Checkbox checked={checked} disabled={checked} onChange={() => props.onDoneHandler(props.item.id)}>
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
                style={{float:"right"}}
            />
        </Space>
    </div>;
}

export default Item;

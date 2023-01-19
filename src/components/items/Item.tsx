import React from "react";
import IItemProps from "../../interfaces/items/IItemProps";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Space, Checkbox } from "antd";

/**
 * this component build single item for lists, including its actions.
 *
 * @param {IITemProps} props - Item object & done and delete handlers
 * @returns {JSX.Element} - Component that display the single Item, and it's actions -
 * Checkbox and delete button
 */
const Item: React.FC<IItemProps> = (props) => {
  /**
   * This function build the relevant Checkbox component for current Item
   *
   * @returns {JSX.Element} - The relevant Checkbox
   */
  const getCheckboxItem = () => {
    const checked = props.item.type === "done";
    return (
      <Checkbox
        checked={checked}
        disabled={checked}
        onChange={() => props.onDoneHandler(props.item.id)}
      >
        {props.item.content}
      </Checkbox>
    );
  };

  const checkboxItem = getCheckboxItem();

  return (
    <div>
      <Space size={"small"} align={"center"}>
        {checkboxItem}
        <Button
          type="text"
          icon={<DeleteOutlined style={{ fontSize: "15px" }} />}
          onClick={() => props.onDeleteHandler(props.item.id)}
          style={{ float: "right" }}
        />
      </Space>
    </div>
  );
};

export default Item;

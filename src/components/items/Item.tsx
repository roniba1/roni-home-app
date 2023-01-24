import React from "react";
import IItemProps from "../../interfaces/items/IItemProps";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Checkbox } from "antd";

/**
 * this component build single item for lists, including its actions.
 *
 * @param {IITemProps} props - Item object & done and delete handlers
 * @returns {JSX.Element} - Component that display the single Item, and it's actions -
 * Checkbox and delete button
 */
const Item: React.FC<IItemProps> = (props) => {
  /**
   * This function build the relevant Checkbox component for current Item with text next to it
   *
   * @returns {JSX.Element} - The relevant Checkbox
   */
  const getCheckboxItem = () => {
    const checked = props.item.type === props.doneType;
    return (
      <Checkbox
        checked={checked}
        disabled={checked}
        onChange={() => props.onDoneHandler(props.item.id)}
        style={{ flexGrow: 1, alignSelf: "center" }}
      >
        {props.item.content}
      </Checkbox>
    );
  };

  const checkboxItem = getCheckboxItem();

  /**
   * This piece of code build the JSX.Element to return.
   * It contains the checkbox and text element and button element with delete icon
   */
  return (
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      {checkboxItem}
      <Button
        type="text"
        icon={<DeleteOutlined style={{ fontSize: "15px" }} />}
        onClick={() => props.onDeleteHandler(props.item.id)}
        style={{ marginLeft: "auto", alignSelf: "center" }}
      />
    </div>
  );
};

export default Item;

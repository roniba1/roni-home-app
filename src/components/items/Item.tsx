import React from "react";
import IItemProps from "../../interfaces/items/IItemProps";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Checkbox } from "antd";
import { CLASS_NAMES, BUTTON_TYPE } from "../../constants/items/ItemConstants";

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
        className={CLASS_NAMES.CHECKBOX}
        checked={checked}
        disabled={checked}
        onChange={() => props.onDoneHandler(props.item.id)}
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
    <div className={CLASS_NAMES.MAIN}>
      {checkboxItem}
      <Button
        className={CLASS_NAMES.BUTTON}
        type={BUTTON_TYPE}
        icon={<DeleteOutlined className={CLASS_NAMES.ICON} />}
        onClick={() => props.onDeleteHandler(props.item.id)}
      />
    </div>
  );
};

export default Item;

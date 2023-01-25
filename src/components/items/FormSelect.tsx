import React from "react";
import { Form, Select } from "antd";
import { SELECT_FORM_ITEM } from "../../constants/items/AddItemConstants";
import IFormSelectProps from "../../interfaces/items/IFormSelectProps";

/**
 * This component builds the selector element for the form and the options to select from
 *
 * @param {IFormSelectProps} props - The values & handlers for the component
 */
const FormSelect: React.FC<IFormSelectProps> = (props) => {
  /**
   * This piece of code is responsible for filtering the types list from "doneType"
   * because the user can not add a new item to this list
   */
  const typesListToAdd = props.listsSettings.typesNames.filter((listType) => {
    return listType.type !== props.listsSettings.doneType;
  });

  /**
   * This piece of code is building the options list for select element
   */
  const options = typesListToAdd.map((listType) => {
    return {
      value: listType.type,
      label: listType.displayName,
    };
  });

  /**
   * The select component is not null only if there is more than two
   * options to select from
   */
  return options.length > 2 ? (
    <Form.Item
      name={SELECT_FORM_ITEM.NAME}
      label={SELECT_FORM_ITEM.LABEL}
      rules={[{ required: true }]}
    >
      <Select
        placeholder={SELECT_FORM_ITEM.PLACE_HOLDER}
        value={props.value}
        onChange={props.onChange}
        options={options}
      />
    </Form.Item>
  ) : null;
};

export default FormSelect;

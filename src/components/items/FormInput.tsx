import React from "react";
import { INPUT_FORM_ITEM } from "../../constants/items/AddItemConstants";
import IFormInputProps from "../../interfaces/items/IFormInputProps";
import { Form, Input } from "antd";

/**
 * This component is using Antd Form & Input components to create an input for
 * the form
 *
 * @param {IFormInputProps} props - The current value of the input and the onChange handler
 */
const FormInput: React.FC<IFormInputProps> = (props) => {
  return (
    <Form.Item
      name={INPUT_FORM_ITEM.NAME}
      label={INPUT_FORM_ITEM.LABEL}
      rules={[{ required: true }]}
    >
      <Input value={props.value} onChange={props.onChange} />
    </Form.Item>
  );
};

export default FormInput;

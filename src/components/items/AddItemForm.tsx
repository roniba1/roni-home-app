import React from "react";
import IAddItemFormProps from "../../interfaces/items/IAddItemFormProps";
import { Button, Form, Space } from "antd";
import {
  CANCEL_BUTTON_HTML_TYPE,
  CANCEL_BUTTON_TEXT,
  FORM_ITEM_LAYOUT,
  FORM_LAYOUT,
  SUBMIT_BUTTON_HTML_TYPE,
  SUBMIT_BUTTON_TEXT,
  SUBMIT_BUTTON_TYPE,
} from "../../constants/items/AddItemConstants";

/**
 * This component is responsible for the AddItem form. It has an input & select elements
 * And Two buttons for submit & cancel
 *
 * @param {IAddItemFormProps} props - The values & handlers for the form
 */
const AddItemForm: React.FC<IAddItemFormProps> = (props) => {
  return (
    <Form {...FORM_LAYOUT} form={props.form} onFinish={props.onFinish}>
      {props.input}
      {props.select}
      <Form.Item {...FORM_ITEM_LAYOUT}>
        <Space>
          <Button type={SUBMIT_BUTTON_TYPE} htmlType={SUBMIT_BUTTON_HTML_TYPE}>
            {SUBMIT_BUTTON_TEXT}
          </Button>
          <Button htmlType={CANCEL_BUTTON_HTML_TYPE} onClick={props.onCancel}>
            {CANCEL_BUTTON_TEXT}
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default AddItemForm;

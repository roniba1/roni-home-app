import React from "react";
import AddItemForm from "./AddItemForm";
import { Form, Modal } from "antd";
import IAddItemModalProps from "../../interfaces/items/IAddItemModalProps";

/**
 * This component is the AddItem Modal. It displays a form for the user to interact with
 * and responsible for resetting the form on close
 *
 * @param {IAddItemModalProps} props - The data & handlers for the Modal & Form
 */
const AddItemModal: React.FC<IAddItemModalProps> = (props) => {
  const { input, select, addItem, resetFormState, open, title } = props;

  // Antd form
  const [form] = Form.useForm();

  /**
   * This function is responsible to clear data from the form and reset the state of the AddItem component
   */
  const resetForm = () => {
    resetFormState();
    form.resetFields();
  };

  /**
   * This function is responsible for calling addItem callback and reset the form when done
   */
  const onFinish = () => {
    addItem().then(() => resetForm());
  };

  // The form component
  const modalForm = (
    <AddItemForm
      input={input}
      select={select}
      onFinish={onFinish}
      onCancel={resetForm}
      form={form}
    />
  );

  return (
    <Modal title={title} open={open} onCancel={resetForm} footer={[]}>
      {modalForm}
    </Modal>
  );
};

export default AddItemModal;

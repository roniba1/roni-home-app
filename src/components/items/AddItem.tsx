import React, { useReducer } from "react";
import { Button, Modal, Select, Form, Input, Space } from "antd";
import reducer from "./AddItemReducer";
import IAddItemProps from "../../interfaces/items/IAddItemProps";
import {
  AddItemActionKind,
  layout,
  tailLayout,
} from "../../constants/items/AddItemConstants";

/**
 * This component build the AddItem component - component that allowing the
 * user to add new items to the lists.
 *
 * @param {IAddItemProps} props - Contain listSettings & item added callback
 * @returns {JSX.Element} - The AddItem component that contains a button that opens Modal
 * with a form
 */
const AddItem: React.FC<IAddItemProps> = (props) => {
  // Using useReducer hook for managing three pieces of state
  const [state, dispatch] = useReducer(reducer, {
    newContent: "",
    contentType: "",
    open: false,
  });

  // Antd form
  const [form] = Form.useForm();

  const showModal = () => {
    dispatch({
      type: AddItemActionKind.OPEN,
      payload: true,
    });
  };

  const resetForm = () => {
    form.resetFields();
    dispatch({
      type: AddItemActionKind.ALL,
      payload: {
        newContent: "",
        contentType: "",
        open: false,
      },
    });
  };

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    dispatch({
      type: AddItemActionKind.CONTENT,
      payload: event.currentTarget.value,
    });
  };

  const handleSelectChange = (value: string) => {
    dispatch({
      type: AddItemActionKind.TYPE,
      payload: value,
    });
  };

  const addItemSubmitHandler = async () => {
    props
      .onItemAdded(
        state.newContent,
        state.contentType
          ? state.contentType
          : props.listsSettings.newItemType()
      )
      .then(() => resetForm());
  };

  const typesListToAdd = props.listsSettings.typesNames.filter((listType) => {
    return listType.type !== "done";
  });

  const options = typesListToAdd.map((listType) => {
    return {
      value: listType.type,
      label: listType.displayName,
    };
  });

  const inputComponent = (
    <Form.Item name="item" label="Item" rules={[{ required: true }]}>
      <Input value={state.newContent} onChange={handleInputChange} />
    </Form.Item>
  );

  const selectComponent =
    options.length > 2 ? (
      <Form.Item name="type" label="Category" rules={[{ required: true }]}>
        <Select
          placeholder="Choose category"
          value={state.contentType}
          onChange={handleSelectChange}
          options={options}
        />
      </Form.Item>
    ) : null;

  const modalForm = (
    <Form {...layout} form={form} onFinish={addItemSubmitHandler}>
      {inputComponent}
      {selectComponent}
      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={resetForm}>
            Cancel
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );

  return (
    <>
      <Button type="default" onClick={showModal}>
        {props.listsSettings.addItemText}
      </Button>
      <Modal
        title={props.listsSettings.addItemText}
        open={state.open}
        onCancel={resetForm}
        footer={[]}
      >
        {modalForm}
      </Modal>
    </>
  );
};

export default AddItem;

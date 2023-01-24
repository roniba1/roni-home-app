import React, { useReducer } from "react";
import { Button, Modal, Select, Form, Input, Space } from "antd";
import reducer from "./AddItemReducer";
import IAddItemProps from "../../interfaces/items/IAddItemProps";
import {
  ADD_ITEM_ACTION_KIND,
  FORM_LAYOUT,
  FORM_ITEM_LAYOUT,
  INITIAL_STRING_VALUE,
  MAIN_BUTTON_TYPE,
  SELECT_FORM_ITEM,
  INPUT_FORM_ITEM,
  SUBMIT_BUTTON_TYPE,
  SUBMIT_BUTTON_HTML_TYPE,
  CANCEL_BUTTON_HTML_TYPE,
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
    newContent: INITIAL_STRING_VALUE,
    contentType: INITIAL_STRING_VALUE,
    open: false
  });

  // Antd form
  const [form] = Form.useForm();

  /**
   * This function is the handler for clicking the component main button,
   * Its changes the current state and make the modal open
   */
  const showModal = () => {
    dispatch({
      type: ADD_ITEM_ACTION_KIND.OPEN,
      payload: true
    });
  };

  /**
   * This function is the handler for clearing form data.
   * Reset form fields and reset the state to the initial state
   */
  const resetForm = () => {
    form.resetFields();
    dispatch({
      type: ADD_ITEM_ACTION_KIND.ALL,
      payload: {
        newContent: INITIAL_STRING_VALUE,
        contentType: INITIAL_STRING_VALUE,
        open: false
      },
    });
  };

  /**
   * This function is the handler for input change, In order to keep in state the most
   * updated input from the user
   *
   * @param {React.FormEvent<HTMLInputElement>} event - Input event with value
   */
  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    dispatch({
      type: ADD_ITEM_ACTION_KIND.CONTENT,
      payload: event.currentTarget.value,
    });
  };

  /**
   * This function is the handler for input select change, In order to keep in state the most
   * updated input from the user
   *
   * @param {string} value - The new value selected
   */
  const handleSelectChange = (value: string) => {
    dispatch({
      type: ADD_ITEM_ACTION_KIND.TYPE,
      payload: value,
    });
  };

  /**
   * This function is submit handler for the form - responsible for using callback
   * to add new item to the list and resetting the form
   */
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
      label: listType.displayName
    };
  });

  /**
   * The input component with state value
   */
  const inputComponent = (
    <Form.Item
      name={INPUT_FORM_ITEM.NAME}
      label={INPUT_FORM_ITEM.LABEL}
      rules={[{ required: true }]}
    >
      <Input value={state.newContent} onChange={handleInputChange} />
    </Form.Item>
  );

  /**
   * The select component is not null only if there is more than two
   * options to select from
   */
  const selectComponent =
    options.length > 2 ? (
      <Form.Item
        name={SELECT_FORM_ITEM.NAME}
        label={SELECT_FORM_ITEM.LABEL}
        rules={[{ required: true }]}
      >
        <Select
          placeholder={SELECT_FORM_ITEM.PLACE_HOLDER}
          value={state.contentType}
          onChange={handleSelectChange}
          options={options}
        />
      </Form.Item>
    ) : null;

  /**
   * The modal form is using Antd Form component
   */
  const modalForm = (
    <Form {...FORM_LAYOUT} form={form} onFinish={addItemSubmitHandler}>
      {inputComponent}
      {selectComponent}
      <Form.Item {...FORM_ITEM_LAYOUT}>
        <Space>
          <Button type={SUBMIT_BUTTON_TYPE} htmlType={SUBMIT_BUTTON_HTML_TYPE}>
            Submit
          </Button>
          <Button htmlType={CANCEL_BUTTON_HTML_TYPE} onClick={resetForm}>
            Cancel
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );

  return (
    <div>
      <Button type={MAIN_BUTTON_TYPE} onClick={showModal}>
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
    </div>
  );
};

export default AddItem;

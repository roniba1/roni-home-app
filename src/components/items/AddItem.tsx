import React, { useReducer } from "react";
import { Button } from "antd";
import reducer from "./AddItemReducer";
import IAddItemProps from "../../interfaces/items/IAddItemProps";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import AddItemModal from "./AddItemModal";
import {
  ADD_ITEM_ACTION_KIND,
  INITIAL_STRING_VALUE,
  MAIN_BUTTON_TYPE,
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
    open: false,
  });

  /**
   * This function is the handler for clicking the component main button,
   * Its changes the current state and make the modal open
   */
  const showModal = () => {
    dispatch({
      type: ADD_ITEM_ACTION_KIND.OPEN,
      payload: true,
    });
  };

  /**
   * This function is the handler for clearing form data.
   * Reset form fields and reset the state to the initial state
   */
  const resetCurrentState = () => {
    dispatch({
      type: ADD_ITEM_ACTION_KIND.ALL,
      payload: {
        newContent: INITIAL_STRING_VALUE,
        contentType: INITIAL_STRING_VALUE,
        open: false,
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
    return props.onItemAdded(
      state.newContent,
      state.contentType ? state.contentType : props.listsSettings.newItemType()
    );
  };

  // The form input component
  const inputComponent = (
    <FormInput value={state.newContent} onChange={handleInputChange} />
  );

  // The form selector component
  const selectComponent = (
    <FormSelect
      value={state.contentType}
      onChange={handleSelectChange}
      listsSettings={props.listsSettings}
    />
  );

  // the modal component with form components
  const modalComponent = (
    <AddItemModal
      input={inputComponent}
      select={selectComponent}
      addItem={addItemSubmitHandler}
      resetFormState={resetCurrentState}
      open={state.open}
      title={props.listsSettings.addItemText}
    />
  );

  return (
    <div>
      <Button type={MAIN_BUTTON_TYPE} onClick={showModal}>
        {props.listsSettings.addItemText}
      </Button>
      {modalComponent}
    </div>
  );
};

export default AddItem;

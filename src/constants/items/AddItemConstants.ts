// Action types for AddItem useReducer hook
export enum ADD_ITEM_ACTION_KIND {
  CONTENT = "CONTENT",
  TYPE = "TYPE",
  OPEN = "OPEN",
  ALL = "ALL",
}

export const FORM_LAYOUT = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export const FORM_ITEM_LAYOUT = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export const INITIAL_STRING_VALUE = "";

export const MAIN_BUTTON_TYPE = "default";

export const SELECT_FORM_ITEM = {
  NAME: "type",
  LABEL: "Category",
  PLACE_HOLDER: "Choose category",
};

export const INPUT_FORM_ITEM = {
  NAME: "item",
  LABEL: "Item",
};

export const SUBMIT_BUTTON_TYPE = "primary";
export const SUBMIT_BUTTON_HTML_TYPE = "submit";
export const SUBMIT_BUTTON_TEXT = "Submit";

export const CANCEL_BUTTON_HTML_TYPE = "button";
export const CANCEL_BUTTON_TEXT = "Cancel";

export const ADD_ITEM_CLASS_NAME = "add-item";

import { FormInstance } from "antd";

/**
 * This interface represents the prop object for AddItemForm component
 */
interface IAddItemFormProps {
  input: JSX.Element;
  select: JSX.Element;
  onFinish: () => void;
  onCancel: () => void;
  form: FormInstance;
}

export default IAddItemFormProps;

/**
 * This interface represents the prop object for AddItemModal component
 */
interface IAddItemModalProps {
  input: JSX.Element;
  select: JSX.Element;
  addItem: () => Promise<void>;
  resetFormState: () => void;
  open: boolean;
  title: string;
}

export default IAddItemModalProps;

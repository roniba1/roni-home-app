import ISingleItem from "./ISingleItem";

/**
 * This interface represents the prop object for Items component
 */
interface IItemProps {
  item: ISingleItem;
  onDoneHandler: (id: number) => void;
  onDeleteHandler: (id: number) => void;
  doneType: string;
}

export default IItemProps;

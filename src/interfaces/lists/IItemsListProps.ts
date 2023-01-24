import IItems from "../items/IItems";
import IListType from "./IListType";

/**
 * This interface represents the prop object for ItemsList component
 */
interface IItemsListProps {
  itemsList: IItems;
  listType: IListType;
  onDoneHandler: (id: number) => void;
  onDeleteHandler: (id: number) => void;
  doneType: string;
}

export default IItemsListProps;

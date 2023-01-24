import ListsPageSettings from "../../classes/lists/ListsPageSettings";
import IItems from "../items/IItems";

/**
 * This interface represents the prop object for SubListsGrid component
 */
interface ISubListsGridProps {
  listsSettings: ListsPageSettings;
  itemsList: IItems;
  onDeleteHandler: (id: number) => void;
  onDoneHandler: (id: number) => void;
}

export default ISubListsGridProps;

import ListsPageSettings from "../../classes/lists/ListsPageSettings";

/**
 * This interface represents the prop object for ListsHeader component
 */
interface IListsHeaderProps {
  onItemAdded: (itemText: string, type: string) => Promise<void>;
  listsSettings: ListsPageSettings;
}

export default IListsHeaderProps;

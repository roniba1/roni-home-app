import ListsPageSettings from "../../classes/lists/ListsPageSettings";

/**
 * This interface represents the prop object for AddItem component
 */
type IAddItemProps = {
  onItemAdded: (itemText: string, type: string) => Promise<void>;
  listsSettings: ListsPageSettings;
};

export default IAddItemProps;

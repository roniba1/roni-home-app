import ListsPageSettings from "../../classes/lists/ListsPageSettings";

type IAddItemProps = {
  onItemAdded: (itemText: string, type: string) => Promise<void>;
  listsSettings: ListsPageSettings;
};

export default IAddItemProps;

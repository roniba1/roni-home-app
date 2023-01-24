import IListType from "../../interfaces/lists/IListType";

/**
 * This abstract class represent general settings for a Lists page in the app
 */
abstract class ListsPageSettings {
  // The main List name
  protected readonly mainListName: string;

  // The types & names of all sub-lists
  protected readonly listTypesNames: IListType[];

  // The label for add new item action
  protected readonly addItemLabel: string;

  // The type for checked item
  protected readonly doneItemType: string;

  // This abstract function should return the type for a new item the user added to the list
  abstract newItemType: () => string;

  protected constructor(
    mainListName: string,
    listTypesNames: IListType[],
    addItemLabel: string,
    doneItemType: string
  ) {
    this.mainListName = mainListName;
    this.listTypesNames = listTypesNames;
    this.addItemLabel = addItemLabel;
    this.doneItemType = doneItemType;
  }

  get listName() {
    return this.mainListName;
  }

  get typesNames() {
    return this.listTypesNames;
  }

  get addItemText() {
    return this.addItemLabel;
  }

  get doneType() {
    return this.doneItemType;
  }
}

export default ListsPageSettings;

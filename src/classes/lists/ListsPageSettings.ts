import IListType from "../../interfaces/lists/IListType";

abstract class ListsPageSettings {
  protected readonly mainListName: string;
  protected readonly listTypesNames: IListType[];
  protected readonly addItemLabel: string;
  abstract newItemType: () => string;

  protected constructor(
    mainListName: string,
    listTypesNames: IListType[],
    addItemLabel: string
  ) {
    this.mainListName = mainListName;
    this.listTypesNames = listTypesNames;
    this.addItemLabel = addItemLabel;
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
}

export default ListsPageSettings;

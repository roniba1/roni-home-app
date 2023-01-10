import IItems from "../items/IItems";
import IListType from "./IListType";

interface IItemsListProps {
    itemsList: IItems,
    listType: IListType,
    onDoneHandler: (id: number) => void,
    doneButton: boolean,
    onDeleteHandler: (id: number) => void
}

export default IItemsListProps;
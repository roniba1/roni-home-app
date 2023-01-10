import ISingleItem from "./ISingleItem";

interface IItemProps {
    item: ISingleItem,
    onDoneHandler: (id: number) => void,
    doneButton: boolean
    onDeleteHandler: (id: number) => void
}

export default IItemProps;
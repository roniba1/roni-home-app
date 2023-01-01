export interface SingleItem {
    content: string,
    type: string,
    id: number
}

export type Items = SingleItem[] | null;

export interface ItemsListProps {
    itemsList: Items,
    listType: string,
    onDoneHandler: (id: number) => void,
    doneButton: boolean,
    onDeleteHandler: (id: number) => void
}

export interface ItemProps {
    item: SingleItem,
    onDoneHandler: (id: number) => void,
    doneButton: boolean
    onDeleteHandler: (id: number) => void
}
import {ListsPageSettings} from "../interfaces/ListsPageSettings";

export type AddItemProps = {
    onItemAdded: (itemText: string, type: string) => Promise<void>,
    listsSettings: ListsPageSettings
};

interface AddItemState {
    newContent: string,
    contentType: string,
    open: boolean
}

export enum AddItemActionKind {
    CONTENT = 'CONTENT',
    TYPE = 'TYPE',
    OPEN = 'OPEN',
    ALL = 'ALL'
}

type AddItemAction =
    | {type: AddItemActionKind.CONTENT | AddItemActionKind.TYPE, payload: string}
    | {type: AddItemActionKind.OPEN, payload: boolean}
    | {type: AddItemActionKind.ALL, payload: AddItemState};

export const reducer = (state: AddItemState, action: AddItemAction) => {
    const { type, payload } = action;
    switch (type) {
        case AddItemActionKind.CONTENT:
            return {
                ...state,
                newContent: payload
            };
        case AddItemActionKind.TYPE:
            return {
                ...state,
                contentType: payload
            };
        case AddItemActionKind.OPEN:
            return {
                ...state,
                open: payload
            };
        case AddItemActionKind.ALL:
            return payload;
        default:
            return state;
    }
};

export const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

export const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
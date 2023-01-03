import React, { useState } from "react";
import { ListsPageSettings } from "../interfaces/ListsPageSettings";

type AddItemProps = {
    onItemAdded: (itemText: string, type: string) => Promise<void>,
    listsSettings: ListsPageSettings
};

const AddItem: React.FC<AddItemProps> = props => {
    const [newContent, setNewContent] = useState('');

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        setNewContent(event.currentTarget.value);
    }
    const addItemSubmitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        await props.onItemAdded(newContent, props.listsSettings.newItemType());
        setNewContent('');
    };

    return (
        <form onSubmit={addItemSubmitHandler}>
            <div className="form-control">
                <label htmlFor="todo-text">Add Item</label>
                <input type="text" id="todo-text" value={newContent} onChange={handleChange} />
            </div>
            <button type="submit">ADD ITEM</button>
        </form>
    );
}

export default AddItem;
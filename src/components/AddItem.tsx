import React, { useState } from "react";

type AddItemProps = {
    onItemAdded: (itemText: string) => void;
};

const AddItem: React.FC<AddItemProps> = props => {
    const [newContent, setNewContent] = useState('');

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        setNewContent(event.currentTarget.value);
    }
    const addItemSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        props.onItemAdded(newContent);
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
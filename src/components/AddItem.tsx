import React, { useRef } from "react";

type AddItemProps = {
    onItemAdded: (itemText: string) => void;
};

const AddItem: React.FC<AddItemProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const addItemSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onItemAdded(enteredText);
    };

    return (
        <form onSubmit={addItemSubmitHandler}>
            <div className="form-control">
                <label htmlFor="todo-text">Add Item</label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type="submit">ADD ITEM</button>
        </form>
    );
}

export default AddItem;
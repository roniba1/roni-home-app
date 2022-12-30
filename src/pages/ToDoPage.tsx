import React from "react";
import AddItem from "../components/AddItem";

const ToDoPage: React.FC = () => {
    // const [toDoList, setToDoList] = useState(['toDo']);
    // const [doneList, setDoneList] = useState(['done']);

    // const renderedList = toDoList.map((task, index) => {
    //     return <Item key={index} type={animal} />;
    // });

    return <div>To Do Page
        <AddItem onItemAdded={(itemText: string) => console.log(itemText)}/>
        {/*<ItemsList itemsList={toDoList}/>*/}
        {/*<ItemsList itemsList={doneList}/>*/}
    </div>;

}

export default ToDoPage;
import React, { useState, useEffect } from "react";
import AddItem from "../components/AddItem";
import {Items, SingleItem} from "../interfaces/Items";
import ItemsList from "../components/ItemsList";
import { Col, Row, Divider } from 'antd';
import axios from 'axios';

const style = {
    background: '#0092ff',
    padding: '8px 0',
};

const ToDoPage: React.FC = () => {
    const [toDoList, setToDoList] = useState<Items | null>(null);

    const fetchData = async () => {
        const response = await axios.get<Items>('http://localhost:3001/toDo');
        setToDoList(response.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const onDeleteHandler = async (id: number) => {
        await axios.put<SingleItem>(`http://localhost:3001/toDo/${id}`);

        if (toDoList) {
            const updatedToDoList = toDoList.filter((item) => {
                return item.id !== id;
            });
            setToDoList(updatedToDoList);
        }
    }

    const onItemAdded = async (itemText: string) => {
        console.log(itemText);
        const response = await axios.post<SingleItem>('http://localhost:3001/toDo', {
            content: itemText,
            type: "todo"
        });
        const updatedToDoList = [
            ...toDoList!,
            response.data
        ];
        setToDoList(updatedToDoList);
    }

    const isItemId = (id: number) => {
        return (item: SingleItem) => {
            return item.id === id;
        }
    }

    const onDoneHandler = async (id: number) => {
        const doneItem = toDoList!.find(isItemId(id));
        const response = await axios.put<SingleItem>(`http://localhost:3001/toDo/${id}`, {
            ...doneItem, type:"done"
        });
        const updatedToDoList = toDoList!.map((item) => {
            if (item.id === id) {
                return { ...item, ...response.data};
            }

            return item;
        });

        setToDoList(updatedToDoList);
    }

    return <div>To Do Page
        <Divider orientation="left">Add Item:</Divider>
        <AddItem onItemAdded={onItemAdded}/>
        <Row gutter={16}>
            <Col className="gutter-row" span={6}>
                <Divider type="horizontal" orientation="left">To Do List</Divider>
                <div style={style}>
                    <ItemsList
                        itemsList={toDoList}
                        listType={"todo"}
                        onDeleteHandler={onDeleteHandler}
                        onDoneHandler={onDoneHandler}
                        doneButton/>
                </div>
            </Col>
            <Col className="gutter-row" span={6}>
                <Divider type="horizontal" orientation="left">Done List</Divider>
                <div style={style}>
                    <ItemsList
                        itemsList={toDoList}
                        listType={"done"}
                        onDeleteHandler={onDeleteHandler}
                        onDoneHandler={onDoneHandler}
                        doneButton={false}/>
                </div>
            </Col>
        </Row>
    </div>;

}

export default ToDoPage;
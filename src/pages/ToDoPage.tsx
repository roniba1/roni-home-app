import React, { useState, useEffect } from "react";
import AddItem from "../components/AddItem";
import { Items, SingleItem, toDoConstants } from "../interfaces/Items";
import ItemsList from "../components/ItemsList";
import { Col, Row, Divider } from 'antd';
import FetcherService from "../services/FetcherService";

const style = {
    padding: '8px 0'
};

const ToDoPage: React.FC = () => {
    const [toDoList, setToDoList] = useState<Items | null>(null);

    const fetchData = async () => {
        const response = await FetcherService.fetchData(toDoConstants.LIST_NAME);
        setToDoList(response);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const onDeleteHandler = async (id: number) => {
        await FetcherService.deleteItem(toDoConstants.LIST_NAME, id);

        if (toDoList) {
            const updatedToDoList = toDoList.filter((item) => {
                return item.id !== id;
            });
            setToDoList(updatedToDoList);
        }
    }

    const onItemAdded = async (itemText: string) => {
        const itemObj = {
            content: itemText,
            type: "todo"
        };

        const response = await FetcherService.addItem(toDoConstants.LIST_NAME, itemObj);
        const updatedToDoList = [
            ...toDoList!,
            response
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
        const newItem = {
            ...doneItem,
            type: "done"
        } as SingleItem;
        const response = await FetcherService.editItem(toDoConstants.LIST_NAME, id, newItem);

        const updatedToDoList = toDoList!.map((item) => {
            if (item.id === id) {
                return { ...item, ...response};
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
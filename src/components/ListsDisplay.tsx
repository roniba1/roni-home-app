import React, {useEffect, useState} from "react";
import {ListsPageSettings} from "../interfaces/ListsPageSettings";
import { Items, ListType, SingleItem } from "../interfaces/Items";
import FetcherService from "../services/FetcherService";
import { Divider, Col, Row } from "antd";
import AddItem from "./AddItem";
import ItemsList from "./ItemsList";

const style = {
    padding: '8px 0'
};

interface ListsDisplayProps {
    listsSettings: ListsPageSettings
}

const ListsDisplay: React.FC<ListsDisplayProps> = props => {
    const listsSettings = props.listsSettings;
    const [allItemsList, setAllItemsList] = useState<Items | null>(null);

    const fetchData = async () => {
        const response = await FetcherService.fetchData(listsSettings.listName);
        setAllItemsList(response);
    }

    useEffect(() => {
        // noinspection JSIgnoredPromiseFromCall
        fetchData();
    }, []);

    const onDeleteHandler = async (id: number) => {
        await FetcherService.deleteItem(listsSettings.listName, id);

        if (allItemsList) {
            const updatedList = allItemsList.filter((item) => {
                return item.id !== id;
            });
            setAllItemsList(updatedList);
        }
    }

    const onItemAdded = async (itemText: string, type: string) => {
        const itemObj = {
            content: itemText,
            type: type
        };

        const response = await FetcherService.addItem(listsSettings.listName, itemObj);
        const updatedList = [
            ...allItemsList!,
            response
        ];
        setAllItemsList(updatedList);
    }

    const isItemId = (id: number) => {
        return (item: SingleItem) => {
            return item.id === id;
        }
    }

    const onDoneHandler = async (id: number) => {
        const doneItem = allItemsList!.find(isItemId(id));
        const newItem = {
            ...doneItem,
            type: "done"
        } as SingleItem;
        const response = await FetcherService.editItem(listsSettings.listName, id, newItem);

        const updatedList = allItemsList!.map((item) => {
            if (item.id === id) {
                return { ...item, ...response};
            }

            return item;
        });

        setAllItemsList(updatedList);
    }

    let renderedList = null;
    if(allItemsList) {
        renderedList = listsSettings.typesNames.map((listType:ListType) => {
            return (
                <Col className="gutter-row" span={6}>
                    <Divider type="horizontal" orientation="left">{listType.displayName}</Divider>
                    <div style={style}>
                        <ItemsList
                            itemsList={allItemsList}
                            listType={listType.type}
                            onDeleteHandler={onDeleteHandler}
                            onDoneHandler={onDoneHandler}
                            doneButton/>
                    </div>
                </Col>
            );
        })
    }

    return <div>
        <Divider orientation="left">Add Item:</Divider>
        <AddItem onItemAdded={onItemAdded} listsSettings={listsSettings}/>
        <Row gutter={16}>
            {renderedList}
        </Row>
    </div>
}

export default ListsDisplay;
import React, { useEffect, useState } from "react";
import ListsPageSettings from "../../classes/lists/ListsPageSettings"
import IItems from "../../interfaces/items/IItems";
import IListType from "../../interfaces/lists/IListType";
import ISingleItem from "../../interfaces/items/ISingleItem";
import FetcherService from "../../services/FetcherService";
import { Space, Col, Row } from "antd";
import AddItem from "../items/AddItem";
import ItemsList from "./ItemsList";

interface ListsDisplayProps {
    listsSettings: ListsPageSettings
}

const ListsDisplay: React.FC<ListsDisplayProps> = props => {
    const listsSettings = props.listsSettings;
    const [allItemsList, setAllItemsList] = useState<IItems | null>(null);

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
        return (item: ISingleItem) => {
            return item.id === id;
        }
    }

    const onDoneHandler = async (id: number) => {
        const doneItem = allItemsList!.find(isItemId(id));
        const newItem = {
            ...doneItem,
            type: "done"
        } as ISingleItem;
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
    if (allItemsList) {
        renderedList = listsSettings.typesNames.map((listType:IListType) => {
            return (
                    <ItemsList
                        itemsList={allItemsList}
                        listType={listType}
                        onDeleteHandler={onDeleteHandler}
                        onDoneHandler={onDoneHandler}
                        doneButton/>

            );
        })
    }

    return <div style={{margin: '25px'}}>
        <Space
            direction="vertical"
            size="middle"
            style={{
                display: 'flex',
            }}
        >
            <Row gutter={16}>
                <Col span={6} offset={18}>
                    <AddItem onItemAdded={onItemAdded} listsSettings={listsSettings}/>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                {renderedList}
            </Row>
        </Space>
    </div>
}

export default ListsDisplay;
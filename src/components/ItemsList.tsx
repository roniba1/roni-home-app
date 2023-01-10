import React from "react";
import { ItemsListProps } from "../interfaces/Items";
import Item from "./Item"
import { Divider, Col, List } from "antd";

const style = {
    padding: '8px 0'
};

const ItemsList: React.FC<ItemsListProps> = props => {

    let renderedList = undefined;
    let hasItems = false;
    if (props.itemsList) {
        renderedList = props.itemsList.map((item) => {
            if (props.listType.type === item.type) {
                hasItems = true;
                return <Item
                    item={item}
                    key={item.id}
                    onDeleteHandler={props.onDeleteHandler}
                    onDoneHandler={props.onDoneHandler}
                    doneButton={props.doneButton} />;
            }
            else return null;
        });
    }
    console.log(renderedList);
    if (renderedList) {
        renderedList = renderedList.filter((item) => {
            return item !== null;
        });
    }
    console.log(renderedList);

    let renderedComponent = null;
    if (hasItems) {
        renderedComponent = (
            <Col className="gutter-row" span={6} key={props.listType.type}>
                <List
                    header={<div>{props.listType.displayName}</div>}
                    bordered
                    dataSource={renderedList}
                renderItem={(item) => (
                    <List.Item>
                        {item}
                    </List.Item>
                )}/>
            </Col>
        );
    }

    return renderedComponent;
}

export default ItemsList;
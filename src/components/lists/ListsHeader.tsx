import React from "react";
import AddItem from "../items/AddItem";
import IListsHeaderProps from "../../interfaces/lists/IListsHeaderProps";
import {
  CLASS_NAMES,
  LIST_HEADER_TITLE_LEVEL,
} from "../../constants/lists/ListsConstants";
import { Typography } from "antd";

/**
 * This component is responsible for the lists pages header. It displays the
 * List title & the AddItem component
 *
 * @param {IListsHeaderProps} props - The settings and callback needed
 */
const ListsHeader: React.FC<IListsHeaderProps> = (props) => {
  const { Title } = Typography;

  return (
    <div className={CLASS_NAMES.LISTS_HEADER}>
      <Title level={LIST_HEADER_TITLE_LEVEL}>
        {props.listsSettings.listLabel}
      </Title>
      <AddItem
        onItemAdded={props.onItemAdded}
        listsSettings={props.listsSettings}
      />
    </div>
  );
};

export default ListsHeader;

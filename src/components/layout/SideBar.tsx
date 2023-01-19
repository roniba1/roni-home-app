import React from "react";
import { useHistory } from "react-router-dom";
import PagesLinks from "../../constants/pages/PagesLinks";
import IPageLink from "../../interfaces/pages/IPageLink";
import DynamicIcon from "./DynamicIcon";
import { Menu, Space } from 'antd';

const SideBar: React.FC = () => {
    const history = useHistory();
    const renderedLinks = PagesLinks.map((link: IPageLink) => {
        console.log(link.icon);
        const label = <Space>
            <DynamicIcon type={link.icon} />
            {link.label}
        </Space>;
        return (
            {
                label: label,
                name: link.label,
                key: link.path
            }
        );
    });

    return (
        <Menu theme={"light"}
              mode="inline"
              style={{ background: "#E5f1f7", padding: 0, textAlign: "left" }}
              items={renderedLinks}
              onClick={ (value) => history.push(value.key) }>
        </Menu>
    );
}

export default SideBar;
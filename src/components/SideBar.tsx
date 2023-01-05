import React from "react";
import { useHistory } from "react-router-dom";
import { PagesLinks, PageLink } from "../constants/PagesLinks";
import { Menu } from 'antd';

const SideBar: React.FC = () => {
    const history = useHistory();
    const renderedLinks = PagesLinks.map((link:PageLink) => {
        return (
            {
                label: link.label,
                name: link.label,
                key: link.path
            }
        );
    });

    return (
        <Menu theme={"light"}
              mode="inline"
              style={{ background: "#E5f1f7", padding: 0, textAlign: "center" }}
              items={renderedLinks}
              onClick={ (value) => history.push(value.key) }>
        </Menu>
    );
}

export default SideBar;
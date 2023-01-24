import React from "react";
import { NavLink } from "react-router-dom";
import PagesLinks from "../../constants/pages/PagesLinks";
import IPageLink from "../../interfaces/pages/IPageLink";
import DynamicIcon from "./DynamicIcon";
import { Menu, Space, Layout } from "antd";

const { Sider } = Layout;

/**
 * This component is the sidebar in the app layout. Its using Antd Layout, Sider &
 * Menu components and ReactRouter NavLink in order to display a clickable sidebar menu for all app's pages
 */
const SideBar: React.FC = () => {
    // Mapping on PagesLinks in order to build the links menu items
  const renderedLinks = PagesLinks.map((link: IPageLink) => {
    return (
      <Menu.Item key={link.path}>
        <NavLink to={link.path}>
          <Space>
            <DynamicIcon type={link.icon} />
            {link.label}
          </Space>
        </NavLink>
      </Menu.Item>
    );
  });

  return (
    <Sider theme={"light"} style={{ background: "#E5f1f7" }}>
      <Menu
        theme={"light"}
        mode="inline"
        style={{ background: "#E5f1f7", padding: 0, textAlign: "left" }}
      >
        {renderedLinks}
      </Menu>
    </Sider>
  );
};

export default SideBar;

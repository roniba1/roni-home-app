import React from "react";
import { NavLink } from "react-router-dom";
import PagesLinks from "../../constants/pages/PagesLinks";
import IPageLink from "../../interfaces/pages/IPageLink";
import DynamicIcon from "./DynamicIcon";
import { Menu, Space, Layout } from "antd";
import {
  SIDEBAR_THEME,
  CLASS_NAMES,
  SIDEBAR_MODE,
} from "../../constants/layout/LayoutConstants";

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
    <Sider className={CLASS_NAMES.SIDEBAR} theme={SIDEBAR_THEME}>
      <Menu
        className={CLASS_NAMES.SIDEBAR_MENU}
        theme={SIDEBAR_THEME}
        mode={SIDEBAR_MODE}
      >
        {renderedLinks}
      </Menu>
    </Sider>
  );
};

export default SideBar;

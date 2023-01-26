import React from "react";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
import PAGES_LINKS from "../../constants/pages/PagesLinks";
// @ts-ignore
import logo from "../../assets/logo.PNG";
import {
  CLASS_NAMES,
  HEADER_IMG_ALT,
  NAVBAR_MODE,
  NAVBAR_THEME,
} from "../../constants/layout/LayoutConstants";
import IPageLink from "../../interfaces/pages/IPageLink";
import DynamicIcon from "./DynamicIcon";

const { Header } = Layout;

/**
 * This component is the header component for the app.
 * Its using Antd Layout & Header components and ReactRouter NavLink component
 */
const MyHeader: React.FC = () => {
  const renderedLinks = PAGES_LINKS.map((link: IPageLink) => {
    return {
      key: link.path,
      icon: <DynamicIcon type={link.icon} />,
      label: <NavLink to={link.path}>{link.label}</NavLink>,
    };
  });

  return (
    <Header className={CLASS_NAMES.HEADER}>
      <div className={CLASS_NAMES.LOGO}>
        <img src={logo} alt={HEADER_IMG_ALT} />
      </div>
      <Menu
        theme={NAVBAR_THEME}
        mode={NAVBAR_MODE}
        defaultSelectedKeys={[PAGES_LINKS[0].path]}
        items={renderedLinks}
      ></Menu>
    </Header>
  );
};

export default MyHeader;

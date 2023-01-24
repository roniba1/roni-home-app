import React from "react";
import { Layout } from "antd";
import { NavLink } from "react-router-dom";
import PagesLinks from "../../constants/pages/PagesLinks";
// @ts-ignore
import logo from "../../assets/logo.PNG";
import {
  CLASS_NAMES,
  HEADER_IMG_ALT,
} from "../../constants/layout/LayoutConstants";

const { Header } = Layout;

/**
 * This component is the header component for the app.
 * Its using Antd Layout & Header components and ReactRouter NavLink component
 */
const MyHeader: React.FC = () => {
  return (
    <Header className={CLASS_NAMES.HEADER}>
      <NavLink to={PagesLinks[0].path}>
        <img
          className={CLASS_NAMES.HEADER_IMG}
          src={logo}
          alt={HEADER_IMG_ALT}
        />
      </NavLink>
    </Header>
  );
};

export default MyHeader;

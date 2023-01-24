import React from "react";
import { Layout } from "antd";
import { NavLink } from "react-router-dom";
import PagesLinks from "../../constants/pages/PagesLinks";
// @ts-ignore
import logo from "../../assets/logo.PNG";

const { Header } = Layout;

/**
 * This component is the header component for the app.
 * Its using Antd Layout & Header components and ReactRouter NavLink component
 */
const MyHeader: React.FC = () => {
  return (
    <Header
      style={{
        background: "#E5f1f7",
        padding: 0,
        textAlign: "center",
        height: "90px",
      }}
    >
      <NavLink to={PagesLinks[0].path}>
        <img src={logo} alt="logo" height="90px" />
      </NavLink>
    </Header>
  );
};

export default MyHeader;

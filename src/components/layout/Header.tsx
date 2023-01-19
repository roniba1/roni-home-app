import React from "react";
import { Typography, Layout } from "antd";
import { NavLink } from "react-router-dom";
import PagesLinks from "../../constants/pages/PagesLinks";

const { Header } = Layout;
const { Title } = Typography;

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
        <Title level={2}>Welcome to Roni's Home App</Title>
      </NavLink>
    </Header>
  );
};

export default MyHeader;

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./components/layout/SideBar";
import MyHeader from "./components/layout/Header";
import Routes from "./components/layout/Routes";
import MyFooter from "./components/layout/Footer";
import { Layout } from "antd";

const { Content } = Layout;

function HomeApp() {
  return (
    <Router>
      <div>
        <Layout>
          <MyHeader />
          <Layout style={{ display: "flex" }}>
            <SideBar />
            <Content>
              <Routes />
            </Content>
          </Layout>
          <MyFooter />
        </Layout>
      </div>
    </Router>
  );
}

export default HomeApp;

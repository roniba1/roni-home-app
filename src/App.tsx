import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MyHeader from "./components/layout/Header";
import Routes from "./components/layout/Routes";
import MyFooter from "./components/layout/Footer";
import { Layout } from "antd";
import { CLASS_NAMES } from "./constants/layout/LayoutConstants";
import "./App.css"

const { Content } = Layout;

function HomeApp() {
  return (
    <Router>
      <div>
        <Layout>
          <MyHeader />
          <Layout className={CLASS_NAMES.LAYOUT}>
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

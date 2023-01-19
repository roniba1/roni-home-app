import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ToDoPage from "./pages/ToDoPage";
import GroceryListPage from "./pages/GroceryListPage";
import LandingPage from "./pages/LandingPage";
import CalendarPage from "./pages/CalendarPage";
import SideBar from "./components/layout/SideBar";
import MyHeader from "./components/layout/Header";
import { Layout } from "antd";
import ForecastPage from "./pages/ForecastPage";

const { Footer, Content } = Layout;

function HomeApp() {
  return (
    <Router>
      <div>
        <Layout>
          <MyHeader />
          <Layout style={{ display: "flex" }}>
            <SideBar />
            <Content>
              <div>
                <Switch>
                  <Route exact path="/">
                    <LandingPage />
                  </Route>
                  <Route path="/todoList">
                    <ToDoPage />
                  </Route>
                  <Route path="/groceryList">
                    <GroceryListPage />
                  </Route>
                  <Route path="/calendar">
                    <CalendarPage />
                  </Route>
                  <Route path="/forecast">
                    <ForecastPage />
                  </Route>
                </Switch>
              </div>
            </Content>
          </Layout>
          <Footer
            style={{ background: "#E5f1f7", padding: 0, textAlign: "center" }}
          >
            Roni's Home App @2022 Created by Roni Singer Ben Ari
          </Footer>
        </Layout>
      </div>
    </Router>
  );
}

export default HomeApp;

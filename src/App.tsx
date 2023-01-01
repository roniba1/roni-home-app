import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ToDoPage from "./pages/ToDoPage";
import GroceryListPage from "./pages/GroceryListPage";
import LandingPage from "./pages/LandingPage";
import SideBar from "./components/SideBar";
import MyHeader from "./components/Header";
import { Layout, Menu } from 'antd';


const { Header, Footer, Sider, Content } = Layout;

function HomeApp() {
    return (
        <Router forceRefresh={false}>
            <div>
                <Layout>
                    <Header style={{ background: "#E5f1f7", padding: 0, textAlign: "center" }}>
                        <MyHeader />
                    </Header>
                    <Layout>
                        <Sider theme={"light"} style={{background: "#E5f1f7"}}>
                            <Menu theme={"light"} defaultSelectedKeys={["1"]} mode="inline" style={{ background: "#E5f1f7", padding: 0, textAlign: "center" }}>
                                <SideBar />
                            </Menu>
                        </Sider>
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
                                </Switch>
                            </div>
                        </Content>
                    </Layout>
                    <Footer style={{ background: "#E5f1f7", padding: 0, textAlign: "center" }}>Footer!</Footer>
                </Layout>
            </div>
        </Router>
    );
}

export default HomeApp;

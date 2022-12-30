import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ToDoPage from "./pages/ToDoPage";
import GroceryListPage from "./pages/GroceryListPage";
import LandingPage from "./pages/LandingPage";
import SideBar from "./components/SideBar";
import MyHeader from "./components/Header";
import { Layout, Menu } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function HomeApp() {
    return (
        <Router>
            <div>
                <Layout>
                    <Header style={{ background: "#E5f1f7", padding: 0, textAlign: "center" }}>
                        <MyHeader />
                    </Header>
                    <Layout>
                        <Sider>
                            <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline" style={{ background: "#E5f1f7", padding: 0, textAlign: "center" }}>
                                <SideBar />
                            </Menu>
                        </Sider>
                        <Content>
                            <div>
                                <Routes>
                                    <Route path="/" element={<LandingPage />}/>
                                    <Route path="/todoList" element={<ToDoPage />}/>
                                    <Route path="/groceryList" element={<GroceryListPage />}/>
                                </Routes>
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

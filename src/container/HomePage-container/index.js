import React from "react";
import { Layout, theme } from "antd";
import SideBar from "../../Compo/SideBar";
import Homepage from "../../Pages/HomePage";
import FooterBar from "../../Compo/FooterBar";
import NavBar from "../../Compo/NavBar";
import "./style.css";
const { Header, Content, Sider } = Layout;

const HomePage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        className="SideBar"
        breakpoint="lg"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{
          backgroundColor: "white",
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}>
        <SideBar />
      </Sider>
      <Layout
        style={{
          marginLeft: 200,
        }}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}>
          <NavBar />
        </Header>
        <Content
          className="content"
          style={{
            margin: "50px 16px 0",
            overflow: "initial",
            marginTop: "12rem",
          }}>
          <Homepage />
        </Content>

        <FooterBar />
      </Layout>
    </Layout>
  );
};

export default HomePage;

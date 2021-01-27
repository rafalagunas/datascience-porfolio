import React, { useState } from "react";
import { Layout, Menu, Row } from "antd";
import { Container, Logo, Title } from "./styles";
import Project from "../Card";
import Projects from "../../Data/projects.json";

const { Header, Content, Footer } = Layout;
const Home = () => {
  const [actualKey, setKey] = useState(1);
  console.log(Projects);
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Logo className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[actualKey.toString()]}
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About us</Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <Container style={{ padding: 24, minHeight: 380 }}>
          <Title>Main Content</Title>
          <Row>
            {Projects.map((element) => {
              return (
                <Project
                  key={element.title}
                  title={element.title}
                  img={element.img}
                  description={element.description}
                  url={element.url}
                />
              );
            })}
          </Row>
        </Container>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Datascience portfolio made with {"<3"}
      </Footer>
    </Layout>
  );
};

export default Home;

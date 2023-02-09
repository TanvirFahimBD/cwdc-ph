import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import LeftSideNav from "../pages/LeftSideNav/LeftSideNav";
import RightSideNav from "../pages/RightSideNav/RightSideNav";
import Header from "../pages/Shared/Header";

const Main = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col sm={2}>
            <LeftSideNav />
          </Col>
          <Col sm={7}>
            <Outlet />
          </Col>
          <Col sm={3}>
            <RightSideNav />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;

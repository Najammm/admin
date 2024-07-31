import React from "react";
import { Row, Col } from "antd";
import "./style.css";
import { DashboardOutlined } from "@ant-design/icons";

function FooterBar() {
  return (
    <Row className="footer" justify={"center"}>
      <Col lg={6} md={6} sm={24} xs={24} className="col">
        <h4>Heading</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          dolore exercitationem voluptatem odio provident sint fugit iure
          quisquam obcaecati ab voluptatum est, natus eaque repellendus voluptas
          debitis minima quas pariatur.
        </p>
        <DashboardOutlined /> <DashboardOutlined />
        <DashboardOutlined />
      </Col>
      <Col lg={6} md={6} sm={24} xs={24} className="col">
        <h4>Quick Links</h4>
        <a href="#">Link 1 </a> <br />
        <a className="links" href="#">
          Link 2{" "}
        </a>{" "}
        <br />
        <a href="#">Link 3 </a> <br />
        <a href="#">Link 4 </a> <br />
      </Col>{" "}
      <Col lg={6} md={6} sm={24} xs={24} className="col">
        <h4>Quick Links</h4>
        <a href="#">Link 1 </a> <br />
        <a className="links" href="#">
          Link 2{" "}
        </a>{" "}
        <br />
        <a href="#">Link 3 </a> <br />
        <a href="#">Link 4 </a> <br />
      </Col>{" "}
      <Col lg={6} md={6} sm={24} xs={24} className="col">
        <h4>Quick Links</h4>
        <a href="#">Link 1 </a> <br />
        <a className="links" href="#">
          Link 2{" "}
        </a>{" "}
        <br />
        <a href="#">Link 3 </a> <br />
        <a href="#">Link 4 </a> <br />
      </Col>{" "}
    </Row>
  );
}

export default FooterBar;

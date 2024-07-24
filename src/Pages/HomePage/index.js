import React from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";
import { Flex, Progress } from "antd";
import "./style.css";

function Homepage() {
  return (
    <Row justify={"center"} gutter={25}>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Active"
                value={11.28}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{ color: "#cf1322" }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>
      </Col>
      <Col lg={11} md={12} sm={24} xs={24}>
        <Flex gap="small" vertical>
          <Progress percent={30} />
          <Progress percent={50} status="active" />
          <Progress percent={70} status="exception" />
          <Progress percent={100} />
          <Progress percent={50} showInfo={false} />
        </Flex>
      </Col>
    </Row>
  );
}

export default Homepage;

import React from "react";
import { NavLink } from "react-router-dom";
import { Row, Col, Card, Typography } from "antd";
import PagesLinks from "../constants/pages/PagesLinks";

const LandingPage: React.FC = () => {
  const { Title } = Typography;

  const renderedCols = PagesLinks.map((pageLink) => {
    if (pageLink.label === PagesLinks[0].label) {
      return null;
    }

    return (
      <Col span={11} key={pageLink.label} style={{ margin: "5px" }}>
        <NavLink to={pageLink.path}>
          <Card>
            <Title level={4}>{pageLink.label}</Title>
            {pageLink.description}
          </Card>
        </NavLink>
      </Col>
    );
  });

  return (
    <div style={{ margin: "75px" }}>
      <Title level={3} style={{ textAlign: "center" }}>
        Hello! Welcome To my home app
      </Title>

      <Row justify="space-around">{renderedCols}</Row>
    </div>
  );
};

export default LandingPage;

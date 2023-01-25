import React from "react";
import { NavLink } from "react-router-dom";
import { Row, Col, Card, Typography, Space } from "antd";
import { ARRANGED_PAGES } from "../constants/pages/PagesLinks";
import {
  CLASS_NAMES,
  ROW_JUSTIFY,
  COL_SPAN,
  OPENING_TEXT,
  MAIN_TITLE_LEVEL,
} from "../constants/pages/LandingPageConstants";
import "./LandingPage.css";
import DynamicIcon from "../components/layout/DynamicIcon";

/**
 * This component displays the app's Landing page.
 * It's using Antd Card components to display the pages and link to them.
 */
const LandingPage: React.FC = () => {
  const { Title } = Typography;

  // renderedCols is the columns & Card elements to display
  const renderedCols = ARRANGED_PAGES.map((pageLink) => {
    const title = (
      <Space className={CLASS_NAMES.SPACE}>
        <DynamicIcon type={pageLink.icon} />
        {pageLink.label}
      </Space>
    );

    return (
      <Col className={CLASS_NAMES.COL} span={COL_SPAN} key={pageLink.label}>
        <NavLink to={pageLink.path}>
          <Card title={title}>{pageLink.description}</Card>
        </NavLink>
      </Col>
    );
  });

  return (
    <div className={CLASS_NAMES.MAIN}>
      <Title level={MAIN_TITLE_LEVEL} className={CLASS_NAMES.TITLE}>
        {OPENING_TEXT}
      </Title>

      <Row justify={ROW_JUSTIFY}>{renderedCols}</Row>
    </div>
  );
};

export default LandingPage;

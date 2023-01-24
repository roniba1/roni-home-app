import React from "react";
import { NavLink } from "react-router-dom";
import { Row, Col, Card, Typography } from "antd";
import PagesLinks from "../constants/pages/PagesLinks";
import {
  CLASS_NAMES,
  ROW_JUSTIFY,
  COL_SPAN,
  OPENING_TEXT,
  CARD_TITLE_LEVEL,
  MAIN_TITLE_LEVEL,
} from "../constants/pages/LandingPageConstants";
import "./LandingPage.css";

/**
 * This component displays the app's Landing page.
 * It's using Antd Card components to display the pages and link to them.
 */
const LandingPage: React.FC = () => {
  const { Title } = Typography;

  // renderedCols is the columns & Card elements to display
  const renderedCols = PagesLinks.map((pageLink) => {
    // Do not build a Card for Home Page (current page)
    if (pageLink.label === PagesLinks[0].label) {
      return null;
    }

    return (
      <Col className={CLASS_NAMES.COL} span={COL_SPAN} key={pageLink.label}>
        <NavLink to={pageLink.path}>
          <Card>
            <Title level={CARD_TITLE_LEVEL}>{pageLink.label}</Title>
            {pageLink.description}
          </Card>
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

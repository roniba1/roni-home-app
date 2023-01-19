import React from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Card, Button, Typography } from "antd";
import PagesLinks from "../constants/pages/PagesLinks";

const LandingPage: React.FC = () => {
    const history = useHistory();
    const { Title } = Typography;

    const renderedCols = PagesLinks.map((pageLink) => {
        if (pageLink.label === PagesLinks[0].label) {
            return null;
        }

        return <Col span={11} key={pageLink.label} style={{margin: "5px"}}>
            <Card title={pageLink.label} bordered>
                <Button type="text" onClick={ (value) => history.push(pageLink.path) } block>
                    {pageLink.description}
                </Button>
            </Card>
        </Col>;
    });

    return <div style={{margin: "75px"}}>
        <Title level={2} style={{textAlign: "center"}}>
            Hello!
            Welcome To my home app
        </Title>

        <Row justify="space-around">
            {renderedCols}
        </Row>

    </div>;
}

export default LandingPage;

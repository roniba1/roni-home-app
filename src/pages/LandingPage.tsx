import React from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Card, Button, Typography } from "antd";

const LandingPage: React.FC = () => {
    const history = useHistory();

    return <div style={{margin: "75px"}}>
        <Typography>
            Hello!
            Welcome To my home app
        </Typography>
        <Row gutter={16}>
            <Col span={8}>
                <Card title="Card title" bordered>
                    <Button type="text" onClick={ (value) => history.push('/todoList') }>To Do List</Button>
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Card title" bordered={false}>
                    Card content
                </Card>
            </Col>
        </Row>
        <Row gutter={16}>
            <Col span={8}>
                <Card title="Card title" bordered>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Card title" bordered={false}>
                    Card content
                </Card>
            </Col>
        </Row>
    </div>;
}

export default LandingPage;

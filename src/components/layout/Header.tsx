import React from "react";
import { Typography } from "antd";

const MyHeader: React.FC = () => {
    const { Title } = Typography;

    return <Title level={2}>
        Welcome to Roni's Home App
    </Title>;

}

export default MyHeader;
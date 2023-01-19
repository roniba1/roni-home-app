import React from "react";
import { Typography } from "antd";

const MyHeader: React.FC = () => {
    const { Title } = Typography;

    return <Title>
        Welcome to Roni's Home App
    </Title>;

}

export default MyHeader;
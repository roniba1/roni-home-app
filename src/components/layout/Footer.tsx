import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const MyFooter: React.FC = () => {

    return <Footer
        style={{ background: "#E5f1f7", padding: 0, textAlign: "center" }}
    >
        Roni's Home App @2022 Created by Roni Singer Ben Ari
    </Footer>;
}

export default MyFooter;
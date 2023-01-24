import React from "react";
import { Layout } from "antd";
import {
  CLASS_NAMES,
  FOOTER_TEXT,
} from "../../constants/layout/LayoutConstants";

const { Footer } = Layout;

/**
 * This component is the footer component for the app.
 * Its using Antd Layout & Footer components.
 */
const MyFooter: React.FC = () => {
  return <Footer className={CLASS_NAMES.FOOTER}>{FOOTER_TEXT}</Footer>;
};

export default MyFooter;

import React from "react";
import { Spin } from "antd";
import ILoaderProps from "../interfaces/ILoaderProps";
import { CLASS_NAME, SIZE } from "../constants/LoaderConstants";

/**
 * This reusable component is using Antd Spin component to display a loader
 *
 * @param {string} tip - The text to display with loader
 */
const Loader: React.FC<ILoaderProps> = ({ tip }) => {
  return (
    <Spin tip={tip} size={SIZE}>
      <div className={CLASS_NAME} />
    </Spin>
  );
};

export default Loader;

import React, { Suspense } from "react";
import IDynamicIconProps from "../../interfaces/layout/IDynamicIconProps";

/**
 * This component is used to import icons from Antd icons dynamically,
 * Using React Suspense and lazy
 *
 * @param {string} type - The type of icon to import
 */
const DynamicIcon: React.FC<IDynamicIconProps> = ({ type }) => {
  const AntIcon = React.lazy(
    () => import(`@ant-design/icons/es/icons/${type}.js`)
  );

  return (
    <Suspense fallback={<div></div>}>
      <AntIcon />
    </Suspense>
  );
};

export default DynamicIcon;

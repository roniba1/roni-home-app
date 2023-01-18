import React, { Suspense } from "react";

interface IDynamicIconProps {
    type: string;
}

const DynamicIcon: React.FC<IDynamicIconProps> = ({ type }) => {
    const AntIcon = React.lazy(() => import(`@ant-design/icons/es/icons/${type}.js`))

    return <Suspense fallback={<div>Loading...</div>}>
            <AntIcon/>
    </Suspense>;
}

export default DynamicIcon;
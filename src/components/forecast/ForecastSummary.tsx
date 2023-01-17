import React from "react";
import { Image } from "antd";

interface IForecastSummaryProps {
    icon: string | undefined;
    description: string | undefined;
}

const ForecastSummary: React.FC<IForecastSummaryProps> = props => {
    if (!props.icon || !props.description) {
        return null;
    }

    const imageUrl = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;

    const image = <Image
        width={25}
        preview={false}
        src={imageUrl}
    />;

    return <div>
        {image}
        {props.description}
    </div>;
}

export default ForecastSummary;
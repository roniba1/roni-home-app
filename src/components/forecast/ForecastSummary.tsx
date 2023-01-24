import React from "react";
import IForecastSummaryProps from "../../interfaces/forecast/IForecastSummaryProps";
import ForecastService from "../../services/ForecastService";
import { ICON_WIDTH } from "../../constants/forecast/ForecastConstants"
import { Image } from "antd";

/**
 * This component build the forecast summary with icon and description text
 *
 * @param {IForecastSummaryProps} props - The data for the component
 */
const ForecastSummary: React.FC<IForecastSummaryProps> = (props) => {
  // Do not display if data is missing
  if (!props.icon || !props.description) {
    return null;
  }

  const imageUrl = ForecastService.getImageUrl(props.icon);

  const image = <Image width={ICON_WIDTH} preview={false} src={imageUrl} />;

  return (
    <div>
      {image}
      {props.description}
    </div>
  );
};

export default ForecastSummary;

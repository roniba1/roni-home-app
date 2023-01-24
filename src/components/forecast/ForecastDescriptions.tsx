import React from "react";
import { Descriptions } from "antd";
import IForecastDescriptionProps from "../../interfaces/forecast/IForecastDescriptionProps";
import {
  LABELS,
  LOADER_TEXT,
  CLASS_NAMES,
} from "../../constants/forecast/ForecastConstants";
import Loader from "../Loader";

/**
 * This component using the Antd Descriptions component to display forecast data
 *
 * @param {IForecastDescriptionProps} props - The title, selector, summary & weatherData received
 */
const ForecastDescriptions: React.FC<IForecastDescriptionProps> = (props) => {
  const { title, selector, summary, weatherData } = props;

  // If weatherData is null, display loading spinner
  if (weatherData === null) {
    return <Loader tip={LOADER_TEXT} />;
  }

  return (
    <Descriptions
      className={CLASS_NAMES.DESCRIPTIONS}
      bordered
      title={title}
      extra={selector}
    >
      <Descriptions.Item label={LABELS.SUMMARY}>{summary}</Descriptions.Item>
      <Descriptions.Item label={LABELS.TEMP}>
        {weatherData.temp}
      </Descriptions.Item>
      <Descriptions.Item label={LABELS.FEELS_LIKE}>
        {weatherData.feels_like}
      </Descriptions.Item>
      <Descriptions.Item label={LABELS.HUMIDITY}>
        {weatherData.humidity}%
      </Descriptions.Item>
      <Descriptions.Item label={LABELS.UVI}>
        {weatherData.uvi}
      </Descriptions.Item>
      <Descriptions.Item label={LABELS.WIND_SPEED}>
        {weatherData.wind_speed}
      </Descriptions.Item>
      <Descriptions.Item label={LABELS.CLOUDS}>
        {weatherData.clouds}%
      </Descriptions.Item>
    </Descriptions>
  );
};

export default ForecastDescriptions;

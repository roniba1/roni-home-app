import React from "react";
import { Descriptions, Spin } from "antd";
import IForecastDescriptionProps from "../../interfaces/forecast/IForecastDescriptionProps";

/**
 * This component using the Antd Descriptions component to display forecast data
 *
 * @param {IForecastDescriptionProps} props - The title, selector, summary & weatherData received
 */
const ForecastDescriptions: React.FC<IForecastDescriptionProps> = (props) => {
  const { title, selector, summary, weatherData } = props;

  // If weatherData is null, display loading spinner
  if (weatherData === null) {
    return <Spin tip="Loading weather data" size="large">
        <div style={{ padding: "24px", margin: "25px" }} />
      </Spin>;
  }

  return <div style={{ margin: "25px" }}>
      <Descriptions bordered title={title} extra={selector}>
        <Descriptions.Item label="Summary">
          {summary}
        </Descriptions.Item>
        <Descriptions.Item label="Temperature">
          {weatherData.temp}
        </Descriptions.Item>
        <Descriptions.Item label="Feels like">
          {weatherData.feels_like}
        </Descriptions.Item>
        <Descriptions.Item label="Humidity">
          {weatherData.humidity}%
        </Descriptions.Item>
        <Descriptions.Item label="UV index">
          {weatherData.uvi}
        </Descriptions.Item>
        <Descriptions.Item label="Wind speed">
          {weatherData.wind_speed}
        </Descriptions.Item>
        <Descriptions.Item label="Cloudiness">
          {weatherData.clouds}%
        </Descriptions.Item>
      </Descriptions>
    </div>;
};

export default ForecastDescriptions;

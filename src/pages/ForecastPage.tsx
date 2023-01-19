import React, { useState, useEffect, useCallback } from "react";
import { LOCATIONS } from "../constants/forecast/ForecastConstants";
import IWeatherData from "../interfaces/forecast/IWeatherData";
import ILocationData from "../interfaces/forecast/ILocationData";
import ForecastDescriptions from "../components/forecast/ForecastDescriptions";
import ForecastService from "../services/ForecastService";
import { Select } from "antd";
import ForecastSummary from "../components/forecast/ForecastSummary";

const ForecastPage: React.FC = () => {
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);
  const [locationData, setLocationData] = useState<ILocationData>(LOCATIONS[0]);

  const fetchData = useCallback(async () => {
    const res = await fetch(
      ForecastService.getApiUrl(locationData.latitude, locationData.longitude)
    );
    const data = await res.json();
    setWeatherData(data.current);
  }, [locationData]);

  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    fetchData();
  }, [locationData, fetchData]);

  const handleSelectChange = (value: string) => {
    const newLocation = ForecastService.getSelectedLocation(value);
    if (newLocation) {
      setLocationData(newLocation);
    }
  };

  const selector = (
    <Select
      value={locationData.label}
      onChange={handleSelectChange}
      options={ForecastService.getLocationsOptions()}
      style={{ width: 130 }}
    />
  );

  const summary = (
    <ForecastSummary
      description={weatherData?.weather[0].description}
      icon={weatherData?.weather[0].icon}
    />
  );

  return (
    <ForecastDescriptions
      summary={summary}
      selector={selector}
      title={ForecastService.getTitle(locationData.label)}
      weatherData={weatherData}
    />
  );
};

export default ForecastPage;

import React, { useState, useEffect, useCallback } from "react";
import { LOCATIONS } from "../constants/forecast/ForecastConstants";
import IWeatherData from "../interfaces/forecast/IWeatherData";
import ILocationData from "../interfaces/forecast/ILocationData";
import ForecastService from "../services/ForecastService";
import ForecastDescriptions from "../components/forecast/ForecastDescriptions";
import ForecastSummary from "../components/forecast/ForecastSummary";
import { Select } from "antd";

/**
 * This component builds the Forecast Page for the app
 */
const ForecastPage: React.FC = () => {
  // locationData holds the current location to display it's forecast, initially home
  const [locationData, setLocationData] = useState<ILocationData>(LOCATIONS[0]);
  // weatherData holds the current weather on locationData
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);

  /**
   * the fetchData function using useCallback hook to fetch relevant weather data from
   * an external API and set weatherData piece of state with it.
   * It changes when locationData has changed.
   */
  const fetchData = useCallback(async () => {
    const res = await fetch(
      ForecastService.getApiUrl(locationData.latitude, locationData.longitude)
    );
    const data = await res.json();
    setWeatherData(data.current);
  }, [locationData]);

  /**
   * useEffect hook - call fetchData on first render and each time locationData has changed.
   */
  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    fetchData();
  }, [locationData, fetchData]);

  /**
   * This function is the selector onChange callback.
   * It gets the new location value picked by the user and set locationData piece
   * of state with the new location data
   *
   * @param {string} value - New value selected by user
   * @returns {void}
   */
  const handleSelectChange = (value: string) => {
    const newLocation = ForecastService.getSelectedLocation(value);
    if (newLocation) {
      setLocationData(newLocation);
    }
  };

  // The selector is using Antd Select component
  const selector = (
    <Select
      value={locationData.label}
      onChange={handleSelectChange}
      options={ForecastService.getLocationsOptions()}
      style={{ width: 130 }}
    />
  );

  // The summary is using ForecastSummary component
  const summary = (
    <ForecastSummary
      description={weatherData?.weather[0].description}
      icon={weatherData?.weather[0].icon}
    />
  );

  // Return ForecastDescriptions component with all props built earlier
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

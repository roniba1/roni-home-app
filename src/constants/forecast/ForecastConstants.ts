import ILocationData from "../../interfaces/forecast/ILocationData";

/**
 * LOCATIONS constant holds the data for the relevant locations to retrieve forecast
 */
export const LOCATIONS: ILocationData[] = [
  {
    value: "home",
    label: "Home",
    latitude: 32.33,
    longitude: 34.95,
  },
  {
    value: "kindergarten",
    label: "Kindergarten",
    latitude: 32.36,
    longitude: 34.92,
  },
  {
    value: "work",
    label: "Work",
    latitude: 32.27,
    longitude: 34.85,
  },
];

/**
 * API_KEY for the OpenWeather API calls
 */
export const API_KEY = "7830b3a060d8739ac5d8271370d2f78d";

/**
 * UNITS for the OpenWeather API calls
 */
export const UNITS = "metric";

export const TITLE = "Current Forecast - ";

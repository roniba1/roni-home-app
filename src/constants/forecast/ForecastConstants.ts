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

/**
 * LABELS for Descriptions component
 */
export const LABELS = {
  SUMMARY: "Summary",
  TEMP: "Temperature",
  FEELS_LIKE: "Feels like",
  HUMIDITY: "Humidity",
  UVI: "UV index",
  WIND_SPEED: "Wind speed",
  CLOUDS: "Cloudiness",
};

export const LOADER_TEXT = "Loading weather data";

/**
 * CLASS_NAMES for css styling
 */
export const CLASS_NAMES = {
  DESCRIPTIONS: "descriptions",
  SELECT: "select",
};

export const ICON_WIDTH = 25;

/**
 * API_URL is the url parts for call to external API
 */
export const API_URL = {
  BASE_URL: "https://api.openweathermap.org/data/3.0/onecall?lat=",
  URL_MIDDLE: "&lon=",
  URL_END: "&units=" + UNITS + "&appid=" + API_KEY,
};

/**
 * IMG_URL is the url for forecast icon
 */
export const IMG_URL = {
  BASE_URL: "https://openweathermap.org/img/wn/",
  URL_END: "@2x.png",
};

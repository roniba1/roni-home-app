import {
  TITLE,
  LOCATIONS,
  API_URL,
  IMG_URL,
} from "../constants/forecast/ForecastConstants";

/**
 * This is a static service class for Forecast page
 */
class ForecastService {
  /**
   * This static function receives the latitude & longitude of location and build an url for external API call
   *
   * @param {number} lat - Latitude
   * @param {number} lon - Longitude
   * @returns {string} - Url for external API call
   */
  static getApiUrl = (lat: number, lon: number) => {
    return `${API_URL.BASE_URL}${lat}${API_URL.URL_MIDDLE}${lon}${API_URL.URL_END}`;
  };

  /**
   * This static function receive a label and build a title string
   *
   * @param {string} label - Current text to add to TITLE
   * @returns {string} - The current title for label
   */
  static getTitle = (label: string) => {
    return TITLE + label;
  };

  /**
   * This static function return an Array of locations for Select component
   *
   * @returns {{label: string, value: string}[]} - An array for location selector
   */
  static getLocationsOptions = () => {
    return LOCATIONS.map((locationData) => {
      return {
        value: locationData.value,
        label: locationData.label,
      };
    });
  };

  /**
   * This static function receive a string and find the relevant locationData object for it
   *
   * @param {string} value - locationData value
   * @returns {ILocationData} - locationData object for value
   */
  static getSelectedLocation = (value: string) => {
    return LOCATIONS.find((locationData) => {
      return locationData.value === value;
    });
  };

  /**
   * This static function receive a string and build a URL with it
   *
   * @param {string} icon - The icon name
   * @returns {string} - The icon image url
   */
  static getImageUrl = (icon: string) => {
    return `${IMG_URL.BASE_URL}${icon}${IMG_URL.URL_END}`;
  };
}

export default ForecastService;

/**
 * This interface represents the data returns from OpenWeather API and relevant for the app
 */
interface IWeatherData {
  temp: number;
  feels_like: number;
  humidity: number;
  uvi: number;
  wind_speed: number;
  clouds: number;
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
}

export default IWeatherData;

import IWeatherData from "./IWeatherData";

/**
 * This interface represent the props object for ForecastDescriptions component
 */
interface IForecastDescriptionProps {
    title: string;
    selector: JSX.Element;
    summary: JSX.Element;
    weatherData: IWeatherData | null;
}

export default IForecastDescriptionProps;
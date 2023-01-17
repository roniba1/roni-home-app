import { API_KEY, UNITS, TITLE, LOCATIONS } from "../constants/forecast/ForecastConstants";

class ForecastService {
    static getApiUrl = (lat: number, lon: number) => {
        return `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${UNITS}&appid=${API_KEY}`
    };

    static getTitle = (label: string) => {
        return TITLE + label;
    };

    static getLocationsOptions = () => {
        return LOCATIONS.map((locationData) => {
            return {
                value: locationData.value,
                label: locationData.label
            };
        });
    }

    static getSelectedLocation = (value: string) => {
        return LOCATIONS.find((locationData) => {
            return locationData.value === value;
        });
    }
}

export default ForecastService;
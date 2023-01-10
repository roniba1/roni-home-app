import React, { useState, useEffect } from "react";
import { Descriptions, Button } from 'antd'

interface WeatherData {
    current: {
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
    };
}

const API_KEY = '7830b3a060d8739ac5d8271370d2f78d';
const UNITS = 'metric';
const OPTIONS = [
    "home",
    "kindergarten",
    "work"
];

interface LocationData {
    label: string;
    latitude: number;
    longitude: number;
}
const LOCATIONS = {
    home: {
        label: "Home",
        latitude: 32.33,
        longitude: 34.95
    },
    kindergarten: {
        label: "Kindergarten",
        latitude: 32.36,
        longitude: 34.92
    },
    work: {
        label: "Work",
        latitude: 32.27,
        longitude: 34.85
    }
};

const ForecastPage: React.FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [locationData, setLocationData] = useState<LocationData>(LOCATIONS.home);

    const getUrl = () => {
        return `https://api.openweathermap.org/data/3.0/onecall?lat=${locationData.latitude}&lon=${locationData.longitude}&units=${UNITS}&appid=${API_KEY}`
    }

    const title = "Current Forecast - " + locationData.label;

    const fetchData = async() => {
        const res = await fetch(getUrl());
        const data = await res.json();
        setWeatherData(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (weatherData === null) {
        return <div>Loading weather data...</div>;
    }

    return (
        <div style={{margin:"25px"}}>
            <Descriptions
                bordered
                title={title}
                extra={<Button type="primary">Edit</Button>}>
                <Descriptions.Item label="Description">{weatherData.current.weather[0].description}</Descriptions.Item>
                <Descriptions.Item label="Temperature">{weatherData.current.temp}</Descriptions.Item>
                <Descriptions.Item label="Feels like">{weatherData.current.feels_like}</Descriptions.Item>
                <Descriptions.Item label="Humidity">{weatherData.current.humidity}%</Descriptions.Item>
                <Descriptions.Item label="UV index">{weatherData.current.uvi}</Descriptions.Item>
                <Descriptions.Item label="Wind speed">{weatherData.current.wind_speed}</Descriptions.Item>
                <Descriptions.Item label="Cloudiness">{weatherData.current.clouds}%</Descriptions.Item>
            </Descriptions>
        </div>
    );
}

export default ForecastPage;
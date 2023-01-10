import React, { useState, useEffect } from "react";
import {Descriptions, Image, Select} from 'antd'

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

interface LocationData {
    value: string;
    label: string;
    latitude: number;
    longitude: number;
}
const LOCATIONS = [
    {
        value: "home",
        label: "Home",
        latitude: 32.33,
        longitude: 34.95
    },
    {
        value: "kindergarten",
        label: "Kindergarten",
        latitude: 32.36,
        longitude: 34.92
    },
    {
        value: "work",
        label: "Work",
        latitude: 32.27,
        longitude: 34.85
    }
];

const ForecastPage: React.FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [locationData, setLocationData] = useState<LocationData>(LOCATIONS[0]);

    const getUrl = () => {
        return `https://api.openweathermap.org/data/3.0/onecall?lat=${locationData.latitude}&lon=${locationData.longitude}&units=${UNITS}&appid=${API_KEY}`
    }

    const title = "Current Forecast - " + locationData.label;

    const options = LOCATIONS.map((locationData) => {
            return {
                value: locationData.value,
                label: locationData.label
            };
        });

    const fetchData = async() => {
        const res = await fetch(getUrl());
        const data = await res.json();
        setWeatherData(data);
    };

    useEffect(() => {
        fetchData();
    }, [locationData]);

    const handleSelectChange = (value: string) => {
        const newLocation = LOCATIONS.find((locationData) => {
            return locationData.value === value;
        });
        if (newLocation) {
            setLocationData(newLocation);
        }
    };

    const selector = (
        <Select
        placeholder="Choose category"
        value={locationData.label}
        onChange={handleSelectChange}
        options={options}
        style={{
            width: 130
        }}
    />);

    const description = <>
        <Image
            width={25}
            preview={false}
            src={`http://openweathermap.org/img/wn/${weatherData?.current.weather[0].icon}@2x.png`}
        />
        {weatherData?.current.weather[0].description}
    </>;


    if (weatherData === null) {
        return <div>Loading weather data...</div>;
    }

        return (
            <div style={{margin:"25px"}}>
                <Descriptions
                    bordered
                    title={title}
                    extra={selector}>
                    <Descriptions.Item label="Description">{description}</Descriptions.Item>
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
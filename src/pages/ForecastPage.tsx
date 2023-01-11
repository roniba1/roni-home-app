import React, { useState, useEffect } from "react";
import { API_KEY, UNITS, LOCATIONS } from "../constants/forecast/ForecastConstants";
import IWeatherData from "../interfaces/forecast/IWeatherData";
import ILocationData from "../interfaces/forecast/ILocationData";
import { Descriptions, Image, Select } from 'antd'

const ForecastPage: React.FC = () => {
    const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);
    const [locationData, setLocationData] = useState<ILocationData>(LOCATIONS[0]);

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
        // noinspection JSIgnoredPromiseFromCall
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
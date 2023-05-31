import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const API_KEY = '68e1864303dae3362322d5ee63e92950';
    const location = 'Pune';

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
                );
                setWeatherData(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, [location]);

    if (!weatherData) {
        return <div>Loading weather data...</div>;
    }

    return (
        <div>
            <h2>Your Current Location:{location}</h2>
            <p>Temperature: {weatherData.main.temp}</p>
            <p>Humidity: {weatherData.main.humidity}</p>
            <p>Air Quality: {weatherData.airQuality}</p>
            <p>Wind: {weatherData.wind.speed}</p>
            <p>Wind Gusts: {weatherData.wind.gust}</p>
        </div>
    );
};

export default Weather;

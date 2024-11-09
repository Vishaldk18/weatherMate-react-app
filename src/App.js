// App.js
import './App.css'
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import WeatherItem from './components/WeatherItem';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  // Fetch weather data by city name
  const fetchWeatherByCity = async (city) => {
    if (!city) return;

    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=b86aca939f0048afb1473248240408&q=${city}`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
    }
  };

  // Fetch weather data by latitude and longitude
  const fetchWeatherByLocation = async (latitude, longitude) => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=b86aca939f0048afb1473248240408&q=${latitude},${longitude}`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
    }
  };

  // Handle using user's location to fetch weather data
  const handleUseLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeatherByLocation(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Unable to retrieve your location.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  // Fetch weather data for Mumbai by default on component mount
  useEffect(() => {
    fetchWeatherByCity('Mumbai');
  }, []);

  return (
    <div>
      <Navbar onSearch={fetchWeatherByCity} onUseLocation={handleUseLocation} />
      {weatherData && <WeatherItem current={weatherData.current} location={weatherData.location} />}
    </div>
  );
};

export default App;

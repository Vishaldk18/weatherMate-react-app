import React from 'react';
import './weatherItem.css';

const WeatherItem = (props) => {
  const { current, location } = props;

  // Ensure location and tz_id are available
  const tz_id = location?.tz_id;

  // Get the current time in the specified timezone if tz_id exists
  const localTime = tz_id
    ? new Date().toLocaleString("en-US", {
        timeZone: tz_id,
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      })
    : "Time data not available";

  return (
    <div className="weather-card-container">
  <div className="card mb-3 weather-card">
    <div className="row g-0">
      <div className="col-md-4 weather-icon-container">
        {current?.condition?.icon ? (
          <img
            src={current.condition.icon}
            className="img-fluid rounded-start"
            alt="Weather icon"
          />
        ) : (
          <p>No icon available</p>
        )}
        {current?.condition?.text ? (
          <p>{current.condition.text}</p>
        ) : (
          <p>No text available</p>
        )}
      </div>
      <div className="col-md-8">
        <div className="card-body weather-card-body">
          {location?.name && location?.country ? (
            <h4 className="card-title weather-card-title">
              {location.name}, {location.country}
            </h4>
          ) : (
            <h5 className="card-title">Location not available</h5>
          )}
          <div className="card-text">
            <h5>{localTime}</h5>
          </div>
          {current?.temp_c !== undefined ? (
            <h4 className="weather-temperature">Temperature: {current.temp_c}°C</h4>
          ) : (
            <h4 className="weather-temperature">Temperature not available</h4>
          )}
          {current?.feelslike_c !== undefined ? (
            <p className="card-text weather-details">
              <small>Feels Like: {current.feelslike_c}°C</small>
            </p>
          ) : (
            <p className="card-text weather-details">
              <small>Feels Like data not available</small>
            </p>
          )}
          {current?.wind_kph !== undefined ? (
            <p className="card-text weather-details">
              <small>Wind Speed: {current.wind_kph} kph</small>
            </p>
          ) : (
            <p className="card-text weather-details">
              <small>Wind Speed data not available</small>
            </p>
          )}
          {current?.humidity !== undefined ? (
            <p className="card-text weather-details">
              <small>Humidity: {current.humidity}%</small>
            </p>
          ) : (
            <p className="card-text weather-details">
              <small>Humidity data not available</small>
            </p>
          )}
          {current?.last_updated !== undefined ? (
            <p className="card-text weather-last-updated">
              <small>Last updated: {current.last_updated}</small>
            </p>
          ) : (
            <p className="card-text weather-last-updated">
              <small>Data Not Found</small>
            </p>
          )}
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default WeatherItem;

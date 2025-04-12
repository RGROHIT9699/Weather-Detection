// client/src/components/WeatherCard.jsx
import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weatherData, isDark }) => {
 
  const {
    name: city,
    sys: { country },
    main: { temp, feels_like, humidity },
    weather: [{ description, icon }],
    wind: { speed: windSpeed },
    dt: timestamp
  } = weatherData;

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  };

  return (
    <div className={`weather-card ${isDark ? 'dark' : 'light'}`}>
      <div className="weather-header">
        <h2>{city}, {country}</h2>
        <p className="timestamp">Updated : {formatDate(timestamp)}</p>
      </div>

      <div className="weather-content">
        <div className="weather-main">
          <div className="weather-icon">
            <img 
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`} 
              alt={description} 
            />
            <p className="description">{description}</p>
          </div>

          <div className="temperature-container">
            <h1 className="temperature">{Math.round(temp)}°C</h1>
            <p className="feels-like">It seems: {Math.round(feels_like)}°C</p>
          </div>
        </div>

        <div className="weather-details">
          <div className="detail-item">
            <span className="detail-label">Humidity:</span>
            <span className="detail-value">{humidity}%</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">Wind Speed:</span>
            <span className="detail-value">{windSpeed} m/s</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
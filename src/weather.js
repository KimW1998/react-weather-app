import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="weather-app">
          <div className="row">
            <div className="col-9">
              <p id="current"> Sunday 00:50</p>
            </div>
            <div className="col-3">
              <p>
                <button id="celsius" className="active">
                  {" "}
                  °C
                </button>{" "}
                |{" "}
                <button  id="fahrenheit">
                  {" "}
                  °F
                </button>
              </p>
            </div>
          </div>
          <form className="search-form" id="search-form">
            <div className="row">
              <div className="col-6">
                <input
                  id="city-input"
                  type="search"
                  autofocus="on"
                  placeholder="Enter City..."
                  autocomplete="off"
                />
              </div>
              <div className="col-2">
                <input type="submit" value="Search" />
              </div>
              <div className="col-4">
                <button type="button" id="current-location-button">
                  My location
                </button>
              </div>
            </div>
          </form>
          <br />
          <div className="row">
            <div className="col-12">
              <h1 id="city">Bennekom</h1>
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <img className="sun" id="icon" src="" alt="Clear" />
            </div>
            <div className="col-6 feels-like">
            <ul>
              <li>
                ☺︎ Feels like: <span id="feels-like"></span>°C
              </li>
              <li>
                ☀︎ High: <span id="high"></span>°C
              </li>
              <li>
                ☼ Low: <span id="low"></span>°C
              </li>
              <li>
                ✇ Humidity: <span id="humidity"></span>%
              </li>
              <li>
                ☁︎ Wind: <span id="wind"></span> km/h
              </li>
            </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="temperature-now">
              {" "}
              <span className="today-temp" id="current-temperature"></span>°
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="conditions" id="description"></p>
            <br />
          </div>
        </div>
        <div className="row" id="forecast"></div>
      </div>
    </div>
  );
}

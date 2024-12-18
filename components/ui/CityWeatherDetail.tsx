import React from "react";

interface MoreWeatherDetails {
  [key: string]: string;
}

export default function CityWeatherDetial({
  tempC = "",
  tempF = "",
  humidity = "",
  windSpeed = "",
}: MoreWeatherDetails) {
  return (
    <div className="mt-4 text-center">
      <p>
        Tempreture: {tempC}°C/{tempF}
        °F
      </p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {windSpeed} KPH</p>
    </div>
  );
}

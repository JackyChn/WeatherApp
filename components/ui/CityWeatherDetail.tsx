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
    <div className="mt-4 text-center text-black">
      <p>
        <span className="italic text-blue-500">Tempreture:</span> {tempC}°C/
        {tempF}
        °F
      </p>
      <p>
        <span className="italic text-blue-500">Humidity:</span> {humidity}%
      </p>
      <p>
        <span className="italic text-blue-500">Wind Speed:</span> {windSpeed}{" "}
        KPH
      </p>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import SearchButton from "./SearchButton";
import { getWeatherInfo } from "@/services/weatherApi";
import Image from "next/image";

interface CityWeatherInfoProps {
  tempC: string;
  tempF: string;
  cloud: string;
  condition: {
    text: string;
    icon: string;
  };
  humidity: string;
  windKph: string;
}

export default function SearchWeather() {
  const [city, setCity] = useState<string>("");
  const [cityWeatherInfo, setCityWeatherInfo] = useState<CityWeatherInfoProps>({
    tempC: "",
    tempF: "",
    cloud: "",
    condition: {
      text: "",
      icon: "",
    },
    humidity: "",
    windKph: "",
  });
  const [officialName, setOfficialName] = useState<string>("");

  const searchCityWeather = async () => {
    const cityInfo = await getWeatherInfo({ city });
    const filteredWeatherInfo: CityWeatherInfoProps = {
      tempC: cityInfo.current.temp_c.toString(),
      tempF: cityInfo.current.temp_f.toString(),
      cloud: cityInfo.current.cloud.toString(),
      condition: {
        text: cityInfo.current.condition.text,
        icon: cityInfo.current.condition.icon,
      },
      humidity: cityInfo.current.humidity.toString(),
      windKph: cityInfo.current.wind_kph.toString(),
    };
    setCityWeatherInfo(filteredWeatherInfo);
    console.log(cityWeatherInfo.condition.icon);
    setOfficialName(cityInfo.location.name);
  };

  return (
    <div className="w-96 h-96 bg-blue-100 bg-opacity-80 border-2 border-blue-300 rounded-xl">
      <h1 className="text-center font-semibold mt-2">
        Check weather for any city
      </h1>
      <div className="w-full flex items-center justify-center mt-6">
        <input
          required
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="Enter city name...."
          className="w-full max-w-[80%] p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <SearchButton onClick={searchCityWeather} />
      </div>

      {cityWeatherInfo ? (
        <div className="grid gird-cols-[170px, 1fr]">
          {cityWeatherInfo.condition.icon && (
            <div className="justify-center border-2">
              <Image
                src={`https:${cityWeatherInfo.condition.icon}`}
                alt="weather"
                width={100}
                height={70}
                className="text-center"
              />
            </div>
          )}
          <div>
            <p>weather name</p>
            <p>temp</p>
            <p>humidity</p>
            <p>wind speed</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

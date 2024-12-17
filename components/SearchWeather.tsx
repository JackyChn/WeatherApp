"use client";

import React, { useState } from "react";
import SearchButton from "./ui/SearchButton";
import { getWeatherInfo } from "@/services/weatherApi";
import Image from "next/image";
import WeatherInfoPlaceHolder from "./ui/WeatherInfoPlaceHolder";
import CityNotFound from "./ui/CityNotFound";

interface CityWeatherInfoProps {
  tempC: string;
  tempF: string;
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
  const [isCityExsits, setIsCityExsits] = useState<boolean>(true);
  const [officialName, setOfficialName] = useState<string>("");

  const searchCityWeather = async () => {
    const cityInfo = await getWeatherInfo({ city });

    if (cityInfo === false) {
      console.error("City not found or invalid response");
      setIsCityExsits(false); // No such city (user mistype)
      // Reset the weather info
      setCityWeatherInfo({
        tempC: "",
        tempF: "",
        condition: {
          text: "",
          icon: "",
        },
        humidity: "",
        windKph: "",
      });
      setOfficialName("");
      return;
    }

    // Fetch & assign the weather infomation that we need to filteredWeatherInfo cause the reponse contains other uncessary info
    const filteredWeatherInfo: CityWeatherInfoProps = {
      tempC: cityInfo.current.temp_c.toString(),
      tempF: cityInfo.current.temp_f.toString(),
      condition: {
        text: cityInfo.current.condition.text,
        icon: cityInfo.current.condition.icon,
      },
      humidity: cityInfo.current.humidity.toString(),
      windKph: cityInfo.current.wind_kph.toString(),
    };

    setCityWeatherInfo(filteredWeatherInfo); // setState to WeatherInfo
    setOfficialName(cityInfo.location.name);
    setIsCityExsits(true); // the city does exsits
  };

  return (
    <div className="w-96 h-80 bg-blue-100 bg-opacity-80 border-2 border-blue-300 rounded-xl">
      <div className="w-full flex items-center justify-center mt-6">
        {/* Enter keydown listener to the input */}
        <input
          required
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchCityWeather(); // Trigger the search on Enter key
            }
          }}
          type="text"
          placeholder="Enter city name...."
          className="w-full max-w-[80%] p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <SearchButton onClick={searchCityWeather} />
      </div>

      {cityWeatherInfo ? (
        <div className="w-full grid gird-cols-[170px, 1fr] items-center mt-2">
          <div className="w-full flex items-center justify-center mt-2 ">
            {/* Weather image and condition */}
            {cityWeatherInfo.condition.icon && (
              <div className="flex items-center">
                <Image
                  src={`https:${cityWeatherInfo.condition.icon}`}
                  alt="weather"
                  width={120}
                  height={70}
                />
              </div>
            )}
            {/* City Name */}
            <div className="flex flex-col items-center justify-center gap-y-2 px-4">
              <p className="text-2xl font-semibold">{officialName}</p>
              <p className="text-lg text-gray-700">
                {cityWeatherInfo.condition.text}
              </p>
            </div>
          </div>

          {/* More Weather details */}
          {cityWeatherInfo.humidity ? (
            <div className="text-center mt-4">
              <p>
                Tempreture: {cityWeatherInfo.tempC}°C/{cityWeatherInfo.tempF}°F
              </p>
              <p>Humidity: {cityWeatherInfo.humidity}%</p>
              <p>Wind Speed: {cityWeatherInfo.windKph} KPH</p>
            </div>
          ) : (
            <>{isCityExsits ? <WeatherInfoPlaceHolder /> : <CityNotFound />}</>
          )}
        </div>
      ) : (
        <>abc</>
      )}
    </div>
  );
}

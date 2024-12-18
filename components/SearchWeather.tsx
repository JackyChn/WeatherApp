"use client";

import React, { useState } from "react";
import { getWeatherInfo } from "@/services/weatherApi";
import SearchButton from "./ui/SearchButton";
import Image from "next/image";
import WeatherInfoPlaceHolder from "./ui/WeatherInfoPlaceHolder";
import CityNotFound from "./ui/CityNotFound";
import Spinner from "./ui/Spinner";
import CityWeatherDetail from "./ui/CityWeatherDetail";
import CityDes from "./ui/CityDes";

// 48 weather types in total

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
  const [bgType, setBgType] = useState<string>("Sunny");
  const [city, setCity] = useState<string>("");
  const [cityWeatherInfo, setCityWeatherInfo] = useState<CityWeatherInfoProps>({
    tempC: "",
    tempF: "",
    condition: {
      text: "",
      icon: "",
    },
    humidity: "",
    windKph: "",
  });
  const [isCityExsits, setIsCityExsits] = useState<boolean>(true);
  const [officialName, setOfficialName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchCityWeather = async () => {
    setIsLoading(true); // Start loading
    try {
      const cityInfo = await getWeatherInfo({ city });

      if (cityInfo === false) {
        setIsCityExsits(false);
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

      // Encapsulate the filtered weahter
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

      setCityWeatherInfo(filteredWeatherInfo);
      console.log(filteredWeatherInfo.condition.text);
      setBgType(getBgType(filteredWeatherInfo.condition.text));
      setOfficialName(cityInfo.location.name);
      setIsCityExsits(true);
    } catch (error) {
      console.error("Error fetching weather info:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <>
      {/* background image */}
      <Image
        src={`/${bgType}.jpg`}
        alt="Background"
        key={bgType}
        fill
        priority
        className="z-[-10] object-cover transition-all duration-500 ease-in-out"
      />

      {/* main */}
      <div className="h-80 w-96 rounded-xl border-2 border-blue-300 bg-blue-100 bg-opacity-80">
        <div className="mt-6 flex w-full items-center justify-center">
          {/* enter keydown listener to the input */}
          <input
            required
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchCityWeather(); // trigger the search on Enter key
              }
            }}
            type="text"
            placeholder="Enter city name...."
            className="w-full max-w-[80%] rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <SearchButton onClick={searchCityWeather} />
        </div>

        {isLoading ? (
          <div className="flex h-full items-center justify-center">
            <Spinner />
          </div>
        ) : (
          cityWeatherInfo && (
            <div className="grid-cols-[170px, 1fr] mt-2 grid w-full items-center">
              <div className="mt-2 flex w-full items-center justify-center">
                {/* weather image and condition */}
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

                {/* city Description */}
                <CityDes
                  officialName={officialName}
                  weather={cityWeatherInfo.condition.text}
                />
              </div>

              {/* more Weather details */}
              {cityWeatherInfo.humidity ? (
                <CityWeatherDetail
                  tempC={cityWeatherInfo.tempC}
                  tempF={cityWeatherInfo.tempF}
                  humidity={cityWeatherInfo.humidity}
                  windSpeed={cityWeatherInfo.windKph}
                />
              ) : (
                <>
                  {isCityExsits ? <WeatherInfoPlaceHolder /> : <CityNotFound />}
                </>
              )}
            </div>
          )
        )}
      </div>
    </>
  );
}

// categorize the weather
function getBgType(weatherDescription: string) {
  // make weather type text to lowercase
  const lowerCaseDescription = weatherDescription.toLowerCase();

  // sunny
  if (
    lowerCaseDescription.includes("sunny") ||
    lowerCaseDescription.includes("clear")
  ) {
    return "Sunny";
  }

  // cloudy
  if (
    lowerCaseDescription.includes("cloudy") ||
    lowerCaseDescription.includes("overcast") ||
    lowerCaseDescription.includes("Fog") ||
    lowerCaseDescription === "Mist"
  ) {
    return "Cloudy";
  }

  // rainy
  if (
    lowerCaseDescription.includes("rain") ||
    lowerCaseDescription.includes("drizzle")
  ) {
    return "Rainy";
  }

  // snowy
  if (
    lowerCaseDescription.includes("snow") ||
    lowerCaseDescription === "Blizzard"
  ) {
    return "Snowy";
  }

  return "Unkonwn";
}

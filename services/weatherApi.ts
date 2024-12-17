import { env } from "process";

export async function getWeatherInfo({ city }: { city: string }) {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${city}&aqi=no`,
  );
  console.log("res: ", res);
  return res;
}

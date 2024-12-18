export async function getWeatherInfo({
  city,
}: {
  city: string;
}): Promise<WeatherInfo | false> {
  // response may be error if city not exsits, return an object or false (no such city)
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${city}&aqi=no`,
    );
    if (!res.ok) return false;

    const data = await res.json();
    return data as WeatherInfo;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}

export async function getWeatherInfo({ city }: { city: string }) {
  try {
    const res = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${city}&aqi=no`,
    );
    if (!res.ok) throw new Error("City not found!");
    return res.json();
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

import axios from "axios";
import { WeatherApiResponse } from "./responseTypes";

export default async function getFiveDayForecast(
  lat: number,
  lon: number
): Promise<WeatherApiResponse> {
  const response = await axios.get<WeatherApiResponse>(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }`
  );
  if (response.statusText !== "OK") throw new Error(response.statusText);
  return response.data;
}

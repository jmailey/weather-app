import axios from "axios";
import { LocationApiResponse } from "./responseTypes";

export default async function getLocationCoords(
  query: string
): Promise<LocationApiResponse> {
  const response = await axios.get<LocationApiResponse>(
    `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=10&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }`
  );
  if (response.statusText !== "OK") throw new Error(response.statusText);
  return response.data;
}

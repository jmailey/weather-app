import { useState } from "react";
import getFiveDayForecast from "../../api/getFiveDayForecast";
import { Coord, WeatherApiResponse } from "../../api/responseTypes";

export default function useWeatherAPI() {
  const [fetching, setFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [forecast, setForecast] = useState<WeatherApiResponse | null>(null);

  const fetchForecast = async ({ lat, lon }: Coord) => {
    try {
      setFetching(true);
      const response = await getFiveDayForecast(lat, lon);
      setFetching(false);
      setForecast(response);
      return response;
    } catch (error) {
      let message = "Unknown Error";
      if (error instanceof Error) message = error.message;
      setErrorMessage(message);
    }
  };

  return {
    fetchForecast,
    fetching,
    errorMessage,
    forecast,
  };
}

import { useState } from "react";
import getFiveDayForecast from "../../api/getFiveDayForecast";
import { Coord } from "../../api/responseTypes";

export default function useWeatherAPI() {
  const [fetching, setFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchForecast = async ({ lat, lon }: Coord) => {
    try {
      setFetching(true);
      const response = await getFiveDayForecast(lat, lon);
      setFetching(false);
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
  };
}

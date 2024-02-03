import { useState } from "react";

import getLocationCoords from "../../api/getLocationCoords";
import { LocationApiResponse } from "../../api/responseTypes";

export default function useGeoCoderAPI() {
  const [locations, setLocations] = useState<LocationApiResponse | null>(null);
  const [fetching, setFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchLocations = async (location: string) => {
    try {
      setFetching(true);
      const data = await getLocationCoords(location);
      setLocations(data);
      setFetching(false);
    } catch (error) {
      let message = "Unknown Error";
      if (error instanceof Error) message = error.message;
      setErrorMessage(message);
    }
  };

  return {
    fetching,
    fetchLocations,
    locations,
    errorMessage,
  };
}

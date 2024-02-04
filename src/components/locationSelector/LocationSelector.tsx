import Button from "../button/Button";
import useWeatherAPI from "../../hooks/useWeatherAPI/useWeatherAPI";
import { Dispatch, SetStateAction } from "react";
import {
  Coord,
  LocationApiResponse,
  WeatherApiResponse,
} from "../../api/responseTypes";

type LocationSelectorProps = {
  locations: LocationApiResponse;
  setForecast: Dispatch<SetStateAction<WeatherApiResponse | null>>;
};

export default function LocationSelector({
  locations,
  setForecast,
}: LocationSelectorProps) {
  const { errorMessage, fetchForecast, fetching } = useWeatherAPI();

  const handleSelect = async (coord: Coord) => {
    const forecast = await fetchForecast(coord);
    if (forecast) {
      setForecast(forecast);
    }
  };

  if (errorMessage) {
    return <p className="text-red-500 text-center">{errorMessage}</p>;
  }

  return (
    <>
      <h2 className="text-center" data-testid="locations-found-heading">
        Found {locations.length} results for location, please select.
      </h2>
      <div className="md:flex justify-center">
        {locations.map(({ state, country, lat, lon }, index) => (
          <div
            key={index}
            className="p-4 text-center flex md:block justify-between bg-slate-200 mb-2 items-center"
          >
            <div>
              <span>{state}</span>, <span>{country}</span>
            </div>
            <Button
              text="Select"
              onClick={() => handleSelect({ lat, lon })}
              disabled={fetching}
              dataTestID="location-select-button"
            />
          </div>
        ))}
      </div>
    </>
  );
}

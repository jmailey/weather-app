import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import LocationSelector from "../LocationSelector";
import Button from "../button/Button";
import useGeoCoderAPI from "../../hooks/useGeoCoderAPI/useGeoCoderAPI";
import { WeatherApiResponse } from "../../api/responseTypes";

type LocationSearchProps = {
  setForecast: Dispatch<SetStateAction<WeatherApiResponse | null>>;
  forecast: WeatherApiResponse | null;
};

export default function LocationSearch({
  setForecast,
  forecast,
}: LocationSearchProps) {
  const [location, setLocation] = useState("");

  const { errorMessage, fetchLocations, locations, fetching } =
    useGeoCoderAPI();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setForecast(null);
    fetchLocations(location);
  };

  const updateLocation = (e: ChangeEvent<HTMLInputElement>) =>
    setLocation(e.target.value);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="grid gap-8 bg-slate-200 p-8 mb-8 max-w-lg m-auto"
      >
        <div className="grid gap-1">
          <label htmlFor="location">Find forecast for next 5 days</label>
          <input
            type="text"
            autoFocus
            className="p-4 rounded border-gray-400"
            id="location"
            placeholder="Enter town or city"
            value={location}
            onChange={updateLocation}
            data-testid="location-search-input"
            required
          />
        </div>
        <Button
          text="Search"
          disabled={fetching}
          dataTestID="location-search-button"
        />
      </form>
      {errorMessage && (
        <p className="text-red-500 text-center">{errorMessage}</p>
      )}
      {locations && !forecast && (
        <LocationSelector locations={locations} setForecast={setForecast} />
      )}
    </>
  );
}

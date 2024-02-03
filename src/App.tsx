import { useState } from "react";
import FiveDayForecast from "./components/fiveDayForecast/FiveDayForecast";
import LocationSearch from "./components/locationSearch/LocationSearch";
import { WeatherApiResponse } from "./api/responseTypes";

export default function App() {
  const [forecast, setForecast] = useState<WeatherApiResponse | null>(null);
  return (
    <div className="p-2">
      <header className="p-8">
        <h1 role="heading" className="text-slate-950 text-center">
          Weather
        </h1>
      </header>
      <LocationSearch setForecast={setForecast} forecast={forecast} />
      {forecast && <FiveDayForecast forecast={forecast} />}
    </div>
  );
}

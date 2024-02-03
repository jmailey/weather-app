import { useMemo } from "react";
import { convertTimestampsToDays } from "../../helpers/convertTimestampsToDays";
import { WeatherApiResponse } from "../../api/responseTypes";

export default function FiveDayForecast({
  forecast,
}: {
  forecast: WeatherApiResponse;
}) {
  const days = useMemo(() => convertTimestampsToDays(forecast), [forecast]);
  const formattedDays = Object.entries(days);

  return (
    <div className="bg-slate-200 p-8">
      <h1 className="text-sm font-bold mb-14">
        Results for {forecast.city.name}, {forecast.city.country}
      </h1>
      {formattedDays.map(([date, list], index) => (
        <div className="mb-14" key={index}>
          <h2 className="font-bold mb-2">{date}</h2>
          <div className="md:flex justify-between gap-4">
            {list.map((item, index) => (
              <div key={index} className="flex gap-8 md:flex-wrap">
                <p className="font-bold">
                  {item.dt_txt.split(" ")[1].slice(0, -3)}
                </p>
                <p>{item.weather[0].description}</p>{" "}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

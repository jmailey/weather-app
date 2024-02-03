import { WeatherApiResponse, WeatherList } from "../api/responseTypes";

export function convertTimestampsToDays(
  weather: WeatherApiResponse
): Record<string, WeatherList[]> {
  const days: Record<string, WeatherList[]> = {};
  weather.list.forEach((item) => {
    const date = new Date(item.dt * 1000); // Convert seconds to milliseconds
    const utcDate = new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate()
    );

    const dateString = utcDate.toLocaleDateString().split("T")[0]; // Get YYYY-MM-DD format

    if (!days[dateString]) {
      days[dateString] = [item];
    } else {
      days[dateString].push(item);
    }
  });

  return days;
}

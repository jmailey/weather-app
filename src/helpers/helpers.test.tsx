import { expectTypeOf } from "vitest";
import { convertTimestampsToDays } from "./convertTimestampsToDays";
import { mockWeatherAPIResponse } from "./mockWeatherAPIResponse";
import { WeatherList } from "../api/responseTypes";

describe("convertTimestampsToDays", () => {
  it("Takes a <WeatherAPIResponse> and returns an object { '03/02/2024': WeatherList[] }", () => {
    const days = convertTimestampsToDays(mockWeatherAPIResponse);
    const expectedObjectKeys = [
      "03/02/2024",
      "04/02/2024",
      "05/02/2024",
      "06/02/2024",
      "07/02/2024",
      "08/02/2024",
    ];

    expectTypeOf(days).toMatchTypeOf<Record<string, WeatherList[]>>;

    expectedObjectKeys.forEach((key) => expect(days).toHaveProperty(key));

    expectedObjectKeys.forEach((key) => {
      const values = days[key];
      values.forEach((value) => expect(value).toHaveProperty("weather"));
    });
  });
});

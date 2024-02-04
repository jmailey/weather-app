import { renderHook, act } from "@testing-library/react-hooks";
import useWeatherAPI from "./useWeatherAPI";
import { expectTypeOf } from "vitest";
import { WeatherApiResponse } from "../../api/responseTypes";

describe("useWeatherAPI", () => {
  it("fetches Weather", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useWeatherAPI());

    act(() => {
      result.current.fetchForecast({ lat: 55.861, lon: -4.2489 });
    });

    expect(result.current.fetching).toBe(true);
    await waitForNextUpdate();
    expect(result.current.fetching).toBe(false);
    expectTypeOf(result.current.forecast)
      .toMatchTypeOf<WeatherApiResponse | null>;
  });
});

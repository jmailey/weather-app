import { render, screen } from "@testing-library/react";
import FiveDayForecast from "./FiveDayForecast";
import { mockWeatherAPIResponse } from "../../helpers/mockWeatherAPIResponse";
import { convertTimestampsToDays } from "../../helpers/convertTimestampsToDays";

describe("FiveDayForecast", () => {
  it("renders FiveDayForecast component", () => {
    const forecastMock = mockWeatherAPIResponse;
    render(<FiveDayForecast forecast={forecastMock} />);
  });

  it("displays correct city and country information", () => {
    const forecastMock = mockWeatherAPIResponse;

    render(<FiveDayForecast forecast={forecastMock} />);

    expect(
      screen.getByText("Results for Glasgow City, GB")
    ).toBeInTheDocument();
  });

  it("renders correct number of days", () => {
    const forecastMock = mockWeatherAPIResponse;
    render(<FiveDayForecast forecast={forecastMock} />);

    const days = convertTimestampsToDays(forecastMock);

    expect(Object.keys(days).length).toBe(6);
  });

  it("renders correct time and description for each item", () => {
    const forecastMock = mockWeatherAPIResponse;
    render(<FiveDayForecast forecast={forecastMock} />);

    forecastMock.list.forEach((item) => {
      const times = screen.getAllByText(item.dt_txt.split(" ")[1].slice(0, -3));
      const descriptions = screen.getAllByText(item.weather[0].description);
      expect(times[0]).toBeInTheDocument();
      expect(descriptions[0]).toBeInTheDocument();
    });
  });
});

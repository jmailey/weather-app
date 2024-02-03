import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LocationSearch from "./LocationSearch";
import { vi } from "vitest";
import { mockWeatherAPIResponse } from "../../helpers/mockWeatherAPIResponse";

describe("LocationSearch", () => {
  it("Can search for a location and shows locations found.", async () => {
    const setForecast = vi.fn();
    render(<LocationSearch setForecast={setForecast} forecast={null} />);
    const searchInput = screen.getByTestId("location-search-input");
    const searchButton = screen.getByTestId("location-search-button");
    act(() => {
      fireEvent.change(searchInput, { target: { value: "Glasgow" } });
      searchButton.click();
    });

    const locationsFoundHeading = await screen.findByTestId(
      "locations-found-heading"
    );
    expect(locationsFoundHeading).toBeInTheDocument();
  });

  it("Does not show locations if showing weather forecast", async () => {
    const setForecast = vi.fn();
    render(
      <LocationSearch
        setForecast={setForecast}
        forecast={mockWeatherAPIResponse}
      />
    );
    const searchInput = screen.getByTestId("location-search-input");
    const searchButton = screen.getByTestId("location-search-button");
    act(() => {
      fireEvent.change(searchInput, { target: { value: "Glasgow" } });
      searchButton.click();
    });

    const locationsFoundHeading = await screen.queryByTestId(
      "locations-found-heading"
    );
    expect(locationsFoundHeading).not.toBeInTheDocument();
  });
});

import { renderHook, act } from "@testing-library/react-hooks";
import useGeoCoderAPI from "./useGeoCoderAPI";
import { expectTypeOf } from "vitest";
import { LocationApiResponse } from "../../api/responseTypes";

describe("useGeoCoderAPI", () => {
  it("fetches locations and updates state correctly", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGeoCoderAPI());

    act(() => {
      result.current.fetchLocations("New York");
    });

    expect(result.current.fetching).toBe(true);
    await waitForNextUpdate();
    expect(result.current.fetching).toBe(false);
    expect(result.current.locations).not.toBeNull();
    expectTypeOf(result.current.locations)
      .toMatchTypeOf<LocationApiResponse | null>;
  });
});

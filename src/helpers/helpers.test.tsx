import { convertTimestampsToDays } from "./convertTimestampsToDays";
import { mockWeatherAPIResponse } from "./mockWeatherAPIResponse";

describe("convertTimestampsToDays", () => {
  it("Converts a list of timeStamps into object where keys are dates and values are arrays of weather periods for day", () => {
    const days = convertTimestampsToDays(mockWeatherAPIResponse);
    const expectedObjectKeys = [
      "03/02/2024",
      "04/02/2024",
      "05/02/2024",
      "06/02/2024",
      "07/02/2024",
      "08/02/2024",
    ];
    expectedObjectKeys.forEach((key) => expect(days).toHaveProperty(key));

    expectedObjectKeys.forEach((key) => {
      const values = days[key];
      values.forEach((value) => expect(value).toHaveProperty("weather"));
    });
  });
});

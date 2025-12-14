// src/Main.test.js
import { initializeTimes, updateTimes } from "./Main";

describe("Booking reducer functions", () => {
  test("initializeTimes returns correct initial times", () => {
    const times = initializeTimes();

    // Check that breakfast, lunch, dinner exist
    expect(times).toHaveProperty("breakfast");
    expect(times).toHaveProperty("lunch");
    expect(times).toHaveProperty("dinner");

    // Optional: Check some exact slots
    expect(times.breakfast[0]).toEqual({
      time: "07:00",
      label: "7:00 AM",
      available: true,
    });

    const dinnerTimes = times.dinner.map((slot) => slot.time);
    expect(dinnerTimes).toEqual([
      "18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00"
    ]);
  });

  test("updateTimes returns same structure for future date", () => {
    const state = initializeTimes();
    const futureDate = "2099-01-01";

    const result = updateTimes(state, { date: futureDate });

    // The result should be a new object but same structure
    expect(result).toHaveProperty("breakfast");
    expect(result).toHaveProperty("lunch");
    expect(result).toHaveProperty("dinner");

    // All times should still be available
    expect(result.breakfast.every(slot => slot.available)).toBe(true);
    expect(result.lunch.every(slot => slot.available)).toBe(true);
    expect(result.dinner.every(slot => slot.available)).toBe(true);
  });
});

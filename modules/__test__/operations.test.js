import { sum } from "../operations.js";

describe("test operations module", () => {
  it("should solve a sum", () => {
    const value = sum(1, 4);
    expect(value).toBe(5);
  });
});

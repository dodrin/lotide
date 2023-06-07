const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("should return [2, 3, 4] from [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
  it("should return ['8', '9'] from ['7', '8', '9']", () => {
    assert.deepEqual(tail(["7", "8", "9"]), ["8", "9"]);
  });
  it('should return ["Lighthouse", "Labs"] from ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });
  it("should return [] from [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("should return [] from []", () => {
    assert.deepEqual([], []);
  });
});

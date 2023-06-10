const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

const a = { a: { z: 1 }, b: 2 };
const b = { a: { z: 1 }, b: 2 };
const c = { a: { y: 0, z: 1 }, b: 2 };
const d = { a: { z: 1 }, b: 2 };
const e = { a: { y: 0, z: 1 }, b: 2 };
const f = { a: 1, b: 2 };

describe("#eqObjects", () => {
  it(`returns true for shirtObject and anotherShirtObject`, () => {
    assert.deepEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });

  it(`returns true for a and b`, () => {
    assert.deepEqual(eqObjects(a, b), true);
  });

  it(`returns false for c and d`, () => {
    assert.deepEqual(eqObjects(c, d), false);
  });

  it(`return false for e and f`, () => {
    assert.deepEqual(eqObjects(e, f), false);
  });
});

const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it(`returns [1] for letterPositions("hello").e`, () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it(`returns [2, 3] for letterPositions("hello").l`, () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });

  it(`returns {} for letterPositions(' ')`, () => {
    assert.deepEqual(letterPositions(" "), {});
  });

  it(`returns {} for letterPositions(55)`, () => {
    assert.deepEqual(letterPositions(55), {});
  });
});

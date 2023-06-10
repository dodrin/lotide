const assert = require("chai").assert;
const countOnly = require("../countOnly");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const obj = {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
};

describe("#countOnly", () => {
  it(`returns {Jason: 1} for {Jason: true}`, () => {
    assert.deepEqual(countOnly(firstNames, { Jason: true }), { Jason: 1 });
  });

  it(`returns undefined for obj.Karima`, () => {
    assert.deepEqual(countOnly(firstNames, obj.Karima), {});
  });

  it(`returns {Fang: 2} for obj.Fang`, () => {
    assert.deepEqual(countOnly(firstNames, { Fang: true }), { Fang: 2 });
  });

  it(`returns undefined for obj.Agouhanna`, () => {
    assert.deepEqual(countOnly(firstNames, obj.Agouhanna), {});
  });
});

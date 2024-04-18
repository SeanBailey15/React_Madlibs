const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("it converts positive number, three digits or less, without a comma", () => {
    let result = addCommas(123);
    expect(result).toEqual("123");

    result = addCommas(12);
    expect(result).toEqual("12");

    result = addCommas(1);
    expect(result).toEqual("1");
  });

  test("it converts positive number of four digits with a comma", () => {
    let result = addCommas(1234);
    expect(result).toEqual("1,234");
  });

  test("it converts positive number of seven digits with two commas", () => {
    let result = addCommas(1234567);
    expect(result).toEqual("1,234,567");
  });

  test("it converts positive number of ten digits with three commas", () => {
    let result = addCommas(1234567890);
    expect(result).toEqual("1,234,567,890");
  });

  test("it converts negative number, three digits or less, without a comma", () => {
    let result = addCommas(-123);
    expect(result).toEqual("-123");

    result = addCommas(-12);
    expect(result).toEqual("-12");

    result = addCommas(-1);
    expect(result).toEqual("-1");
  });

  test("it converts negative number of four digits with a comma", () => {
    let result = addCommas(-1234);
    expect(result).toEqual("-1,234");
  });

  test("it converts negative number of seven digits with two commas", () => {
    let result = addCommas(-1234567);
    expect(result).toEqual("-1,234,567");
  });

  test("it converts negative number of ten digits with three commas", () => {
    let result = addCommas(-1234567890);
    expect(result).toEqual("-1,234,567,890");
  });

  test("it converts positive number with decimal properly", () => {
    let result = addCommas(12345.678);
    expect(result).toEqual("12,345.678");
  });

  test("it converts negative number with decimal properly", () => {
    let result = addCommas(-12345.678);
    expect(result).toEqual("-12,345.678");
  });

  test("it converts larger negative number with decimal properly", () => {
    let result = addCommas(-3141592.64);
    expect(result).toEqual("-3,141,592.64");
  });
});

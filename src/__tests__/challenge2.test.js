import multiply from "../../2-multiply";

describe("multiply", () => {
  test("example test which should always pass", () => {
    expect(true).toEqual(true);
  });
  test("given an empty array will return an empty array", () => {
    const input = [];
    const expectedOutput = [];
    expect(multiply(input)).toEqual(expectedOutput);
  });
  test("given an array with 1 number will return an array with that number multiplied by 7", () => {
    let input = [2];
    let expectedOutput = [14];
    expect(multiply(input)).toEqual(expectedOutput);

    input = [4];
    expectedOutput = [28];
    expect(multiply(input)).toEqual(expectedOutput);
  });
  test("given an empty array with 1 multiple number will return an array with all numbers multiplied by 7", () => {
    let input = [2, 3];
    let expectedOutput = [14, 21];
    expect(multiply(input)).toEqual(expectedOutput);

    input = [4, 7];
    expectedOutput = [28, 49];
    expect(multiply(input)).toEqual(expectedOutput);

    input = [2, 3, 5, 8, 1, 6];
    expectedOutput = [14, 21, 35, 56, 7, 42];
    expect(multiply(input)).toEqual(expectedOutput);
  });
});

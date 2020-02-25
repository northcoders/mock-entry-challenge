import isLongWord from "../../1-isLongWord";

describe("isLongWord", () => {
  test("example test which should always pass", () => {
    expect(true).toEqual(true);
  });
  test("given an empty string will return false", () => {
    const input = "";
    const expectedOutput = false;
    const actualOutput = isLongWord(input);
    expect(actualOutput).toEqual(expectedOutput);
  });
  test("given an string with fewer than 5 letters will return false", () => {
    let input = "a";
    let expectedOutput = false;
    let actualOutput = isLongWord(input);
    expect(actualOutput).toEqual(expectedOutput);

    input = "cake";
    expectedOutput = false;
    actualOutput = isLongWord(input);
    expect(actualOutput).toEqual(expectedOutput);
  });
  test("given an string with 5 or more letters will return true", () => {
    let input = "hello";
    let expectedOutput = true;
    let actualOutput = isLongWord(input);
    expect(actualOutput).toEqual(expectedOutput);

    input = "elephant";
    expectedOutput = true;
    actualOutput = isLongWord(input);
    expect(actualOutput).toEqual(expectedOutput);
  });
});

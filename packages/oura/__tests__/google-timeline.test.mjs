import { getModuleName, getFields } from "@prifina/oura";

describe("oura", () => {
  //test.todo("needs tests");
  it("getModuleName", () => {
    const result = getModuleName();
    //console.log(result);
    expect(typeof result).toEqual("string");
  });
  it("getFields", () => {
    const result = getFields("queryActivitySummary");
    //console.log(result);
    expect(Array.isArray(result)).toBe(true);
  });
});

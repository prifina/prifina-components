import { getModuleName, getFields } from "@prifina/google-timeline";

describe("google-timeline", () => {
  //test.todo("needs tests");
  it("getModuleName", () => {
    const result = getModuleName();
    //console.log(result);
    expect(typeof result).toEqual("string");
  });
  it("getFields", () => {
    const result = getFields("queryActivities");
    //console.log(result);
    expect(Array.isArray(result)).toBe(true);
  });
});

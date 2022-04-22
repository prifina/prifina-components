import { getModuleName } from "@prifina/messaging";

describe("google-timeline", () => {
  //test.todo("needs tests");
  it("getModuleName", () => {
    const result = getModuleName();
    //console.log(result);
    expect(typeof result).toEqual("string");
  });
});

"use strict";

//const googleTimeline = require('..');
const { getModuleName } = require("@prifina/messaging");

describe("messaging", () => {
  //test.todo("needs tests");
  it("getModuleName", () => {
    const result = getModuleName();
    //console.log(result);
    expect(typeof result).toEqual("string");
  });
});

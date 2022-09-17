'use strict';
import {getFields,
  getInfo,
  getModuleName,queryRawData
  } from "@prifina/ancestry";
import 'regenerator-runtime/runtime';
import { RawDataObject, } from "@dynamic-data/ancestry-data";



describe("Ancestry", () => {
  //test.todo("needs tests");
  it("test if imports work", () => {
    expect(getFields).toBeTruthy()
    expect(getInfo).toBeTruthy()
    expect(getModuleName).toBeTruthy()
    expect(queryRawData).toBeTruthy()
  })
  it("getModuleName", () => {
    const name = getModuleName()
    expect(typeof name).toEqual('string');
    expect(name).toEqual('Ancestry');

  })
  it("getInfo", () => {
    const name = getInfo()
    // console.log(typeof name)
    //Check if array
    expect(typeof name).toEqual('object'); 
    expect(name.length).toBeTruthy() 
    //Check if each item is string
    expect(typeof name[0]).toEqual('string'); 


  })
  it("queryRawData", async () => {
    const result = await queryRawData({stage: "dev"})
    // console.log("queryRawData ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:RawDataObject}}})
  });

});

'use strict';
import {getFields,
  getInfo,
  getModuleName,queryRawSync,  queryRawAsync
  } from "@prifina/sensor-bno055";
import 'regenerator-runtime/runtime';
import { RawAsync,RawSync, } from "@dynamic-data/sensor-bno055-data";



describe("sensor-bno055", () => {
  //test.todo("needs tests");
  it("test if imports work", () => {
    expect(getFields).toBeTruthy()
    expect(getInfo).toBeTruthy()
    expect(getModuleName).toBeTruthy()
    expect(queryRawSync).toBeTruthy()
  })
  it("getModuleName", () => {
    const name = getModuleName()
    expect(typeof name).toEqual('string');
    expect(name).toEqual('Sensor-BNO055');

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
  it("queryRawSync", async () => {
    const result = await queryRawSync({stage: "dev"})
    // console.log("queryRawSync ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:RawSync}}})
  });
  it("queryRawAsync", async () => {
    const result = await queryRawAsync({stage: "dev"})
    // console.log("queryRawAsync ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:RawAsync}}})
  });
});

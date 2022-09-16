'use strict';
import {getModuleName,
  getInfo,
  getFields,
  queryActivityRecord,
  queryDataCollector,
  queryHealthRecord
  } from "@prifina/huawei";
import 'regenerator-runtime/runtime';
import { ActivityRecord,
  DataCollector,
  HealthRecord, } from "@dynamic-data/huawei-data";



describe("iOS Homekit", () => {
  //test.todo("needs tests");
  it("test if imports work", () => {
    expect(getFields).toBeTruthy()
    expect(getInfo).toBeTruthy()
    expect(getModuleName).toBeTruthy()
    expect(queryActivityRecord).toBeTruthy()
  })
  it("getModuleName", () => {
    const name = getModuleName()
    expect(typeof name).toEqual('string');
    expect(name).toEqual('Huawei Healthkit');

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
  it("queryActivityRecord", async () => {
    const result = await queryActivityRecord({stage: "dev"})
    // console.log("queryActivityRecord ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ActivityRecord}}})
  });
  it("queryDataCollector", async () => {
    const result = await queryDataCollector({stage: "dev"})
    // console.log("queryDataCollector ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:DataCollector}}})
  });
  it("queryHealthRecord", async () => {
    const result = await queryHealthRecord({stage: "dev"})
    // console.log("queryHealthRecord ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:HealthRecord}}})
  });
});

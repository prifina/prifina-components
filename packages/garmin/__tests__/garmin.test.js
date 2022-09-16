// 'use strict';
// // import {} from "@prifina/fitbit";

import {DailiesData,DailiesDataObject,EpochsData,EpochsDataObject,PulseoxData,PulseoxObject,SleepsData,SleepsDataObject,} from "@dynamic-data/garmin-data"
import {getFields,getInfo,getModuleName,queryDailiesDataAsync,queryEpochsDataAsync,querySleepsDataAsync,queryPulseoxDataAsync,
queryDailiesData,queryEpochsData,querySleepsData,queryPulseoxData} from "@prifina/garmin"
import 'regenerator-runtime/runtime';

describe("garmin", () => {
  //test.todo("needs tests");
  it("test if imports work", () => {
    expect(getFields).toBeTruthy()
    expect(getInfo).toBeTruthy()
    expect(getModuleName).toBeTruthy()
    expect(queryDailiesDataAsync).toBeTruthy()
  })
  it("getModuleName", () => {
    const name = getModuleName()
    expect(typeof name).toEqual('string');
    expect(name).toEqual('Garmin');

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
  it("queryDailiesDataAsync", async () => {
    const result = await queryDailiesDataAsync({stage: "dev"})
    // console.log("queryDailiesDataAsync ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:DailiesData}}})
  });
  it("queryEpochsDataAsync", async () => {
    const result = await queryEpochsDataAsync({stage: "dev"})
    // console.log("queryEpochsDataAsync ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:EpochsData}}})
  });
  it("querySleepsDataAsync", async () => {
    const result = await querySleepsDataAsync({stage: "dev"})
    // console.log("querySleepsDataAsync ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:SleepsData}}})
  });
  it("queryPulseoxDataAsync", async () => {
    const result = await queryPulseoxDataAsync({stage: "dev"})
    // console.log("queryPulseoxDataAsync ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:PulseoxData}}})
  });
  it("queryDailiesData", async () => {
    const result = await queryDailiesData({stage: "dev"})
    // console.log("queryDailiesData ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:DailiesDataObject}}})
  });
  it("queryEpochsData", async () => {
    const result = await queryEpochsData({stage: "dev"})
    // console.log("queryEpochsData ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:EpochsDataObject}}})
  });
  it("querySleepsData", async () => {
    const result = await querySleepsData({stage: "dev"})
    // console.log("querySleepsData ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:SleepsDataObject}}})
  });
  it("queryPulseoxData", async () => {
    const result = await queryPulseoxData({stage: "dev"})
    // console.log("queryPulseoxData ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:PulseoxObject}}})
  });
});

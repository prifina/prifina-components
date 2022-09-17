'use strict';
// import {} from "@prifina/fitbit";

const {ActivitiesData,ActivitiesSummary,HeartRateData,HeartRateSummary,SleepData,SleepDataAsync,SleepQuality,SleepSummary,
ActivitiesDataAsync,ActivitiesSummaryAsync,HeartRateDataAsync,HeartRateSummaryAsync, SleepQualityAsync, SleepSummaryAsync} = require("@dynamic-data/fitbit-data")
const {getFields,getInfo,getModuleName,queryActivities,queryActivitiesAsync,queryActivitySummary,
  queryActivitySummariesAsync,queryHeartRateData,queryHeartRateDataAsync,queryHeartRateSummariesAsync,queryHeartRateSummary,
querySleepData,querySleepDataAsync,querySleepQuality,querySleepQualityAsync,querySleepSummariesAsync,querySleepSummary,} = require("@prifina/fitbit")
require('regenerator-runtime/runtime');

describe("fitbit", () => {
  //test.todo("needs tests");
  it("test if imports work", () => {
    expect(getFields).toBeTruthy()
    expect(getInfo).toBeTruthy()
    expect(getModuleName).toBeTruthy()
    expect(queryActivities).toBeTruthy()
  })
  it("getModuleName", () => {
    const name = getModuleName()
    expect(typeof name).toEqual('string');
    expect(name).toEqual('Fitbit');

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
  it("queryActivities", async () => {
    const result = await queryActivities({stage: "dev"})
    // console.log("queryActivities ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ActivitiesData}}})
  });
  it("queryActivitiesAsync", async () => {
    const result = await queryActivitiesAsync({stage: "dev"})
    // console.log("queryActivitiesAsync ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ActivitiesDataAsync}}})
  });
  it("queryActivitySummary", async () => {
    const result = await queryActivitySummary({stage: "dev"})
    // console.log("queryActivitySummary ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ActivitiesSummary}}})
  });
  it("queryActivitySummariesAsync", async () => {
    const result = await queryActivitySummariesAsync({stage: "dev"})
    // console.log("queryActivitySummariesAsync ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ActivitiesSummaryAsync}}})
  });
  it("queryHeartRateData", async () => {
    const result = await queryHeartRateData({stage: "dev"})
    // console.log("queryHeartRateData ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:HeartRateData}}})
  });
  it("queryHeartRateDataAsync", async () => {
    const result = await queryHeartRateDataAsync({stage: "dev"})
    // console.log("queryHeartRateDataAsync ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:HeartRateDataAsync}}})
  });
  it("queryHeartRateSummary", async () => {
    const result = await queryHeartRateSummary({stage: "dev"})
    // console.log("queryHeartRateSummary ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:HeartRateSummary}}})
  });
  it("queryHeartRateSummariesAsync", async () => {
    const result = await queryHeartRateSummariesAsync({stage: "dev"})
    // console.log("queryHeartRateSummariesAsync ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:HeartRateSummaryAsync}}})
  });
  it("querySleepData", async () => {
    const result = await querySleepData({stage: "dev"})
    // console.log("querySleepData ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:SleepData}}})
  });
  it("querySleepDataAsync", async () => {
    const result = await querySleepDataAsync({stage: "dev"})
    // console.log("querySleepDataAsync ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:SleepDataAsync}}})
  });
  // querySleepQuality,querySleepQualityAsync,querySleepSummariesAsync,querySleepSummary
  it("querySleepQuality", async () => {
    const result = await querySleepQuality({stage: "dev"})
    // console.log("querySleepQuality ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:SleepQuality}}})
  });
  it("querySleepQualityAsync", async () => {
    const result = await querySleepQualityAsync({stage: "dev"})
    // console.log("querySleepQualityAsync ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:SleepQualityAsync}}})
  });
  it("querySleepSummary", async () => {
    const result = await querySleepSummary({stage: "dev"})
    // console.log("querySleepSummary ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:SleepSummary}}})
  });
  it("querySleepSummariesAsync", async () => {
    const result = await querySleepSummariesAsync({stage: "dev"})
    // console.log("querySleepSummariesAsync ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:SleepSummaryAsync}}})
  });
});

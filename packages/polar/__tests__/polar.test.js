'use strict';
import {getModuleName,
  getInfo,
  getFields,
  queryGetUserInfo,
  queryListNotifications,
  queryListActivities,
  queryGetActivitySummary,
  queryGetStepSample,
  queryGetZoneSample,
  queryListTrainingExercises,
  queryGetExerciseSummary,
  queryGetHeartRateZones,
  queryGetAvailableSamples,
  queryGetSamples,
  queryListPhysicalInfo,
  queryGetPhysicalInfo,
  queryGetWebhook,
  queryListExercises,
  queryGetExercise,
  queryListSleep,
  queryGetSleep,
  queryGetAvailableSleepTimes,
  queryListNightlyRecharge,
  queryGetNightlyRecharge
  } from "@prifina/polar";
import 'regenerator-runtime/runtime';
import { getUserInfo,
  listNotifications,
  listActivities,
  getActivitySummary,
  getStepSample,
  getZoneSample,
  listTrainingExercises,
  getExerciseSummary,
  getHeartRateZones,
  getAvailableSamples,
  getSamples,
  listPhysicalInfo,
  getPhysicalInfo,
  getWebhook,
  listExercises,
  getExercise,
  listSleep,
  getSleep,
  getAvailableSleepTimes,
  listNightlyRecharge,
  getNightlyRecharge } from "@dynamic-data/polar-data";



describe("Peloton", () => {
  //test.todo("needs tests");
  it("test if imports work", () => {
    expect(getFields).toBeTruthy()
    expect(getInfo).toBeTruthy()
    expect(getModuleName).toBeTruthy()
    expect(queryGetUserInfo).toBeTruthy()
  })
  it("Polar", () => {
    const name = getModuleName()
    expect(typeof name).toEqual('string');
    expect(name).toEqual('Polar');

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
  it("queryGetUserInfo", async () => {
    const result = await queryGetUserInfo({stage: "dev"})
    // console.log("queryGetUserInfo ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:getUserInfo}}})
  });
  it("queryListNotifications", async () => {
    const result = await queryListNotifications({stage: "dev"})
    // console.log("queryListNotifications ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:listNotifications}}})
  });
  it("queryListActivities", async () => {
    const result = await queryListActivities({stage: "dev"})
    // console.log("queryListActivities ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:listActivities}}})
  });
  it("queryGetActivitySummary", async () => {
    const result = await queryGetActivitySummary({stage: "dev"})
    // console.log("queryGetActivitySummary ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:getActivitySummary}}})
  });
  it("queryGetStepSample", async () => {
    const result = await queryGetStepSample({stage: "dev"})
    // console.log("queryGetStepSample ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:getStepSample}}})
  });
  it("queryGetZoneSample", async () => {
    const result = await queryGetZoneSample({stage: "dev"})
    // console.log("queryGetZoneSample ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:getZoneSample}}})
  });
  it("queryListTrainingExercises", async () => {
    const result = await queryListTrainingExercises({stage: "dev"})
    // console.log("queryListTrainingExercises ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:listTrainingExercises}}})
  });
  it("queryGetExerciseSummary", async () => {
    const result = await queryGetExerciseSummary({stage: "dev"})
    // console.log("queryGetExerciseSummary ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:getExerciseSummary}}})
  });
  it("queryGetHeartRateZones", async () => {
    const result = await queryGetHeartRateZones({stage: "dev"})
    // console.log("queryGetHeartRateZones ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:getHeartRateZones}}})
  });
  it("queryGetAvailableSamples", async () => {
    const result = await queryGetAvailableSamples({stage: "dev"})
    // console.log("queryGetAvailableSamples ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:getAvailableSamples}}})
  });
  it("queryGetSamples", async () => {
    const result = await queryGetSamples({stage: "dev"})
    // console.log("queryGetSamples ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:getSamples}}})
  });
  it("queryListPhysicalInfo", async () => {
    const result = await queryListPhysicalInfo({stage: "dev"})
    // console.log("queryListPhysicalInfo ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:listPhysicalInfo}}})
  });
  it("queryGetPhysicalInfo", async () => {
    const result = await queryGetPhysicalInfo({stage: "dev"})
    // console.log("queryGetPhysicalInfo ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:getPhysicalInfo}}})
  });
  it("queryGetWebhook", async () => {
    const result = await queryGetWebhook({stage: "dev"})
    // console.log("queryGetWebhook ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:getWebhook}}})
  });
  it("queryListExercises", async () => {
    const result = await queryListExercises({stage: "dev"})
    // console.log("queryListExercises ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:listExercises}}})
  });
  it("queryGetExercise", async () => {
    const result = await queryGetExercise({stage: "dev"})
    // console.log("queryGetExercise ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:getExercise}}})
  });
  it("queryListSleep", async () => {
    const result = await queryListSleep({stage: "dev"})
    // console.log("queryListSleep ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:listSleep}}})
  });
  it("queryGetSleep", async () => {
    const result = await queryGetSleep({stage: "dev"})
    // console.log("queryGetSleep ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:getSleep}}})
  });
  it("queryGetAvailableSleepTimes", async () => {
    const result = await queryGetAvailableSleepTimes({stage: "dev"})
    // console.log("queryGetAvailableSleepTimes ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:getAvailableSleepTimes}}})
  });
  it("queryListNightlyRecharge", async () => {
    const result = await queryListNightlyRecharge({stage: "dev"})
    // console.log("queryListNightlyRecharge ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:listNightlyRecharge}}})
  });
  it("queryGetNightlyRecharge", async () => {
    const result = await queryGetNightlyRecharge({stage: "dev"})
    // console.log("queryGetNightlyRecharge ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:getNightlyRecharge}}})
  });
});

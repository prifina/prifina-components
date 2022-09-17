'use strict';
import {getModuleName,
  getInfo,
  getFields,
  queryActivityType,
  queryAggregateData,
  queryEvent,
  queryMembership,
  queryMetric,
  queryReport,
  querySleepDetails,
  querySurveryResponse,
  queryUser,
  queryVoiceOfWhoop,
  queryVoiceOfWhoopCycle,
  queryWorkout
  } from "@prifina/whoop";
import 'regenerator-runtime/runtime';
import { ActivityType,
  AggregateData,
  Event,
  Membership,
  Metric,
  Report,
  SleepDetails,
  SurveryResponse,
  User,
  VoiceOfWhoop,
  VoiceOfWhoopCycle,
  Workout } from "@dynamic-data/whoop-data";



describe("Whoop", () => {
  //test.todo("needs tests");
  it("test if imports work", () => {
    expect(getFields).toBeTruthy()
    expect(getInfo).toBeTruthy()
    expect(getModuleName).toBeTruthy()
    expect(queryActivityType).toBeTruthy()
  })
  it("getModuleName", () => {
    const name = getModuleName()
    expect(typeof name).toEqual('string');
    expect(name).toEqual('Whoop');

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
  it("queryActivityType", async () => {
    const result = await queryActivityType({stage: "dev"})
    // console.log("queryActivityType ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ActivityType}}})
  });
  it("queryAggregateData", async () => {
    const result = await queryAggregateData({stage: "dev"})
    // console.log("queryAggregateData ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:AggregateData}}})
  });
  it("queryEvent", async () => {
    const result = await queryEvent({stage: "dev"})
    // console.log("queryEvent ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Event}}})
  });
  it("queryMembership", async () => {
    const result = await queryMembership({stage: "dev"})
    // console.log("queryMembership ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Membership}}})
  });
  it("queryMetric", async () => {
    const result = await queryMetric({stage: "dev"})
    // console.log("queryMetric ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Metric}}})
  });
  it("queryReport", async () => {
    const result = await queryReport({stage: "dev"})
    // console.log("queryReport ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Report}}})
  });
  it("querySleepDetails", async () => {
    const result = await querySleepDetails({stage: "dev"})
    // console.log("querySleepDetails ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:SleepDetails}}})
  });
  it("querySurveryResponse", async () => {
    const result = await querySurveryResponse({stage: "dev"})
    // console.log("querySurveryResponse ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:SurveryResponse}}})
  });
  it("queryUser", async () => {
    const result = await queryUser({stage: "dev"})
    // console.log("queryUser ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:User}}})
  });
  it("queryVoiceOfWhoop", async () => {
    const result = await queryVoiceOfWhoop({stage: "dev"})
    // console.log("queryVoiceOfWhoop ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:VoiceOfWhoop}}})
  });
  it("queryVoiceOfWhoopCycle", async () => {
    const result = await queryVoiceOfWhoopCycle({stage: "dev"})
    // console.log("queryVoiceOfWhoopCycle ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:VoiceOfWhoopCycle}}})
  });
  it("queryWorkout", async () => {
    const result = await queryWorkout({stage: "dev"})
    // console.log("queryWorkout ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Workout}}})
  });
});

'use strict';
import {getModuleName,
  getInfo,
  getFields,
  queryGetactivity,
  queryGetgoals,
  queryGetintradayactivity,
  queryGetmeas,
  queryHeartList,
  queryHeart,
  querySleep,
  querySleepSummary,
  queryGetDevice,
  queryGetUser,
  queryGetWorkout,
  } from "@prifina/withings";
import 'regenerator-runtime/runtime';
import { Getactivity,
  Getgoals,
  Getintradayactivity,
  Getmeas,
  HeartList,
  Heart,
  Sleep,
  SleepSummary,
  getDevice,
  getUser,
  getWorkout } from "@dynamic-data/withings-data";



describe("Withings", () => {
  //test.todo("needs tests");
  it("test if imports work", () => {
    expect(getFields).toBeTruthy()
    expect(getInfo).toBeTruthy()
    expect(getModuleName).toBeTruthy()
    expect(queryGetactivity).toBeTruthy()
  })
  it("getModuleName", () => {
    const name = getModuleName()
    expect(typeof name).toEqual('string');
    expect(name).toEqual('Withings');

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
  it("queryGetactivity", async () => {
    const result = await queryGetactivity({stage: "dev"})
    // console.log("queryGetactivity ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Getactivity}}})
  });
  it("queryGetgoals", async () => {
    const result = await queryGetgoals({stage: "dev"})
    // console.log("queryGetgoals ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Getgoals}}})
  });
  it("queryGetintradayactivity", async () => {
    const result = await queryGetintradayactivity({stage: "dev"})
    // console.log("queryGetintradayactivity ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Getintradayactivity}}})
  });
  it("queryGetmeas", async () => {
    const result = await queryGetmeas({stage: "dev"})
    // console.log("queryGetmeas ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Getmeas}}})
  });
  it("queryHeartList", async () => {
    const result = await queryHeartList({stage: "dev"})
    // console.log("queryHeartList ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:HeartList}}})
  });
  it("queryHeart", async () => {
    const result = await queryHeart({stage: "dev"})
    // console.log("queryHeart ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Heart}}})
  });
  it("querySleep", async () => {
    const result = await querySleep({stage: "dev"})
    // console.log("querySleep ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Sleep}}})
  });
  it("querySleepSummary", async () => {
    const result = await querySleepSummary({stage: "dev"})
    // console.log("querySleepSummary ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:SleepSummary}}})
  });
  it("queryGetDevice", async () => {
    const result = await queryGetDevice({stage: "dev"})
    // console.log("queryGetDevice ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:getDevice}}})
  });
  it("queryGetUser", async () => {
    const result = await queryGetUser({stage: "dev"})
    // console.log("queryGetUser ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content: getUser}}})
  });
  it("queryGetWorkout", async () => {
    const result = await queryGetWorkout({stage: "dev"})
    // console.log("queryGetWorkout ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:getWorkout}}})
  });
});

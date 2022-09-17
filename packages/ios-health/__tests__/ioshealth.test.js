'use strict';
import {getModuleName,
  getInfo,
  getFields,
  queryCharacteristics,
  queryHKActivitySummary,
  queryHKAudiogramSample,
  queryHKClinicalRecord,
  queryHKElectrocardiogram,
  queryHKWorkout,
  queryHKWorkoutConfiguration,
  queryHKWorkoutRoute,
  queryHKWorkoutSession
  } from "@prifina/ios-health";
import 'regenerator-runtime/runtime';
import { Characteristics,
  HKActivitySummary,
  HKAudiogramSample,
  HKClinicalRecord,
  HKElectrocardiogram,
  HKWorkout,
  HKWorkoutConfiguration,
  HKWorkoutRoute,
  HKWorkoutSession, } from "@dynamic-data/ios-health-data";



describe("iOS Health", () => {
  //test.todo("needs tests");
  it("test if imports work", () => {
    expect(getFields).toBeTruthy()
    expect(getInfo).toBeTruthy()
    expect(getModuleName).toBeTruthy()
    expect(queryCharacteristics).toBeTruthy()
  })
  it("getModuleName", () => {
    const name = getModuleName()
    expect(typeof name).toEqual('string');
    expect(name).toEqual('iOS Health');

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
  it("queryCharacteristics", async () => {
    const result = await queryCharacteristics({stage: "dev"})
    // console.log("queryCharacteristics ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Characteristics}}})
  });
  it("queryHKActivitySummary", async () => {
    const result = await queryHKActivitySummary({stage: "dev"})
    // console.log("queryHKActivitySummary ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:HKActivitySummary}}})
  });
  it("queryHKAudiogramSample", async () => {
    const result = await queryHKAudiogramSample({stage: "dev"})
    // console.log("queryHKAudiogramSample ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:HKAudiogramSample}}})
  });
  it("queryHKClinicalRecord", async () => {
    const result = await queryHKClinicalRecord({stage: "dev"})
    // console.log("queryHKClinicalRecord ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:HKClinicalRecord}}})
  });
  it("queryHKElectrocardiogram", async () => {
    const result = await queryHKElectrocardiogram({stage: "dev"})
    // console.log("queryHKElectrocardiogram ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:HKElectrocardiogram}}})
  });
  it("queryHKWorkout", async () => {
    const result = await queryHKWorkout({stage: "dev"})
    // console.log("queryHKWorkout ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:HKWorkout}}})
  });
  it("queryHKWorkoutConfiguration", async () => {
    const result = await queryHKWorkoutConfiguration({stage: "dev"})
    // console.log("queryHKWorkoutConfiguration ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:HKWorkoutConfiguration}}})
  });
  it("queryHKWorkoutRoute", async () => {
    const result = await queryHKWorkoutRoute({stage: "dev"})
    // console.log("queryHKWorkoutRoute ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:HKWorkoutRoute}}})
  });
  it("queryHKWorkoutSession", async () => {
    const result = await queryHKWorkoutSession({stage: "dev"})
    // console.log("queryHKWorkoutSession ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:HKWorkoutSession}}})
  });
});

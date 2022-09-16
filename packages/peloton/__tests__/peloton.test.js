'use strict';
import {getModuleName,
  getInfo,
  getFields,
  queryAchievementTemplate,
  queryAuthDetails,
  queryFacebookUserProfile,
  queryInstructor,
  queryRelationship,
  queryReservation,
  queryRideDetails,
  queryRideFilter,
  queryRideSorts,
  queryUserData,
  queryUserOverview,
  queryUserProfile,
  queryUserSettings,
  queryWorkoutDetails
  } from "@prifina/peloton";
import 'regenerator-runtime/runtime';
import { AchievementTemplate,
  AuthDetails,
  FacebookUserProfile,
  Instructor,
  Relationship,
  Reservation,
  RideDetails,
  RideFilter,
  RideSorts,
  UserData,
  UserOverview,
  UserProfile,
  UserSettings,
  WorkoutDetails } from "@dynamic-data/peloton-data";



describe("Peloton", () => {
  //test.todo("needs tests");
  it("test if imports work", () => {
    expect(getFields).toBeTruthy()
    expect(getInfo).toBeTruthy()
    expect(getModuleName).toBeTruthy()
    expect(queryAchievementTemplate).toBeTruthy()
  })
  it("getModuleName", () => {
    const name = getModuleName()
    expect(typeof name).toEqual('string');
    expect(name).toEqual('Peloton');

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
  it("queryAchievementTemplate", async () => {
    const result = await queryAchievementTemplate({stage: "dev"})
    // console.log("queryAchievementTemplate ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:AchievementTemplate}}})
  });
  it("queryAuthDetails", async () => {
    const result = await queryAuthDetails({stage: "dev"})
    // console.log("queryAuthDetails ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:AuthDetails}}})
  });
  it("queryFacebookUserProfile", async () => {
    const result = await queryFacebookUserProfile({stage: "dev"})
    // console.log("queryFacebookUserProfile ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:FacebookUserProfile}}})
  });
  it("queryInstructor", async () => {
    const result = await queryInstructor({stage: "dev"})
    // console.log("queryInstructor ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Instructor}}})
  });
  it("queryRelationship", async () => {
    const result = await queryRelationship({stage: "dev"})
    // console.log("queryRelationship ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Relationship}}})
  });
  it("queryReservation", async () => {
    const result = await queryReservation({stage: "dev"})
    // console.log("queryReservation ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Reservation}}})
  });
  it("queryRideDetails", async () => {
    const result = await queryRideDetails({stage: "dev"})
    // console.log("queryRideDetails ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:RideDetails}}})
  });
  it("queryRideFilter", async () => {
    const result = await queryRideFilter({stage: "dev"})
    // console.log("queryRideFilter ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:RideFilter}}})
  });
  it("queryRideSorts", async () => {
    const result = await queryRideSorts({stage: "dev"})
    // console.log("queryRideSorts ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:RideSorts}}})
  });
  it("queryUserData", async () => {
    const result = await queryUserData({stage: "dev"})
    // console.log("queryUserData ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:UserData}}})
  });
  it("queryUserOverview", async () => {
    const result = await queryUserOverview({stage: "dev"})
    // console.log("queryUserOverview ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:UserOverview}}})
  });
  it("queryUserProfile", async () => {
    const result = await queryUserProfile({stage: "dev"})
    // console.log("queryUserProfile ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:UserProfile}}})
  });
  it("queryUserSettings", async () => {
    const result = await queryUserSettings({stage: "dev"})
    // console.log("queryUserSettings ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:UserSettings}}})
  });
  it("queryWorkoutDetails", async () => {
    const result = await queryWorkoutDetails({stage: "dev"})
    // console.log("queryWorkoutDetails ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:WorkoutDetails}}})
  });
});

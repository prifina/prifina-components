'use strict';
import {getModuleName,
  getInfo,
  getFields,
  queryActivity,
  queryActivityComments,
  queryActivityKudoers,
  queryActivityLaps,
  queryActivityStream,
  queryActivityZone,
  queryAthleteActivities,
  queryAthleteClubs,
  queryAthleteRoute,
  queryAthleteStats,
  queryAuthenticatedAthlete,
  queryClub,
  queryClubActivities,
  queryClubAdministrators,
  queryClubMembers,
  queryEquipment,
  queryRoute,
  queryRouteStream,
  querySegmentEfforts,
  querySegmentEffortsStream,
  querySegments,
  querySegmentsStreams,
  queryStarredSegments,
  queryUpload,
  queryZones
  } from "@prifina/strava";
import 'regenerator-runtime/runtime';
import { Activity,
  ActivityComments,
  ActivityKudoers,
  ActivityLaps,
  ActivityStream,
  ActivityZone,
  AthleteActivities,
  AthleteClubs,
  AthleteRoute,
  AthleteStats,
  AuthenticatedAthlete,
  Club,
  ClubActivities,
  ClubAdministrators,
  ClubMembers,
  Equipment,
  Route,
  RouteStream,
  SegmentEfforts,
  SegmentEffortsStream,
  Segments,
  SegmentsStreams,
  StarredSegments,
  Upload,
  Zones, } from "@dynamic-data/strava-data";



describe("Strava", () => {
  //test.todo("needs tests");
  it("test if imports work", () => {
    expect(getFields).toBeTruthy()
    expect(getInfo).toBeTruthy()
    expect(getModuleName).toBeTruthy()
    expect(queryActivity).toBeTruthy()
  })
  it("getModuleName", () => {
    const name = getModuleName()
    expect(typeof name).toEqual('string');
    expect(name).toEqual('Strava');

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
  it("queryActivity", async () => {
    const result = await queryActivity({stage: "dev"})
    // console.log("queryActivity ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Activity}}})
  });
  it("queryActivityComments", async () => {
    const result = await queryActivityComments({stage: "dev"})
    // console.log("queryActivityComments ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ActivityComments}}})
  });
  it("queryActivityKudoers", async () => {
    const result = await queryActivityKudoers({stage: "dev"})
    // console.log("queryActivityKudoers ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ActivityKudoers}}})
  });
  it("queryActivityLaps", async () => {
    const result = await queryActivityLaps({stage: "dev"})
    // console.log("queryActivityLaps ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ActivityLaps}}})
  });
  it("queryActivityStream", async () => {
    const result = await queryActivityStream({stage: "dev"})
    // console.log("queryActivityStream ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ActivityStream}}})
  });
  it("queryActivityZone", async () => {
    const result = await queryActivityZone({stage: "dev"})
    // console.log("queryActivityZone ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ActivityZone}}})
  });
  it("queryAthleteActivities", async () => {
    const result = await queryAthleteActivities({stage: "dev"})
    // console.log("queryAthleteActivities ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:AthleteActivities}}})
  });
  it("queryAthleteClubs", async () => {
    const result = await queryAthleteClubs({stage: "dev"})
    // console.log("queryAthleteClubs ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:AthleteClubs}}})
  });
  it("queryAthleteRoute", async () => {
    const result = await queryAthleteRoute({stage: "dev"})
    // console.log("queryAthleteRoute ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:AthleteRoute}}})
  });
  it("queryAthleteStats", async () => {
    const result = await queryAthleteStats({stage: "dev"})
    // console.log("queryAthleteStats ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:AthleteStats}}})
  });
  it("queryAuthenticatedAthlete", async () => {
    const result = await queryAuthenticatedAthlete({stage: "dev"})
    // console.log("queryAuthenticatedAthlete ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:AuthenticatedAthlete}}})
  });
  it("queryClub", async () => {
    const result = await queryClub({stage: "dev"})
    // console.log("queryClub ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Club}}})
  });
  it("queryClubActivities", async () => {
    const result = await queryClubActivities({stage: "dev"})
    // console.log("queryClubActivities ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ClubActivities}}})
  });
  it("queryClubAdministrators", async () => {
    const result = await queryClubAdministrators({stage: "dev"})
    // console.log("queryClubAdministrators ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ClubAdministrators}}})
  });
  it("queryClubMembers", async () => {
    const result = await queryClubMembers({stage: "dev"})
    // console.log("queryClubMembers ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ClubMembers}}})
  });
  it("queryEquipment", async () => {
    const result = await queryEquipment({stage: "dev"})
    // console.log("queryEquipment ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Equipment}}})
  });
  it("queryRoute", async () => {
    const result = await queryRoute({stage: "dev"})
    // console.log("queryRoute ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Route}}})
  });
  it("queryRouteStream", async () => {
    const result = await queryRouteStream({stage: "dev"})
    // console.log("queryRouteStream ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:RouteStream}}})
  });
  it("querySegmentEfforts", async () => {
    const result = await querySegmentEfforts({stage: "dev"})
    // console.log("querySegmentEfforts ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:SegmentEfforts}}})
  });
  it("querySegmentEffortsStream", async () => {
    const result = await querySegmentEffortsStream({stage: "dev"})
    // console.log("querySegmentEffortsStream ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:SegmentEffortsStream}}})
  });
  it("querySegments", async () => {
    const result = await querySegments({stage: "dev"})
    // console.log("querySegments ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Segments}}})
  });
  it("querySegmentsStreams", async () => {
    const result = await querySegmentsStreams({stage: "dev"})
    // console.log("querySegmentsStreams ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:SegmentsStreams}}})
  });
  it("queryStarredSegments", async () => {
    const result = await queryStarredSegments({stage: "dev"})
    // console.log("queryStarredSegments ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:StarredSegments}}})
  });
  it("queryUpload", async () => {
    const result = await queryUpload({stage: "dev"})
    // console.log("queryUpload ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Upload}}})
  });
  it("queryZones", async () => {
    const result = await queryZones({stage: "dev"})
    // console.log("queryZones ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Zones}}})
  });
});

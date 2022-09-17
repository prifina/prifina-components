// 'use strict';

import {Activity,Location,Places,Routes,} from "@dynamic-data/google-data"
import {getFields,getInfo,getModuleName,queryActivities,  queryLocations,  queryPlaces,  queryRoutes,} from "@prifina/google-timeline"
import 'regenerator-runtime/runtime';

describe("Google Timeline", () => {
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
    expect(name).toEqual('GoogleTimeline');

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
    expect(result).toStrictEqual({data:{getDataObject:{content:Activity}}})
  });
  it("queryLocations", async () => {
    const result = await queryLocations({stage: "dev"})
    // console.log("queryLocations ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Location}}})
  });
  it("queryPlaces", async () => {
    const result = await queryPlaces({stage: "dev"})
    // console.log("queryPlaces ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Places}}})
  });
  it("queryRoutes", async () => {
    const result = await queryRoutes({stage: "dev"})
    // console.log("queryRoutes ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Routes}}})
  });
});

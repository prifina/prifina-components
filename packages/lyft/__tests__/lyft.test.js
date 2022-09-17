'use strict';
import {getModuleName,
  getInfo,
  getFields,
  queryDriverETA,
  queryNearbyDrivers,
  queryRideEstimates,
  queryRideTypes,
  } from "@prifina/lyft";
import 'regenerator-runtime/runtime';
import { driverETA,nearby_drivers,rideEstimates,rideTypes, } from "@dynamic-data/lyft-data";



describe("Lyft", () => {
  //test.todo("needs tests");
  it("test if imports work", () => {
    expect(getFields).toBeTruthy()
    expect(getInfo).toBeTruthy()
    expect(getModuleName).toBeTruthy()
    expect(queryDriverETA).toBeTruthy()
  })
  it("getModuleName", () => {
    const name = getModuleName()
    expect(typeof name).toEqual('string');
    expect(name).toEqual('Lyft');

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
  it("queryDriverETA", async () => {
    const result = await queryDriverETA({stage: "dev"})
    // console.log("queryDriverETA ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:driverETA}}})
  });
  it("queryNearbyDrivers", async () => {
    const result = await queryNearbyDrivers({stage: "dev"})
    // console.log("queryNearbyDrivers ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:nearby_drivers}}})
  });
  it("queryRideEstimates", async () => {
    const result = await queryRideEstimates({stage: "dev"})
    // console.log("queryRideEstimates ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:rideEstimates}}})
  });
  it("queryRideTypes", async () => {
    const result = await queryRideTypes({stage: "dev"})
    // console.log("queryRideTypes ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:rideTypes}}})
  });
});

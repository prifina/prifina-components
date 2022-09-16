'use strict';
import {getModuleName,
  getInfo,
  getFields,
  queryHMAccessory,
  queryHMActionSet,
  queryHMCharacteristic,
  queryHMEventTrigger,
  queryHMHomeManager,
  queryHMMatterHome,
  queryHMMatterRoom,
  queryHMMatterTopology,
  queryHMService,
  queryHMTimerTrigger,
  } from "@prifina/homekit";
import 'regenerator-runtime/runtime';
import { HMAccessory,
  HMActionSet,
  HMCharacteristic,
  HMEventTrigger,
  HMHomeManager,
  HMMatterHome,
  HMMatterRoom,
  HMMatterTopology,
  HMService,
  HMTimerTrigger, } from "@dynamic-data/homekit-data";



describe("iOS Homekit", () => {
  //test.todo("needs tests");
  it("test if imports work", () => {
    expect(getFields).toBeTruthy()
    expect(getInfo).toBeTruthy()
    expect(getModuleName).toBeTruthy()
    expect(queryHMAccessory).toBeTruthy()
  })
  it("getModuleName", () => {
    const name = getModuleName()
    expect(typeof name).toEqual('string');
    expect(name).toEqual('iOS Homekit');

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
  it("queryHMAccessory", async () => {
    const result = await queryHMAccessory({stage: "dev"})
    // console.log("queryHMAccessory ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:HMAccessory}}})
  });
  it("queryHMActionSet", async () => {
    const result = await queryHMActionSet({stage: "dev"})
    // console.log("queryHMActionSet ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:HMActionSet}}})
  });
  it("queryHMCharacteristic", async () => {
    const result = await queryHMCharacteristic({stage: "dev"})
    // console.log("queryHMCharacteristic ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:HMCharacteristic}}})
  });
  it("queryHMEventTrigger", async () => {
    const result = await queryHMEventTrigger({stage: "dev"})
    // console.log("queryHMEventTrigger ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:HMEventTrigger}}})
  });
  it("queryHMHomeManager", async () => {
    const result = await queryHMHomeManager({stage: "dev"})
    // console.log("queryHMHomeManager ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:HMHomeManager}}})
  });
  it("queryHMMatterHome", async () => {
    const result = await queryHMMatterHome({stage: "dev"})
    // console.log("queryHMMatterHome ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:HMMatterHome}}})
  });
  it("queryHMMatterRoom", async () => {
    const result = await queryHMMatterRoom({stage: "dev"})
    // console.log("queryHMMatterRoom ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:HMMatterRoom}}})
  });
  it("queryHMMatterTopology", async () => {
    const result = await queryHMMatterTopology({stage: "dev"})
    // console.log("queryHMMatterTopology ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:HMMatterTopology}}})
  });
  it("queryHMService", async () => {
    const result = await queryHMService({stage: "dev"})
    // console.log("queryHMService ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:HMService}}})
  });
  it("queryHMTimerTrigger", async () => {
    const result = await queryHMTimerTrigger({stage: "dev"})
    // console.log("queryHMTimerTrigger ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:HMTimerTrigger}}})
  });
});

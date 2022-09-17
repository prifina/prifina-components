'use strict';
import {getModuleName,
  getInfo,
  getFields,
  queryCardioActivity
  } from "@prifina/runkeeper";
import 'regenerator-runtime/runtime';
import { cardioActivity } from "@dynamic-data/runkeeper-data";



describe("Runkeeper", () => {
  //test.todo("needs tests");
  it("test if imports work", () => {
    expect(getFields).toBeTruthy()
    expect(getInfo).toBeTruthy()
    expect(getModuleName).toBeTruthy()
    expect(queryCardioActivity).toBeTruthy()
  })
  it("getModuleName", () => {
    const name = getModuleName()
    expect(typeof name).toEqual('string');
    expect(name).toEqual('Runkeeper');

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
  it("queryCardioActivity", async () => {
    const result = await queryCardioActivity({stage: "dev"})
    // console.log("queryCardioActivity ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:cardioActivity}}})
  });
});

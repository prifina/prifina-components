'use strict';
import {
  getFields,
  getInfo,
  getModuleName,
  queryActivitySummary, queryActivitySummariesAsync, queryReadinessSummariesAsync, queryReadinessSummary, querySleepData, querySleepDataAsync, querySleepSummariesAsync, querySleepSummary,
} from "@prifina/oura";
import 'regenerator-runtime/runtime';
import { ActivitySummary, ActivitySummaryAsync, ReadinessSummary, ReadinessSummaryAsync, SleepSummary, SleepSummaryAsync, } from "@dynamic-data/oura-data";



describe("oura", () => {
  //test.todo("needs tests");
  it("test if imports work", () => {
    expect(getFields).toBeTruthy()
    expect(getInfo).toBeTruthy()
    expect(getModuleName).toBeTruthy()
    expect(queryActivitySummary).toBeTruthy()
  })
  it("getModuleName", () => {
    const name = getModuleName()
    expect(typeof name).toEqual('string');
    expect(name).toEqual('Oura');

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
  it("queryActivitySummary", async () => {
    const result = await queryActivitySummary({ stage: "dev" })
    // console.log("queryActivitySummary ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({ data: { getDataObject: { content: ActivitySummary } } })
  });
  it("queryActivitySummariesAsync", async () => {
    const result = await queryActivitySummariesAsync({ stage: "dev" })
    // console.log("queryActivitySummariesAsync ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({ data: { getDataObject: { content: ActivitySummaryAsync.map(m => m.replace(/\t/g, ",")) } } })
  });
  it("queryReadinessSummariesAsync", async () => {
    const result = await queryReadinessSummariesAsync({ stage: "dev" })
    // console.log("queryReadinessSummariesAsync ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({ data: { getDataObject: { content: ReadinessSummaryAsync.map(m => m.replace(/\t/g, ",")) } } })
  });
  it("queryReadinessSummary", async () => {
    const result = await queryReadinessSummary({ stage: "dev" })
    // console.log("queryReadinessSummary ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({ data: { getDataObject: { content: ReadinessSummary } } })
  });
  it("querySleepData", async () => {
    const result = await querySleepData({ stage: "dev" })
    // console.log("querySleepData ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({ data: { getDataObject: { content: SleepSummary } } })
  });
  it("querySleepDataAsync", async () => {
    const result = await querySleepDataAsync({ stage: "dev" })
    // console.log("querySleepDataAsync ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({ data: { getDataObject: { content: SleepSummaryAsync.map(m => m.replace(/\t/g, ",")) } } })
  });
  it("querySleepSummary", async () => {
    const result = await querySleepSummary({ stage: "dev" })
    // console.log("querySleepSummary ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({ data: { getDataObject: { content: SleepSummary } } })
  });
  it("querySleepSummariesAsync", async () => {
    const result = await querySleepSummariesAsync({ stage: "dev" })

    // console.log("querySleepSummariesAsync ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({ data: { getDataObject: { content: SleepSummaryAsync.map(m => m.replace(/\t/g, ",")) } } })
  });
});

'use strict';
import {getModuleName,
  getInfo,
  getFields,
  queryAccConfig,
  queryAccData,
  queryAccInfo,
  queryAdvSettings,
  queryAdvState,
  queryAppInfo,
  queryBleConfig,
  queryBondList,
  queryBondingSettings,
  queryCalibrationData,
  queryCalibrationMatrix,
  queryDebugLogConfig,
  queryDebugLogResult,
  queryDebugMessage,
  queryDebugMessageConfig,
  queryDeviceInfo,
  queryECGConfig,
  queryECGData,
  queryECGInfo,
  queryEepromData,
  queryEepromInfo,
  queryFaultInfo,
  queryGyroConfig,
  queryGyroData,
  queryGyroInfo,
  queryHRData,
  queryHRInfo,
  queryIMU6Data,
  queryIMU6MData,
  queryIMU9Data,
  queryIMUConfig,
  queryIMUInfo,
  queryLedState,
  queryLeds,
  queryMagnConfig,
  queryMagnData,
  queryMagnInfo,
  queryMemory,
  queryModuleStatus,
  queryPeerChange,
  queryPeerList,
  queryProductData,
  queryResetReason,
  queryScanResult,
  queryState,
  queryStateChange,
  queryStepsDone,
  querySystemModeStatus,
  queryTempInfo,
  queryTemperatureValue,
  queryVisualIndState
  } from "@prifina/movesense";
import 'regenerator-runtime/runtime';
import { AccConfig,
  AccData,
  AccInfo,
  AdvSettings,
  AdvState,
  AppInfo,
  BleConfig,
  BondList,
  BondingSettings,
  CalibrationData,
  CalibrationMatrix,
  DebugLogConfig,
  DebugLogResult,
  DebugMessage,
  DebugMessageConfig,
  DeviceInfo,
  ECGConfig,
  ECGData,
  ECGInfo,
  EepromData,
  EepromInfo,
  FaultInfo,
  GyroConfig,
  GyroData,
  GyroInfo,
  HRData,
  HRInfo,
  IMU6Data,
  IMU6MData,
  IMU9Data,
  IMUConfig,
  IMUInfo,
  LedState,
  Leds,
  MagnConfig,
  MagnData,
  MagnInfo,
  Memory,
  ModuleStatus,
  PeerChange,
  PeerList,
  ProductData,
  ResetReason,
  ScanResult,
  State,
  StateChange,
  StepsDone,
  SystemModeStatus,
  TempInfo,
  TemperatureValue,
  VisualIndState, } from "@dynamic-data/movesense-data";



describe("Movesense", () => {
  //test.todo("needs tests");
  it("test if imports work", () => {
    expect(getFields).toBeTruthy()
    expect(getInfo).toBeTruthy()
    expect(getModuleName).toBeTruthy()
    expect(queryAccConfig).toBeTruthy()
  })
  it("getModuleName", () => {
    const name = getModuleName()
    expect(typeof name).toEqual('string');
    expect(name).toEqual('Movesense');

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
  it("queryAccConfig", async () => {
    const result = await queryAccConfig({stage: "dev"})
    // console.log("queryAccConfig ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:AccConfig}}})
  });
  it("queryAccData", async () => {
    const result = await queryAccData({stage: "dev"})
    // console.log("queryAccData ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:AccData}}})
  });
  it("queryAccInfo", async () => {
    const result = await queryAccInfo({stage: "dev"})
    // console.log("queryAccInfo ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:AccInfo}}})
  });
  it("queryAdvSettings", async () => {
    const result = await queryAdvSettings({stage: "dev"})
    // console.log("queryAdvSettings ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:AdvSettings}}})
  });
  it("queryAdvState", async () => {
    const result = await queryAdvState({stage: "dev"})
    // console.log("queryAdvState ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:AdvState}}})
  });
  it("queryAppInfo", async () => {
    const result = await queryAppInfo({stage: "dev"})
    // console.log("queryAppInfo ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:AppInfo}}})
  });
  it("queryBleConfig", async () => {
    const result = await queryBleConfig({stage: "dev"})
    // console.log("queryBleConfig ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:BleConfig}}})
  });
  it("queryBondList", async () => {
    const result = await queryBondList({stage: "dev"})
    // console.log("queryBondList ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:BondList}}})
  });
  it("queryBondingSettings", async () => {
    const result = await queryBondingSettings({stage: "dev"})
    // console.log("queryBondingSettings ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:BondingSettings}}})
  });
  it("queryCalibrationData", async () => {
    const result = await queryCalibrationData({stage: "dev"})
    // console.log("queryCalibrationData ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:CalibrationData}}})
  });
  it("queryCalibrationMatrix", async () => {
    const result = await queryCalibrationMatrix({stage: "dev"})
    // console.log("queryCalibrationMatrix ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:CalibrationMatrix}}})
  });
  it("queryDebugLogConfig", async () => {
    const result = await queryDebugLogConfig({stage: "dev"})
    // console.log("queryDebugLogConfig ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:DebugLogConfig}}})
  });
  it("queryDebugLogResult", async () => {
    const result = await queryDebugLogResult({stage: "dev"})
    // console.log("queryDebugLogResult ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:DebugLogResult}}})
  });
  it("queryDebugMessage", async () => {
    const result = await queryDebugMessage({stage: "dev"})
    // console.log("queryDebugMessage ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:DebugMessage}}})
  });
  it("queryDebugMessageConfig", async () => {
    const result = await queryDebugMessageConfig({stage: "dev"})
    // console.log("queryDebugMessageConfig ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:DebugMessageConfig}}})
  });
  it("queryDeviceInfo", async () => {
    const result = await queryDeviceInfo({stage: "dev"})
    // console.log("queryDeviceInfo ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:DeviceInfo}}})
  });
  it("queryECGConfig", async () => {
    const result = await queryECGConfig({stage: "dev"})
    // console.log("queryECGConfig ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ECGConfig}}})
  });
  it("queryECGData", async () => {
    const result = await queryECGData({stage: "dev"})
    // console.log("queryECGData ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ECGData}}})
  });
  it("queryECGInfo", async () => {
    const result = await queryECGInfo({stage: "dev"})
    // console.log("queryECGInfo ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ECGInfo}}})
  });
  it("queryEepromData", async () => {
    const result = await queryEepromData({stage: "dev"})
    // console.log("queryEepromData ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:EepromData}}})
  });
  it("queryEepromInfo", async () => {
    const result = await queryEepromInfo({stage: "dev"})
    // console.log("queryEepromInfo ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:EepromInfo}}})
  });
  it("queryFaultInfo", async () => {
    const result = await queryFaultInfo({stage: "dev"})
    // console.log("queryFaultInfo ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:FaultInfo}}})
  });
  it("queryGyroConfig", async () => {
    const result = await queryGyroConfig({stage: "dev"})
    // console.log("queryGyroConfig ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:GyroConfig}}})
  });
  it("queryGyroData", async () => {
    const result = await queryGyroData({stage: "dev"})
    // console.log("queryGyroData ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:GyroData}}})
  });
  it("queryGyroInfo", async () => {
    const result = await queryGyroInfo({stage: "dev"})
    // console.log("queryGyroInfo ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:GyroInfo}}})
  });
  it("queryHRData", async () => {
    const result = await queryHRData({stage: "dev"})
    // console.log("queryHRData ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:HRData}}})
  });
  it("queryHRInfo", async () => {
    const result = await queryHRInfo({stage: "dev"})
    // console.log("queryHRInfo ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:HRInfo}}})
  });
  it("queryIMU6Data", async () => {
    const result = await queryIMU6Data({stage: "dev"})
    // console.log("queryIMU6Data ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:IMU6Data}}})
  });
  it("queryIMU6MData", async () => {
    const result = await queryIMU6MData({stage: "dev"})
    // console.log("queryIMU6MData ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:IMU6MData}}})
  });
  it("queryIMU9Data", async () => {
    const result = await queryIMU9Data({stage: "dev"})
    // console.log("queryIMU9Data ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:IMU9Data}}})
  });
  it("queryIMUConfig", async () => {
    const result = await queryIMUConfig({stage: "dev"})
    // console.log("queryIMUConfig ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:IMUConfig}}})
  });
  it("queryIMUInfo", async () => {
    const result = await queryIMUInfo({stage: "dev"})
    // console.log("queryIMUInfo ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:IMUInfo}}})
  });
  it("queryLedState", async () => {
    const result = await queryLedState({stage: "dev"})
    // console.log("queryLedState ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:LedState}}})
  });
  it("queryLeds", async () => {
    const result = await queryLeds({stage: "dev"})
    // console.log("queryLeds ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Leds}}})
  });
  it("queryMagnConfig", async () => {
    const result = await queryMagnConfig({stage: "dev"})
    // console.log("queryMagnConfig ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:MagnConfig}}})
  });
  it("queryMagnData", async () => {
    const result = await queryMagnData({stage: "dev"})
    // console.log("queryMagnData ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:MagnData}}})
  });
  it("queryMagnInfo", async () => {
    const result = await queryMagnInfo({stage: "dev"})
    // console.log("queryMagnInfo ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:MagnInfo}}})
  });
  it("queryMemory", async () => {
    const result = await queryMemory({stage: "dev"})
    // console.log("queryMemory ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Memory}}})
  });
  it("queryModuleStatus", async () => {
    const result = await queryModuleStatus({stage: "dev"})
    // console.log("queryModuleStatus ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ModuleStatus}}})
  });
  it("queryPeerChange", async () => {
    const result = await queryPeerChange({stage: "dev"})
    // console.log("queryPeerChange ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:PeerChange}}})
  });
  it("queryPeerList", async () => {
    const result = await queryPeerList({stage: "dev"})
    // console.log("queryPeerList ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:PeerList}}})
  });
  it("queryProductData", async () => {
    const result = await queryProductData({stage: "dev"})
    // console.log("queryProductData ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ProductData}}})
  });
  it("queryResetReason", async () => {
    const result = await queryResetReason({stage: "dev"})
    // console.log("queryResetReason ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ResetReason}}})
  });
  it("queryScanResult", async () => {
    const result = await queryScanResult({stage: "dev"})
    // console.log("queryScanResult ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ScanResult}}})
  });
  it("queryState", async () => {
    const result = await queryState({stage: "dev"})
    // console.log("queryState ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:State}}})
  });
  it("queryStateChange", async () => {
    const result = await queryStateChange({stage: "dev"})
    // console.log("queryStateChange ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:StateChange}}})
  });
  it("queryStepsDone", async () => {
    const result = await queryStepsDone({stage: "dev"})
    // console.log("queryStepsDone ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:StepsDone}}})
  });
  it("querySystemModeStatus", async () => {
    const result = await querySystemModeStatus({stage: "dev"})
    // console.log("querySystemModeStatus ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:SystemModeStatus}}})
  });
  it("queryTempInfo", async () => {
    const result = await queryTempInfo({stage: "dev"})
    // console.log("queryTempInfo ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:TempInfo}}})
  });
  it("queryTemperatureValue", async () => {
    const result = await queryTemperatureValue({stage: "dev"})
    // console.log("queryTemperatureValue ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:TemperatureValue}}})
  });
  it("queryVisualIndState", async () => {
    const result = await queryVisualIndState({stage: "dev"})
    // console.log("queryVisualIndState ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:VisualIndState}}})
  });
});

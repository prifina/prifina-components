'use strict';
import {getModuleName,
  getInfo,
  getFields,
  queryProducts,
  queryProductDetails,
  queryPriceEstimates,
  queryTimeEstimates,
  queryUserInfo,
  querySavedPlaces,
  queryRideDetails,
  queryRideMapDetails,
  queryRideReceiptDetails,
  queryPaymentMethods
  } from "@prifina/uber";
import 'regenerator-runtime/runtime';
import {
  products,
  productDetails,
  priceEstimates,
  timeEstimates,
  userInfo,
  savedPlaces,
  rideDetails,
  rideMapDetails,
  rideReceiptDetails,
  paymentMethods
} from "@dynamic-data/uber-data";



describe("Uber", () => {
  //test.todo("needs tests");
  it("test if imports work", () => {
    expect(getFields).toBeTruthy()
    expect(getInfo).toBeTruthy()
    expect(getModuleName).toBeTruthy()
    expect(queryProducts).toBeTruthy()
  })
  it("getModuleName", () => {
    const name = getModuleName()
    expect(typeof name).toEqual('string');
    expect(name).toEqual('Uber');

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
  it("queryProducts", async () => {
    const result = await queryProducts({stage: "dev"})
    // console.log("queryProducts ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:products }}})
  });
  it("queryProductDetails", async () => {
    const result = await queryProductDetails({stage: "dev"})
    // console.log("queryProductDetails ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:productDetails}}})
  });
  it("queryPriceEstimates", async () => {
    const result = await queryPriceEstimates({stage: "dev"})
    // console.log("queryPriceEstimates ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:priceEstimates}}})
  });
  it("queryTimeEstimates", async () => {
    const result = await queryTimeEstimates({stage: "dev"})
    // console.log("queryTimeEstimates ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:timeEstimates}}})
  });
  it("queryUserInfo", async () => {
    const result = await queryUserInfo({stage: "dev"})
    // console.log("queryUserInfo ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:userInfo}}})
  });
  it("querySavedPlaces", async () => {
    const result = await querySavedPlaces({stage: "dev"})
    // console.log("querySavedPlaces ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:savedPlaces}}})
  });
  it("queryRideDetails", async () => {
    const result = await queryRideDetails({stage: "dev"})
    // console.log("queryRideDetails ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:rideDetails}}})
  });
  it("queryRideMapDetails", async () => {
    const result = await queryRideMapDetails({stage: "dev"})
    // console.log("queryRideMapDetails ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:rideMapDetails}}})
  });
  it("queryRideReceiptDetails", async () => {
    const result = await queryRideReceiptDetails({stage: "dev"})
    // console.log("queryRideReceiptDetails ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:rideReceiptDetails}}})
  });
  it("queryPaymentMethods", async () => {
    const result = await queryPaymentMethods({stage: "dev"})
    // console.log("queryPaymentMethods ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:paymentMethods}}})
  });
});

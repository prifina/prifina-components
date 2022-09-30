'use strict';
import React, { useRef, useEffect } from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

//import {Op} from "../src/queryBuilder";
//import PrifinaProvider,{usePrifina,PrifinaContext} from "../src/PrifinaProvider";
import 'regenerator-runtime/runtime';
import { PrifinaProvider, PrifinaContext, Op, usePrifina } from "@prifina/hooks-v2";

import { mockupObject, TestContext, SandboxContext } from "./providerTest";

//import { useDeleteCallback } from '../src/utils';

/*
jest.mock("react", () => {
    const originReact = jest.requireActual("react");
    const mUseRef = jest.fn();
    return {
      ...originReact,
      useRef: mUseRef,
    };
  });
*/

const componentProps = { usePrifina, Op };

describe.only('Sandbox', () => {


  test("Provider sandbox test", async () => {
    //const spy = jest.spyOn(PrifinaProvider, 'check');

    //const mRef = { current: {["APP-ID"]:["1","2"]} };
    //useRef.mockReturnValueOnce(mRef);
    const stage = "sandbox"

    render(<PrifinaProvider activeApp={"hookTest"} stage={stage} Context={PrifinaContext}>
      <SandboxContext appId={"APP-ID"} {...componentProps} />
    </PrifinaProvider>);


    localStorage.removeItem("updateTest");
    await waitFor(() => screen.getByText("Context `${stage}`"))

    //console.log(testCase.API["APP-ID"]?.Test)
    expect(screen.getByText("Context `${stage}`")).toBeInTheDocument();

    fireEvent.click(screen.getByRole('queryTest'))

    await waitFor(() => screen.getByText("QueryTest-OK"));
    console.log("TEST ", localStorage.getItem("testCaseQuery"));
    const testCaseQuery = JSON.parse(localStorage.getItem("testCaseQuery"));
    expect(testCaseQuery).toStrictEqual({ data: { getDataObject: { content: mockupObject } } })

    /*
    fireEvent.click(screen.getByRole('queryTest'))

    await waitFor(() => screen.getByText("QueryTest-OK"));
    console.log("TEST ",localStorage.getItem("testCaseQuery"));
    const testCaseQuery=JSON.parse(localStorage.getItem("testCaseQuery"));
    expect(testCaseQuery).toStrictEqual({data:{getDataObject:{content:mockupObject}}})

    fireEvent.click(screen.getByRole('mutationTest'));
    await waitFor(() => screen.getByText("MutationTest-OK"));
    console.log("TEST ",localStorage.getItem("testCaseMutation"));
    const testCaseMutation=JSON.parse(localStorage.getItem("testCaseMutation"));
    expect(testCaseMutation.data?.mutationCreateMessage).not.toBeUndefined()


                                     
//console.log("BUTTON ",screen.getByRole('mutationDataTest'));
    fireEvent.click(screen.getByRole('mutationDataTest'));
    await waitFor(() => screen.getByText("MutationTest2-OK"));
    console.log("TEST ",localStorage.getItem("testCaseMutation2"));
    const testCaseMutation2=JSON.parse(localStorage.getItem("testCaseMutation2"));
    expect(testCaseMutation2.data?.mutationCreateDataMessage).not.toBeUndefined()


    fireEvent.click(screen.getByRole('subscriptionTest'));


    fireEvent.click(screen.getByRole('subscriptionTest'));
    await waitFor(() => screen.getByText("SubscriptionTest-OK"));
    expect(screen.getByText("SubscriptionDataTest-OK")).toBeInTheDocument();
     if (stage!=="dev") {
    await waitFor(() => screen.getByText("UPDATE TEST"));
    console.log("TEST ",localStorage.getItem("updateTest"));
    const testSubscription=JSON.parse(localStorage.getItem("updateTest"));
    expect(testSubscription).toBe("Subsription Testing...");
     }  
    */

  })

});

describe('Connectors', () => {


  test("Provider test", async () => {
    //const spy = jest.spyOn(PrifinaProvider, 'check');

    //const mRef = { current: {["APP-ID"]:["1","2"]} };
    //useRef.mockReturnValueOnce(mRef);
    const stage = "prod"

    render(<PrifinaProvider activeApp={"hookTest"} stage={stage} Context={PrifinaContext}>
      <TestContext appId={"APP-ID"} {...componentProps} />
    </PrifinaProvider>);

    await waitFor(() => screen.getByText("Context `${stage}`"))

    //console.log(testCase.API["APP-ID"]?.Test)
    expect(screen.getByText("Context `${stage}`")).toBeInTheDocument();
    // expect(testCase.API["APP-ID"]?.Test).toStrictEqual({});
    //console.log(testCase);
    // expect(testCase).toStrictEqual({data:{getDataObject:{content:mockupObject}}})

    /*
    fireEvent.click(screen.getByRole('queryTest'))

    await waitFor(() => screen.getByText("QueryTest-OK"));
    console.log("TEST ",localStorage.getItem("testCaseQuery"));
    const testCaseQuery=JSON.parse(localStorage.getItem("testCaseQuery"));
    expect(testCaseQuery).toStrictEqual({data:{getDataObject:{content:mockupObject}}})

    fireEvent.click(screen.getByRole('mutationTest'));
    await waitFor(() => screen.getByText("MutationTest-OK"));
    console.log("TEST ",localStorage.getItem("testCaseMutation"));
    const testCaseMutation=JSON.parse(localStorage.getItem("testCaseMutation"));
    expect(testCaseMutation.data?.mutationCreateMessage).not.toBeUndefined()


                                     
//console.log("BUTTON ",screen.getByRole('mutationDataTest'));
    fireEvent.click(screen.getByRole('mutationDataTest'));
    await waitFor(() => screen.getByText("MutationTest2-OK"));
    console.log("TEST ",localStorage.getItem("testCaseMutation2"));
    const testCaseMutation2=JSON.parse(localStorage.getItem("testCaseMutation2"));
    expect(testCaseMutation2.data?.mutationCreateDataMessage).not.toBeUndefined()


    fireEvent.click(screen.getByRole('subscriptionTest'));


    fireEvent.click(screen.getByRole('subscriptionTest'));
    await waitFor(() => screen.getByText("SubscriptionTest-OK"));
    expect(screen.getByText("SubscriptionDataTest-OK")).toBeInTheDocument();
     if (stage!=="dev") {
    await waitFor(() => screen.getByText("UPDATE TEST"));
    console.log("TEST ",localStorage.getItem("updateTest"));
    const testSubscription=JSON.parse(localStorage.getItem("updateTest"));
    expect(testSubscription).toBe("Subsription Testing...");
     }  
    */

    localStorage.removeItem("updateTest");

    fireEvent.click(screen.getByRole('subscriptionDataTest'));
    await waitFor(() => screen.getByText("SubscriptionDataTest-OK"));
    expect(screen.getByText("SubscriptionDataTest-OK")).toBeInTheDocument();

    if (stage !== "dev") {
      await waitFor(() => screen.getByText("UPDATE TEST"));
      console.log("TEST ", localStorage.getItem("updateTest"));
      const testSubscriptionData = JSON.parse(localStorage.getItem("updateTest"));
      expect(testSubscriptionData).toBe("Subsription Testing...");
    }



  })

});

describe('Provider hook', () => {
  //console.log("Op ",Op);
  //it.todo('needs tests');

  it("Filter test", () => {

    const d = new Date("2022-08-03");

    const dd = d.setDate(d.getDate() - 14);
    const dateStr = new Date(dd).toISOString().split("T")[0];

    const filter = {
      ["s3::date"]: {
        [Op.gte]: dateStr,
      },
    };

    //console.log(filter);
    expect(filter).toStrictEqual({ 's3::date': { [Op.gte]: '2022-07-20' } });
  });

});

/*

https://thewebdev.info/2022/02/24/how-to-mock-react-custom-hook-returned-value-with-jest/

    it("deleteCallbacks",()=>{
   
        
        const mRef = { current: {["APP-ID"]:["1","2"]} };
        useRef.mockReturnValueOnce(mRef);

        const callbacks=useRef()
       
        console.log("CALLBACKS ",callbacks.current["APP-ID"])
        //deleteCallback("APP",0);
        const { result} = renderHook(() =>useDeleteCallback());
        act(() => {
            result.current.deleteCallback("APP-ID",0)
          })
        
        console.log("RESULT ",result.current);
    })
     
        const callbacks={};
        const current={["APP-ID"]:["1","2"]};
        Object.defineProperty(callbacks, 'current', {
            value: current,
            writable: true
        });

jest.mock("react", () => {
  const originReact = jest.requireActual("react");
  const mUseRef = jest.fn();
  return {
    ...originReact,
    useRef: mUseRef,
  };
});

describe("test", () => {
  it("should pass", () => {
    const mRef = { current: { offsetWidth: 100 } };
    useRef.mockReturnValueOnce(mRef);
    const wrapper = shallow(<Child2></Child2>);
    expect(wrapper.find("#myDiv").text()).toBe("123");
    expect(wrapper.find("p").text()).toBe("Div width is: 100");
  });
});

*/
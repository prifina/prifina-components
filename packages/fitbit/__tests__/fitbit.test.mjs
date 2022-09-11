/**
 * @jest-environment jsdom
 */

 "use strict";

 //const googleTimeline = require('..');
 // const { getModuleName, getFields } = require("@prifina/oura");
//  const React = require('react')
import React,{useRef,useEffect, useState} from 'react'
 
import {render, fireEvent, waitFor, screen,act} from '@testing-library/react'
import {PrifinaProvider,usePrifina,PrifinaContext,Op} from "../../hooks/src";
import FITBIT from "../src";
 
 
 // import '@testing-library/jest-dom'
 
 const appID = "fitbit";
 const TestCompoent = () => {
    const { currentUser, Prifina, check, API, registerHooks, onUpdate } =
    usePrifina();
    // const updateTest = (payload) => {
        // console.log("UPDATE TEST PAYLOAD", payload);
    //   };
      useEffect(async () => {
        // init callback function for background updates/notifications
        // onUpdate(appID, updateTest);
    
        console.log("FITBIT ", FITBIT);
        // register datasource modules
        registerHooks(appID, [FITBIT]);
        console.log(check());
      }, []);

    const [changeOutput, setChangeOutput] = useState("")
      
    return (
        <>
        <div>
            <button
              onClick={async (e) => {
                let x = await API[appID].Fitbit.queryActivities({
                }) 
                console.log(
                  "API ",
                  x
                );
                setChangeOutput(x)
                
              }}
            >
              queryActivities
            </button>
            <button
              onClick={async (e) => {
                let x = await API[appID].Fitbit.queryActivitySummary({
                }) 
                console.log(
                  "API ",
                  x
                );
                setChangeOutput(x)
                
              }}
            >
              queryActivitySummary
            </button>
            <button
              onClick={async (e) => {
                let x = await API[appID].Fitbit.queryHeartRateData({
                }) 
                console.log(
                  "API ",
                  x
                );
                setChangeOutput(x)
                
              }}
            >
              queryHeartRateData
            </button>
            <button
              onClick={async (e) => {
                let x = await API[appID].Fitbit.queryHeartRateSummary({
                }) 
                console.log(
                  "API ",
                  x
                );
                setChangeOutput(x)
                
              }}
            >
              queryHeartRateSummary
            </button>
            <button
              onClick={async (e) => {
                let x = await API[appID].Fitbit.querySleepData({
                }) 
                console.log(
                  "API ",
                  x
                );
                setChangeOutput(x)
                
              }}
            >
              querySleepData
            </button>
            <button
              onClick={async (e) => {
                let x = await API[appID].Fitbit.querySleepSummary({
                }) 
                console.log(
                  "API ",
                  x
                );
                setChangeOutput(x)
                
              }}
            >
              querySleepSummary
            </button>
            <button
              onClick={async (e) => {
                let x = await API[appID].Fitbit.querySleepQuality({
                }) 
                console.log(
                  "API ",
                  x
                );
                setChangeOutput(x)
                
              }}
            >
              querySleepQuality
            </button>
            <button
              onClick={async (e) => {
                let x = await API[appID].Fitbit.queryActivitySummariesAsync({
                }) 
                console.log(
                  "API ",
                  x
                );
                setChangeOutput(x)
                
              }}
            >
              queryActivitySummariesAsync
            </button>
            <button
              onClick={async (e) => {
                let x = await API[appID].Fitbit.queryHeartRateSummariesAsync({
                }) 
                console.log(
                  "API ",
                  x
                );
                setChangeOutput(x)
                
              }}
            >
              queryHeartRateSummariesAsync
            </button>
            <button
              onClick={async (e) => {
                let x = await API[appID].Fitbit.querySleepSummariesAsync({
                }) 
                console.log(
                  "API ",
                  x
                );
                setChangeOutput(x)
                
              }}
            >
              querySleepSummariesAsync
            </button>
            <button
              onClick={async (e) => {
                let x = await API[appID].Fitbit.queryActivitiesAsync({
                }) 
                console.log(
                  "API ",
                  x
                );
                setChangeOutput(x)
                
              }}
            >
              queryActivitiesAsync
            </button>
            <button
              onClick={async (e) => {
                let x = await API[appID].Fitbit.queryHeartRateDataAsync({
                }) 
                console.log(
                  "API ",
                  x
                );
                setChangeOutput(x)
                
              }}
            >
              queryHeartRateDataAsync
            </button>
            <button
              onClick={async (e) => {
                let x = await API[appID].Fitbit.querySleepDataAsync({
                }) 
                console.log(
                  "API ",
                  x
                );
                setChangeOutput(x)
                
              }}
            >
              querySleepDataAsync
            </button>
            <button
              onClick={async (e) => {
                let x = await API[appID].Fitbit.querySleepQualityAsync({
                }) 
                console.log(
                  "API ",
                  x
                );
                setChangeOutput(x)
                
              }}
            >
              querySleepQualityAsync
            </button>
            <p data-testid="output">
              {JSON.stringify(changeOutput)}
            </p>
        </div>
        </>
    )
}
describe("hooks", () => {
  //test.todo("needs tests");

  beforeEach(()=>{
    render(
      <PrifinaProvider stage={"dev"}>
          <TestCompoent/>
      </PrifinaProvider>    
  )
  })
//    "queryActivities",
//     "queryActivitySummary",
//     "queryHeartRateData",
//     "queryHeartRateSummary",
//     "querySleepData",
//     "querySleepSummary",
//     "querySleepQuality",
//     "queryActivitySummariesAsync",
//     "queryHeartRateSummariesAsync",
//     "querySleepSummariesAsync",
//     "queryActivitiesAsync",
//     "queryHeartRateDataAsync",
//     "querySleepDataAsync",
//     "querySleepQualityAsync",
   it("queryActivities", async () => {
   
       
       // console.log(await waitFor(()=>(screen.findAllByText("Hey There"))))
       const queryActivitiesButton = await waitFor(()=>(screen.getByRole('button',{name: "queryActivities"})))
       await waitFor(()=>{
       fireEvent.click(queryActivitiesButton)
       })
       await waitFor(()=>{
       const output = screen.getByTestId('output')
       console.log(output.textContent)
   
       let result = JSON.parse(output.textContent)
       console.log(result)
       expect(typeof result).toBe("object");  
       })
       //console.log(result);
       
   });
   it("queryActivitySummary", async () => {
   
       
       // console.log(await waitFor(()=>(screen.findAllByText("Hey There"))))
       const queryActivitySummaryButton = await waitFor(()=>(screen.getByRole('button',{name: "queryActivitySummary"})))
       await waitFor(()=>{
       fireEvent.click(queryActivitySummaryButton)
       })
       await waitFor(()=>{
       const output = screen.getByTestId('output')
       console.log(output.textContent)

       let result = JSON.parse(output.textContent)
       console.log(result)
       expect(typeof result).toBe("object");  
       })
       //console.log(result);
       
   });
   it("queryHeartRateData", async () => {
   
       
       // console.log(await waitFor(()=>(screen.findAllByText("Hey There"))))
       const queryHeartRateDataButton = await waitFor(()=>(screen.getByRole('button',{name: "queryHeartRateData"})))
       await waitFor(()=>{
       fireEvent.click(queryHeartRateDataButton)
       })
       await waitFor(()=>{
       const output = screen.getByTestId('output')
       console.log(output.textContent)

       let result = JSON.parse(output.textContent)
       console.log(result)
       expect(typeof result).toBe("object");  
       })
       //console.log(result);
       
   });
   it("queryHeartRateSummary", async () => {
   
       
       // console.log(await waitFor(()=>(screen.findAllByText("Hey There"))))
       const queryHeartRateSummaryButton = await waitFor(()=>(screen.getByRole('button',{name: "queryHeartRateSummary"})))
       await waitFor(()=>{
       fireEvent.click(queryHeartRateSummaryButton)
       })
       await waitFor(()=>{
       const output = screen.getByTestId('output')
       console.log(output.textContent)

       let result = JSON.parse(output.textContent)
       console.log(result)
       expect(typeof result).toBe("object");  
       })
       //console.log(result);
       
   });
   it("querySleepData", async () => {
   
       
       // console.log(await waitFor(()=>(screen.findAllByText("Hey There"))))
       const querySleepDataButton = await waitFor(()=>(screen.getByRole('button',{name: "querySleepData"})))
       await waitFor(()=>{
       fireEvent.click(querySleepDataButton)
       })
       await waitFor(()=>{
       const output = screen.getByTestId('output')
       console.log(output.textContent)

       let result = JSON.parse(output.textContent)
       console.log(result)
       expect(typeof result).toBe("object");  
       })
       //console.log(result);
       
   });
   it("querySleepSummary", async () => {
   
       
       // console.log(await waitFor(()=>(screen.findAllByText("Hey There"))))
       const querySleepSummaryButton = await waitFor(()=>(screen.getByRole('button',{name: "querySleepSummary"})))
       await waitFor(()=>{
       fireEvent.click(querySleepSummaryButton)
       })
       await waitFor(()=>{
       const output = screen.getByTestId('output')
       console.log(output.textContent)

       let result = JSON.parse(output.textContent)
       console.log(result)
       expect(typeof result).toBe("object");  
       })
       //console.log(result);
       
   });
   it("querySleepQuality", async () => {
   
       
       // console.log(await waitFor(()=>(screen.findAllByText("Hey There"))))
       const querySleepQualityButton = await waitFor(()=>(screen.getByRole('button',{name: "querySleepQuality"})))
       await waitFor(()=>{
       fireEvent.click(querySleepQualityButton)
       })
       await waitFor(()=>{
       const output = screen.getByTestId('output')
       console.log(output.textContent)

       let result = JSON.parse(output.textContent)
       console.log(result)
       expect(typeof result).toBe("object");  
       })
       //console.log(result);
       
   });
   it("queryActivitySummariesAsync", async () => {
   
       
       // console.log(await waitFor(()=>(screen.findAllByText("Hey There"))))
       const queryActivitySummariesAsyncButton = await waitFor(()=>(screen.getByRole('button',{name: "queryActivitySummariesAsync"})))
       await waitFor(()=>{
       fireEvent.click(queryActivitySummariesAsyncButton)
       })
       await waitFor(()=>{
       const output = screen.getByTestId('output')
       console.log(output.textContent)

       let result = JSON.parse(output.textContent)
       console.log(result)
       expect(typeof result).toBe("object");  
       })
       //console.log(result);
       
   });
   it("queryHeartRateSummariesAsync", async () => {
   
       
       // console.log(await waitFor(()=>(screen.findAllByText("Hey There"))))
       const queryHeartRateSummariesAsyncButton = await waitFor(()=>(screen.getByRole('button',{name: "queryHeartRateSummariesAsync"})))
       await waitFor(()=>{
       fireEvent.click(queryHeartRateSummariesAsyncButton)
       })
       await waitFor(()=>{
       const output = screen.getByTestId('output')
       console.log(output.textContent)

       let result = JSON.parse(output.textContent)
       console.log(result)
       expect(typeof result).toBe("object");  
       })
       //console.log(result);
       
   });
   it("querySleepSummariesAsync", async () => {
   
       
       // console.log(await waitFor(()=>(screen.findAllByText("Hey There"))))
       const querySleepSummariesAsyncButton = await waitFor(()=>(screen.getByRole('button',{name: "querySleepSummariesAsync"})))
       await waitFor(()=>{
       fireEvent.click(querySleepSummariesAsyncButton)
       })
       await waitFor(()=>{
       const output = screen.getByTestId('output')
       console.log(output.textContent)

       let result = JSON.parse(output.textContent)
       console.log(result)
       expect(typeof result).toBe("object");  
       })
       //console.log(result);
       
   });
   it("queryActivitiesAsync", async () => {
   
       
       // console.log(await waitFor(()=>(screen.findAllByText("Hey There"))))
       const queryActivitiesAsyncButton = await waitFor(()=>(screen.getByRole('button',{name: "queryActivitiesAsync"})))
       await waitFor(()=>{
       fireEvent.click(queryActivitiesAsyncButton)
       })
       await waitFor(()=>{
       const output = screen.getByTestId('output')
       console.log(output.textContent)

       let result = JSON.parse(output.textContent)
       console.log(result)
       expect(typeof result).toBe("object");  
       })
       //console.log(result);
       
   });
   it("queryHeartRateDataAsync", async () => {
   
       
       // console.log(await waitFor(()=>(screen.findAllByText("Hey There"))))
       const queryHeartRateDataAsyncButton = await waitFor(()=>(screen.getByRole('button',{name: "queryHeartRateDataAsync"})))
       await waitFor(()=>{
       fireEvent.click(queryHeartRateDataAsyncButton)
       })
       await waitFor(()=>{
       const output = screen.getByTestId('output')
       console.log(output.textContent)

       let result = JSON.parse(output.textContent)
       console.log(result)
       expect(typeof result).toBe("object");  
       })
       //console.log(result);
       
   });
   it("querySleepDataAsync", async () => {
   
       
       // console.log(await waitFor(()=>(screen.findAllByText("Hey There"))))
       const querySleepDataAsyncButton = await waitFor(()=>(screen.getByRole('button',{name: "querySleepDataAsync"})))
       await waitFor(()=>{
       fireEvent.click(querySleepDataAsyncButton)
       })
       await waitFor(()=>{
       const output = screen.getByTestId('output')
       console.log(output.textContent)

       let result = JSON.parse(output.textContent)
       console.log(result)
       expect(typeof result).toBe("object");  
       })
       //console.log(result);
       
   });
   it("querySleepQualityAsync", async () => {
   
       
       // console.log(await waitFor(()=>(screen.findAllByText("Hey There"))))
       const querySleepQualityAsyncButton = await waitFor(()=>(screen.getByRole('button',{name: "querySleepQualityAsync"})))
       await waitFor(()=>{
       fireEvent.click(querySleepQualityAsyncButton)
       })
       await waitFor(()=>{
       const output = screen.getByTestId('output')
       console.log(output.textContent)

       let result = JSON.parse(output.textContent)
       console.log(result)
       expect(typeof result).toBe("object");  
       })
       //console.log(result);
       
   });
});
 
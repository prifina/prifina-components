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
import GARMIN from "../src";
 
 // import '@testing-library/jest-dom'
 
 const appID = "garmin";
 const TestCompoent = () => {
     const { currentUser, Prifina, check, API, registerHooks, onUpdate } =
     usePrifina();
     // const updateTest = (payload) => {
         // console.log("UPDATE TEST PAYLOAD", payload);
     //   };
       useEffect(async () => {
         // init callback function for background updates/notifications
         // onUpdate(appID, updateTest);
     
         console.log("GARMIN ", GARMIN);
         // register datasource modules
         registerHooks(appID, [GARMIN]);
         console.log(check());
       }, []);
 
     const [changeOutput, setChangeOutput] = useState("")
       
     return (
      <>
      <div>
          <button
            onClick={async (e) => {
              let x = await API[appID].Garmin.queryDailiesDataAsync({
              }) 
              console.log(
                "API ",
                x
              );
              setChangeOutput(x)
              
            }}
          >
            queryDailiesDataAsync
          </button>
          <button
            onClick={async (e) => {
              let x = await API[appID].Garmin.queryEpochsDataAsync({
              }) 
              console.log(
                "API ",
                x
              );
              setChangeOutput(x)
              
            }}
          >
            queryEpochsDataAsync
          </button>
          <button
            onClick={async (e) => {
              let x = await API[appID].Garmin.querySleepsDataAsync({
              }) 
              console.log(
                "API ",
                x
              );
              setChangeOutput(x)
              
            }}
          >
            querySleepsDataAsync
          </button>
          <button
            onClick={async (e) => {
              let x = await API[appID].Garmin.queryPulseoxDataAsync({
              }) 
              console.log(
                "API ",
                x
              );
              setChangeOutput(x)
              
            }}
          >
            queryPulseoxDataAsync
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
 
   it("queryDailiesDataAsync", async () => {
 
     
    // console.log(await waitFor(()=>(screen.findAllByText("Hey There"))))
    const queryDailiesDataAsyncButton = await waitFor(()=>(screen.getByRole('button',{name: "queryDailiesDataAsync"})))
    await waitFor(()=>{
      fireEvent.click(queryDailiesDataAsyncButton)
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
  it("querySleepsDataAsync", async () => {

    
   // console.log(await waitFor(()=>(screen.findAllByText("Hey There"))))
   const querySleepsDataAsyncButton = await waitFor(()=>(screen.getByRole('button',{name: "querySleepsDataAsync"})))
   await waitFor(()=>{
     fireEvent.click(querySleepsDataAsyncButton)
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
 it("querySleepsDataAsync", async () => {

    
   // console.log(await waitFor(()=>(screen.findAllByText("Hey There"))))
   const querySleepsDataAsyncButton = await waitFor(()=>(screen.getByRole('button',{name: "querySleepsDataAsync"})))
   await waitFor(()=>{
     fireEvent.click(querySleepsDataAsyncButton)
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
 it("queryPulseoxDataAsync", async () => {

    
   // console.log(await waitFor(()=>(screen.findAllByText("Hey There"))))
   const queryPulseoxDataAsyncButton = await waitFor(()=>(screen.getByRole('button',{name: "queryPulseoxDataAsync"})))
   await waitFor(()=>{
     fireEvent.click(queryPulseoxDataAsyncButton)
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
 
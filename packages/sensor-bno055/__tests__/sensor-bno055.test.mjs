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
 import SENSOR from "../src";
 
 
 // import '@testing-library/jest-dom'
 
 const appID = "sensor-bno055";
 const TestCompoent = () => {
     const { currentUser, Prifina, check, API, registerHooks, onUpdate } =
     usePrifina();
     // const updateTest = (payload) => {
         // console.log("UPDATE TEST PAYLOAD", payload);
     //   };
       useEffect(async () => {
         // init callback function for background updates/notifications
         // onUpdate(appID, updateTest);
     
         console.log("SENSOR-BNO055 ", SENSOR);
         // register datasource modules
         registerHooks(appID, [SENSOR]);
         console.log(check());
       }, []);
 
     const [changeOutput, setChangeOutput] = useState("")
       
     return (
         <>
         <div>
             <button
               onClick={async (e) => {

                console.log("API", API)
                 let x = await API[appID]["Sensor-BNO055"].queryRawSync({
                 }) 
                 console.log(
                   "API ",
                   x
                 );
                 setChangeOutput(x)
                 
               }}
             >
               queryRawSync
             </button>
             <button
               onClick={async (e) => {
                 let x = await API[appID]["Sensor-BNO055"].queryRawAsync({
                 }) 
                 console.log(
                   "API ",
                   x
                 );
                 setChangeOutput(x)
                 
               }}
             >
               queryRawAsync
             </button>
             <p data-testid="output">
               {JSON.stringify(changeOutput)}
             </p>
         </div>
         </>
     )
 }
 describe("Sensor-BNO055 Connector", () => {
   //test.todo("needs tests");
 
   beforeEach(()=>{
     render(
       <PrifinaProvider stage={"dev"}>
           <TestCompoent/>
       </PrifinaProvider>    
   )
   })
 
   it("queryRawSync", async () => {
 
     
     // console.log(await waitFor(()=>(screen.findAllByText("Hey There"))))
     const queryRawSyncButton = await waitFor(()=>(screen.getByRole('button',{name: "queryRawSync"})))
     await waitFor(()=>{
       fireEvent.click(queryRawSyncButton)
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
   it("queryRawAsync", async () => {
 
     
     // console.log(await waitFor(()=>(screen.findAllByText("Hey There"))))
     const queryRawAsyncButton = await waitFor(()=>(screen.getByRole('button',{name: "queryRawAsync"})))
     await waitFor(()=>{
       fireEvent.click(queryRawAsyncButton)
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
 
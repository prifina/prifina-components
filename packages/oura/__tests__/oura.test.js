/**
 * @jest-environment jsdom
 */

 "use strict";

 //const googleTimeline = require('..');
 // const { getModuleName, getFields } = require("@prifina/oura");
//  const React = require('react')
  const React = require("react")
 const {useRef,useEffect, useState} = require('react')

 
 const {render, fireEvent, waitFor, screen,act} = require('@testing-library/react')
 const {PrifinaProvider,usePrifina,PrifinaContext,Op} = require("../../hooks/src");
 const OURA = require("../src").default;
 
 // import '@testing-library/jest-dom'
 
 const appID = "oura";
 const TestCompoent = () => {
     const { currentUser, Prifina, check, API, registerHooks, onUpdate } =
     usePrifina();
     // const updateTest = (payload) => {
         // console.log("UPDATE TEST PAYLOAD", payload);
     //   };
       useEffect(async () => {
         // init callback function for background updates/notifications
         // onUpdate(appID, updateTest);
     
         console.log("OURA ", OURA);
         // register datasource modules
         registerHooks(appID, [OURA]);
         console.log(check());
       }, []);
 
     const [changeOutput, setChangeOutput] = useState("")
       
     return (
         <>
         <div>
             <button
               onClick={async (e) => {
                 let x = await API[appID].Oura.queryActivitySummary({
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
                 let x = await API[appID].Oura.queryActivitySummariesAsync({
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
                 let x = await API[appID].Oura.queryReadinessSummary({
                 }) 
                 console.log(
                   "API ",
                   x
                 );
                 setChangeOutput(x)
                 
               }}
             >
               queryReadinessSummary
             </button>
             <button
               onClick={async (e) => {
                 let x = await API[appID].Oura.queryReadinessSummariesAsync({
                 }) 
                 console.log(
                   "API ",
                   x
                 );
                 setChangeOutput(x)
                 
               }}
             >
               queryReadinessSummariesAsync
             </button>
             <button
               onClick={async (e) => {
                 let x = await API[appID].Oura.querySleepSummary({
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
                 let x = await API[appID].Oura.querySleepSummariesAsync({
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
   it("queryReadinessSummary", async () => {
 
     
     // console.log(await waitFor(()=>(screen.findAllByText("Hey There"))))
     const queryReadinessSummaryButton = await waitFor(()=>(screen.getByRole('button',{name: "queryReadinessSummary"})))
     await waitFor(()=>{
       fireEvent.click(queryReadinessSummaryButton)
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
   it("queryReadinessSummariesAsync", async () => {
 
     
     // console.log(await waitFor(()=>(screen.findAllByText("Hey There"))))
     const queryReadinessSummariesAsyncButton = await waitFor(()=>(screen.getByRole('button',{name: "queryReadinessSummariesAsync"})))
     await waitFor(()=>{
       fireEvent.click(queryReadinessSummariesAsyncButton)
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
 });
 
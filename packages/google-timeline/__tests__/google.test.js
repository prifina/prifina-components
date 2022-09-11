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
 const GOOGLE = require("../src").default;
 
 // import '@testing-library/jest-dom'
 
 const appID = "GoogleTimeline";
 const TestCompoent = () => {
     const { currentUser, Prifina, check, API, registerHooks, onUpdate } =
     usePrifina();
     // const updateTest = (payload) => {
         // console.log("UPDATE TEST PAYLOAD", payload);
     //   };
       useEffect(async () => {
         // init callback function for background updates/notifications
         // onUpdate(appID, updateTest);
     
         console.log("GOOGLE ", GOOGLE);
         // register datasource modules
         registerHooks(appID, [GOOGLE]);
         console.log(check());
       }, []);
 
     const [changeOutput, setChangeOutput] = useState("")
       
     return (
         <>
         <div>
             <button
               onClick={async (e) => {
                 let x = await API[appID].GoogleTimeline.queryActivities({
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
                 let x = await API[appID].GoogleTimeline.queryLocations({
                 }) 
                 console.log(
                   "API ",
                   x
                 );
                 setChangeOutput(x)
                 
               }}
             >
               queryLocations
             </button>
             <button
               onClick={async (e) => {
                 let x = await API[appID].GoogleTimeline.queryPlaces({
                 }) 
                 console.log(
                   "API ",
                   x
                 );
                 setChangeOutput(x)
                 
               }}
             >
               queryPlaces
             </button>
             <button
               onClick={async (e) => {
                 let x = await API[appID].GoogleTimeline.queryRoutes({
                 }) 
                 console.log(
                   "API ",
                   x
                 );
                 setChangeOutput(x)
                 
               }}
             >
               queryRoutes
             </button>
             <p data-testid="output">
               {JSON.stringify(changeOutput)}
             </p>
         </div>
         </>
     )
 }
 describe("Google Connector", () => {
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
     const queryActivitySummaryButton = await waitFor(()=>(screen.getByRole('button',{name: "queryActivities"})))
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
   it("queryLocations", async () => {
 
     
    // console.log(await waitFor(()=>(screen.findAllByText("Hey There"))))
    const queryLocationsButton = await waitFor(()=>(screen.getByRole('button',{name: "queryLocations"})))
    await waitFor(()=>{
      fireEvent.click(queryLocationsButton)
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
  it("queryPlaces", async () => {
 
     
    // console.log(await waitFor(()=>(screen.findAllByText("Hey There"))))
    const queryPlacesButton = await waitFor(()=>(screen.getByRole('button',{name: "queryPlaces"})))
    await waitFor(()=>{
      fireEvent.click(queryPlacesButton)
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
  it("queryRoutes", async () => {
 
     
    // console.log(await waitFor(()=>(screen.findAllByText("Hey There"))))
    const queryRoutesButton = await waitFor(()=>(screen.getByRole('button',{name: "queryRoutes"})))
    await waitFor(()=>{
      fireEvent.click(queryRoutesButton)
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
 
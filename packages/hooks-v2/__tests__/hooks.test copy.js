'use strict';
import React,{useRef,useEffect} from 'react'
import {render, screen,renderHook,act,waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'

//import {Op} from "../src/queryBuilder";
//import PrifinaProvider,{usePrifina,PrifinaContext} from "../src/PrifinaProvider";
import {PrifinaProvider,usePrifina,PrifinaContext,Op} from "../src/";

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
const dataQuery = `query dataObject($input:DataObjectInput!) {
    getDataObject(input:$input) {
      result
    }
  }`;
/*
  CLIENT.current.user
        .query({
          query: gql(opts.query),
          variables: {
            input: {
              //bucket: S3Bucket,
              //key: S3Key,
              dataconnector: opts.name,
              userId: currentUser.uuid,
              fields: queryFields,
              filter: buildFilter(opts.filter),
              next: opts.next,
              appId: opts.appId,
              execId: short.generate(),
              stage: providerContext.current.init.stage,
            },
          },
        })
        .then((res) => {
          console.log("RES ", res);
          if (res.data.hasOwnProperty("getDataObject")) {
            let s3Object = JSON.parse(res.data.getDataObject.result);
            if (callbacks.current.hasOwnProperty("sandbox")) {
              callbacks.current["sandbox"][0]({
                queryResult: { data: { getDataObject: s3Object } },
              });
            }
            resolve({ data: { getDataObject: s3Object } });
          } else {
            console.log("NOT S3 DATA OBJECT");
            const key = Object.keys(res.data)[0];
            let dataObject = JSON.parse(res.data[key].result);
            if (callbacks.current.hasOwnProperty("sandbox")) {
              callbacks.current["sandbox"][0]({
                queryResult: { data: { [key]: dataObject } },
              });
            }
            resolve({ data: { [key]: dataObject } });
          }
        })
        .catch((error) => {
          if (callbacks.current.hasOwnProperty("sandbox")) {
            callbacks.current["sandbox"][0]({
              queryError: JSON.stringify(error),
            });
          }
          console.log("QUERY ERROR ", error);
          reject(error);
        });
*/
const mockupClient={
  query:({query,variables})=>{
    return new Promise(function (resolve, reject) {
      console.log("QUERY ",query);
      console.log("VARS ",variables);
      /*
      variables: {
        input: {
          dataconnector: opts.name,
          userId: currentUser.uuid,
          fields: queryFields,
          filter: buildFilter(opts.filter),
          next: opts.next,
          appId: opts.appId,
          execId: short.generate(),
          stage: providerContext.current.init.stage,
        },
      },
      */
      // mocked query result for provider createQuery function... 
      resolve({"data": {"getDataObject": {result:JSON.stringify({"content": mockupObject}) }}})
      
    });
  }
};

const mockupObject={
  id:"12345",
  ts:"2022-08-03",
  val:"Testing"
}

const queryDataAsync = ({
    stage,
    appID,
    name,
    createQuery,
    fields,
    filter,
    next,
    fieldsList,
  }) => {
    if (stage === "dev") {
      return Promise.resolve({
        data: {
          getDataObject: { content: mockupObject },
        },
      });
    } else {
    
      return createQuery({
        query: dataQuery,
        name: name,
        fields,
        filter,
        next,
        appId: appID,
        fieldsList: fieldsList,
      });
    }
  };

  const queryData = ({
    stage,
    appID,
    name,
    createQuery,
    fields,
    filter,
    next,
    fieldsList,
  }) => {
    if (stage === "dev") {
      return Promise.resolve({
        data: {
          getDataObject: { content: mockupObject },
        },
      });
    } else {
    
      return createQuery({
        query: dataQuery,
        name: name,
        fields,
        filter,
        next,
        appId: appID,
        fieldsList: fieldsList,
      });
    }
  };


  const mockupData={
    getModuleName:()=>{
        return "Test"
    },
    getInfo:()=>{
        return   ["queryData","queryDataAsync"]
    },
    getFields:()=>{
        return Object.keys(mockupObject)
    },
    queryData,
    queryDataAsync

}

const TestContext=()=>{
    const {stage,check,onUpdate,registerDataConnector,API,registerClient}=usePrifina();
    
    //onUpdate(appID, dataUpdate);
    // registerClient([appSyncClient, GRAPHQL, Storage]);
    const appId="APP-ID"
    const dataUpdate=(data)=>{
        console.log("UPDATE ",data);
        return data
    }
    useEffect(()=>{
        onUpdate(appId,dataUpdate);
        registerDataConnector(appId, [mockupData]);

        registerClient([mockupClient,{},{}])

      /*
    const d = new Date();

    const dd = d.setDate(d.getDate() - 14);
    const dateStr = new Date(dd).toISOString().split("T")[0];

    const filter = {
      ["s3::date"]: {
        [Op.gte]: dateStr,
      },
    };
*/
      /*
        API[appId].Test.queryDataAsync({
          filter: {},
          fields: "",
        }).then(res=>{
          console.log("QUERY ",res)
        })
      */

        console.log("TEST ", check(),API );

        API[appId].Test.queryDataAsync({}).then(res=>{
          console.log("QUERY ",res)
          localStorage.setItem("testCase",JSON.stringify(res));
        })

       
    },[])
    
    
    // register datasource modules
    //registerHooks(appID, [Oura]);

    return <div>{"Context `${stage}`"}</div>
}
describe.only('Connectors', () => {
  

    test("Provider test", async ()=>{
        //const spy = jest.spyOn(PrifinaProvider, 'check');
        
        //const mRef = { current: {["APP-ID"]:["1","2"]} };
        //useRef.mockReturnValueOnce(mRef);
      const stage="prod"

         render(<PrifinaProvider activeApp={"hookTest"} stage={stage} Context={PrifinaContext}>
            <TestContext />
        </PrifinaProvider>);

    await waitFor(() => screen.getByText("Context `${stage}`"))

       console.log("TEST ",localStorage.getItem("testCase"));
       const testCase=JSON.parse(localStorage.getItem("testCase"));
       //console.log(testCase.API["APP-ID"]?.Test)
    expect(screen.getByText("Context `${stage}`")).toBeInTheDocument();
   // expect(testCase.API["APP-ID"]?.Test).toStrictEqual({});
    //console.log(testCase);
      expect(testCase).toStrictEqual({data:{getDataObject:{content:mockupObject}}})
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
      expect(filter).toStrictEqual({'s3::date':{[Op.gte]:'2022-07-20'} });
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

import React, { useEffect, useState, useRef } from 'react'
//import {usePrifina,Op} from "@prifina/hooks-v2";
import { shortId } from '../src/utils';


const dataQuery = `query dataObject($input:DataObjectInput!) {
  getDataObject(input:$input) {
    result
  }
}`;

const createMessageMutation = `mutation newMessage($input:MessageInput!) {
  createMessage(input: $input) {
   messageId
   chatId
   createdAt 
   result
   receiver
  }
}`;

const createDataMessageMutation = `mutation newMessage($input:MessageInput!) {
createDataMessage(input: $input) {
 messageId
 chatId
 createdAt 
 result
 receiver
}
}`;

const subscribeCreateMessage = `subscription msgSubscription($receiver: String!) {
  addMessage(receiver: $receiver) {
    messageId
    chatId
    receiver
    result
  }
}`;

const subscribeCreateDataMessage = `subscription msgSubscription($receiver: String!) {
  addDataMessage(receiver: $receiver) {
    messageId
    chatId
    receiver
    result
  }
}`;


class SubscribeClient {
  constructor(init) {
    // query,variables...
    console.log("INIT ", init)
  }

  subscribe(args) {
    // next(), error()
    console.log("ARGS ", args)
    // send test notification..
    args.next({ data: "Subsription Testing..." });
    // random subscription handler
    return shortId();
  }
}

const mockupClient = {
  query: ({ query, variables }) => {
    return new Promise(function (resolve, reject) {
      console.log("QUERY ", query);
      console.log("VARS ", variables);
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
      // not possible to send async query request result to onUpdate callback 

      // mocked query result for provider createQuery function... 
      resolve({ "data": { "getDataObject": { result: JSON.stringify({ "content": mockupObject }) } } })

    });
  },
  mutate: ({ mutation, variables }) => {
    return new Promise(function (resolve, reject) {
      console.log("MUTATE ", mutation);
      console.log("VARS ", variables);
      /*
      VARS  {
        input: {
          content: {
            body: '"Test MSG"',
            receiver: 'receiver-ID',
            sender: 'Testing-uuid',
            chatId: 'chat-ID'
          },
          dataconnector: 'Test/mutationCreateMessage',
          userId: 'Testing-uuid',
          appId: 'APP-ID',
          execId: 'gpfgq8xpxb',
          stage: 'prod'
        }
      }
      */
      //resolve(true);
      /*
      #return({"receiver":"$receiver","chatId":"$newMessage.chatId",
      "messageId":"$messageId","createdAt":$ctx.args.input.content.createdAt,
      "result":{"cnt":$messages,"lastMessage":"$lastMessage"}})
      */
      if (variables.input?.dataconnector) {
        if (variables.input.dataconnector === "Test/mutationCreateMessage") {

          const moduleParts = variables.input.dataconnector.split("/");
          const created = new Date().getTime();
          resolve({
            data: {
              [moduleParts[1]]: {
                result: {
                  receiver: variables.input.content.receiver,
                  chatId: variables.input.content.chatId,
                  messageId: shortId(),
                  createdAt: new Date(created).toISOString(),
                  result: JSON.stringify({ cnt: 1, lastMessage: new Date(created).toISOString() })
                }
              }
            }
          })
        }
        if (variables.input.dataconnector === "Test/mutationCreateDataMessage") {

          const moduleParts = variables.input.dataconnector.split("/");
          /*
          variables: {
            input: {
              ...opts.variables,
              dataconnector: opts.name,
              userId: currentUser.uuid,
              appId: opts.appId,
              execId: short.generate(),
              stage: providerContext.current.init.stage,
            },
            */
          const created = new Date().getTime();
          resolve({ data: { [moduleParts[1]]: { result: variables.input } } })
        }
      }

    });
  },
  subscribe: ({ query, variables }) => new SubscribeClient({ query, variables })
};

export const mockupObject = {
  id: "12345",
  ts: "2022-08-03",
  val: "Testing"
}

const subscribeMessagingStatus = ({
  stage,
  appID,
  name,
  createSubscription,
  variables,
  uuid,
}) => {
  if (!variables?.appHandler) {
    throw new Error("appHandler is required");
  }
  if (stage === "dev") {

    return Promise.resolve(true);
  } else {
    console.log("SUBS ");
    return createSubscription({
      name: name,
      mutation: subscribeCreateMessage,
      variables: { receiver: uuid, appHandler: variables.appHandler },
      appId: appID,
    });
  }
};

const subscribeMessagingData = ({
  stage,
  appID,
  name,
  createSubscription,
  variables,
  uuid,
}) => {
  if (!variables?.appHandler) {
    throw new Error("appHandler is required");
  }
  if (stage === "dev") {
    return Promise.resolve(true);
  } else {
    console.log("SUBS ");
    return createSubscription({
      name: name,
      mutation: subscribeCreateDataMessage,
      variables: { receiver: uuid, appHandler: variables.appHandler },
      appId: appID,
    });
  }
};

const mutationCreateMessage = ({
  stage,
  appID,
  name,
  createMutation,
  callbacks,
  uuid,
  variables,
}) => {
  console.log("CREATE MSG ", stage);
  console.log("CREATE MSG ", appID);
  console.log("CREATE MSG ", uuid);
  console.log("CREATE MSG ", callbacks);
  console.log("CREATE MSG ", variables);
  if (stage === "dev") {
    const msg = {
      messageId: shortId(),
      body: variables.body,
      chatId: variables.chatId,
      sender: uuid,
      receiver: variables.receiver,
      createdAt: new Date().getTime(),
    };

    return Promise.resolve({
      data: {
        createMessage: msg,
      },
    });
  } else {
    variables.sender = uuid;
    return createMutation({
      name: name,
      mutation: createMessageMutation,
      variables: { content: variables },
      appId: appID,
    });
  }
};

export const mutationCreateDataMessage = ({
  stage,
  appID,
  name,
  createMutation,
  callbacks,
  uuid,
  variables,
}) => {
  if (stage === "dev") {
    const msg = {
      messageId: shortId(),
      body: variables.body,
      chatId: variables.chatId,
      sender: uuid,
      receiver: variables.receiver,
      createdAt: new Date().getTime(),
    };

    return Promise.resolve({
      data: {
        createDataMessage: msg,
      },
    });
  } else {
    variables.sender = uuid;
    return createMutation({
      name: name,
      mutation: createDataMessageMutation,
      variables: { content: variables },
      appId: appID,
    });
  }
};

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

const mockupData = {
  getModuleName: () => {
    return "Test"
  },
  getInfo: () => {
    return ["queryData", "queryDataAsync", "mutationCreateMessage", "mutationCreateDataMessage", "subscribeMessagingStatus", "subscribeMessagingData"]
  },
  getFields: () => {
    return Object.keys(mockupObject)
  },
  queryData,
  queryDataAsync,
  mutationCreateMessage,
  mutationCreateDataMessage,
  subscribeMessagingStatus,
  subscribeMessagingData

}


export const TestContext = ({ appId, usePrifina, Op }) => {
  const { stage, check, onUpdate, registerDataConnector, API, registerClient, currentUser, getAppSubscriptions } = usePrifina();

  //onUpdate(appID, dataUpdate);
  // registerClient([appSyncClient, GRAPHQL, Storage]);
  // const appId="APP-ID"
  const appHandler = useRef(null);
  const [updateTest, setUpdateTest] = useState("");

  const [queryTest, setQueryTest] = useState("");
  const [mutationTest, setMutationTest] = useState("");
  const [mutationDataTest, setMutationDataTest] = useState("");
  const [subscriptionTest, setSubscriptionTest] = useState("");

  const [subscriptionDataTest, setSubscriptionDataTest] = useState("");


  const dataUpdate = (data) => {
    console.log("UPDATE ", data);
    localStorage.setItem("updateTest", JSON.stringify(data));
    setUpdateTest("UPDATE TEST");
    return data
  }
  useEffect(() => {
    appHandler.current = onUpdate(appId, dataUpdate);
    registerDataConnector(appId, [mockupData]);
    registerClient([mockupClient, {}, {}])

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

    console.log("TEST ", check(), API);
    /*
    API[appId].Test.queryDataAsync({}).then(res=>{
      console.log("QUERY ",res)
      localStorage.setItem("testCase",JSON.stringify(res));
    })
    */

  }, [])


  // register datasource modules
  //registerHooks(appID, [Oura]);

  return <>
    <div>{"Context `${stage}`"}</div>
    <button role="queryTest" onClick={() => {
      API[appId].Test.queryDataAsync({}).then(res => {
        console.log("QUERY ", res)
        localStorage.setItem("testCaseQuery", JSON.stringify(res));
        setQueryTest("QueryTest-OK")
      });
    }}>Query</button>
    <div>{queryTest}</div>
    <button role="mutationTest" onClick={() => {
      const input = "Test MSG"

      API[appId].Test.mutationCreateMessage({
        variables: {
          body: JSON.stringify(input),
          receiver: "receiver-ID",
          sender: currentUser.uuid,
          chatId: "chat-ID"
        },
      }).then(res => {
        console.log("MUTATION ", res)
        localStorage.setItem("testCaseMutation", JSON.stringify(res));

        setMutationTest("MutationTest-OK")
      })

    }}>Mutation</button>
    <button role="mutationDataTest" onClick={() => {
      const input = "Test MSG"

      API[appId].Test.mutationCreateDataMessage({
        variables: {
          body: JSON.stringify(input),
          receiver: "receiver-ID",
          sender: currentUser.uuid,
          chatId: "chat-ID"
        },
      }).then(res => {
        console.log("MUTATION2 ", res)
        localStorage.setItem("testCaseMutation2", JSON.stringify(res));

        setMutationDataTest("MutationTest2-OK")
      })

    }}>Mutation</button>

    <button role="subscriptionTest" onClick={() => {

      API[appId].Test.subscribeMessagingStatus({
        variables: {
          appHandler: appHandler.current,
          receiver: currentUser.uuid,
        },
      }).then((res) => {
        // this is just true... 
        console.log("TEST RES ", res);
        // setMutationTest("MutationTest-OK")
        setSubscriptionTest("SubscriptionTest-OK");
        //</>console.log("SUBS ",getAppSubscriptions())
      });


    }}>Subscription</button>

    <button role="subscriptionDataTest" onClick={() => {

      API[appId].Test.subscribeMessagingData({
        variables: {
          appHandler: appHandler.current,
          receiver: currentUser.uuid,
        },
      }).then((res) => {
        // this is just true... 
        console.log("TEST RES ", res);
        setSubscriptionTest("SubscriptionDataTest-OK");
        // setMutationTest("MutationTest-OK")
        //console.log("SUBS ",getAppSubscriptions())
      });


    }}>Subscription</button>

    <div>{mutationTest}</div>
    <div>{mutationDataTest}</div>
    <div>{subscriptionTest}</div>

    <div>{subscriptionDataTest}</div>
    <div>{updateTest}</div>

  </>
}



export const SandboxContext = ({ appId, usePrifina, Op }) => {
  const { stage, check, onUpdate, registerDataConnector, API, registerClient, currentUser, getAppSubscriptions } = usePrifina();

  //onUpdate(appID, dataUpdate);
  // registerClient([appSyncClient, GRAPHQL, Storage]);
  // const appId="APP-ID"
  const appHandler = useRef(null);
  const [updateTest, setUpdateTest] = useState("");
  const [queryTest, setQueryTest] = useState("");


  const sandboxUpdate = (data) => {
    console.log("SANDBOX UPDATE ", data);
    //localStorage.setItem("updateTest",JSON.stringify(data));
    //setUpdateTest("UPDATE TEST");
    return data
  }
  const dataUpdate = (data) => {
    console.log("UPDATE ", data);
    localStorage.setItem("updateTest", JSON.stringify(data));
    setUpdateTest("UPDATE TEST");
    return data
  }
  useEffect(() => {
    onUpdate("sandbox", sandboxUpdate);
    appHandler.current = onUpdate(appId, dataUpdate);
    registerDataConnector(appId, [mockupData]);
    registerClient([mockupClient, {}, {}])

    console.log("TEST ", check(), API);


  }, [])


  return <>
    <div>{"Context `${stage}`"}</div>
    <button role="queryTest" onClick={() => {
      API[appId].Test.queryDataAsync({ fields: "idx,val", fieldsList: Object.keys(mockupObject) }).then(res => {
        console.log("QUERY ", res)
        localStorage.setItem("testCaseQuery", JSON.stringify(res));
        // simulate provider notification sending response to onUpdate callback... 
        dataUpdate(res);
        setQueryTest("QueryTest-OK")
      });
    }}>Query</button>
    <div>{queryTest}</div>
    <div>{updateTest}</div>

  </>
}

/*
API[appID].Messaging.subscribeMessagingStatus({
  variables: {
    receiver: currentUser.uuid,
  },
}).then(() => {
  subscriptionHandler.current = onUpdateID;
  setHooks(true);
});
*/

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

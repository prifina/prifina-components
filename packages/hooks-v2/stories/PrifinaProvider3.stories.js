import React, { useEffect } from "react";
import { useState } from "react";
import PrifinaProvider, { usePrifina } from "../src/PrifinaProvider";

export default { title: "ProviderTest Chat mockups" };

const appID = "TESTING";
export const providerTest = () => {
  const {
    currentUser,
    check,
    queries,
    subscriptions,
    mutations,
    onUpdate,
    subscriptionTest,
    unSubscribe,
  } = usePrifina({
    appID: appID,
  });

  const username = currentUser.uuid;

  const [showContacts, setShowContacts] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [updateData, setUpdate] = useState({});
  const [msg, setMsg] = React.useState("");
  const [messages, setMessages] = useState([]);

  const updateTest = (data) => {
    console.log("UPDATE TEST ", data);
    setUpdate(data);
  };

  useEffect(async () => {
    console.log("UPDATE INIT ");
    onUpdate(appID, updateTest);
    const addressBook = await queries(appID, "getAddressBook");
    console.log(addressBook);
    setContacts(addressBook.data.getAddressBook);
    subscriptionTest(appID, {
      addMessage: [
        {
          messageId: 1,
          body: "Hello",
          handle: addressBook.data.getAddressBook[0].name,
          username: addressBook.data.getAddressBook[0].uuid,
        },
        {
          messageId: 3,
          body: "Something",
          handle: addressBook.data.getAddressBook[0].name,
          username: addressBook.data.getAddressBook[0].uuid,
        },
        {
          messageId: 2,
          body: "Testing",
          handle: addressBook.data.getAddressBook[0].name,
          username: addressBook.data.getAddressBook[0].uuid,
        },
      ],
    });
  }, []);
  const sendMessage = async (msg, username) => {
    console.log("MSG ", msg);
    await mutations(appID, "createMessage", { body: msg, username: username });
    setMessages({ body: msg, handle: currentUser.name, username: username });
    /*
    return await API.graphql({
      query: mutations.createMessage,
      variables: { body: msg, username: username },
    });
    */
  };
  return (
    <>
      <div>
        {showContacts && contacts.length > 0 && (
          <ul>
            {contacts.map((c, i) => {
              return <li key={"contact-" + i}>{c.name}</li>;
            })}
          </ul>
        )}
      </div>
      <div>
        Provider Testing{" "}
        <button
          onClick={() => {
            console.log(check());
            console.log(queries(appID, "getInfo"));
            console.log(
              queries(appID, "getTest").then((res) => console.log(res))
            );
          }}
        >
          Test
        </button>
        <button
          onClick={() => {
            console.log(subscriptions(appID, "getInfo"));
            // const subscriptionTest = useCallback((appID, mockupData) => {
            subscriptionTest(
              appID,
              {
                addTest: [{ test1: "OK" }, { test2: "OK" }, { test3: "OK" }],
              },
              3000
            );
            subscriptions(appID, "addTest");
            /*
          console.log(
            queries(appID, "getTest").then((res) => console.log(res))
          );
          */
          }}
        >
          Subscribe
        </button>
        <button
          onClick={() => {
            unSubscribe(appID, "addMessage");
          }}
        >
          UnSubscribe
        </button>
      </div>
      <div>OnUpdate:{JSON.stringify(updateData)}</div>
      <div>Messages:{JSON.stringify(messages)}</div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: "60px",
        }}
      >
        <input
          name="msg"
          placeholder="your message"
          onChange={(e) => setMsg(e.target.value)}
          defaultValue={msg}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              //console.log("SEND MESSAGE", msg);
              //onCreate({ body: this.state.body });
              sendMessage(msg, username);
            }
          }}
          className="message-input"
          style={{
            border: "none",
            borderTop: "1px solid #ddd",
            fontSize: "16px",
            padding: "30px",
            width: "100%",
          }}
        />
      </div>
    </>
  );
};

providerTest.story = {
  name: "Provider Chat mockups",
  decorators: [
    (Story) => {
      return (
        <PrifinaProvider stage={"dev"}>
          <Story />
        </PrifinaProvider>
      );
    },
  ],
};

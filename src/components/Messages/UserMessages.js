//This file describes how a user's messages are displayed
import MessageTile from "./MessageTile";
import { auth, getMessages, getChatID } from "../../FireBaseConfig";
import { useContext, useState } from "react";
import { userContext } from "../Users";

export default function UserMessages(props) {
  //this returns a formatted list of message tiles
  /*component takes messages as an argument. This feature will be developed later once APIs are introduced.
   Sample data stored in the code will be used for now to test the components. Sample data can be found in the Messages component */
  const { farmerID } = useContext(userContext);

  const messages = props.messages;

  return (
    <div className="flow-root w-full">
      {Object.is(messages, null) ? (
        <div> no messages </div>
      ) : (
        <ul className="flex flex-col">
          {messages.map((message) => (
            <li key={message.timestamp}>
              <MessageTile message={message} />
            </li>
          ))}
        </ul>
      )}
      <div className=" h-20">
        <br></br>
      </div>
    </div>
  );
}

//This file creates the messaging page when users communicate with each other

import UserMessages from "./UserMessages";
import MessageBox from "./MessageBox";
import MessagesNavBar from "./MessageNavBar";
import SideBar from "./SideBar";
import Background from "./bg-img.jpg";
import { useState, useContext, useEffect } from "react";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { app, database } from "../../FireBaseConfig";
import { userContext } from "../Users";

export default function Messages() {
  //sample data that is used to test the Messaging components
  const { chatID } = useContext(userContext);
  const [messages, setMessage] = useState([]);
  //get a reference to a subcollection in Chats
  const subChatRef = collection(database, "Chats", chatID, "messages");

  useEffect(() => {
    const queryMessages = query(subChatRef, orderBy("timestamp"));
    const unsubscribe = onSnapshot(queryMessages, (snapShot) => {
      let messages = [];
      snapShot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessage(messages);
    });
    return () => unsubscribe();
  }, []);

  console.log(`here  are the messages: ${messages}`);

  return (
    <div
      className="flex flex-row min-h-screen h-full w-full bg-fixed"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="w-0 h-0 md:w-[30%] md:h-full">
        <SideBar />
      </div>
      <div className="w-full lg:min-h-full">
        <div className=" flex flex-col">
          <MessagesNavBar />
          <div className="h-[110px]">
            <br></br>
          </div>
          <UserMessages messages={messages} />
          <MessageBox messages={messages} />
        </div>
      </div>
    </div>
  );
}

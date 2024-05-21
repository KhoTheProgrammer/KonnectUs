//This file creates the messaging page when users communicate with each other

import UserMessages from "./UserMessages";
import MessageBox from "./MessageBox";
import MessagesNavBar from "./MessageNavBar";
import SideBar from "./SideBar";
import Background from './bg-img.jpg';
import { useState } from "react";

export default function Messages() {
  //sample data that is used to test the Messaging components
  const [messages, updateMessages] = useState([
    {
      text: "Hey, James. It's Johnson",
      id: "me",
      timestamp: 1,
    },
    {
      text: "Oh, Hey Johnson. Wassup?",
      id: "other",
      timestamp: 2,
    },
    {
      text: "Nothing much. I'm just chilling",
      id: "me",
      timestamp: 3,
    },
    {
      text : "I wanted to show you something",
      id : "other",
      timestamp : 4
    },
    {
      text : "I found something cool online",
      id : "other",
      timestamp : 5
    }
  ]);


  return (
          
    <div className="flex flex-row" style={{
      backgroundImage: `url(${Background})`
    }}>
      <div className="w-0 h-0 md:w-[30%] md:h-full bg-green-300 ">
      <SideBar/>
      </div>
     <div className="w-full lg:min-h-full"> 
    <div className=" flex flex-col">
      <ul>
        <li className=" md:w-[70%]">
        <MessagesNavBar />
        </li>
        <div className="h-[110px]">
        <br></br>
        </div>
        <li className="  md:w-[70%]">
          <UserMessages messages={messages} />
        </li>
        <li className="">
          <MessageBox messages = {messages}  updateMessages = {updateMessages}/>
        </li>
      </ul>
    </div>
    </div>
    </div>
  );
}

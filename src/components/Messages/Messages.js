//This file creates the messaging page when users communicate with each other

import UserMessages from "./UserMessages";
import MessageBox from "./MessageBox";
import MessagesNavBar from "./MessageNavBar";
import SideBar from "./SideBar";

export default function Messages() {
  //sample data that is used to test the Messaging components
  let data = [
    {
      text: "Hey, James. It's Johnson",
      id: "me",
      timestamp: "1",
    },
    {
      text: "Oh, Hey Johnson. Wassup?",
      id: "other",
      timestamp: "2",
    },
    {
      text: "Nothing much. I'm just chilling",
      id: "me",
      timestamp: "3",
    },
    {
      text : "I wanted to show you something",
      id : "other",
      timestamp : "4"
    },
    {
      text : "I found something cool online",
      id : "other",
      timestamp : "5"
    }
  ];


  return (
          
    <div className="flex flex-row">
      <div className="w-0 h-0 md:w-[30%] md:h-full bg-green-300 ">
      <SideBar/>
      </div>
     <div className="w-full lg:min-h-full bg-gray-900"> 
    <div className=" flex flex-col bg-purple-700">
      <ul>
        <li className="bg-orange-600 md:w-[70%]">
        <MessagesNavBar />
        </li>
        <div className="h-[70px]">
        <br></br>
        </div>
        <li className="bg-red-700  md:w-[70%]">
          <UserMessages messages={data} />
        </li>
        <li className="bg-yellow-700">
          <MessageBox />
        </li>
      </ul>
    </div>
    </div>
    </div>
  );
}

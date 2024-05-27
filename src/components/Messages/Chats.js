import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";
import { collection, orderBy, query, onSnapshot, limit, serverTimestamp, collectionGroup } from "firebase/firestore";
import { auth, database } from "../../FireBaseConfig";
import { userContext } from "../Users";

/*const chats = [
  {
    name: "James",
    message: "Wassup?",
    time: 1,
  },
  {
    name: "Henry",
    message: "Are you gonna make it?",
    time: 2,
  },
  {
    name: "Emily",
    message: "What time is the party?",
    time: 3,
  },
  {
    name: "Sam",
    message: "What are you planning tonight?",
    time: 4,
  },
  {
    name: "khoo",
    message: "We have to finish the UI",
    time: 5,
  },
  {
    name: "Johnson",
    message: "We need to finish the project",
    time: 6,
  },
  {
    name: "AJ",
    message: "Can you send the prototype, my whatsapp is acting up",
    time: 7,
  },
  {
    name: "Sato",
    message: "Today we are meeting for 5 hours",
    time: 8,
  },
]; */

/* 

match /Chats/{chatid}/messages/{messageid}{
    allow read, write: if request.auth.uid == resource.data.sender || request.auth.uid == resource.data.reciever;
    
    }

*/


export default function Chats() {

  const {userData} = useContext(userContext);

  const getUserName = (message) => {
    let farmerid = "";
    let farmerUsername = "";
    if(message.sender === auth.currentUser.uid || message.reciever === auth.currentUser.uid)
         farmerid = message.sender === auth.currentUser.uid ? message.reciever : message.sender;
        userData.map(
          (user)=>{
            if(user.userid === farmerid)
                farmerUsername = user.username;
          }
        )
        return farmerUsername;
      
    }
  
  
  const drawChats = (chat) => (
    <li key={chat.id} className="">
      <NavLink to="/Messages/Messages">
        <div className="flex flex-row hover:bg-white">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-15"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
          <div className="flex flex-col border-b-[1px] border-green-500 p-2 w-full">
            <div className=" flex flex-row justify-between">
              <span className="font-bold hover:text-green-500">{getUserName(chat)}</span>
              <span className="justify-end">{chat.time}</span>
            </div>
            <div className="">{chat.text}</div>
          </div>
        </div>
      </NavLink>
    </li>
  );
  


  const [chats, setChats] = useState([]);

  const chatRef = collectionGroup(database, "messages");
  console.log(`chatref: ${chatRef.id}`);
  
  useEffect(() => {
    const queryChats = query(chatRef, limit(15));
    const unsubscribe = onSnapshot(queryChats, (snapShot) => {
      let messages = [];
      console.log("about to add data");
      snapShot.forEach((doc) => {
        messages.push({ ...doc.data(), id: serverTimestamp() });
      });
      setChats(messages);
      console.log(`chats: ${chats[0].chatID}`)
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col min-h-full justify-between ">
      <div className=" ">
        <NavBar />
      </div>

      <div className="bg-green-300 ">
        <ul>{chats.map(drawChats)}</ul>
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
}

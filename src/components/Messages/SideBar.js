import { NavLink } from "react-router-dom";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";

const chats = [
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
];

const drawChats = (chat) => (
  <li key={chat.name} className="">
    <NavLink to="/Messages/Messages">
      <div className="flex flex-row hover:bg-gray-100">
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
        <div className="flex flex-col border-b-[1px] p-2 w-full">
          <div className=" flex flex-row justify-between">
            <span className="font-bold hover:text-green-500">{chat.name}</span>
            <span className="justify-end">{chat.time}</span>
          </div>
          <div className="">{chat.message}</div>
        </div>
      </div>
    </NavLink>
  </li>
);

export default function SideBar() {
  return (
    <div className="flex flex-row h-screen border-r-[1px] border-gray-400">
      <div className="bg-gray-300 p-[6px]">
        <NavLink to="/HomePage">
          <div className="h-[55px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 hover:stroke-yellow-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>
        </NavLink>
        <NavLink to="/Messages/Chats">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 hover:stroke-yellow-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>
        </NavLink>
      </div>
      <div className="flex flex-col bg-gray-200">
        <ul>{chats.map(drawChats)}</ul>
      </div>
    </div>
  );
}

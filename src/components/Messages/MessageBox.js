//this file describes the component(text box) which users type into when sending a message

import { useContext, useState } from "react";
import { auth, sendMessage, getChatID } from "../../FireBaseConfig";
import { userContext } from "../Users";

export default function MessageBox(props) {
  const messages = props.messages;
  const [message, setMessage] = useState("");
  const { farmerID, farmerUsername } = useContext(userContext);

  const handleSubmit = (e) => {
    //to be defined later
    e.preventDefault();
    sendMessage(getChatID(farmerID), farmerID, message, messages.length + 1);
    console.log(`you sent : ${message} || it was sent to ${farmerUsername}`);
    setMessage("");
  };

  const handleMessage = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  return (
    <div className="fixed bottom-0 w-full md:w-[77%]">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center px-3 py-2 rounded-lg">
          <textarea
            value={message}
            placeholder="Message"
            onChange={handleMessage}
            row="1"
            className="block mx-4 p-2.5 w-full text-lg text-black bg-white rounded-lg border  focus:ring-green-900 focus:border-green-900 placeholder-slate-300"
          ></textarea>
          <button
            type="submit"
            className="inline-flex justify-center p-2 text-white bg-green-700 hover:bg-yellow-500 focus:outline-none focus:ring-2  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

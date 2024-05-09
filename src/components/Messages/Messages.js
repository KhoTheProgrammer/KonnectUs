//This file creates the messaging page when users communicate with each other

import UserMessages from "./UserMessages";
import MessageBox from "./MessageBox";

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
  ];
  return (
    <div className=" flex flex-col">
      <ul>
        <li>
          <UserMessages messages={data} />
        </li>
        <li>
          <MessageBox />
        </li>
      </ul>
    </div>
  );
}

//This file creates the messaging page when users communicate with each other

import UserMessages from "./UserMessages";
import MessageBox from "./MessageBox";

export default function Messages() {
  return (
    <div>
      <UserMessages/>  
      <MessageBox />
    </div>
  );
}

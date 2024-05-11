//This file describes how a user's messages are displayed
import MessageTile from "./MessageTile";

export default function UserMessages({ messages }) {
  //this returns a formatted list of message tiles
  /*component takes messages as an argument. This feature will be developed later once APIs are introduced.
   Sample data stored in the code will be used for now to test the components. Sample data can be found in the Messages component */
  return (
    <div className="flow-root">
      <ul className="flex flex-col">
        {messages.map((message) => (
          <li key={message.timestamp}>
            <MessageTile message={message} />
          </li>
        ))}
      </ul>
      <div className=" h-16">
        <br></br>
      </div>
    </div>
  );
}

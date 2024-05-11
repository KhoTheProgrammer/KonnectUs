export default function MessagesNavBar() {
  const buttons = ["back", "user pfp", "options"];

  const drawButtons = (button) => (
    <li key={button}>
      <button className="hover:bg-green-900 p-3 rounded-xl "> {button}</button>
    </li>
  );

  return (
    <div className = "fixed top-0 w-full">
      {
        <ul className="flex flex-row justify-between p-1 bg-green-700  text-white ">
          {buttons.map(drawButtons)}
        </ul>
      }
    </div>
  );
}

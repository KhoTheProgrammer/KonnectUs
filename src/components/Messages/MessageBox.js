//this file describes the component(text box) which users type into when sending a message 

export default function MessageBox() {
  const handleSubmit = () => {
      //to be defined later
    };

  return (
    <div>


      <ul className="flex flex-row list-none">
        <li>
          <textarea
            name="Message"
            placeholder="Messages"
            onSubmit={handleSubmit}
          ></textarea>
        </li>
        <li>
          <button type="submit">send</button>
        </li>
      </ul>
    </div>
  );
}

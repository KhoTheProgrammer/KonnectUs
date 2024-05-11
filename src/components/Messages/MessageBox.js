//this file describes the component(text box) which users type into when sending a message

export default function MessageBox() {
  const handleSubmit = () => {
    //to be defined later
  };

  return (
    <div className="fixed bottom-0 w-full">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center px-3 py-2 rounded-lg">
          <textarea
            name="Message"
            placeholder="Message"
            row="1"
            className="block mx-4 p-2.5 w-full text-sm text-black bg-white rounded-lg border border-green-500 focus:ring-green-900 focus:border-green-900 placeholder-slate-300"
          ></textarea>
          <button
            type="submit"
            className="inline-flex justify-center p-2 text-white bg-green-700 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            send
          </button>
        </div>
      </form>
    </div>
  );
}

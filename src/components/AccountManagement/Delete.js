export default function Delete() {
  return (
    <div className="w-3/4 flex justify-center items-center h-screen mx-auto">
      <div className=" bg-green-500 px-24 py-16 rounded-2xl w-3/4">
      <h2 className="text-center font-bold text-3xl text-white mb-8">
        DELETE ACCOUNT
      </h2>
      <form>
        <label className=" text-xl text-white">Enter Password</label>
        <br></br>
        <input
          type="password"
          placeholder="your password"
          required
          className="p-1 w-full py-4 mb-8 px-2 rounded-lg text-black"
        ></input>
        <br></br>
        <label className=" text-xl text-white">Confirm Password</label>
        <br></br>
        <input
          type="password"
          placeholder="your password again"
          required
          className="p-1 w-full py-4 mb-8 px-2 rounded-lg text-black"
        ></input>
        <br></br>
        <button
          type="submit"
          className="block m-auto bg-white mt-3 p-2 text-black font-bold rounded-lg"
        >
          DELETE
        </button>
      </form>
    </div>
    </div>
    
  );
}

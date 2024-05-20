export default function Delete() {
  return (
    <div className=" bg-green-500 p-4">
      {" "}
      <h2 className="text-center font-medium text-xl">DELETE ACCOUNT</h2>
      <form>
        <label className=" text-lg">Enter Password</label>
        <br></br>
        <input
          type="password"
          placeholder="your password"
          required
          className="p-1 w-full text-black"
        ></input>
        <br></br>
        <label className=" text-lg">Confirm Password</label>
        <br></br>
        <input
          type="password"
          placeholder="your password again"
          required
          className="p-1 w-full text-black"
        ></input>
        <br></br>
        <button
          type="submit"
          className="block m-auto bg-white mt-16 p-2 text-black font-bold"
        >
          DELETE
        </button>
      </form>
    </div>
  );
}

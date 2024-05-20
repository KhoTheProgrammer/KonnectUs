export default function Change() {
  return (
    <div className=" bg-green-500 w-full px-24 py-16 rounded-2xl">
      <h2 className="text-center font-bold text-3xl text-white mb-8">
        CHANGE PASSWORD
      </h2>
      <form>
        <label className=" text-lg font-medium text-white">Old Password</label>{" "}
        <br></br>
        <input
          type="password"
          placeholder="old password..."
          required
          className="py-4 w-full text-black mb-8 px-2 rounded-lg"
        ></input>{" "}
        <br></br>
        <label className=" text-lg font-medium text-white">New Password</label>{" "}
        <br></br>
        <input
          type="password"
          placeholder="new password..."
          required
          className="py-4 px-2 w-full  text-black mb-8 rounded-lg"
        ></input>{" "}
        <br></br>
        <label className=" text-lg font-medium text-white">
          Confirm Password
        </label>{" "}
        <br></br>
        <input
          type="password"
          placeholder="confirm password"
          required
          className="py-4 w-full text-black px-2 mb-8 rounded-lg"
        ></input>
        <button className="block m-auto bg-white mt-3 p-2 text-black font-bold rounded-lg">
          CHANGE
        </button>
      </form>
    </div>
  );
}

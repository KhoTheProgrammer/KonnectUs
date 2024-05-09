export default function Change() {
  return (
    <div className=" bg-[#392a05] p-4">
      {" "}
      <h2 className="text-center font-medium text-xl">CHANGE PASSWORD</h2>
      <form>
        <label className=" text-lg">Old Password</label>
        <br></br>
        <input
          type="password"
          placeholder="old password"
          required
          className="p-1 w-full text-black"
        ></input>
        <br></br>
        <label className=" text-lg">New Password</label>
        <br></br>
        <input
          type="password"
          placeholder="new password"
          required
          className="p-1 w-full text-black"
        ></input>
        <br></br>
        <label className=" text-lg">Confirm Password</label>
        <br></br>
        <input
          type="password"
          placeholder="confirm password"
          required
          className="p-1 w-full text-black"
        ></input>
        <button className="block m-auto bg-white mt-3 p-1 text-black font-bold">
          CHANGE
        </button>
      </form>
    </div>
  );
}

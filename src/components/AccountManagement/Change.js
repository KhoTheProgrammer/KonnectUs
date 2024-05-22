export default function Change({password, setPassword}) {

  return (
<<<<<<< HEAD
    <div className=" bg-green-500 w-full px-24 py-16 rounded-2xl mt-16">
      <h2 className="text-center font-bold text-3xl text-white mb-8">CHANGE PASSWORD</h2>
=======
    <div className="w-3/4 flex justify-center mx-auto h-screen items-center">
        <div className=" bg-green-500 w-full px-24 py-16 rounded-2xl">
      <h2 className="text-center font-bold text-3xl text-white mb-8">
        CHANGE PASSWORD
      </h2>
>>>>>>> 0ab091799cd209d395fb9ec07eeb53cd2d4f7ec1
      <form>
        <label className=" text-lg font-medium text-white">Old Password</label> <br></br>
        <input
          type="text"
          placeholder="old password"
          required
          className="py-4 w-full text-white mb-8 px-2 rounded-lg"
        ></input>{" "}
        <br></br>
        <label className=" text-lg font-medium text-white">New Password</label> <br></br>
        <input
          type="email"
          placeholder="new password..."
          required
          className="py-4 px-2 w-full  text-white mb-8 rounded-lg"
        ></input>{" "}
        <br></br>
        <label className=" text-lg font-medium text-white">Confirm Password</label> <br></br>
        <input
          type="tel"
          placeholder="confirm password"
          required
          className="py-4 w-full text-black px-2 mb-8 rounded-lg"
        ></input>
        <button className="block m-auto bg-white mt-3 p-2 text-black font-bold rounded-lg">
          CHANGE
        </button>
      </form>
    </div>
    </div>
    
  );
}

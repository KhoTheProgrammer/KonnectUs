import { useContext } from "react";
import { auth } from "../../FireBaseConfig";
import { userContext } from "../Users";

export default function Change({isSmallScreen, toggleMenu}) {
  const { userData } = useContext(userContext);
  let currentUser = {};
  userData.map((user) => {
    if (user.userid === auth.currentUser.uid) {
      currentUser = user;
    }
  });

  return (
    <div className="lg:w-3/4 w-screen flex justify-center mx-auto h-screen items-center">
        <div className=" bg-green-500 w-full lg:px-24 lg:py-16 px-8 py-4 m-4 rounded-2xl">
        {isSmallScreen && <svg
              className="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={toggleMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>}
      <h2 className="text-center font-bold md:text-3xl text-xl text-white mb-8">
        CHANGE PASSWORD
      </h2>
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

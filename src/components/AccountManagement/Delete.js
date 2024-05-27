import { useContext } from "react";
import { userContext } from "../Users";
import { auth } from "../../FireBaseConfig";

export default function Delete({ isSmallScreen, toggleMenu }) {
  const { userData } = useContext(userContext);
  let currentUser = {};
  userData.map((user) => {
    if (user.userid === auth.currentUser.uid) {
      currentUser = user;
    }
  });
  return (
    <div className="lg:w-3/4 w-screen flex justify-center items-center h-screen mx-auto">
      <div className=" bg-green-500 lg:px-16 lg:py-12 px-8 py-4 rounded-2xl w-full m-8">
        {isSmallScreen && (
          <svg
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
          </svg>
        )}
        <h2 className="text-center font-bold md:text-3xl text-xl text-white mb-8">
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

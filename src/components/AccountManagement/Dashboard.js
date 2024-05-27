import { createContext } from "react";

export const clickContext = createContext();

export default function Dashboard({ clickValue, setClickValue }) {
  const handleClickCreate = () => {
    setClickValue(1);
  };

  const handleClickDelete = () => {
    setClickValue(2);
  };

  const handleClickChange = () => {
    setClickValue(3);
  };

  const handleClickLogout = () => {
    setClickValue(4);
  };
  return (
    <div>
      <div className="h-full bg-green-500 w-52">
        <div className=" p-4 text-white font-bold">
          <p className="mb-7 text-center text-MD">KHOTHEPROGRAMMER</p>
          <p
            className={
              clickValue === 1
                ? " mb-4 cursor-pointer text-black"
                : " mb-4 cursor-pointer"
            }
            onClick={handleClickCreate}
          >
            CREATE PROFILE
          </p>
          <p
            className={
              clickValue === 2
                ? " mb-4 cursor-pointer text-black"
                : " mb-4 cursor-pointer"
            }
            onClick={handleClickDelete}
          >
            DELETE ACCOUNT
          </p>
          <p
            className={
              clickValue === 3
                ? " mb-4 cursor-pointer text-black"
                : " mb-4 cursor-pointer"
            }
            onClick={handleClickChange}
          >
            CHANGE PASSWORD
          </p>
          <p
            className={
              clickValue === 4
                ? " mb-4 cursor-pointer text-black"
                : " mb-4 cursor-pointer"
            }
            onClick={handleClickLogout}
          >
            LOGOUT
          </p>
        </div>
      </div>
    </div>
  );
}

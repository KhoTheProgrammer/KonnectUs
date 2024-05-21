import { createContext } from "react";
import SignUp from "./SignUp";



const usersData = [];
export const usersContext = createContext(usersData);



export function checkUsers() {
  usersData.map((user) => console.log(user));
  console.log(usersData.length);
}

const Users = () => {
  return <div>
    <usersContext.Provider value={usersData}>
        <SignUp></SignUp>
    </usersContext.Provider>
  </div>;
};

export default Users;

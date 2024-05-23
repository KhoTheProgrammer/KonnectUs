import { createContext } from "react";
import SignUp from "./SignUp";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth" ;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGUuO4NlGml9p5DWBp6TxOJ-20FnrrdpE",
  authDomain: "konnectus-89f86.firebaseapp.com",
  projectId: "konnectus-89f86",
  storageBucket: "konnectus-89f86.appspot.com",
  messagingSenderId: "681791478337",
  appId: "1:681791478337:web:1d74c3ba4ebf8e2cb944c0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

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

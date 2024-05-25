import React from "react";
import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { userContext } from "./components/Users";
import { collection, query, onSnapshot } from "firebase/firestore";
import { database } from "./FireBaseConfig";

function App() {
  const [isSignedIn, setSignedIn] = useState(false);
  const [adminData, setAdminData] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userData, setUserData] = useState([]);
  const [farmerID, setFarmerID] = useState("");
  const [farmerUsername, setFarmerUsername] = useState("");
  const [chatID, setChatID] = useState("");


const userDataRef = collection(database, "UserData");
const adminDataRef = collection(database, "AdminAccounts");

  useEffect(() => {
    const queryUserData = query(userDataRef);
    const queryAdminData = query(adminDataRef);
    const unsubscribe = onSnapshot(queryUserData, (snapShot) => {
      let data = [];
      snapShot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setUserData(data);
      console.log(data);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const queryAdminData = query(adminDataRef);
    const unsubscribe = onSnapshot(queryAdminData, (snapShot) => {
      let data = [];
      snapShot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setAdminData(data);
      console.log(`ADMIN DATA: ${data}`);
    });
    return () => unsubscribe();
  }, []);

  return (
    <userContext.Provider
      value={{ isSignedIn, setSignedIn, userData, setUserData, farmerID, setFarmerID, farmerUsername, setFarmerUsername, chatID, setChatID }}
    >
      <RouterProvider router={router}></RouterProvider>
    </userContext.Provider>
  );
}

export default App;

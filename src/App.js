import React from "react";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { userContext } from "./components/Users";

function App() {
  const [isSignedIn, setSignedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userData, setUserData] = useState([]);
  const [farmerID, setFarmerID] = useState("");
  const [farmerUsername, setFarmerUsername] = useState("");
  const [chatID, setChatID] = useState("");
  return (
    <userContext.Provider
      value={{ isSignedIn, setSignedIn, userData, setUserData, farmerID, setFarmerID, farmerUsername, setFarmerUsername, chatID, setChatID }}
    >
      <RouterProvider router={router}></RouterProvider>
    </userContext.Provider>
  );
}

export default App;

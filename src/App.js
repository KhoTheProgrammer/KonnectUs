import React from "react";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { userContext } from "./components/Users";

function App() {
  const [isSignedIn, setSignedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userData, setUserData] = useState({});
  return (
    <userContext.Provider
      value={{ isSignedIn, setSignedIn, userData, setUserData }}
    >
      <RouterProvider router={router}></RouterProvider>
    </userContext.Provider>
  );
}

export default App;

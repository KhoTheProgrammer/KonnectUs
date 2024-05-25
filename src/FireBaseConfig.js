import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  getFirestore,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useContext } from "react";

import { userContext } from "./components/Users";

//KonnectUs Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGUuO4NlGml9p5DWBp6TxOJ-20FnrrdpE",
  authDomain: "konnectus-89f86.firebaseapp.com",
  projectId: "konnectus-89f86",
  storageBucket: "konnectus-89f86.appspot.com",
  messagingSenderId: "681791478337",
  appId: "1:681791478337:web:1d74c3ba4ebf8e2cb944c0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

//initialize databse
export const database = getFirestore(app);

//create a message
export async function sendMessage(chatID, recieverID, message) {
  //syntax: collect("database", "collectionName", "doc_name", "subcollectionName")
  const chatRef = collection(database, "Chats", chatID, "messages");

  if (chatRef === 0) {
    if (recieverID < auth.currentUser.uid)
      setChat(chatID, recieverID, auth.currentUser.uid);
    else setChat(chatID, auth.currentUser.uid, recieverID);

    chatRef = collection(database, "Chats", chatID, "messages");
  }

  await addDoc(chatRef, {
    text: message,
    sender: auth.currentUser.uid,
    reciever: recieverID,
    time: new Date().toLocaleTimeString(),
    timestamp: serverTimestamp(),
  });
  console.log("message sending...");
}

export async function getMessages(chatID) {
  //get a reference to a subcollection in Chats
  const subChatRef = collection(database, "Chats", chatID, "messages");

  //if the subchat does not exist return null
  if (subChatRef === 0) return null;

  //get all the docs in the subcollection
  const query = await getDocs(subChatRef);

  //empty array to store messages
  let messages = [];

  //added data to messages array
  query.forEach((doc) => {
    messages.push({
      text: doc.text,
      sender: doc.sender,
      reciever: doc.reciever,
      time: doc.time,
    });
  });

  return messages;
}

//create a subChat in chat collection
export async function setChat(chatID, userID1, userID2) {
  //create a reference
  const chatRef = collection(database, "Chats", chatID, "messages");

  //add a doc to track chat
  await setDoc(doc(database, "Chats", chatID), {
    chatID: chatID,
    user1: userID1,
    user2: userID2,
  });

  console.log(`Chat created with chatID: ${chatID}`);
}

export function getChatID(farmerID) {
  if (farmerID < auth.currentUser.uid) return farmerID + auth.currentUser.uid;
  else return auth.currentUser.uid + farmerID;
}

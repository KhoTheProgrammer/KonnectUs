import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth" ;
import {collection, doc, getDoc, getFirestore, addDoc, serverTimestamp} from "firebase/firestore";

//KonnectUs Firebase configuration
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

//initialize databse
const database = getFirestore(app);

//create a message 
export async function sendMessage(chatID, recieverID, message){
  const chatRef = collection(database, chatID);

    await addDoc(chatRef, {
      text: message,
      sender: auth.currentUser.uid,
      reciever: recieverID,
      timestamp: serverTimestamp(),
      chat: chatID
    })
}

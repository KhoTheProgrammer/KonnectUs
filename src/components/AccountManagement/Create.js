import { useContext, useState } from "react";
import { userContext } from "../Users";
import { auth, database } from "../../FireBaseConfig";
import { setDoc, doc } from "firebase/firestore";

export default function Create({isSmallScreen, toggleMenu}) {

  
  async function updateUserData(newDetails) {
    await setDoc(doc(database, "UserData", currentUser.id), newDetails, {
      merge: true,
    });
    console.log(`updated details to: ${newDetails}`);
  }


  const { userData } = useContext(userContext);
  let currentUser = {};
  userData.map((user) => {
    if (user.userid === auth.currentUser.uid) {
      currentUser = user;
    }
  });
const [email, setEmail] = useState("");
  const [Fname, setFname] = useState(currentUser.fname);
  const [Lname, setLname] = useState(currentUser.lname);
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");
  const [UserId, setUserId] = useState(currentUser.userid);


  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleUserId = (e) => {
    setUserId(e.target.value);
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleBio = (e) => {
    setBio(e.target.value);
  };
  const handleDateOfBirth = (e) => {
    setDateOfBirth(e.target.value);
  };
  const handleFname = (e) => {
    setFname(e.target.value);
  };
  const handleLname = (e) => {
    setLname(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserData({
      fname: Fname,
      lname: Lname,
      email: email,
      dob: dateOfBirth,
      bio: bio,
      phoneno: phoneNumber,
    });
  };
  return (
    <div className="lg:w-3/4 w-screen flex justify-center mx-auto">
      <div className=" bg-green-500 w-full lg:px-24 p-8 m-4 lg:py-16 rounded-2xl">
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
        <h2 className="text-center font-bold text-3xl text-white mb-8">
          CREATE PROFILE
        </h2>
        <form onSubmit={handleSubmit}>
          <label
            className=" text-lg font-medium text-white"
            
          >
            First Name
          </label>{" "}
          <br></br>
          <input
            onChange={handleFname}
            type="text"
            placeholder={currentUser.fname}
            required
            className="py-4 w-full  mb-8 px-2 rounded-lg"
          ></input>{" "}
          <br></br>
          <label
            className=" text-lg font-medium text-white"
            
          >
            Last Name
          </label>{" "}
          <br></br>
          <input
            type="text"
            placeholder={currentUser.lname}
            required
            className="py-4 w-full  mb-8 px-2 rounded-lg"
            onChange={handleLname}
          ></input>{" "}
          <br></br>
          <label
            className=" text-lg font-medium text-white"
            
          >
            Email
          </label>{" "}
          <br></br>
          <input
            type="text"
            placeholder="enter email"
            value={email}
            className="py-4 px-2 w-full  mb-8 rounded-lg"
            onChange={handleEmail}
          ></input>{" "}
          <br></br>
          <label
            className=" text-lg font-medium text-white"
            
          >
            Phone Number
          </label>{" "}
          <br></br>
          <input
            onChange={handlePhoneNumber}
            type="tel"
            placeholder="your phone number..."
            className="py-4 w-full text-black px-2 mb-8 rounded-lg"
          ></input>
          <label
            className=" text-lg font-medium text-white"
            
          >
            Date of birth
          </label>
          <br></br>
          <input
            onChange={handleDateOfBirth}
            type="date"
            placeholder=""
            className="py-4 w-full text-black px-2 mb-8 rounded-lg"
          />
          <br></br>
          <label
            className=" text-lg font-medium text-white"
           
          >
            Bio
          </label>
          <br></br>
          <textarea className="py-4 w-full text-black px-2 mb-8 rounded-lg"  onChange={handleBio}></textarea>
          <button className="block m-auto bg-white mt-3 p-2 text-black font-bold rounded-lg">
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
}

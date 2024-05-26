import { useContext, useState } from "react";
import { userContext } from "../Users";
import { auth } from "../../FireBaseConfig";
export default function Create() {
  const { userData } = useContext(userContext);
  let currentUser = {};
  userData.map((user) => {
    if (user.userid === auth.currentUser.uid) {
      currentUser = user;
    }
  });

  const [Fname, setFname] = useState(currentUser.fname);
  const [Lname, setLname] = useState(currentUser.lname);
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");
  const [UserId, setUserId] = useState(currentUser.userid);

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
    userData.map((user) => {
      if (user.userid === auth.currentUser.uid) {
        user.fname = Fname;
        user.lname = Lname;
      }
    });
  };
  return (
    <div className="md:w-3/4 w-screen flex justify-center mx-auto">
      <div className=" bg-green-500 w-full md:px-24 p-8 md:py-16 rounded-2xl">
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
            type="text"
            placeholder={currentUser.fname}
            required
            className="py-4 w-full  mb-8 px-2 rounded-lg"
            onChange={handleFname}
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
            User Id
          </label>{" "}
          <br></br>
          <input
            type="text"
            placeholder={currentUser.userid}
            value={currentUser.userid}
            className="py-4 px-2 w-full  mb-8 rounded-lg"
            onChange={handleUserId}
          ></input>{" "}
          <br></br>
          <label
            className=" text-lg font-medium text-white"
            
          >
            Phone Number
          </label>{" "}
          <br></br>
          <input
            type="tel"
            placeholder="your phone number..."
            className="py-4 w-full text-black px-2 mb-8 rounded-lg"
            onChange={handlePhoneNumber}
          ></input>
          <label
            className=" text-lg font-medium text-white"
            
          >
            Date of birth
          </label>
          <br></br>
          <input
            type="date"
            placeholder=""
            className="py-4 w-full text-black px-2 mb-8 rounded-lg"
            onChange={handleDateOfBirth}
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

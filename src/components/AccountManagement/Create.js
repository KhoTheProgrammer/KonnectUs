import { useContext, useState } from "react";
import { userContext } from "../Users";
export default function Create() {
  const { userData } = useContext(userContext);
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
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
    userData.firstname = Fname;
    userData.lastname = Lname;
    userData.email = email;
    userData.phoneNumber = phoneNumber;
    userData.dateOfBirth = dateOfBirth;
    userData.bio = bio;
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
            onChange={handleFname}
          >
            First Name
          </label>{" "}
          <br></br>
          <input
            type="text"
            placeholder={userData.firstname}
            required
            className="py-4 w-full  mb-8 px-2 rounded-lg"
          ></input>{" "}
          <br></br>
          <label
            className=" text-lg font-medium text-white"
            onChange={handleLname}
          >
            Last Name
          </label>{" "}
          <br></br>
          <input
            type="text"
            placeholder={userData.firstname}
            required
            className="py-4 w-full  mb-8 px-2 rounded-lg"
          ></input>{" "}
          <br></br>
          <label
            className=" text-lg font-medium text-white"
            onChange={handleEmail}
          >
            Email
          </label>{" "}
          <br></br>
          <input
            type="email"
            placeholder={userData.email}
            required
            className="py-4 px-2 w-full  mb-8 rounded-lg"
          ></input>{" "}
          <br></br>
          <label
            className=" text-lg font-medium text-white"
            onChange={handlePhoneNumber}
          >
            Phone Number
          </label>{" "}
          <br></br>
          <input
            type="tel"
            placeholder="your phone number..."
            required
            className="py-4 w-full text-black px-2 mb-8 rounded-lg"
          ></input>
          <label
            className=" text-lg font-medium text-white"
            onChange={handleDateOfBirth}
          >
            Date of birth
          </label>
          <br></br>
          <input
            type="date"
            required
            placeholder=""
            className="py-4 w-full text-black px-2 mb-8 rounded-lg"
          />
          <br></br>
          <label
            className=" text-lg font-medium text-white"
            onChange={handleBio}
          >
            Bio
          </label>
          <br></br>
          <textarea
            required
            className="py-4 w-full text-black px-2 mb-8 rounded-lg"
          ></textarea>
          <button className="block m-auto bg-white mt-3 p-2 text-black font-bold rounded-lg">
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
}

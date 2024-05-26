import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, app } from "../../FireBaseConfig";
import { getDoc, getFirestore, collection } from "firebase/firestore";
import { userContext } from "../Users";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [RememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({
    Email: "",
    Password: "",
  });
  const [errorCode, setErrorCode] = useState("");

  const { setSignedIn, adminData } = useContext(userContext);

  const navigate = useNavigate();

  const database = getFirestore(app);
  const colRef = collection(database, "UserData");

  const getDetails = async (userCredentials) => {
    const ref = await getDoc(colRef, {
      userid: userCredentials.user.uid,
      username: auth.currentUser.displayName,
    });
    console.log("data added successfully");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    // Email validation
    if (!Email) {
      formIsValid = false;
      errors.Email = "Email cannot be empty.";
    } else if (!/\S+@\S+\.\S+/.test(Email)) {
      formIsValid = false;
      errors.Email = "Email is not valid.";
    }

    // Password validation
    if (!Password) {
      formIsValid = false;
      errors.Password = "Password cannot be empty.";
    } else if (Password.length < 6) {
      formIsValid = false;
      errors.Password = "Password must be at least 6 characters long.";
    }

    else if (errorCode === "Firebase: Error (auth/invalid-credential)."){
      errors.Password = "Password is not valid";
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Submit form if valid
      console.log("Form is valid, submitting...");
      console.log("Remember Me:", RememberMe);
      // Here you can add logic to save the email and password if Remember Me is checked
    } else {
      console.log("Form has errors.");
    }
    signInWithEmailAndPassword(auth, Email, Password)
      .then((userCredentials) => {
        let path = "/HomePage";
        console.log(userCredentials);
        setSignedIn(true);
        adminData.map((admin) => {
          console.log(admin.email);
          if(admin.email === Email ){ 
            path = "/AccountManagement/Admin" ;
          }
        })
        navigate(path);
      })
      .catch((error) => {
        console.log(error);
        setErrorCode(error.message);
      });
  };

  return (
    <div>
      <NavBar></NavBar>
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center py-3"
        style={{
          backgroundImage:
            "url(https://www.mowernew.com/wp-content/uploads/2023/07/pexels-gilmer-diaz-estela-6345502-1200x800.jpg)",
        }}
      >
        <div className="flex flex-col md:flex-row justify-center rounded-2xl bg-white w-full max-w-5xl mx-4 md:mx-10 lg:mx-auto p-4 md:p-6 lg:p-8 shadow-lg">
          <div className="flex items-center justify-center w-full md:w-1/2 p-4">
            <form className="w-full" onSubmit={handleSubmit}>
              <h1 className="text-2xl font-bold text-center cursor-default">Hello!</h1>
              <h2 className="text-center cursor-default">Sign into your account</h2>
              <div className="mt-4">
                <input
                  className="w-full p-2 mt-3 border rounded"
                  type="text"
                  placeholder="Enter your Email"
                  value={Email}
                  onChange={handleEmailChange}
                />
                {errors.Email && (
                  <div className="text-red-500">{errors.Email}</div>
                )}
                <input
                  className="w-full p-2 mt-3 border rounded"
                  type="password"
                  placeholder="Password"
                  value={Password}
                  onChange={handlePasswordChange}
                />
                {errors.Password && (
                  <div className="text-red-500">{errors.Password}</div>
                )}
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={RememberMe}
                      onChange={handleRememberMeChange}
                    />
                    <label className="ml-2 cursor-default">Remember Me</label>
                  </div>
                  <button>Forgot Password?</button>
                </div>
                <button
                  type="submit"
                  className="mt-4 bg-green-500 text-white w-full py-2 rounded hover:bg-green-700"
                >
                  Submit
                </button>
                <div className="mt-4 flex justify-center cursor-default">
                  <p>Don't have an account?</p>
                  <NavLink to="/SignUp">
                    <button className="ml-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
                      Sign Up
                    </button>
                  </NavLink>
                </div>
              </div>
            </form>
          </div>

          <div className="hidden md:flex items-center justify-center bg-green-500 text-white transition duration-[3000ms] hover:bg-green-700 ease-in-out p-6 rounded-2xl w-full md:w-1/2">
            <div className="text-center">
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl cursor-default">
                Welcome Back!
              </h1>
              <p className="mt-4 text-lg md:text-xl lg:text-2xl cursor-default">
                To KonnectUs, Your Number One Trusted Market Place. Great to
                have you here again. We are here to help.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;

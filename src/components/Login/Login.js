import React, { Component } from "react";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Email: "",
      Password: "",
      RememberMe: false,
      errors: {
        Email: "",
        Password: "",
      },
    };
  }

  handlerEmailChange = (event) => {
    this.setState({
      Email: event.target.value,
    });
  };

  handlerPasswordChange = (event) => {
    this.setState({
      Password: event.target.value,
    });
  };

  handlerRememberMeChange = (event) => {
    this.setState({
      RememberMe: event.target.checked,
    });
  };

  validateForm = () => {
    const { Email, Password } = this.state;
    let errors = {};
    let formIsValid = true;

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

    this.setState({ errors });
    return formIsValid;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm()) {
      // Submit form if valid
      console.log("Form is valid, submitting...");
      console.log("Remember Me:", this.state.RememberMe);
      // Here you can add logic to save the email and password if Remember Me is checked
    } else {
      console.log("Form has errors.");
    }
  };

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div
          className="bg-cover bg-center h-[750px] flex items-center justify-center py-3"
          style={{
            backgroundImage:
              "url(https://www.mowernew.com/wp-content/uploads/2023/07/pexels-gilmer-diaz-estela-6345502-1200x800.jpg)",
          }}
        >
          <div className="flex flex-row justify-center rounded-r-[40px] bg-stone-300  rounded-l-[40px] w-[900px] m-[300px] h-[400px]">
            <div className="flex items-center ">
              <form className="mx-[80px]" onSubmit={this.handleSubmit}>
                <h1 className="text-[20px] font-bold ml-[130px]">Hello!</h1>
                <h2 className="ml-[80px]">Sign into your account</h2>
                <div>
                  <input
                    className="font-bold p-4 mt-3 rounded-[20px] h-[40px] w-[350px]"
                    type="text"
                    placeholder="Email"
                    value={this.state.Email}
                    onChange={this.handlerEmailChange}
                  />
                  {this.state.errors.Email && (
                    <div className="text-red-500">
                      {this.state.errors.Email}
                    </div>
                  )}
                  <input
                    className="font-bold p-4 mt-6 rounded-[20px] h-[40px] w-[350px]"
                    type="password"
                    placeholder="Password"
                    value={this.state.Password}
                    onChange={this.handlerPasswordChange}
                  />
                  {this.state.errors.Password && (
                    <div className="text-red-500">
                      {this.state.errors.Password}
                    </div>
                  )}
                  <div className="mt-4">
                    <input
                      type="checkbox"
                      checked={this.state.RememberMe}
                      onChange={this.handlerRememberMeChange}
                    />
                    <label className="ml-2">Remember Me</label>
                  </div>
                  <button
                    type="submit"
                    className="mt-4 bg-green-500 text-white text-md p-2 rounded-xl hover:bg-green-700"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-green-400 rounded-[40px] text-white p-4 h-[400px] w-[600px] right-10">
              <div className=" mt-24">
                <h1 className="font-bold text-[45px] text-center">
                  Welcome Back!
                </h1>
                <p className="text-xl text-center">
                  To KonnectUs Your Number One Trusted Market Place. Great to
                  have you here again. we are here to help.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Login;

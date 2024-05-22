import React, { Component } from "react";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div>
         
          <div class=" bg-green-500 w-[60%] h-screen  p-[12px] font-bold mt-[80px] rounded-tr-[80px]">
            <h1 class=" text-amber-800  text-[18px] ">About Us</h1>
            <p class=" text-white flex ">
              KonnectUs Farmer's Zone is dedicated to revolutionizing
              agricultural communities by connecting farmers with buyers. our
              platform aims to empower farmers, streamline the suply chain, and
              provide buyers with access to high quality produce. Founded by a
              team passionate about sustanabillity and community empowerment, we
              priorittize trasparancy, fairness and, collaboration. join us in
              creating a more sustainable and equitable food system.
            </p>
          </div>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default AboutUs;

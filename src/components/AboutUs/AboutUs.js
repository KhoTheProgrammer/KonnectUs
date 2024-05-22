import React, { Component } from "react";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";

class AboutUs extends Component {
  render() {
    return (
      <div>
       <NavBar></NavBar>
        <div>
        <div
        className="bg-cover bg-center h-[750px] flex items-center justify-center py-3"
        style={{
          backgroundImage:
            "url(https://www.mowernew.com/wp-content/uploads/2023/07/pexels-gilmer-diaz-estela-6345502-1200x800.jpg)",
        }} >
         
          <div class=" bg-green-500 w-[60%] h-[550px] mr-[500px]  p-[12px] font-bold mt-[80px] rounded-[80px]">
            <h1 class=" text-black  text-[22px] flex justify-center items-center"><b>About Us</b></h1>
            <p class=" text-white text-[18px] ">
              KonnectUs Farmer's Zone is dedicated to revolutionizing
              agricultural communities by connecting farmers with buyers. our
              platform aims to empower farmers, streamline the suply chain, and
              provide buyers with access to high quality produce. Founded by a
              team passionate about sustanabillity and community empowerment, we
              priorittize trasparancy, fairness and, collaboration. join us in
              creating a more sustainable and equitable food system.
            </p>
          </div>
          </div>
          
       
      </div>
      <Footer></Footer>
      </div>
    );
  }
}

export default AboutUs;

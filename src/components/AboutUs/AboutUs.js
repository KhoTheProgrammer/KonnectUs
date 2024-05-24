import React from "react";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <div>
        <div
          className="bg-cover bg-center h-[750px] flex justify-center items-center"
          style={{
            backgroundImage:
              "url(https://www.greenlife.co.ke/wp-content/uploads/2022/04/farming_passion.jpg)",
          }}
        >
          <div className=" bg-white w-[60%] h-[675px]  p-[12px]  font-bold mt-[50px] rounded-[80px] rounded-b-none">
            <h1 className=" text-green-500 text-[30px] flex justify-center items-center tracking-widest">
              About Us
            </h1>
            <p className="text-white text-[18px]">
              KonnectUs Farmer's Zone is dedicated to revolutionizing
              agricultural communities by connecting farmers with buyers. Our
              platform aims to empower farmers, streamline the supply chain, and
              provide buyers with access to high-quality produce. Founded by a
              team passionate about sustainability and community empowerment, we
              prioritize transparency, fairness, and collaboration. Join us in
              creating a more sustainable and equitable food system.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;

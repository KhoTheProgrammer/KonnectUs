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
          <div  className=" bg-white w-[60%] h-[675px] mr-[500px] p-[12px] font-bold mt-[50px] rounded-[80px] rounded-b-none">
            <h1 className=" text-green-500 text-[30px] flex justify-center items-center tracking-widest">
              About Us
            </h1>
            <p>
              Welcome to KonnectUS, the ultimate platform dedicated to
              empowering farmers and revolutionizing agriculture. At KonnectUS,
              we believe in bridging the gap between traditional farming
              practices and modern technology to create a thriving community for
              farmers everywhere.
              <h2 className=" text-center text-green-500 text-[20px] underline"><em>Mission</em></h2>
              <p>
                Our mission is to create an innovative, accessible, and
                supportive platform that connects farmers with the resources,
                tools, and community they need to succeed. We aim to enhance
                agricultural productivity, promote sustainable farming
                practices, and improve the livelihoods of farmers through
                technology-driven solutions and a collaborative approach.
              </p>
              <h2 className=" text-center text-green-500 text-[20px] underline"><em>Vision</em></h2>
              <p className=" font-sans">
                Our vision is to be the leading global platform that transforms
                the agricultural landscape by harnessing the power of technology
                and community. We envision a world where every farmer has the
                knowledge, resources, and support to cultivate their land
                efficiently and sustainably, contributing to global food
                security and a healthier planet
              </p>
              <h2 className=" text-center text-green-500 text-[20px] underline"><em>Values</em></h2>
              <p className=" font-sans">
                Innovation: We embrace cutting-edge technology and innovative
                practices to continually improve the agricultural sector
              </p>
              <p className=" font-sans">
                Community: We foster a strong sense of community, encouraging
                collaboration, knowledge sharing, and mutual support among
                farmers.
              </p>
              <p>
              Sustainability: We are committed to promoting sustainable farming 
              practices that protect the environment and ensure long-term agricultural productivity.
              </p>
              <p>
              Empowerment: We strive to empower farmers with the tools, knowledge, and resources they
              need to succeed and thrive.
              <p>
              Integrity: We conduct our business with the highest standards of integrity, honesty, and 
              transparency
              </p>
              <p>
              Excellence: We are dedicated to delivering excellence in every aspect of our platform and services,
               ensuring the best outcomes for our users.
              </p>

              </p>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;

import React from "react";
import img3 from "../src/assets/Pic.png";
import img1 from "./assets/Ellipse 14.png";
import img2 from "./assets/Ellipse 146.png";
import { NavLink } from "react-router-dom";
import backgroundimage from "./assets/hero_back_img.jpeg";

import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative w-full"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        <div className="relative w-[80%] pt-[108px] mx-auto font-DMSans">
          <div className="flex mx-auto border rounded-[32px] border-[#A3DC2F] gap-[8px] w-fit xl:w-[263px] items-center p-[4px] text-[#A3DC2F] font-[500] text-[10px] lg:text-[14px]">
            <button className="w-fit px-[8px] py-[4px] rounded-[64px] bg-[#A3DC2F] text-white ">
              New
            </button>
            <h6 className="">Unleash the Power of AI for Your Fitness Goals</h6>
            <FaArrowRight />
          </div>
          <h1 className="2xl:text-[72px] font-[700] xl:text-[60px] lg:text-[36px] text-[24px] text-center mt-[14px] xl:font-[700] text-white ">
          Track Your Fitness <br /> Journey
          </h1>
          <p className="text-white text-center mx-auto mt-[15px] text-[16px] lg:text-[22px] font-[400]">
          Discover the ultimate fitness companion with GymFluencer. Effortlessly log your workouts, count reps, <br />and track calories burned. Stay motivated and achieve your goals with our user-friendly interface.
          </p>
          <NavLink to="https://calendly.com/GymFluencer-support?primary_color=8eff00">
            <button className="mx-auto flex items-center mt-[62px] text-[18px] text-[#1d1c20] bg-[#F2F2F2] rounded-[100px] font-[700] px-[30px] py-[12px]">
              Book a Demo
            </button>
          </NavLink>
          {/* reviews */}
          <div className="mx-auto w-full flex flex-col items-center justify-center gap-[38px] mt-[62px]">
            <div className="bg-[#1A1A1A] flex items-center justify-center rounded-full w-[208px] h-fit relative">
              <img
                className="z-40 w-[48px] h-[48px] rounded-full absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
                src={img3}
                alt="Client 1"
              />
              <img
                className="z-30 h-[48px] rounded-full w-[48px] absolute top-1/2 left-1/8 transform -translate-x-1/2 -translate-y-1/2"
                src={img1}
                alt="Client 2"
              />
              <img
                className="z-20 h-[48px] rounded-full w-[48px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                src={img2}
                alt="Client 3"
              />
              <img
                className="z-10 h-[48px] rounded-full w-[48px] absolute top-1/2 right-1/8 transform translate-x-1/2 -translate-y-1/2"
                src={img3}
                alt="Client 4"
              />
              <img
                className="z-0 w-[48px] h-[48px] rounded-full absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2"
                src={img1}
                alt="Client 5"
              />
            </div>
            <p className="text-[#9B9CA1] font-[700] text-[14px]">
              Trusted by 100+ Clients
            </p>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default Hero;

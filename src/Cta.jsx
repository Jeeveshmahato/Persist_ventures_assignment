import React from "react";
import img1 from "./assets/Influe.jpeg";
import { NavLink } from "react-router-dom";
export default function Cta() {
  return (
    <div className=" bg-[#0F0F0F] mb-[100px] text-white gap-5 lg:gap-0 rounded-[40px] px-4 py-12 mt-[200px] items-center  flex flex-col lg:flex-row  ">
      <div className="w-full mx-auto  sm:px-6 lg:px-7">
        <div className="">
          <h1 className=" 2xl:text-[72px] xl:[60px] lg:text-[36px] text-center text-[20px] font-[700]">
            Let's Automate Your Influencer Marketing Experience Using CreatorLo
          </h1>
          <div className=" mt-4 lg:mt-8  items-center justify-center   flex gap-4 w-full ">
            <NavLink to="https://calendly.com/creatorlo-support?primary_color=8eff00">
              <button className="bg-[#A3DC2F] text-white w-[200px] rounded-[64px] flex justify-center items-center font-bold py-[10px] lg:py-[20px] px-4 ">
                Contact Us
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      <img
        className=" h-[200px] px- w-[200px] xl:w-[400px] rounded-[16px] xl:h-[400px] lg:w-[400px] lg:h-[300px] 2xl:w-[500px]  2xl:h-[500px]"
        src={img1}
        alt=""
      />
    </div>
  );
}

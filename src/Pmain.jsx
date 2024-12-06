import React from "react";
import { MdDiscount } from "react-icons/md";
import Pricing from "./Pricing";
import Cta from "./Cta";
import { NavLink } from "react-router-dom";

const Pmain = () => {
  return (
    <>
      <div  className="bg-[#1D1C20] w-full">
        <div className=" w-[80%] mx-auto ">
          <div id="Pricing" className=" flex mx-auto border rounded-[32px]  border-[#A3DC2F] gap-[8px] w-fit items-center py-[8px] px-[12px] text-[#A3DC2F] font-[500] text-[14px]">
            <MdDiscount />
            <h6 className="">Pricing</h6>
          </div>
          <h1 className=" text-center mt-[14px] lg:text-[36px] text-[20px] xl:text-[72px] font-[700] text-white ">
            Find the right plan
          </h1>
          <p className="text-[#9B9CA1] text-center  mb-[20px] mx-auto mt-[15px] text-[14px] lg:text-[22px] font-[400]">
          Talk to our Expert Sales Team to get the best out of GymFluencer which matches your Influencer Requirement
          </p>
          <NavLink to="#">
          <button className=" mx-auto flex items-center mb-[62px]  text-[18px] text-[#1d1c20] bg-[#F2F2F2] rounded-[100px]  font-[700] px-[30px] py-[12px]">
            Talk to our Experts
          </button>
        </NavLink>
          <Pricing />
    
          <Cta />
        </div>
      </div>
    </>
  );
};

export default Pmain;

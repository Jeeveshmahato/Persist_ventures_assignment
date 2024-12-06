import React from "react";
import img8 from "./assets/CreatorLo Logo (4).png";
import Testone from "./Testone";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-[#0F0F0F] sticky top-0 z-50 font-DMSans">
        <div className=" w-[95%] 2xl:w-[80%] mx-auto py-[20px] items-center hidden lg:flex justify-between">
          <img className="w-[200px] 2xl:w-[250px] h-[85px]  shadow-md " src={img8} alt="" />
          <ul className="text-[18px] font-[400] flex items-center gap-5 text-[#9B9CA1]">
            <li> <a href="#NoChannel">Why Choose Us?</a></li>
            <li> <a href="#Testimonial">Testimonials</a></li>
            <li> <a href="#Pricing">Pricing</a></li>
          </ul>
          <NavLink 
          to='https://creatorlo.vercel.app/'
          >
          <button className="text-[#FBFBFB] w-[220px] 2xl:w-[250px] text-[16px] 2xl:text-[24px] font-[500] px-[24px] py-[12px] 2xl:py-[20px] bg-[#1F1F1F] rounded-[64px]">
            Get started
          </button>
          </NavLink>
        </div>
        {/* mobile design */}
        <div className=" flex w-full lg:hidden">
          <Testone />
        </div>
      </div>
    </>
  );
};

export default Header;

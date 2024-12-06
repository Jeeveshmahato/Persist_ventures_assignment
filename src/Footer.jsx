import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import img1 from "./assets/CreatorLo Logo (4).png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-[#0F0F0F] text-white  pt-[145px] ">
      <div className="w-[90%] mx-auto gap-[12px] sm:gap-[12px] md:gap-20 flex md:flex-row flex-col justify-between">
        <div className="w-full lg:w-[50%] flex gap-10  lg:flex-row flex-col justify-between">
          {/* 1st */}
          <div className="w-full">
            <img className="w-[270px]  h-[85px]" src={img1} alt="" />
            <p className="mt-[32px]">
            Influencer Marketing on Autopilot.
            </p>
            <div className="flex space-x-4 mt-[24px]">
              <div className="w-[30px] h-[30px] flex text-[14px] text-white bg-[#4B4B4B] rounded-full hover:bg-[#2B59FF] items-center justify-center ">
                <FaTwitter />
              </div>
              <div className="w-[30px] h-[30px] flex text-[14px] text-white bg-[#4B4B4B] rounded-full hover:bg-[#2B59FF] items-center justify-center ">
                <CiLinkedin />
              </div>
              <div className="w-[30px] h-[30px] flex text-[14px] text-white bg-[#4B4B4B] rounded-full hover:bg-[#2B59FF] items-center justify-center ">
                <FaInstagram />
              </div>
            </div>
          </div>
          {/* 2nd */}
          <div className=" w-full lg:aflex flex-col  items-center">
            <h3 className="font-semibold  text-[#FAFAFA] mb-3 ">Quick Links</h3>
            <ul>
              <li>
                <a href="#NoChannel" className="text-[#B9B3B3]  ">
                  Why Choose Us?
                </a>
              </li>
              <li>
                <a href="#Testimonal" className="text-[#B9B3B3]">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#Pricing" className="text-[#B9B3B3]">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[50%]  gap-10 flex lg:flex-row flex-col  justify-between">
          {/* 3rd  */}
          <div className="w-full lg:w-[50%] ">
            <h3 className="font-semibold mb-1  lg:mb-3 text-[#FAFAFA]">
              Talk to our Team
            </h3>
            <ul>
              <li className=" flex gap-2 text-[#B9B3B3]">
                <p>Email </p>

                <a href="mailto:creatorlo.support@qabunch.com" className=" hover:text-[#A3DC2F] hover:text-bold">
                creatorlo.support@qabunch.com
                </a>
              </li>
            
              {/* <li>
                <a href="#" className="text-[#B9B3B3]">
                  About us
                </a>
              </li> */}
            </ul>
          </div>
          {/* 4th */}
          <div className="w-full lg:w-[50%] ">
            <h3 className="font-semibold mb-3 text-[#FAFAFA]">
            Schedule a Call with us
            </h3>
           <NavLink
           to ='https://calendly.com/creatorlo-support?primary_color=8eff00'
           >
           <button
                type="submit"
                className="bg-[#A3DC2F] py-[16px] w-full  flex justify-center items-center text-white font-bold  rounded"
              >
                Schedule Now 
              </button>
           </NavLink>
          </div>
        </div>
      </div>
      <div className=" w-[85%] mx-auto border border-[#333333] mt-[46px]"></div>
      <div className="border-t border-zinc-800 mt-8 pt-4 text-center text-zinc-400 text-sm">
        © Copyright 2024, All Rights Reserved by CreatorLo
      </div>
    </div>
  );
};

export default Footer;

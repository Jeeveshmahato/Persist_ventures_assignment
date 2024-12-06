import React from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import img1 from "./assets/CreatorLo Logo (4).png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#0F0F0F] text-white pt-[60px] md:pt-[145px]">
      <div className="w-[90%] mx-auto gap-12 sm:gap-20 flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col lg:flex-row lg:w-1/2 gap-10 lg:gap-20 justify-between">
          <div className="flex-1">
          <a
            href="#"
            className="text-3xl font-extrabold text-black-500 shadow-md transition-transform duration-300 transform hover:scale-110"
          >
            GymFluencer
          </a>
            <p className="mt-8 text-center lg:text-left">Empower Your Fitness Journey.</p>
            <div className="flex justify-center lg:justify-start space-x-4 mt-6">
              <div className="w-[30px] h-[30px] flex text-[14px] text-white bg-[#4B4B4B] rounded-full hover:bg-[#2B59FF] items-center justify-center">
                <FaTwitter />
              </div>
              <div className="w-[30px] h-[30px] flex text-[14px] text-white bg-[#4B4B4B] rounded-full hover:bg-[#2B59FF] items-center justify-center">
                <CiLinkedin />
              </div>
              <div className="w-[30px] h-[30px] flex text-[14px] text-white bg-[#4B4B4B] rounded-full hover:bg-[#2B59FF] items-center justify-center">
                <FaInstagram />
              </div>
            </div>
          </div>
          <div className="flex-1 lg:text-left text-center">
            <h3 className="font-semibold text-[#FAFAFA] mb-3">Quick Links</h3>
            <ul>
              <li>
                <a href="#NoChannel" className="text-[#B9B3B3]">Why Choose Us?</a>
              </li>
              <li>
                <a href="#Testimonal" className="text-[#B9B3B3]">Testimonials</a>
              </li>
              <li>
                <a href="#Pricing" className="text-[#B9B3B3]">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:w-1/2 gap-10 lg:gap-20 justify-between">
          <div className="flex-1 lg:text-left text-center">
            <h3 className="font-semibold mb-1 lg:mb-3 text-[#FAFAFA]">Talk to our Team</h3>
            <ul>
              <li className="flex justify-center lg:justify-start gap-2 text-[#B9B3B3]">
                <p>Email</p>
                <a href="mailto:GymFluencer.support@qabunch.com" className="hover:text-[#A3DC2F] hover:font-bold">GymFluencer.support@qabunch.com</a>
              </li>
            </ul>
          </div>
          <div className="flex-1 lg:text-left text-center">
            <h3 className="font-semibold mb-3 text-[#FAFAFA]">Schedule a Call with us</h3>
            <NavLink to='#'>
              <button
                type="submit"
                className="bg-[#A3DC2F] py-[16px] w-full flex justify-center items-center text-white font-bold rounded"
              >
                Schedule Now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="w-[85%] mx-auto border border-[#333333] mt-8"></div>
      <div className="border-t border-zinc-800 mt-8 py-4 text-center text-zinc-400 text-sm">
        © Copyright 2024, All Rights Reserved by GymFluencer
      </div>
    </div>
  );
};

export default Footer;

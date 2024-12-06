import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
export default function Pricing() {
  return (
    <div  className=" text-white  blur-lg p-6 flex justify-center items-center  h-fit">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {/* 1st  */}
        <div className="bg-[#161616] p-6 rounded-[24px] flex items-center justify-center flex-col shadow-lg">
          <h2 className="text-[32px] font-[400] mb-2 text-[#FBFBFB]">Basic</h2>
          <p className="text-[#9B9CA1] text-[16px] font-[400] mb-4 text-center">
            Get a professional website designed according to your needs.
          </p>
          <div class="flex items-center mb-[32px]">
            <span class="font-manrope mr-2 text-6xl font-semibold">$499</span>
            <span class="text-xl text-gray-500 ">/ month</span>
          </div>
          {/* <ul className="mb-6">
            <li className=" text-[16px] font-[400] items-center flex gap-4">
              <FaCheck />
              <p>Get a fully designed Website.</p>
            </li>
            <li className=" text-[16px] font-[400] items-center flex gap-4">
              <FaCheck />
              <p>Get a fully designed Website.</p>
            </li>
            <li className=" text-[16px] font-[400] items-center flex gap-4">
              <FaCheck />
              <p>Get a fully designed Website.</p>
            </li>
            <li className=" text-[16px] font-[400] items-center flex gap-4">
              <FaCheck />
              <p>Get a fully designed Website.</p>
            </li>
            <li className=" text-[16px] font-[400] items-center flex gap-4">
              <FaCheck />
              <p>Get a fully designed Website.</p>
            </li>
            <li className=" text-[16px] font-[400] items-center flex gap-4">
              <FaCheck />
              <p>Get a fully designed Website.</p>
            </li>
          </ul> */}
          <button className="bg-[#1F1F1F]  text-white w-full rounded-[64px] flex justify-center items-center font-bold py-[10px] lg:py-[20px] px-4 ">
            Get started
          </button>
        </div>
        {/* 2nd  */}
        <div className="bg-[#161616] p-6 rounded-[24px] flex items-center relative justify-center flex-col shadow-lg">
          <div className=" border border-[#236456] text-[14px] rounded-[32px] px-3  py-2 font-[500] text-[#33C6AB] bg-[#112220] flex items-center gap-1  absolute top-2 right-2">
            <IoStar />
            <p className=""> Popular</p>
          </div>
          <h2 className="text-[32px] text-[#A3DC2F] font-[400] mb-2">Pro</h2>
          <p className="text-[#9B9CA1] text-[16px] font-[400] mb-4 text-center">
            Get a professional website designed according to your needs.
          </p>
          <div class="flex items-center mb-[32px] ">
            <span class="font-manrope mr-2 text-6xl font-semibold">$499</span>
            <span class="text-xl text-gray-500 ">/ month</span>
          </div>
         {/* <ul className="mb-6">
            <li className=" text-[16px] font-[400] items-center flex gap-4">
              <FaCheck />
              <p>Get a fully designed Website.</p>
            </li>
            <li className=" text-[16px] font-[400] items-center flex gap-4">
              <FaCheck />
              <p>Get a fully designed Website.</p>
            </li>
            <li className=" text-[16px] font-[400] items-center flex gap-4">
              <FaCheck />
              <p>Get a fully designed Website.</p>
            </li>
            <li className=" text-[16px] font-[400] items-center flex gap-4">
              <FaCheck />
              <p>Get a fully designed Website.</p>
            </li>
            <li className=" text-[16px] font-[400] items-center flex gap-4">
              <FaCheck />
              <p>Get a fully designed Website.</p>
            </li>
            <li className=" text-[16px] font-[400] items-center flex gap-4">
              <FaCheck />
              <p>Get a fully designed Website.</p>
            </li>
          </ul> */}
          <button className="bg-[#FBFBFB]  text-[#0F0F0F] w-full rounded-[64px] flex justify-center items-center font-bold py-[10px] lg:py-[20px] px-4 ">
            Get started
          </button>
        </div>
        {/* 3rd  */}
        <div className="bg-[#161616] p-6 rounded-[24px] flex items-center justify-center flex-col shadow-lg">
          <h2 className="text-[32px] font-[400] mb-2 text-[#A3DC2F]">
            Enterprise
          </h2>
          <p className="text-[#9B9CA1] text-[16px] font-[400] mb-4 text-center">
            Get a professional website designed according to your needs.
          </p>
          <div class="flex items-center mb-[32px]">
            <span class="font-manrope mr-2 text-6xl font-semibold">$499</span>
            <span class="text-xl text-gray-500 ">/ month</span>
          </div>
          {/* <ul className="mb-6">
            <li className=" text-[16px] font-[400] items-center flex gap-4">
              <FaCheck />
              <p>Get a fully designed Website.</p>
            </li>
            <li className=" text-[16px] font-[400] items-center flex gap-4">
              <FaCheck />
              <p>Get a fully designed Website.</p>
            </li>
            <li className=" text-[16px] font-[400] items-center flex gap-4">
              <FaCheck />
              <p>Get a fully designed Website.</p>
            </li>
            <li className=" text-[16px] font-[400] items-center flex gap-4">
              <FaCheck />
              <p>Get a fully designed Website.</p>
            </li>
            <li className=" text-[16px] font-[400] items-center flex gap-4">
              <FaCheck />
              <p>Get a fully designed Website.</p>
            </li>
            <li className=" text-[16px] font-[400] items-center flex gap-4">
              <FaCheck />
              <p>Get a fully designed Website.</p>
            </li>
          </ul> */}
          <button className="bg-[#A3DC2F]  text-white w-full rounded-[64px] flex justify-center items-center font-bold py-[10px] lg:py-[20px] px-4 ">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

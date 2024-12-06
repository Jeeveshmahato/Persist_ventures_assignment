import React from "react";
import Testimonal from "./Testimonal";

import { FaRegMessage } from "react-icons/fa6";
const Tmain = () => {
  return (
    <>
      <div  id="Testimonal" className=" flex flex-col  w-full px-[20px] bg-black ">
        <div className="  flex mx-auto border rounded-[32px] mt-[60px] sm:mt-[120px] lg:mt-[200px] border-[#A3DC2F] gap-[8px] w-fit items-center py-[8px] px-[12px] text-[#A3DC2F] font-[500] text-[14px]">
          <FaRegMessage />
          <h6  id="Testimonial">Testimonials</h6>
        </div>
        <h1 className=" text-center mt-[14px] lg:text-[36px] text-[20px] xl:text-[72px] font-[700] text-white ">
          What are people saying
        </h1>
        <p className="text-[#9B9CA1] text-center  mb-[86px] mx-auto mt-[15px] text-[14px] lg:text-[22px] font-[400]">
          "Thank you for your trust in GymFluencer! We are grateful for your feedback and are committed to providing the best products and services. Read what our clients have to say about their experience with us."
        </p>
        <Testimonal />
      </div>
    </>
  );
};

export default Tmain;

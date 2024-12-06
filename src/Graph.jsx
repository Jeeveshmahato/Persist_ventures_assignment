import React from "react";

import Cthree from "./Cthree";
import Cfour from "./Cfour";
import Table from "./Table";
import Email from "./Email";

const Graph = () => {
  return (
    <>
      <div
        id="NoChannel"
        className=" flex flex-col mx-auto gap-[30px] lg:mb-[60px] sm:mb-[30px] mb-[20px]    w-[98%] lg:w-[90%] xl:[80%] items-center justify-center"
      >
        <section className="flex flex-col  gap-[30px] w-full ">
          <div className=" flex  bg-[#161616] border rounded-[30px] border-[#333333] flex-col px-[30px] py-[60px] ">
            <h2 className=" font-[700] text-[18px] text-white">
              Improve Your Workout Efficiency & Measure Your Progress
            </h2>
            <p className="mt-[10px] text-[#9B9CA1]  text-[16px] font-[400]">
              Quickly save or ignore influencers with a single click to avoid
              repetition and maintain a streamlined database. Seamlessly track
              your fitness journey, monitor influencer interactions, and measure
              your progress all in one place.
            </p>
            {/* chart + table  */}
            <div className=" text-white  mt-[20px]  gap-8 flex-col  flex w-full">
              <div className=" w-full">
                <div className=" w-full  flex  gap-2 flex-wrap">
                  <div className=" flex flex-wrap w-full items-center lg:items-start justify-center  lg:justify-between gap-2">
                    <div className=" bg-blue-400 px-5 flex justify-between items-center rounded-[8px] py-2 w-[200px] ">
                      <p className=" text-white text-[16px] font-[400]">
                        Workouts
                      </p>
                      <p className="text-black text-[12px] font-[400]">
                        103
                      </p>
                    </div>
                    <div className=" bg-gray-400 px-5 flex justify-between items-center rounded-[8px] py-2 w-[200px] ">
                      <p className=" text-white text-[16px] font-[400]">
                      Kcal
                      </p>
                      <p className="text-black text-[12px] font-[400]">
                        16238
                      </p>
                    </div>
                    <div className=" bg-red-400 px-5 flex justify-between items-center rounded-[8px] py-2 w-[200px] ">
                      <p className=" text-white text-[16px] font-[400]">
                       Hours
                      </p>
                      <p className="text-black text-[12px] font-[400]">56</p>
                    </div>
                    <div className=" bg-gray-400 px-5 flex justify-between items-center rounded-[8px] py-2 w-[200px] ">
                      <p className=" text-white text-[16px] font-[400]">
                      Minutes
                      </p>
                      <p className="text-black text-[12px] font-[400]">
                        52
                      </p>
                    </div>
                  </div>
                  <div className=" flex flex-col lg:flex-row w-full mt-[32px]  gap-2">
                    <Cthree />
                    <Cfour />
                  </div>
                </div>
              </div>
              {/* table  */}
              <Table />
            </div>
          </div>
       
        </section>
      </div>
    </>
  );
};

export default Graph;

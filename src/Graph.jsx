import React from "react";
import img1 from "./assets/Ellipse 14.png";
import img2 from "./assets/Ellipse 146.png";
import Cone from "./Cone";
import Ctwo from "./Ctwo";
import Cthree from "./Cthree";
import Cfour from "./Cfour";
import img7 from "./assets/Pic.png";
import Table from "./Table";
import Email from "./Email";

const Graph = () => {
  return (
    <>
      <div
        id="NoChannel"
        className=" flex flex-col mx-auto gap-[30px] mt-[50px] lg:mt-[149px]  w-[98%] lg:w-[90%] xl:[80%] items-center justify-center"
      >
        {/* 1stsection */}
        <section className="flex  flex-col gap-4  justify-between lg:flex-row  mx-auto w-full ">
          {/* 1.1 */}
          <div className="  min-[1870px]:w-[35%] w-full flex bg-[#161616] border rounded-[30px] border-[#333333] flex-col px-[30px] py-[60px] ">
            <h2 className=" font-[700] text-[18px] text-center text-white">
              No Channel Visits Needed
            </h2>
            <p className="mt-[10px] text-[#9B9CA1]  text-center text-[16px] font-[400]">
              Get a detailed view of all the activity in last 30 Days along with
              the Contact Details, Average Comments, Likes Per Post and
              Engagement Rate
            </p>
            <div className=" bg-gradient-to-r w-full  flex-col min-[1879px]:flex-row  rounded-[18px] justify-between items-center mt-[32px] bg-[#384152] flex gap-5 p-4">
              <div className=" flex flex-col w-full gap-5">
                <div className=" bg-white rounded-[8px] items-center flex gap-1 w-full justify-between h-[80px] px-[10px] py-[15px]">
                  <h3 className=" font-[700] text-[16px]">Subscribers</h3>
                  <h6 className="font-[400] text-[14px]"> 11M</h6>
                </div>
                <div className=" bg-white rounded-[8px] items-center flex gap-1 w-full justify-between h-[80px] px-[10px] py-[15px]">
                  <h3 className=" font-[700] text-[16px]">
                    Average likes per post
                  </h3>
                  <h6 className="font-[400] text-[14px]">65.128k</h6>
                </div>
                <div className=" bg-white rounded-[8px] items-center flex gap-1 w-full justify-between h-[80px] px-[10px] py-[15px]">
                  <h3 className=" font-[700] text-[16px]">Contact</h3>
                  <h6 className="font-[400] text-[14px]">test@gmail.com</h6>
                </div>
              </div>
              <div className=" flex flex-col w-full gap-5">
                <div className=" bg-white rounded-[8px] items-center flex gap-1 w-full justify-between h-[80px] px-[10px] py-[15px]">
                  <h3 className=" font-[700] text-[16px]">
                    Reacent Upload(30days)
                  </h3>
                  <h6 className="font-[400] text-[14px]"> 24</h6>
                </div>
                <div className=" bg-white rounded-[8px] items-center flex gap-1 w-full justify-between h-[80px] px-[10px] py-[15px]">
                  <h3 className=" font-[700] text-[16px]">
                    Average comments per post
                  </h3>
                  <h6 className="font-[400] text-[14px]">200</h6>
                </div>
                <div className=" bg-white rounded-[8px] items-center flex gap-1 w-full justify-between h-[80px] px-[10px] py-[15px]">
                  <h3 className=" font-[700] text-[16px]">Engagement rate</h3>
                  <h6 className="font-[400] text-[14px]"> 7.27%</h6>
                </div>
              </div>
            </div>
          </div>
          {/* 1.2  */}
          <div className=" flex   min-[1870px]:w-[65%]  flex-col xl:flex-row  mx-auto  gap-4  w-full ">
            <div className=" flex   w-full  bg-[#161616] border rounded-[30px] border-[#333333] flex-col px-[30px] py-[60px] ">
              <h2 className=" font-[700] text-[28px] text-center text-white">
                Real-Time Analytics
              </h2>
              <p className="mt-[10px] text-[#9B9CA1] text-center text-[16px] font-[400]">
                Get real time analytics of the performance and engagement rate
                of the last 5 videos
              </p>
              {/* chart  */}
              <div className=" flex w-full flex-col  gap-5 mt-[32px] items-center">
                <Cone />
                <Ctwo />
              </div>
            </div>
            {/* 1.3 */}
            <div className=" flex  w-full  bg-[#161616] border rounded-[30px] border-[#333333] flex-col px-[30px] py-[60px] ">
              <h2 className=" font-[700] text-center text-[18px] text-white">
                Easy Collaboration
              </h2>
              <p className="mt-[10px] text-[#9B9CA1] text-center text-[16px] font-[400]">
                Seamlessly collaborate with Influencers like Never Before.
              </p>
              <div className=" bg-[#171717] mx-auto  flex items-center justify-center rounded-full w-[264px] h-[264px]">
                <div className="bg-[#1A1A1A] flex items-center justify-center rounded-full w-[208px] h-[208px] relative">
                  <img
                    class="z-40 w-[48px] h-[48px] rounded-full absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
                    src={img7}
                  ></img>
                  <img
                    class="z-30 h-[48px] rounded-full w-[48px] absolute top-1/2 left-1/8 transform -translate-x-1/2 -translate-y-1/2"
                    src={img1}
                  ></img>
                  <img
                    class="z-20 h-[48px] rounded-full w-[48px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    src={img2}
                  ></img>
                  <img
                    class="z-10 h-[48px] rounded-full w-[48px] absolute top-1/2 right-1/8 transform translate-x-1/2 -translate-y-1/2"
                    src={img1}
                  ></img>
                  <img
                    class="z-0 w-[48px] h-[48px] rounded-full absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2"
                    src={img7}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 2nd section  */}
        <section className="flex flex-col  gap-[30px] w-full ">
          <div className=" flex  bg-[#161616] border rounded-[30px] border-[#333333] flex-col px-[30px] py-[60px] ">
            <h2 className=" font-[700] text-[18px] text-white">
              Build Your Own Database & Track Revenue
            </h2>
            <p className="mt-[10px] text-[#9B9CA1]  text-[16px] font-[400]">
              Save / Ignore Influencers in One Click to Not See Repetitive
              Influencers in Discovery and create your own Customizable Database
              while Tracking your sales.
            </p>
            {/* chart + table  */}
            <div className=" text-white  mt-[20px]  gap-8 flex-col  flex w-full">
              <div className=" w-full">
                <div className=" w-full  flex  gap-2 flex-wrap">
                  <div className=" flex flex-wrap w-full justify-between gap-2">
                    <div className=" bg-blue-400 px-5 flex justify-between items-center rounded-[8px] py-2 w-[200px] ">
                      <p className=" text-white text-[12px] font-[400]">
                        Total Sales
                      </p>
                      <p className="text-black text-[8px] font-[400]">
                        $10.23k
                      </p>
                    </div>
                    <div className=" bg-gray-400 px-5 flex justify-between items-center rounded-[8px] py-2 w-[200px] ">
                      <p className=" text-white text-[12px] font-[400]">
                        Total Expenses
                      </p>
                      <p className="text-black text-[8px] font-[400]">
                        $10.23k
                      </p>
                    </div>
                    <div className=" bg-red-400 px-5 flex justify-between items-center rounded-[8px] py-2 w-[200px] ">
                      <p className=" text-white text-[12px] font-[400]">
                        Total Reach
                      </p>
                      <p className="text-black text-[8px] font-[400]">
                        10.23k
                      </p>
                    </div>
                    <div className=" bg-gray-400 px-5 flex justify-between items-center rounded-[8px] py-2 w-[200px] ">
                      <p className=" text-white text-[12px] font-[400]">
                        Cost Per View
                      </p>
                      <p className="text-black text-[8px] font-[400]">
                        $10.23k
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
          <div className=" flex  bg-[#161616] border rounded-[30px] border-[#333333] flex-col px-[30px] py-[60px] ">
            <h2 className=" font-[700] text-[18px] text-white">
              Send Custom Emails Directly from CreatorLo
            </h2>
            <p className="mt-[10px] text-[#9B9CA1]  text-[16px] font-[400]">
              Setup your Email Authentication and Directly Send Outreach emails
              to Influencers in Bulk!
            </p>
            <Email />
          </div>
        </section>
      </div>
    </>
  );
};

export default Graph;

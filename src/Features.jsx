import React from "react";
import { VscGraph } from "react-icons/vsc";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
const Features = () => {
  return (
    <>
      <section
        id="features"
        className="px-2 bg-black w-full font-DMSans space-y-6 py-8 md:py-12 lg:py-24 mx-auto"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-center mt-[14px] lg:text-[36px] text-[20px] xl:text-[72px] font-[700] text-white">
            Our USP's
          </h2>
          <p className="text-[#9B9CA1] text-[16px] font-[400] mb-4 text-center">
            GymFluencer is chosen by top brands and agencies because of the value
            we provide.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {/* 1st  */}
          <div className="relative overflow-hidden rounded-lg border hover:bg-[#A3DC2F] bg-white p-2 pb-4">
            <div className="flex h-[180px]  gap-2  flex-col justify-between rounded-md p-6">
              <div className=" text-[34px] font-[400]">
                <VscGraph />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">Real Time Data</h3>
                <p className="text-sm text-muted-foreground">
                  You will get real time AI enabled Influencer Metrics starting
                  from View Count to Average Comments Per Video.
                </p>
              </div>
            </div>
          </div>
          {/* 2nd  */}
          <div className="relative overflow-hidden rounded-lg border bg-[#A3DC2F] pb-4 text-[#1D1C20] hover:bg-white hover:text-black p-2">
            <div className="flex h-[180px] flex-col  gap-2  justify-between rounded-md p-6">
              <div className="text-[34px] font-[400]">
                <FaMagnifyingGlass />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold"> Unlimited Search</h3>
                <p className="text-sm ">
                  We do not limit users to search influencers. Search as much as
                  you want with no limitation or Token Exhaust Issues.
                </p>
              </div>
            </div>
          </div>
          {/* 3rd  */}
          <div className="relative overflow-hidden rounded-lg border hover:bg-[#A3DC2F] pb-4 bg-white p-2">
            <div className="flex h-[180px] gap-2  flex-col justify-between rounded-md p-6">
              <div className="text-[34px] font-[400]">
                <FaCheck />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">If You don't Like it, Ignore it</h3>
                <p className="text-sm text-muted-foreground">
                  if you don't want a certain channel to be shown in your
                  searches you can simply click on ignore and they will never be
                  repeated in future searches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

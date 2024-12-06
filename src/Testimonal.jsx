import React from "react";
import { register } from "swiper/element/bundle";
import { useEffect, useRef } from "react";
register();
import { RiStarSFill } from "react-icons/ri";
import img1 from "./assets/Pic.png";
import com from "./assets/inverted comma.png";
import img3 from "./assets/Ellipse 14.png";
import img2 from "./assets/Ellipse 146.png";
import img4 from "./assets/G1.png";
import img5 from "./assets/G2.png";
import img6 from "./assets/G3.png";
const Review = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      spaceBetween: 40,
      loop: true,
      breakpoints: {
        400: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 3,
        },

        1001: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 2,
        },
        1940: {
          slidesPerView: 2,
        },
      },

      injectStyles: [
        `
                .swiper-button-next,
                .swiper-button-prev {
                    position: absolute;
                    top: 75%;
                    width: 15px;
                    height : 15px;
                    padding: 15px;
                    background-color: #A3DC2F;
                    border-radius: 100%;
                    color:  #000000;
                }
                .swiper-button-next{
                    right : 44%;
                }
                .swiper-button-prev{
                    left : 44%;
                }
                
                .swiper-pagination-progressbar{
                    background: #A21D3C33;

                }
                .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{

                    background: #A21D3C;
                }
                @media screen and (max-width: 768px) {

                    .swiper-pagination-progressbar{
                        display : none
                    }
                    .swiper-button-next,
                    .swiper-button-prev {
                        display:none
                    }
                }
                    @media screen and (max-width: 1500px) {

                    
                    .swiper-button-next,
                    .swiper-button-prev {
                        display:none
                    }
                }
            `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <div className=" md:block  md:bg-transparent w-full md:h-[593px] mx-auto  ">
      <swiper-container
        ref={swiperRef}
        pagination="false"
        init="false"
        class="h-fit md:h-[460px] "
      >
        {/* first */}
        <Swiper-slide class=" h-fit">
          <div className="flex rounded-[20px] h-fit justify-between flex-col 2xl:px-[30px] 2xl:py-[20px] xl:px-[25px] lg:px-[20px] lg:py-[15px] p-[15px] gap-3 mx-20 bg-[#161616] text-white  w-[200px] lg:w-[300px] xl:w-[400px]  2xl:w-[600px]  ">
            <h6 className="text-[14px] lg:text-[26px] font-[400]">
              "Using GymFluencer, we saw a noticeable increase in engagement and
              sales through influencer marketing. It's a game-changer for any
              business looking to harness the power of influencer marketing."
            </h6>
            <div className="flex justify-between">
              <div className="flex gap-1 items-center">
                <img
                  className="w-[60px] h-[60px] rounded-full"
                  src={img6}
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-[14px] lg:text-[26px] font-[400]">
                    Sarah Williams
                  </h3>
                  <div className=" flex gap-1 text-[#FFC250] test-[14px] ">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </div>
                </div>
              </div>
              <img
                className="  hidden lg:flex  w-[68px] h-[48px]"
                src={com}
                alt=""
              />
            </div>
          </div>
        </Swiper-slide>
        <Swiper-slide class="h-fit ">
          <div className="flex rounded-[20px] h-fit justify-between  flex-col 2xl:px-[30px] 2xl:py-[20px] xl:px-[25px] lg:px-[20px] lg:py-[15px] p-[15px] gap-3 mx-20 bg-[#161616] text-white w-[200px] lg:w-[300px] xl:w-[400px]  2xl:w-[600px] ">
            <h6 className=" text-[14px] lg:text-[26px]  font-[400]">
              "Our influencer marketing efforts have never been more efficient.
              The user-friendly platform and excellent support team make
              influencer collaborations a breeze."
            </h6>
            <div className="flex justify-between">
              <div className="flex gap-1 items-center">
                <img
                  className="w-[60px] h-[60px] rounded-full"
                  src={img2}
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-[14px] lg:text-[26px] font-[400]">
                    Michael Thompson
                  </h3>
                  <div className=" flex gap-1 text-[#FFC250] test-[14px] ">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </div>
                </div>
              </div>
              <img
                className=" hidden lg:flex    w-[68px] h-[48px]"
                src={com}
                alt=""
              />
            </div>
          </div>
        </Swiper-slide>
        <Swiper-slide class="h-fit">
          <div className="flex rounded-[20px] h-fit justify-between  flex-col 2xl:px-[30px] 2xl:py-[20px] xl:px-[25px] lg:px-[20px] lg:py-[15px] p-[15px] gap-3 mx-20 bg-[#161616] text-white  w-[200px] lg:w-[300px] xl:w-[400px]  2xl:w-[600px]  ">
            <h6 className="text-[14px] lg:text-[26px] font-[400]">
              "GymFluencer has significantly boosted our online presence. The
              influencers we connected with were top-notch and truly aligned
              with our brand values"
            </h6>
            <div className="flex justify-between">
              <div className="flex gap-1 items-center">
                <img
                  className="w-[60px] h-[60px]  rounded-full"
                  src={img4}
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-[14px] lg:text-[26px] font-[400]">
                    Emily Chen
                  </h3>
                  <div className=" flex gap-1 text-[#FFC250] test-[14px] ">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </div>
                </div>
              </div>
              <img
                className="  hidden lg:flex  w-[68px] h-[48px]"
                src={com}
                alt=""
              />
            </div>
          </div>
        </Swiper-slide>
        <Swiper-slide class="h-fit">
          <div className="flex flex-col rounded-[20px]  h-fit justify-between  2xl:px-[30px] 2xl:py-[20px] xl:px-[25px] lg:px-[20px] lg:py-[15px] p-[15px] bg-[#161616] gap-3 mx-20 text-white  w-[200px] lg:w-[300px] xl:w-[400px]  2xl:w-[600px]  ">
            <h6 className="text-[14px] lg:text-[26px] font-[400]">
              "GymFluencer helped us connect with influencers who truly resonate
              with our target audience. The results have been phenomenal, with a
              marked increase in brand loyalty and customer engagement.".
            </h6>
            <div className="flex justify-between">
              <div className="flex gap-1 items-center">
                <img
                  className="w-[60px] h-[60px] rounded-full"
                  src={img1}
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-[14px] lg:text-[26px] font-[400]">
                    David Martinez
                  </h3>
                  <div className=" flex gap-1 text-[#FFC250] test-[14px] ">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </div>
                </div>
              </div>
              <img
                className="  hidden lg:flex  w-[68px] h-[48px]"
                src={com}
                alt=""
              />
            </div>
          </div>
        </Swiper-slide>
        <Swiper-slide class="h-fit">
          <div className="flex flex-col rounded-[20px] h-fit justify-between  bg-[#161616] 2xl:px-[30px] 2xl:py-[20px] xl:px-[25px] lg:px-[20px] lg:py-[15px] p-[15px] gap-3 mx-20 text-white  w-[200px] lg:w-[300px] xl:w-[400px]  2xl:w-[600px]  ">
            <h6 className="text-[14px] lg:text-[26px] font-[400]">
              "Thanks to GymFluencer, our product launches are more successful
              than ever. The seamless integration with top influencers has
              amplified our reach and visibility across social media platforms."
            </h6>
            <div className="flex justify-between">
              <div className="flex gap-1 items-center">
                <img
                  className="w-[60px] h-[60px] rounded-full"
                  src={img5}
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-[14px] lg:text-[26px] font-[400]">
                    Jessica Lee
                  </h3>
                  <div className=" flex gap-1 text-[#FFC250] test-[14px] ">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </div>
                </div>
              </div>
              <img
                className="  hidden lg:flex  w-[68px] h-[48px]"
                src={com}
                alt=""
              />
            </div>
          </div>
        </Swiper-slide>
        <Swiper-slide class="h-fit">
          <div className="flex flex-col h-fit justify-between  rounded-[20px] bg-[#161616] 2xl:px-[30px] 2xl:py-[20px] xl:px-[25px] lg:px-[20px] lg:py-[15px] p-[15px] gap-3 mx-20 text-white  w-[200px] lg:w-[300px] xl:w-[400px]  2xl:w-[600px]  ">
            <h6 className="text-[14px] lg:text-[26px] font-[400]">
              " We saw an immediate increase in our social media presence and
              our followers doubled in a month "
            </h6>
            <div className="flex justify-between">
              <div className="flex gap-1 items-center">
                <img
                  className="w-[60px] h-[60px] rounded-full"
                  src={img3}
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-[14px] lg:text-[26px] font-[400]">
                    Alfredo Lubin
                  </h3>
                  <div className=" flex gap-1 text-[#FFC250] test-[14px] ">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </div>
                </div>
              </div>
              <img
                className="  hidden lg:flex  w-[68px] h-[48px]"
                src={com}
                alt=""
              />
            </div>
          </div>
        </Swiper-slide>
      </swiper-container>
    </div>
  );
};

export default Review;

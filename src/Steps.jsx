import React from "react";

const Steps = () => {
  return (
    <>
     <div className=" w-[95%] mx-auto">
         {/* Step 1 */}
      <div className="flex flex-col gap-2 lg:gap-6 md:flex-row items-center justify-center min-h-screen p-4">
        <div className="flex  items-center justify-center md:w-1/2 w-full">
          <img
            className="w-3/4 object-contain rounded-lg mb-4 cursor-pointer transform hover:scale-105 transition-transform duration-500 ease-out"
            src="https://gym.birlaventures.com/images/step1.webp"
            alt="Step 1"
          />
        </div>
        <div className="md:w-1/2 w-full mt-8 md:mt-0 text-center transition-transform transform hover:scale-105 md:text-left duration-500 ease-out">
          <h1 className="text-2xl font-bold text-orange-500 transform hover:scale-105 transition-transform duration-500 ease-out">
            Step 1: Click on Get Started
          </h1>
          <p className="text-xl text-gray-800 mt-4 cursor-pointer transition-transform duration-500 transform hover:scale-105 ease-out">
            Start by opening the GymFluencer. The intuitive home screen gives
            you quick access to all features.
          </p>
        </div>
      </div>
      {/* step2 */}
      <div className="flex flex-col gap-2 lg:gap-6 md:flex-row items-center justify-center min-h-screen p-4">
        <div className="md:w-1/2 w-full mt-8 md:mt-0 text-center transition-transform transform hover:scale-105 md:text-left duration-500 ease-out">
          <h1 className="text-2xl font-bold text-orange-500 transform hover:scale-105 transition-transform duration-500 ease-out">
            Step 2: Log Your Exercises
          </h1>
          <p className="text-xl text-gray-800 mt-4 cursor-pointer transition-transform duration-500 transform hover:scale-105 ease-out">
            Easily log your exercises by selecting from a wide range of
            activities. Track your progress with detailed logs.
          </p>
        </div>
        <div className="flex  items-center justify-center md:w-1/2 w-full">
          <img
            className="w-3/4 object-contain rounded-lg mb-4 cursor-pointer transform hover:scale-105 transition-transform duration-500 ease-out"
            src="https://gym.birlaventures.com/images/step2.webp"
            alt="Step 1"
          />
        </div>
      </div>
      {/* step3 */}
      <div className="flex flex-col gap-2 lg:gap-6 md:flex-row items-center justify-center min-h-screen p-4">
        <div className="flex  items-center justify-center md:w-1/2 w-full">
          <img
            className="w-3/4 object-contain rounded-lg mb-4 cursor-pointer transform hover:scale-105 transition-transform duration-500 ease-out"
            src="https://gym.birlaventures.com/images/step3.webp"
            alt="Step 1"
          />
        </div>
        <div className="md:w-1/2 w-full mt-8 md:mt-0 text-center transition-transform transform hover:scale-105 md:text-left duration-500 ease-out">
          <h1 className="text-2xl font-bold text-orange-500 transform hover:scale-105 transition-transform duration-500 ease-out">
            Step 3: Count Your Reps
          </h1>
          <p className="text-xl text-gray-800 mt-4 cursor-pointer transition-transform duration-500 transform hover:scale-105 ease-out">
            Count your reps with precision, ensuring every detail is logged.
            Stay informed on your progress.
          </p>
        </div>
      </div>
      {/* step 4 */}
      <div className="flex flex-col gap-2 lg:gap-6 md:flex-row items-center justify-center min-h-screen p-4">
        <div className="md:w-1/2 w-full mt-8 md:mt-0 text-center transition-transform transform hover:scale-105 md:text-left duration-500 ease-out">
          <h1 className="text-2xl font-bold text-orange-500 transform hover:scale-105 transition-transform duration-500 ease-out">
            Step 4: Track Your Progress
          </h1>
          <p className="text-xl text-gray-800 mt-4 cursor-pointer transition-transform duration-500 transform hover:scale-105 ease-out">
            Review your workout stats and progress over time to stay motivated
            and reach your fitness goals.
          </p>
        </div>
        <div className="flex  items-center justify-center md:w-1/2 w-full">
          <img
            className="w-3/4 object-contain rounded-lg mb-4 cursor-pointer transform hover:scale-105 transition-transform duration-500 ease-out"
            src="https://gym.birlaventures.com/images/step4.webp"
            alt="Step 1"
          />
        </div>
      </div>
      {/* step5 */}
      <div className="flex flex-col gap-2 lg:gap-6 md:flex-row items-center justify-center min-h-screen p-4">
        <div className="flex  items-center justify-center md:w-1/2 w-full">
          <img
            className="w-3/4 object-contain rounded-lg mb-4 cursor-pointer transform hover:scale-105 transition-transform duration-500 ease-out"
            src="https://gym.birlaventures.com/images/step5.webp"
            alt="Step 1"
          />
        </div>
        <div className="md:w-1/2 w-full mt-8 md:mt-0 text-center transition-transform transform hover:scale-105 md:text-left duration-500 ease-out">
          <h1 className="text-2xl font-bold text-orange-500 transform hover:scale-105 transition-transform duration-500 ease-out">
            Step 5: Review Your Progress
          </h1>
          <p className="text-xl text-gray-800 mt-4 cursor-pointer transition-transform duration-500 transform hover:scale-105 ease-out">
            Check your workout summaries and progress over time to stay
            motivated and achieve your fitness goals.
          </p>
        </div>
      </div>
     </div>
    </>
  );
};

export default Steps;

import React from "react";

const KeyFeature = () => {
  return (
    <div className="mx-auto px-4 py-8 bg-white ">
      <div className=" flex w-full items-center justify-center gap-5">
        <h1 className="text-3xl lg:w-[30%] font-bold text-orange-500 mb-6 text-center transition-transform transform hover:scale-110">
          Discover Our App's Key Features
        </h1>
        <p className="text-gray-700 mb-8 w-[60%] font-[900] text-[18px]  mx-auto transition-transform transform hover:scale-110">
          GymFluencer is your ultimate fitness companion, designed to help you
          track your workouts with ease. Our application allows you to log
          exercises, count reps, and calculate calories burned, all through a
          user-friendly interface. Whether you’re a beginner or a seasoned
          athlete, our app will keep you motivated and on track.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:mt-[50px] mt-[20px] lg:mt-[100px] md:grid-cols-3 sm:gap-[30px] gap-[20px] lg:gap-[50px]">
        <div className="text-center transition-transform transform hover:scale-110">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_s8UeYtpJ3dOox5yUAO65DQrNg1foGTxuQ&sg"
            alt="Effortless Workout Logging"
            className="mx-auto mb-4 sm:w-[400px] sm:h-[250px] "
          />
          <h2 className="text-xl font-semibold mb-2 transition-transform transform hover:scale-110">
            Effortless Workout Logging
          </h2>
          <p className="text-gray-600 transition-transform transform hover:scale-110">
            Easily log your workouts and monitor your progress over time with
            our intuitive logging feature. Stay organized and track your fitness
            journey with precision.
          </p>
        </div>
        <div className="text-center transition-transform transform hover:scale-110">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Bc6IYpr8HNechbgQ5VrhfREhsWxjrxErUxtvwDO5TU0UpA61R-HSuXuciemi2wZb6Dk&usqp=CAU"
            alt="Accurate Rep Counting"
            className="mx-auto mb-4 sm:w-[400px] sm:h-[250px] "
          />
          <h2 className="text-xl font-semibold mb-2 transition-transform transform hover:scale-110">Accurate Rep Counting</h2>
          <p className="text-gray-600 transition-transform transform hover:scale-110">
            Count your reps accurately with our app, ensuring each workout is
            tracked effectively. Perfect for maintaining consistency and
            improving your performance.
          </p>
        </div>
        <div className="text-center transition-transform transform hover:scale-110">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaB1ZB0RCPmnhKla38zd4C1jOPazRuZxp-1g&s"
            alt="Calorie Calculation Made Easy"
            className="mx-auto mb-4 sm:w-[400px] sm:h-[250px] "
          />
          <h2 className="text-xl font-semibold mb-2 transition-transform transform hover:scale-110">
            Calorie Calculation Made Easy
          </h2>
          <p className="text-gray-600 transition-transform transform hover:scale-110">
            Calculate calories burned during your workouts to help manage your
            fitness goals. Our app provides precise data to keep you informed
            and motivated.
          </p>
        </div>
        <div className="text-center transition-transform transform hover:scale-110">
          <img
            src="https://media.istockphoto.com/id/154961329/photo/exercise-schedule.jpg?s=612x612&w=0&k=20&c=4cVjbGIa82QmVA_lxA9JW0LZrCao6PaJSmvystWqINk="
            alt="Effortless Workout Logging"
            className="mx-auto mb-4 sm:w-[400px] sm:h-[250px] "
          />
          <h2 className="text-xl font-semibold mb-2 transition-transform transform hover:scale-110">
          personalized workout plan
          </h2>
          <p className="text-gray-600 transition-transform transform hover:scale-110">
          An AI-powered personalized workout plan adapts exercises to your fitness level, goals, and progress, helping you stay motivated and achieve results faster.
          </p>
        </div>
        <div className="text-center transition-transform transform hover:scale-110">
          <img
            src="https://t4.ftcdn.net/jpg/01/82/40/43/360_F_182404327_IFFLPLSstIccSD1Qy2kccZSWNIswrJ9z.jpg"
            alt="Accurate Rep Counting"
            className="mx-auto mb-4 sm:w-[400px] sm:h-[250px] "
          />
          <h2 className="text-xl font-semibold mb-2 transition-transform transform hover:scale-110">personalized Diet plan</h2>
          <p className="text-gray-600 transition-transform transform hover:scale-110">
          An AI diet plan customizes meals to your health goals, preferences, and lifestyle, offering tailored, nutritious suggestions to support optimal wellness.
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default KeyFeature;

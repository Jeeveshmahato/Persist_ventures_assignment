import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDietPlanOpen, setIsDietPlanOpen] = useState(false);
  const [isWorkoutPlansOpen, setIsWorkoutPlansOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDietPlan = () => {
    setIsDietPlanOpen(!isDietPlanOpen);
  };

  const toggleWorkoutPlans = () => {
    setIsWorkoutPlansOpen(!isWorkoutPlansOpen);
  };

  return (
    <div className="bg-white sticky top-0 z-50">
      <div className="w-[95%] 2xl:w-[90%] mx-auto py-[20px] items-center flex justify-between">
        <NavLink
          to="#"
          className="text-3xl font-extrabold text-black-500 shadow-md transition-transform duration-300 transform hover:scale-110"
        >
          GymFluencer
        </NavLink>
        <ul className="text-[18px] font-[900] hidden lg:flex items-center gap-5 text-black">
          <li className="hover:text-orange-500 hover:text-lg cursor-pointer transition-transform transform hover:scale-110">Features</li>
          <li className="relative group">
            <span className="hover:text-orange-500 hover:text-lg cursor-pointer transition-transform transform hover:scale-110">Diet Plan ▾</span>
            <ul className="absolute hidden group-hover:block bg-white shadow-md mt-2">
              <li className="p-2 hover:bg-gray-100 hover:text-orange-500 hover:text-lg cursor-pointer transition-transform transform hover:scale-110">Plan 1</li>
              <li className="p-2 hover:bg-gray-100 hover:text-orange-500 hover:text-lg cursor-pointer transition-transform transform hover:scale-110">Plan 2</li>
            </ul>
          </li>
          <li className="relative group">
            <span className="hover:text-orange-500 hover:text-lg cursor-pointer transition-transform transform hover:scale-110">Workout Plans ▾</span>
            <ul className="absolute hidden group-hover:block bg-white shadow-md mt-2">
              <li className="p-2 hover:bg-gray-100 hover:text-orange-500 hover:text-lg cursor-pointer transition-transform transform hover:scale-110">Workout Plan 1</li>
              <li className="p-2 hover:bg-gray-100 hover:text-orange-500 hover:text-lg cursor-pointer transition-transform transform hover:scale-110">Workout Plan 2</li>
            </ul>
          </li>
          <li className="hover:text-orange-500 hover:text-lg cursor-pointer transition-transform transform hover:scale-110">Blog</li>
          <li className="hover:text-orange-500 hover:text-lg cursor-pointer transition-transform transform hover:scale-110">FAQs</li>
          <li className="hover:text-orange-500 hover:text-lg cursor-pointer transition-transform transform hover:scale-110">Contact Us</li>
        </ul>
        <div className="lg:flex gap-4 hidden">
          <NavLink to="#/">
            <button className="text-[#FBFBFB] text-[16px] font-[900] lg:px-4 lg:py-2 bg-green-600 rounded-[16px]">
              Get Started
            </button>
          </NavLink>
          <NavLink to="#/login">
            <button className="text-[#FBFBFB] text-[16px] font-[900] lg:px-4 lg:py-2 bg-green-600 rounded-[16px]">
              Login
            </button>
          </NavLink>
        </div>
        <button className="lg:hidden p-2 rounded focus:outline-none" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" stroke="black" />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="flex flex-col items-center bg-white lg:hidden p-4">
          <ul className="text-[18px] font-[900] flex flex-col items-center gap-5 text-[#9B9CA1]">
            <li className="hover:text-orange-500 hover:text-lg cursor-pointer transition-transform transform hover:scale-110">Features</li>
            <li className="relative">
              <span onClick={toggleDietPlan} className="hover:text-orange-500 hover:text-lg cursor-pointer transition-transform transform hover:scale-110">Diet Plan ▾</span>
              {isDietPlanOpen && (
                <ul className="bg-white shadow-md mt-2 p-2 rounded w-full">
                  <li className="hover:bg-gray-100 hover:text-orange-500 hover:text-lg cursor-pointer transition-transform transform hover:scale-110">Plan 1</li>
                  <li className="hover:bg-gray-100 hover:text-orange-500 hover:text-lg cursor-pointer transition-transform transform hover:scale-110">Plan 2</li>
                </ul>
              )}
            </li>
            <li className="relative">
              <span onClick={toggleWorkoutPlans} className="hover:text-orange-500 hover:text-lg cursor-pointer transition-transform transform hover:scale-110">Workout Plans ▾</span>
              {isWorkoutPlansOpen && (
                <ul className="bg-white shadow-md mt-2 p-2 rounded w-full">
                  <li className="hover:bg-gray-100 hover:text-orange-500 hover:text-lg cursor-pointer transition-transform transform hover:scale-110">Workout Plan 1</li>
                  <li className="hover:bg-gray-100 hover:text-orange-500 hover:text-lg cursor-pointer transition-transform transform hover:scale-110">Workout Plan 2</li>
                </ul>
              )}
            </li>
            <li className="hover:text-orange-500 hover:text-lg cursor-pointer transition-transform transform hover:scale-110">Blog</li>
            <li className="hover:text-orange-500 hover:text-lg cursor-pointer transition-transform transform hover:scale-110">FAQs</li>
            <li className="hover:text-orange-500 hover:text-lg cursor-pointer transition-transform transform hover:scale-110">Contact Us</li>
            <div className="gap-4 mt-4 flex flex-col w-full items-center">
              <NavLink to="#/">
                <button className="text-[#FBFBFB] text-[16px] font-[900] px-4 py-2 bg-green-600 rounded-[16px] w-full">
                  Get Started
                </button>
              </NavLink>
              <NavLink to="#/login">
                <button className="text-[#FBFBFB] text-[16px] font-[900] px-4 py-2 bg-green-600 rounded-[16px] w-full">
                  Login
                </button>
              </NavLink>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;

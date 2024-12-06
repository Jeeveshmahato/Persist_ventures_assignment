import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import img8 from "./assets/CreatorLo Logo (4).png";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" w-full">
      <nav className="bg-[#0F0F0F] mx-auto py-[20px] ">
        <div className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-between w-full">
              <div className="flex-shrink-0">
                <img
                  className="w-[230px] h-[85px]  shadow-md "
                  src={img8}
                  alt=""
                />
              </div>
              <div className="-ml-2 space-x-3">
                <MobileMenuButton
                  isOpen={isOpen}
                  onClick={() => setIsOpen(!isOpen)}
                />
              </div>
            </div>
          </div>
        </div>
        <MobileMenu isOpen={isOpen} />
      </nav>
    </div>
  );
}

function MobileMenuButton({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="bg-[#0F0F0F] inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#292929] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      aria-controls="mobile-menu"
      aria-expanded={isOpen}
    >
      <span className="sr-only">Open main menu</span>
      {isOpen ? (
        <svg
          className="block h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          className="block h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
    </button>
  );
}

function MobileMenu({ isOpen }) {
  return (
    <Transition
      show={isOpen}
      enter="transition ease-out duration-100 transform"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-75 transform"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      {(ref) => (
        <div className="lg:hidden" id="mobile-menu">
          <div ref={ref} className="px-2 pt-2 pb-3 mt-5 space-y-1 sm:px-3">
            <NavItem href="#NoChannel">Why Choose Us?</NavItem>
            <NavItem href="#Testimonial">Testimonials</NavItem>
            <NavItem href="#Pricing">Pricing</NavItem>
          </div>
        </div>
      )}
    </Transition>
  );
}

function NavItem({ href, children }) {
  return (
    <a
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
    >
      {children}
    </a>
  );
}

export default Nav;

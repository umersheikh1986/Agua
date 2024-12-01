"use client";
import React, {useState} from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import './style.css';
export default function Navbar  ()  {
  const handleLinkClick = () => {
    setIsNavbarOpen(false); // Close the menu on link click
  };

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  const router = useRouter();
  const signinNav = () => {
    router.push("../auth/signin");
  };
  const handleNavigation = () => {
    router.push("../about");
  };
  const handleNavigatione = () => {
    router.push("../Docs");
  };
  const handleNav = () => {
    router.push("../")
  }
 
  return (
 <div>
  <nav className="bg-[#0F0D06] lg:h-[90px] md:h-[145px] opacity-80 border-b-lightgold border-x-black border-t-black border-2 font-san w-full z-20 top-0 start-0 border-b">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Link href="/">
            <img src="/Agua-newlogo.png" className="h-12 w-12 md:h-16 md:w-20 lg:pr-4 sm:mr-0" alt="Flowbite Logo" />
            </Link>
            <span className="self-center text-xl font-merry md:text-2xl font-semibold text-white">
              Agua
            </span>
          </div>

          {/* Buttons Section */}
          <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
          <Link
          onClick={signinNav}
      href={"/"}
      className="mr-2 rounded-md bg-gradient-to-r from-[#353535] font-roboto  via-[#CBCDCF] via-30% to-[#6C6C6C] to-70% bg-blend-multiply lg:py-3 lg:px-10 py-3 px-3 text-black-2 font-semibold hover:bg-[#fad55a] cursor-pointer whitespace-nowrap"
    >
      SignIn
    </Link>
    <Link href={'/'}>
  <ConnectWallet
        style={{
          background: "linear-gradient(to right, #353535, #cbcdcf 30%, #6c6c6c 70%)", // bg-gradient-to-r from-[#353535] via-[#CBCDCF] via-30% to-[#6C6C6C] to-70%
          backgroundBlendMode: "multiply", // bg-blend-multiply
          padding: "px-2 lg:px-10 py-2 lg:py-4",
          color: "black", // text-black
          fontWeight: "600",
          fontFamily: "Roboto",
          borderRadius: "0.25rem", // rounded-sm
          cursor: "pointer", // cursor-pointer
          whiteSpace: "nowrap", // whitespace-nowrap
          transition: "background-color 0.3s ease", // Smooth hover transition
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#fad55a"; // Hover effect: hover:bg-[#fad55a]
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = ""; // Revert hover effect
        }}
      />
  
  </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={toggleNavbar}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isNavbarOpen ? "block" : "hidden"
            } md:flex items-center justify-between w-full md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col font-roboto p-4 mt-4 font-medium border border-gray-100 text-white text-lg rounded-lg  md:flex-row md:mt-0 md:border-0 md:space-x-8 rtl:space-x-reverse">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3"
                  onClick={handleNav}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/Audit"
                  className="block py-2 px-3"
                  onClick={handleNavigation}
                >
                 About
                </Link>
              </li>
              <li>
                <Link
                  href="/whitePaper"
                  className="block py-2 px-3"
                  onClick={handleNavigatione}
                >
                 Docs
                </Link>
              </li>
              <li>
                <Link
                  href="/trade"
                  className="block py-2 px-3"
                  onClick={handleLinkClick}
                >
                  Ecosystem
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
 </div>
  );
};

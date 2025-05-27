import React from "react";
import Logo from "../assets/images/logo-1.png";
import { FiArrowUpRight } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="max-w-screen mx-auto py-5 px-4 lg:py-3 lg:px-14">
      <div className="flex justify-between items-center ">
        <div>
          <a href="#">
            <img src={Logo} alt="" className="w-[110px]" />
          </a>
        </div>
        <div className="flex items-center gap-x-5">
          <div>
            <a
              className="underline text-white flex items-center gap-x-1 text-lg font-bold"
              href="#"
            >
              L O G I N{" "}
              <span className="text-2xl">
                <FiArrowUpRight />
              </span>
            </a>
          </div>
          <div className="hidden lg:block">
            <button className="button-1">
              <span className="relative z-10">Join Now</span>
              <span className="relatve z-10 opacity-50">
                <FaPlay />
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

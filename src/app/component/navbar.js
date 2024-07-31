"use client";

import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/stonezen-logo.png";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center md:justify-between justify-center py-2">
        <Link href={"/"} className="flex items-center gap-2">
          <Image src={Logo} alt="Stonezen Logo" width={60} height={50} />
          <div className="text-blue-700 text-xl md:text-3xl font-bold ">
            STONEZEN
            <br />
            <span className="text-gray-600 md:text-xl font-semibold font-serif">
              CONSTRUCTION
            </span>
          </div>
        </Link>
        <nav className="space-x-[2px] md:space-x-1 lg:space-x-7 py-3 md:py-0 items-center">
          <Link
            href={"/"}
            className="text-[14px] md:text-lg hover:bg-blue-500 hover:rounded-full p-[6px] md:p-2"
          >
            Home
          </Link>
          <Link
            to="service"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="text-[14px] md:text-lg hover:bg-blue-500 hover:rounded-full p-[6px] md:p-2 cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="text-[14px] md:text-lg hover:bg-blue-500 hover:rounded-full p-[6px] md:p-2 cursor-pointer"
          >
            About
          </Link>

          <Link
            to="card"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="text-[14px] md:text-lg hover:bg-blue-500 hover:rounded-full p-[6px] md:p-2 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="text-[14px] md:text-lg bg-blue-500 rounded-full hover:bg-blue-600 p-[6px] md:p-2 cursor-pointer"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

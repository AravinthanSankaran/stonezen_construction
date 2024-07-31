"use client";
import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <div className="container mx-auto relative hero-slide">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex flex-col items-center justify-start h-full text-center text-white px-4">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight mt-9">
          Welcome to STONEZEN
        </h1>
        <p className="mt-4 text-lg md:text-2xl">
          Your Trusted Partner in Construction
        </p>
        <Link
          to="service"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-lg md:text-xl cursor-pointer"
        >
          Get Our Services
        </Link>
      </div>
    </div>
  );
}

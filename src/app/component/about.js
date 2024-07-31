"use client";
import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import Logo from "../../../public/images/owner.jpg";

function about() {
  return (
    <div className="container mx-auto" id="about">
      <div className="py-10">
        <div className="flex items-center">
          <div>
            <p className="font-bold py-3 text-5xl text-gray-700 border-b-4 border-blue-600">
              About
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row py-6">
          <div className="w-full lg:w-1/2">
            <div className="p-4">
              <p className="text-lg md:text-xl text-gray-700 mb-7 text-justify">
                At STONEZEN, we pride ourselves on being a leading construction
                company committed to delivering exceptional quality and service.
                Our team of experienced professionals is dedicated to ensuring
                that every project, big or small, is completed to the highest
                standards.
              </p>
              <p className="text-lg md:text-xl text-gray-700 text-justify mb-7">
                With over 7 years of experience in the industry, we have built a
                reputation for excellence, innovation, and integrity. We have
                successfully completed 12 major projects, ranging from
                residential to commercial buildings, showcasing our ability to
                meet the unique needs of each client.
              </p>
              <p className="text-lg md:text-xl text-gray-700 text-justify mb-7">
                Our mission is to create lasting relationships with our clients
                by consistently exceeding their expectations and delivering
                superior craftsmanship. We are passionate about construction and
                dedicated to making your vision a reality.
              </p>
              <div className="text-center p-9">
                <Link
                  to="card"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="bg-gradient-to-r from-orange-100 to-orange-400 p-4 rounded-full cursor-pointer"
                >
                  Our Projects
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-5">
            <div className="about-slide h-full hidden md:block relative">
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
          </div>
        </div>
        <div className="flex relative flex-col sm:flex-row">
          <div className="bg-gradient-to-r from-orange-100 to-orange-400 w-full py-2 justify-start md:justify-end">
            <div>
              <h1 className="text-center font-semibold text-4xl">FOUNDER</h1>
            </div>
            <div class="ml-3">
              <div>
                <div className="flex items-center justify-start">
                  <span class="absolute"></span>
                  <Image
                    class="h-12 w-12 lg:h-28 lg:w-28 rounded-full hidden md:block"
                    src={Logo}
                    alt=""
                  />
                  <p className="m-3">
                    <b>B.Dhanasundaran,</b> our founder, is a seasoned civil
                    engineer with over a decade of experience. He has led
                    numerous large-scale projects with a focus on quality and
                    innovation. His leadership has made our company a trusted
                    name in the industry, driving us towards excellence and
                    client satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;

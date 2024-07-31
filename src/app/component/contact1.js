import React from "react";
import { MdEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";

function contact1() {
  return (
    <div className="container mx-auto">
      <section id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6  lg:py-3">
          <div className="mb-4">
            <div className="flex items-center">
              <div>
                <p className="font-bold py-3 text-5xl text-gray-700 border-b-4 border-blue-600">
                  Contact
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex">
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                  A point of connection or communication with individuals or
                  groups, facilitating the exchange of information, ideas, and
                  collaboration to build and maintain strong, effective
                  relationships
                </p>
                <ul className="md:mb-0 grid md:grid-cols-2  items-center mx-auto justify-center lg:justify-evenly">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <MdEmail className="w-6 h-6" />
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium text-gray-700">
                        Our Address
                      </h3>
                      <p className="text-gray-500">
                        2E, Ruthira Residency , VK Road,
                      </p>
                      <p className="text-gray-500">
                        Sengaliappa Nagar,Peelamadu
                      </p>
                      <p className="text-gray-500">Coimbatore-641004</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <FaWhatsappSquare className="w-6 h-6" />
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium  text-gray-700">
                        Contact
                      </h3>
                      <p className="text-gray-500">
                        Mobile: +(91) 95979 - 12002
                      </p>
                      <p className="text-gray-500">
                        Mail: stonezencontructions@gmail.com
                      </p>
                      <p className="text-gray-500">
                        Whatsapp: +(91) 95979 - 12002
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default contact1;

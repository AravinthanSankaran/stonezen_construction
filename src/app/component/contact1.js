import React from "react";
import { MdEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";

function contact1() {
  return (
    <div className="container mx-auto">
      <section id="contact">
        <div className="mx-auto py-16 lg:py-3">
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
            <div>
              <div className="h-full">
                <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                  A point of connection or communication with individuals or
                  groups, facilitating the exchange of information, ideas, and
                  collaboration to build and maintain strong, effective
                  relationships
                </p>
                <ul className="grid md:grid-cols-2  items-center mx-auto justify-center lg:justify-evenly">
                  {/* <li className="flex">
                    <MdEmail className="w-6 h-6" />
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
                    <FaWhatsappSquare className="w-6 h-6" />
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
                  </li> */}
                  <li className="flex flex-col items-start md:items-center mb-16 md:mb-0">
                    <div className="flex mb-4">
                      <MdEmail className="w-6 h-6 flex-shrink-0" />
                      <h3 className="ml-5 text-lg font-medium text-gray-700">
                        Our Address
                      </h3>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-gray-500  text-[15px]">
                        2E, Ruthira Residency, VK Road,
                      </p>
                      <p className="text-gray-500  text-[15px]">
                        Sengaliappa Nagar, Peelamadu
                      </p>
                      <p className="text-gray-500  text-[15px]">
                        Coimbatore-641004
                      </p>
                    </div>
                  </li>
                  <li className="flex flex-col items-start md:items-center">
                    <div className="flex mb-4">
                      <FaWhatsappSquare className="w-6 h-6 flex-shrink-0" />
                      <h3 className="ml-5 text-lg font-medium text-gray-700">
                        Contact
                      </h3>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-gray-500 text-[15px]">
                        <b>Mobile</b>: +(91) 95979 - 12002
                      </p>
                      <p className="text-gray-500  text-[15px]">
                        <b>Mail</b>:stonezencontructions@gmail.com
                      </p>
                      <p className="text-gray-500  text-[15px]">
                        <b>Whatsapp</b>: +(91) 95979 - 12002
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

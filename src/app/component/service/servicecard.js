import Image from "next/image";
import React from "react";

function ServiceCard({ name, image,description }) {
  return (
    <div className="px-8 h-5">
      <div className="relative">
        <Image src={image} alt={name} className="w-full h-auto relative object-cover"  />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="space-x-2 px-3">
        <h2 className="text-base text-heading text-center font-semibold pt-3">{name}</h2>
      </div>
      <div>
        <p className="text-md text-gray-600 text-justify mt-2 ">
         {description}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;

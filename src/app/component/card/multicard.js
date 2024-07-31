// components/Card.js
import React from "react";
import Image from "next/image";

const Card = ({ image, title, description }) => {
  return (
    <div className="p-4">
      <div className="border border-gray-200 rounded-lg shadow-lg dark:border-gray-700">
        <div>
          <Image
            className="w-full h-auto object-cover"
            src={image.src}
            alt={image.alt}
            width={500}
            height={300}
          />
        </div>
        <div className="p-5">
          <div>
            <h5 className="mb-2 text-sm md:text-xl font-bold tracking-tight text-gray-900 dark:text-slate-500">
              {title}
            </h5>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;

"use client";

import React from "react";
import preconstruction from "../../../../public/images/preconstruction.jpg";
import speciality from "../../../../public/images/specialit-construction.jpg";
import renovation from "../../../../public/images/rennovation1.jpg";
import infrastructure from "../../../../public/images/infrastructure.jpg";
import ServiceCard from "./servicecard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ServicesProvider() {
  const Services = [
    {
      id: 1,
      name: "Preconstruction Planning",
      image: preconstruction,
      description:
        "Pre-construction services involve a range of preparatory activities crucial for a successful construction project. These include conducting feasibility studies to assess project viability, performing site analysis to understand conditions and potential challenges, and preparing detailed cost estimates for budgeting. Additionally, comprehensive project planning and scheduling are developed to guide the project timeline, while permit acquisition ensures compliance with legal and regulatory requirements.",
    },
    {
      id: 2,
      name: "Specialty Contracting",
      image: speciality,
      description:
        "Pre-construction services involve a range of preparatory activities crucial for a successful construction project. These include conducting feasibility studies to assess project viability, performing site analysis to understand conditions and potential challenges, and preparing detailed cost estimates for budgeting. Additionally, comprehensive project planning and scheduling are developed to guide the project timeline, while permit acquisition ensures compliance with legal and regulatory requirements.",
    },
    {
      id: 3,
      name: "Renovation and Remodeling",
      image: renovation,
      description:
        "Pre-construction services involve a range of preparatory activities crucial for a successful construction project. These include conducting feasibility studies to assess project viability, performing site analysis to understand conditions and potential challenges, and preparing detailed cost estimates for budgeting. Additionally, comprehensive project planning and scheduling are developed to guide the project timeline, while permit acquisition ensures compliance with legal and regulatory requirements.",
    },
    {
      id: 4,
      name: "Infrastructure Development",
      image: infrastructure,
      description:
        "Pre-construction services involve a range of preparatory activities crucial for a successful construction project. These include conducting feasibility studies to assess project viability, performing site analysis to understand conditions and potential challenges, and preparing detailed cost estimates for budgeting. Additionally, comprehensive project planning and scheduling are developed to guide the project timeline, while permit acquisition ensures compliance with legal and regulatory requirements.",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 4000,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto" id="service">
      <div className="py-11">
        <div className="flex items-center">
          <div>
            <p className="font-bold py-3 text-5xl text-gray-700 border-b-4 border-blue-600">
              Services
            </p>
          </div>
        </div>

        <div className="slider-container gap-2 space-x-2 py-8">
          <Slider {...settings}>
            {Services.map((Service) => (
              <div key={Service.id}>
                <ServiceCard
                  name={Service.name}
                  image={Service.image}
                  description={Service.description}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ServicesProvider;

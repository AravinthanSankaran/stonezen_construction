// pages/index.js
// import Head from 'next/head';

"use client";
import Card from "./multicard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image1 from "../../../../public/images/project1.jpg";
import Image2 from "../../../../public/images/project2.jpg";
import Image3 from "../../../../public/images/project3.jpg";
import Image4 from "../../../../public/images/project4.jpg";
import Image5 from "../../../../public/images/project5.jpg";
import Image6 from "../../../../public/images/project6.jpg";
import Image7 from "../../../../public/images/project7.jpg";

const cards = [
  {
    image: { src: Image1, alt: "Image 1" },
    title: "Ukkaddam",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    image: { src: Image2, alt: "Image 2" },
    title: "Ondipudur",
    description:
      "Here are the biggest enterprise technology acquisitions of 2022 so far, in reverse chronological order.",
  },
  {
    image: { src: Image3, alt: "Image 3" },
    title: "Meena-estate",
    description:
      "Here are the biggest enterprise technology acquisitions of 2023 so far, in reverse chronological order.",
  },
  {
    image: { src: Image4, alt: "Image 4" },
    title: "Periyanayakampalayam",
    description:
      "Here are the biggest enterprise technology acquisitions of 2023 so far, in reverse chronological order.",
  },
  {
    image: { src: Image5, alt: "Image 5" },
    title: "Lakshmi-Mills",
    description:
      "Here are the biggest enterprise technology acquisitions of 2023 so far, in reverse chronological order.",
  },
  {
    image: { src: Image6, alt: "Image 6" },
    title: "Karumathampatti",
    description:
      "Here are the biggest enterprise technology acquisitions of 2023 so far, in reverse chronological order.",
  },
  {
    image: { src: Image7, alt: "Image 7" },
    title: "Tharapuram",
    description:
      "Here are the biggest enterprise technology acquisitions of 2023 so far, in reverse chronological order.",
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

export default function Home() {
  return (
    <div className="container mx-auto" id="card">
      <div className="py-10">
        <div className="flex items-center">
          <div>
            <p className="font-bold py-3 text-5xl text-gray-700 border-b-4 border-blue-600">
              Projects
            </p>
          </div>
        </div>
        <div className="mx-auto py-1">
          <div className="slider-container gap-2 space-x-2 ">
            <Slider {...settings}>
              {cards.map((card, index) => (
                <Card
                  key={index}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

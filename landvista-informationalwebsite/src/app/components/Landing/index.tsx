"use client";
import React, { useState, useEffect } from 'react';


const LandingPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: '/images/floods-image.avif',
      title: 'Homeowners Awareness of Flood Risks',
      subText: 'Out of 300 homeowners who purchase land, 213 are not aware of the flood risk probability of the area, thus increasing the chances of property and life loss.',
      buttonText: 'Visit Portal'
    },

    {
      image: '/images/station-flood.avif',
      title: 'Flood Preparedness',
      subText: 'Learn how to prepare for potential flooding and protect your property. Access our resources on flood prevention, emergency planning, and recovery strategies.',
      buttonText: 'Visit Portal'
    }
  ];

  useEffect(() => {
    document.body.style.overflow = 'unset';

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => {
      document.body.style.overflow = 'unset';
      clearInterval(interval);
    };
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 p-4 md:p-6 lg:p-8 rounded-lg w-[95%] max-w-[750px] z-20">
              <h2 className="text-[#CA7558] text-lg md:text-xl lg:text-2xl font-bold mb-3">
                {slide.title}
              </h2>
              <div className="flex mb-3">
                <div className="w-1 bg-red-500 mr-4"></div>
                <p className="text-gray-700 text-xs md:text-sm lg:text-base">
                  {slide.subText}
                </p>
              </div>
              <button className="bg-teal-600 hover:bg-teal-700 text-white py-1 px-3 rounded-full transition duration-300">
                {slide.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingPage;

"use client";
import React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const LandvistaAbout: React.FC = () => {
  return (
    <div id='about' className={`${poppins.className} text-3xl max-w-[90%] mx-auto px-2 sm:px-3 lg:px-4`}>

      <h1 className={`text-teal-800 text-center mb-4 mt-20 text-2xl font-semibold xl:text-5xl`}>
        About LANDVISTA
      </h1>
      <section className={`mb-12 lg:block`}>
        <h2 className={`text-[#CA7558] mb-6 text-2xl xl:text-4xl font-semibold`}>
          Our Web-Portal
        </h2>
        <div className={`md:block items-center lg:block gap-8 md:gap-12 grid grid-cols-1 block sm:block xl:flex`}>
          <div className={`md:w-4/5 rounded-[2rem] md:mx-auto order-1`}>
            <Image
              src="/Images/webPortal.png"
              alt="LandVista Web-Portal"
              width={600}
              height={300}
              className="h-42 w-full  rounded-[2rem] md:h-[330px] md:w-[600px] mx-auto" 
            />
          </div>
          <div className={`md:w-full border-4 border-[#008080] p-8 md:p-12 rounded-[1rem] text-2xl md:text-4xl order-2`}>
            <p className='text-lg md:text-3xl xl:text-3xl'>
              The LandVista Flood Risk Assessment System is a web portal providing flood risk evaluations for lands in Nairobi.
              It features an intuitive interface for homeowners and developers, integrating advanced flood prediction models and
              topological data. Users receive tailored assessments based on property details, enhancing decision-making in real
              estate and urban planning.
            </p>
            <a href="#" className={`text-[#CA7558] text-2xl md:text-3xl font-semibold underline`}>
              Visit the LANDVISTA web portal
            </a>
          </div>
        </div>
      </section>
      <section className={`mb-12`}>
        <h2 className={`text-[#CA7558] mb-6 text-2xl xl:text-4xl font-semibold`}>
          Our Machine-Learning Model
        </h2>
        <div className={`md:block items-center lg:block gap-8 md:gap-12 xl:gap-12 grid grid-cols-1 block sm:block xl:flex`}>
          <div className={`md:w-full xl:w-[950px] border-4 border-[#008080] p-8 md:p-12 rounded-[1rem] text-2xl md:text-4xl order-2 md:order-1`}>
            <p className='text-lg md:text-3xl xl:text-3xl'>
              The LandVista Flood Risk Assessment System uses advanced machine learning to evaluate flood risks in Nairobi.
              By analyzing historical weather data, topography, and soil characteristics, it employs neural networks and decision
              trees to predict flooding likelihood and severity. This helps real estate professionals make informed investment and
              planning decisions for safer and more sustainable properties.
            </p>
          </div>
          <div className={`overflow-hidden rounded-[1.5rem] order-1 md:order-2 mt-6 ml- `}>
            <Image
              src="/Images/MLmodel.avif"
              alt="Machine Learning Model"
              width={600}
              height={300}
              className="h-60 w-60 object-cover md:h-[300px] md:w-[350px] mx-auto rounded-[1.5rem] " 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandvistaAbout

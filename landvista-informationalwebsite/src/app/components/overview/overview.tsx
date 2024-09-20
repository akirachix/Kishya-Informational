"use client";
import React from 'react';
import { Poppins } from 'next/font/google';



const poppins = Poppins({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const Overview = () => {
  return (
    <div className={`${poppins.className} max-w-[1440px] mx-auto my-10 px-4 sm:px-8`}>

      <h1 className="text-teal-800 text-center mb-6 text-2xl sm:text-3xl md:text-4xl font-bold">
        Overview
      </h1>
      <div className="grid grid-cols-1 block sm:block  xl:flex gap-8">
        
        <div className="md:mb-12 bg-teal-700 text-white rounded-3xl shadow-lg p-12 flex flex-col justify-between items-center mx-372px h-480px">
          <img src='/Images/CheckList.png' alt="Planning" className="w-14 h-14 object-cover mb-8" />
          <h2 className="text-lg sm:text-4xl mb-6 text-center font-semibold">Planning</h2>
          <p className="text-base sm:text-sm md:text-2xl text-center ">
            Using our predictive model to identify high-risk areas and allocate resources effectively for flood risk reduction through analyzing factors such as soil type, elevation of the area, and rainfall levels.
          </p>
        </div>
      
        <div className="md:mb-12 bg-teal-700 text-white rounded-3xl shadow-lg p-12 flex flex-col justify-between items-center mx-372px h-480px">
          <img src='/Images/AB test.png' alt="Testing" className="w-14 h-14 object-cover mb-8" />
          <h2 className="text-lg sm:text-4xl mb-6 text-center font-semibold">Testing</h2>
          <p className="text-base sm:text-sm md:text-2xl text-center">
            Assessing how well the model generalizes to new data by measuring metrics such as accuracy and precision, and analyzing the model's predictions to identify any biases or errors.
          </p>
        </div>

        <div className="md:mb-12 bg-teal-700 text-white rounded-3xl shadow-lg p-12 flex flex-col justify-between items-center mx-372px h-480px">
          <img src='/Images/Intervention.png' alt="Intervention" className="w-14 h-14 object-cover mb-8" />
          <h2 className="text-lg sm:text-4xl mb-6 text-center font-semibold">Intervention</h2>
          <p className="text-base sm:text-sm md:text-2xl text-center">
          Addressing issues identified during testing by refining the model and adjusting its parameters. Continuous validation and monitoring ensure the model remains effective over time.
          </p>
        </div>

       
      </div>
    </div>
  );
};

export default Overview;

import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white font-poppins">
      <div className="container mx-auto px-4 md:px-24 py-9 flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-2/5 xl:w-1/5 mb-6 w-5/5 md:mb-0">
          <h3 className="text-[25px] md:text-2xl font-bold mb-2">We are the Best</h3>
          <p className="text-[20px] md:text-xl">
            "LandVista turns dreams
            into reality for those who
            seek not just any land, but
            a sanctuary in a flood-
            free haven."
          </p>
        </div>
        <div className="w-full md:w-1/3 mb-6 lg:gap-20 md:ml-8 xl:ml-52 md:mb-0 md:flex md:justify-center">
          <div>
            <h3 className="text-[25px] font-bold mb-2 md:text-2xl">Links</h3>
            <ul className="space-y-1 text-[20px] md:text-xl">
              <li><a className="hover:text-gray-300">Home</a></li>
              <li><a className="hover:text-gray-300">About us</a></li>
              <li><a className="hover:text-gray-300">Product</a></li>
              <li><a className="hover:text-gray-300">Team</a></li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/3 md:flex md:justify-end md:ml-0">
          <div>
            <h3 className="text-[25px] font-bold mb-2 md:text-2xl">Contact us</h3>
            <ul className="space-y-1 text-[20px] md:text-xl">
              <li className="flex items-center">
              <FaPhoneAlt className="mr-2 h-4 w-4 ml-1"  />
                <span>0792693383</span>
              </li>
              <li className="flex items-center">
              <MdEmail className="mr-2 h-5 w-5 ml-1"  />
                <span>kishya@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-custom-orange py-2 text-center text-[20px]">
        @ Copy Right 2024 LANDVISTA.
      </div>
    </footer>
  );
};

export default Footer;
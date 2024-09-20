import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="font-poppins">
      <div id='contacts' className="bg-teal-600 text-white">
        <div className="mx-auto px-4 md:px-24 py-9 flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 xl:w-1/5 mb-6 md:mb-0">
            <h3 className="text-[25px] md:text-2xl font-bold mb-2">We are the Best</h3>
            <p className="text-[20px] md:text-xl">
              "LandVista turns<br />
              dreams into reality for<br />
              those who seek not<br />
              just any land, but a<br />
              sanctuary in a flood-<br />
              free haven."
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0 md:flex md:justify-center md:ml-8 xl:ml-52">
            <div>
              <h3 className="text-[25px] md:text-2xl font-bold mb-2">Links</h3>
              <ul className="space-y-1 text-[20px] md:text-xl">
                <li><a className="hover:text-gray-300" href="#">Home</a></li>
                <li><a className="hover:text-gray-300" href="#">About us</a></li>
                <li><a className="hover:text-gray-300" href="#">Product</a></li>
                <li><a className="hover:text-gray-300" href="#">Team</a></li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3 md:flex md:justify-end">
            <div>
              <h3 className="text-[25px] md:text-2xl font-bold mb-2">Contact us</h3>
              <ul className="space-y-1 text-[20px] md:text-xl">
                <li className="flex items-center">
                  <FaPhoneAlt className="mr-2 h-4 w-4" />
                  <span>0792693383</span>
                </li>
                <li className="flex items-center">
                  <MdEmail className="mr-2 h-5 w-5" />
                  <span>kishya@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>cd
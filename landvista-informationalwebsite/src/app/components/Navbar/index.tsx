"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow-md hover:bg-gray-100 transition duration-300 px-4">
      <div className="relative">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Image 
    src="/images/logo.png" 
    alt="logo" 
    width={180} 
    height={60} 
    className="w-full h-auto max-w-[180px] md:max-w-[180px] md:h-auto"
    layout="responsive"
  />
          </div>

          <div className="absolute top-4 right-1 md:hidden z-50">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-[#CA7558] focus:outline-none text-sm p-1">
              {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-2 text-black text-sm lg:text-xs xl:text-xs" style={{ fontFamily: '"Darker Grotesque"' }}>
            <Link href="/" className="text-black hover:text-[#CA7558] hover:underline py-1 px-1 transition duration-300">Home</Link>
            <Link href="/operation" className="text-black hover:text-[#CA7558] hover:underline py-1 px-1 transition duration-300">Operation</Link>
            <Link href="/about" className="text-black hover:text-[#CA7558] hover:underline py-1 px-1 transition duration-300">About Us</Link>
            <Link href="#team" className="text-black hover:text-[#CA7558] hover:underline py-1 px-1 transition duration-300">Team</Link>
            <Link href="/contacts" className="text-black hover:text-[#CA7558] hover:underline py-1 px-1 transition duration-300">Contacts</Link>
           
            <Link 
              href="/portal" 
              className="bg-teal-500 text-white rounded-full px-2 py-1 hover:bg-[#CA7558] transition duration-300 text-sm lg:text-xs"
            >
              Visit Portal
            </Link>
          </div>
        </div>

        {isOpen && (
          <>
            <div 
              className="fixed inset-0 bg-white opacity-60 z-30" 
              onClick={() => setIsOpen(false)}
            ></div>
            <div 
              className="fixed inset-0 bg-white opacity-70 z-40 flex flex-col justify-center text-lg text-black px-5" 
              style={{ fontFamily: '"Darker Grotesque"' }}
            >
              <div className="space-y-5">
                <Link href="/" className="block text-black hover:text-[#CA7558] hover:underline py-1 px-2 transition duration-300" onClick={() => setIsOpen(false)}>Home</Link>
                <Link href="/operation" className="block text-black hover:text-[#CA7558] hover:underline py-1 px-2 transition duration-300" onClick={() => setIsOpen(false)}>Operation</Link>
                <Link href="/about" className="block text-black hover:text-[#CA7558] hover:underline py-1 px-2 transition duration-300" onClick={() => setIsOpen(false)}>About Us</Link>
                <Link href="#team" className="block text-black hover:text-[#CA7558] hover:underline py-1 px-2 transition duration-300" onClick={() => setIsOpen(false)}>Team</Link>
                <Link href="/contacts" className="block text-black hover:text-[#CA7558] hover:underline py-1 px-2 transition duration-300" onClick={() => setIsOpen(false)}>Contacts</Link>
                <Link 
                  href="/portal" 
                  className="bg-teal-500 text-white rounded-full px-2 py-1 hover:bg-[#CA7558] transition duration-300 text-sm lg:text-xs"
                  onClick={() => setIsOpen(false)}
                >
                  Visit Portal
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

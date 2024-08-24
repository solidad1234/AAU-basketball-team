"use client";

import React, { useState } from "react";
import Link from 'next/link'; 
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { cn } from "@/lib/utils";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export function Navbar({ className }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  let menuTimeout;

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleMouseEnter = (menu) => {
    if (menuTimeout) {
      clearTimeout(menuTimeout);
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    menuTimeout = setTimeout(() => {
      setActiveMenu(null);
    }, 100); 
  };

  const handleMobileLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={cn("fixed top-0 inset-x-0 w-full z-50 bg-teal", className)}>
      <div className="flex justify-between items-center p-4">
        <Link href="/members">
          <div className="flex items-center">
            <img src="/images/logo.jpeg" alt="Logo" className="h-10 ml-4 cursor-pointer" />
            <div className="text-white font-bold ml-4 cursor-pointer">UEBL WOLVES</div>
          </div>
        </Link>
        <div className="hidden md:flex justify-center items-center flex-grow space-x-10">
          <Link href="/" className="text-white mr-10">Home</Link>
          <div className="relative group">
            <Link href="/team" className="text-white" onMouseEnter={() => handleMouseEnter('team')} onMouseLeave={handleMouseLeave}>
              Gallery
            </Link>
            {activeMenu === 'team' && (
              <div className="absolute top-full mt-2 bg-white shadow-md left-1/2 transform -translate-x-1/2 group-hover:block" onMouseEnter={() => handleMouseEnter('team')} onMouseLeave={handleMouseLeave}>
                <div className="flex flex-col p-2">
                  <Link href="/team/2018" className="p-2 hover:bg-gray-100"> 2018 </Link>
                  <Link href="/team/2022" className="p-2 hover:bg-gray-100"> 2022 </Link>
                  <Link href="/team/2023" className="p-2 hover:bg-gray-100"> 2023 </Link>
                  <Link href="/team/2024" className="p-2 hover:bg-gray-100"> 2024 </Link>
                  <Link href="/team/all-star" className="p-2 hover:bg-gray-100">All Star </Link>
                  <Link href="/team/camp" className="p-2 hover:bg-gray-100">Camp </Link>
                </div>
              </div>
            )}
          </div>
          <Link href="/shop" className="text-white">Shop</Link>
          <Link href="/donate" className="text-white">Donate</Link>
          <div className="relative group">
            <Link href="/about" className="text-white" onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>
              About/Info
            </Link>
            {activeMenu === 'about' && (
              <div className="absolute top-full mt-2 bg-white shadow-md left-1/2 transform -translate-x-1/2 group-hover:block" onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>
                
              </div>
            )}
          </div>
          <Link href="/cart" className="text-white"><ShoppingCartIcon /> Cart</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 p-4">
          <Link href="/" className="text-white" onClick={handleMobileLinkClick}>Home</Link>
          <Link href="/team" className="text-white" onClick={handleMobileLinkClick}>Gallery</Link>
          <Link href="/shop" className="text-white" onClick={handleMobileLinkClick}>Shop</Link>
          <Link href="/donate" className="text-white" onClick={handleMobileLinkClick}>Donate</Link>
          <Link href="/about" className="text-white" onClick={handleMobileLinkClick}>About/Info</Link>
          <Link href="/cart" className="text-white" onClick={handleMobileLinkClick}>Cart</Link>
        </div>
      )}
    </div>
  );
}

'use client';

import { useState } from 'react';
import { IconSearch, IconShoppingCart, IconMenu, IconX } from '@tabler/icons-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="flex items-center justify-between p-4 md:p-0">
        <div className="relative max-w-[366px]">
          <input
            id="search"
            type="text"
            placeholder="Suchen"
            className="border-0 w-full py-2 pl-5 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[#62C3C6] bg-[#EEF7F7] text-[#62C3C6]"
          />
          <label htmlFor="search" className="absolute right-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500">
            <IconSearch stroke={1.5} className="text-[#62C3C6]" />
          </label>
        </div>
        <div className="flex items-center">
          <button type="button" className="flex items-center mx-3 lg:hidden">
            <IconShoppingCart stroke={1.5} className="text-[#28E3E9]" />
            <span className="-ml-2 opacity-50 text-xs rounded-full bg-[#62C3C6] text-[#28E3E9] w-[18px] h-[18px] text-center">1</span>
          </button>
          <button onClick={toggleMenu} className="lg:hidden">
            {isOpen ? (
              <IconX stroke={1.5} className="text-[#045A5C]" />
            ) : (
              <IconMenu stroke={1.5} className="text-[#045A5C]" />
            )}
          </button>
        </div>
        <ul className="hidden lg:flex justify-between px-4 gap-4">
          <li><a href="/" className="font-bold text-[#045A5C] flex items-center"><div className='bg-[#28E3E9] w-[10px] h-[16px] rounded-tl-[16px] rounded-br-[16px] mr-1' />Rezept einlösen</a></li>
          <li><a href="/" className="text-[#045A5C] flex items-center"><div className='bg-[#62C3C6] opacity-50 w-[10px] h-[16px] rounded-tl-[16px] rounded-br-[16px] mr-1' />Live Bestand</a></li>
          <li><a href="/" className="text-[#045A5C] flex items-center"><div className='bg-[#62C3C6] opacity-50 w-[10px] h-[16px] rounded-tl-[16px] rounded-br-[16px] mr-1' />Videosprechstunde</a></li>
          <li><a href="/" className="text-[#045A5C] flex items-center"><div className='bg-[#62C3C6] opacity-50 w-[10px] h-[16px] rounded-tl-[16px] rounded-br-[16px] mr-1' />FAQs</a></li>
          <li><a href="/" className="text-[#045A5C] flex items-center"><div className='bg-[#62C3C6] opacity-50 w-[10px] h-[16px] rounded-tl-[16px] rounded-br-[16px] mr-1' />Kontakt</a></li>
        </ul>
        <div className="hidden lg:flex">
          <button type="button" className="flex items-center mr-3">
            <IconShoppingCart stroke={1.5} className="text-[#28E3E9]" />
            <span className="-ml-2 opacity-50 text-xs rounded-full bg-[#62C3C6] text-[#28E3E9] w-[18px] h-[18px] text-center">1</span>
          </button>
          <button type="button" className="bg-[#ECFEAA] text-[#045A5C] py-2 px-4 rounded-tl-[24px] rounded-br-[24px]">
            Anmelden
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`z-20 fixed p-4 ps-8 top-0 left-0 w-3/4 h-full bg-white shadow-md transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}
      >
        <div className="flex justify-end">
          <button onClick={toggleMenu}>
            <IconX stroke={1.5} className="text-[#045A5C]" />
          </button>
        </div>
        <ul className="flex flex-col items-start mt-8 gap-4">
          <li><a href="/" className="font-bold text-[#045A5C] py-2 flex items-center" onClick={toggleMenu}><div className='bg-[#28E3E9] w-[10px] h-[16px] rounded-tl-[16px] rounded-br-[16px] mr-1' />Rezept einlösen</a></li>
          <li><a href="/" className="text-[#045A5C] py-2 flex items-center" onClick={toggleMenu}><div className='bg-[#62C3C6] opacity-50 w-[10px] h-[16px] rounded-tl-[16px] rounded-br-[16px] mr-1' />Live Bestand</a></li>
          <li><a href="/" className="text-[#045A5C] py-2 flex items-center" onClick={toggleMenu}><div className='bg-[#62C3C6] opacity-50 w-[10px] h-[16px] rounded-tl-[16px] rounded-br-[16px] mr-1' />Videosprechstunde</a></li>
          <li><a href="/" className="text-[#045A5C] py-2 flex items-center" onClick={toggleMenu}><div className='bg-[#62C3C6] opacity-50 w-[10px] h-[16px] rounded-tl-[16px] rounded-br-[16px] mr-1' />FAQs</a></li>
          <li><a href="/" className="text-[#045A5C] py-2 flex items-center" onClick={toggleMenu}><div className='bg-[#62C3C6] opacity-50 w-[10px] h-[16px] rounded-tl-[16px] rounded-br-[16px] mr-1' />Kontakt</a></li>
        </ul>
        <div className="flex items-center gap-4 mt-8">
          <button type="button" className="bg-[#ECFEAA] text-[#045A5C] py-2 px-4 rounded-tl-[24px] rounded-br-[24px]">
            Anmelden
          </button>
        </div>
      </div>
    </>
  );
}

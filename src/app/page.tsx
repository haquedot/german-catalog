'use client';

import { useState } from 'react';
import { IconArrowNarrowRight, IconList, IconSearch } from "@tabler/icons-react";

export default function Home() {
  const [showList, setShowList] = useState(true);

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div className="block px-4">
      <div className="w-full hidden md:flex justify-between py-8 md:py-12 md:pt-16">
        <ul className="flex gap-2 mb-4">
          <li className="text-[#62C3C6]">Home</li>
          <IconArrowNarrowRight className="text-[#62C3C6]" />
          <li className="text-[#62C3C6]">Livebestand</li>
          <IconArrowNarrowRight className="text-[#62C3C6]" />
          <li className="font-semibold text-[#045A5C]">Cannabis Blüten</li>
        </ul>
        <div className="md:flex flex-col items-center">
          <p className="mb-2 text-[#365758]">GKV mit Kostenübernahme?</p>
          <button type="button" className="md:w-full border-2 border-[#62C3C6] py-2 px-4 rounded-tl-[24px] rounded-br-[24px]">Preisoptionen</button>
        </div>
      </div>
      <div className="w-full md:flex justify-between mb-10">
        <h1 className="mb-4 text-[#116A6C] text-4xl font-bold flex items-center"><div className='bg-[#28E3E9] w-[20px] h-[26px] rounded-tl-[20px] rounded-br-[20px] mr-5' />Blüten</h1>
        <div className="flex items-center gap-2">

          {showList && (

            <div id="list" className="flex gap-2">
              <div className="relative hidden h-full md:block max-w-[366px]">
                <input
                  id="search"
                  type="text"
                  placeholder="Suchen"
                  className="w-full py-2 pl-5 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[#62C3C6] bg-[#EEEEEE] text-[#62C3C6]"
                />
                <label htmlFor="search" className="absolute right-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500">
                  <IconSearch stroke={1.5} className="text-[#62C3C6]" />
                </label>
              </div>
              <select
                id="sortBy"
                name="sortBy"
                className="font-semibold h-full text-[#365758] block rounded-[4px] bg-[#C9EBEC] p-2 shadow-sm sm:max-w-xs text-xs sm:text-sm sm:leading-6"
              >
                <option className="font-semibold text-[#365758]" selected>Sortieren nach</option>
                <option>Name</option>
                <option>Preis</option>
              </select>

              <button type="button"
                className="w-min flex items-center justify-center font-semibold text-[#365758] block rounded-[4px] bg-[#C9EBEC] p-2 shadow-sm text-xs sm:max-w-xs sm:text-sm sm:leading-6"
              >
                Verfügbarkeit
                <label className="inline-flex items-center cursor-pointer ps-2">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="relative w-7 h-4 bg-[#A8DEE0] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-[#A8DEE0]"></div>
                  <span className="ms-3 text-[4px] font-medium text-[#62C3C6]" />
                </label>
              </button>
            </div>
          )}
          <button id="listBtn" type="button" className="hidden md:block rounded-[4px] bg-[#C9EBEC] p-2" onClick={toggleList}>
            <IconList className="text-[#045A5C]" />
          </button>
        </div>
      </div>
      <div className="md:flex gap-4">
        <div className="md:w-3/12">
          <h2 className='w-full hidden md:block bg-[#E2F1F1] text-center py-1 rounded-[4px] text-[#045A5C] font-bold'>Filter</h2>
        </div>
        <div className="md:w-9/12">
          card
        </div>
      </div>
    </div>
  );
}

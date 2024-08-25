'use client';

import { useState } from 'react'
import { Range } from 'react-range';
import { IconArrowNarrowRight, IconFilter, IconList, IconMinus, IconSearch, IconChevronDown, IconChevronUp, IconX } from "@tabler/icons-react";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, } from '@headlessui/react';


export default function Home() {
  const [showList, setShowList] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [values, setValues] = useState([5, 10]);
  const [THCcontent, setTHCcontent] = useState([11, 18]);
  const [CBDcontent, setCBDcontent] = useState([1, 5]);
  const toggleList = () => setShowList(!showList);
  const toggleModal = () => setShowModal(!showModal);

  const [selected, setSelected] = useState<string[]>([]); // Explicitly typed as an array of strings

  const handleClick = (value: string) => {
    setSelected((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  const buttonClasses = (value: string) => {
    return selected.includes(value)
      ? 'bg-[#62C3C6] text-white'
      : 'bg-[#E2F1F1] text-[#045A5C]';
  };

  return (
    <div className="block px-4">
      {/* Header */}
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

      {/* Filter Section */}
      <div className="w-full md:flex justify-between mb-10">
        <h1 className="mb-4 text-[#116A6C] text-4xl font-bold flex items-center">
          <div className='bg-[#28E3E9] w-[20px] h-[26px] rounded-tl-[20px] rounded-br-[20px] mr-5' />Blüten
        </h1>
        <div className="flex items-center gap-2">
          {showList && (
            <div id="list" className="flex gap-2">
              {/* Search Input */}
              <div className="relative hidden h-full md:block max-w-[366px]">
                <input
                  id="searchFilter"
                  type="text"
                  placeholder="Suchen"
                  className="w-full border-0 py-2 pl-5 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[#62C3C6] bg-[#EEEEEE] text-[#62C3C6]"
                />
                <label htmlFor="searchFilter" className="absolute right-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500">
                  <IconSearch stroke={1.5} className="text-[#62C3C6]" />
                </label>
              </div>

              {/* Sort Dropdown */}
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-semibold text-[#365758] rounded-[4px] bg-[#C9EBEC] p-3 hover:text-gray-900">
                    Sortieren nach
                    <IconChevronDown
                      aria-hidden="true"
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href='#'
                        className={'font-medium text-gray-900 text-gray-500 block px-4 py-2 text-sm data-[focus]:bg-gray-100'}
                      >
                        Name
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href='#'
                        className={'font-medium text-gray-900 text-gray-500 block px-4 py-2 text-sm data-[focus]:bg-gray-100'}
                      >
                        Preis
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>

              {/* Availability Toggle */}
              <button type="button"
                className="w-min flex items-center justify-center font-semibold text-[#365758] block rounded-[4px] bg-[#C9EBEC] p-2 px-3 shadow-sm text-xs sm:max-w-xs sm:text-sm sm:leading-6"
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

          {/* List Toggle Button */}
          <button id="listBtn" type="button" className="hidden md:block rounded-[4px] bg-[#C9EBEC] p-2.5" onClick={toggleList}>
            <IconList className="text-[#045A5C]" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:flex gap-4">
        {/* Filter Box */}
        <div className="md:w-3/12">
          <h2 className='w-full hidden md:block bg-[#E2F1F1] text-center py-1 rounded-[4px] text-[#045A5C] font-bold md:mb-10'>Filter</h2>
          <button type="button" className='md:hidden bg-[#E2F1F1] text-[#045A5C] p-2 rounded-md block ms-auto' onClick={toggleModal}>
            <IconFilter />
          </button>

          <div className={`${showModal ? 'block' : 'hidden'} md:block mb-5`}>
            <div className="w-full">
              <label className="block text-center font-medium text-[#365758] mb-4">Preis</label>
              <Range
                step={1}
                min={0}
                max={20}
                values={values}
                onChange={(newValues) => setValues(newValues)}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="h-[7px] bg-gray-200 rounded-full"
                    style={{ ...props.style }}
                  >
                    <div className="h-[7px] bg-[#62C3C6] rounded-full" style={{
                      position: 'absolute',
                      left: `${(values[0] / 20) * 100}%`,
                      width: `${((values[1] - values[0]) / 20) * 100}%`
                    }} />
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    className="h-4 w-4 bg-[#62C3C6] rounded-tl-[15px] rounded-br-[15px] shadow"
                    style={{ ...props.style }}
                  />
                )}
              />
              <div className="flex items-center justify-between mt-4 gap-1">
                <div className="w-full text-gray-700 bg-gray-100 rounded-full px-3 py-1">
                  {values[0]} €
                </div>
                <IconMinus className="text-[#585555]" />
                <div className="w-full text-gray-700 bg-gray-100 rounded-full px-3 py-1">
                  {values[1]} €
                </div>
              </div>
            </div>

            <hr className='border-[#E2F1F1] my-10' />

            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="group flex w-full items-center justify-between bg-white pt-3 text-gray-400 hover:text-gray-500">
                    <h3 className="font-medium text-center text-[#365758]">Hersteller</h3>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <IconChevronUp aria-hidden="true" className="h-5 w-5" />
                      ) : (
                        <IconChevronDown aria-hidden="true" className="h-5 w-5" />
                      )}
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="pt-4">
                    <div className="space-y-3">
                      <div className="w-min flex items-center">
                        <input
                          id="ADREXpharma"
                          type="checkbox"
                          className="h-4 w-4 rounded border-[#62C3C6] text-[#62C3C6] focus:ring-[#E2F1F1] focus:bg-[#E2F1F1]"
                        />
                        <label
                          htmlFor="ADREXpharma"
                          className="ml-3 min-w-0 flex-1 text-[#365758]"
                        >
                          ADREXpharma
                        </label>
                      </div>
                      <div className="w-min flex items-center">
                        <input
                          id="Aurora"
                          type="checkbox"
                          className="h-4 w-4 rounded border-[#62C3C6] text-[#62C3C6] focus:ring-[#E2F1F1] focus:bg-[#E2F1F1]"
                        />
                        <label
                          htmlFor="Aurora"
                          className="ml-3 min-w-0 flex-1 text-[#365758]"
                        >
                          Aurora
                        </label>
                      </div>
                      <div className="w-min flex items-center">
                        <input
                          id="Avaay"
                          type="checkbox"
                          className="h-4 w-4 rounded border-[#62C3C6] text-[#62C3C6] focus:ring-[#E2F1F1] focus:bg-[#E2F1F1]"
                        />
                        <label
                          htmlFor="Avaay"
                          className="ml-3 min-w-0 flex-1 text-[#365758]"
                        >
                          Avaay
                        </label>
                      </div>
                      <div className="w-min flex items-center">
                        <input
                          id="Bedrocan"
                          type="checkbox"
                          className="h-4 w-4 rounded border-[#62C3C6] text-[#62C3C6] focus:ring-[#E2F1F1] focus:bg-[#E2F1F1]"
                        />
                        <label
                          htmlFor="Bedrocan"
                          className="ml-3 min-w-0 flex-1 text-[#365758]"
                        >
                          Bedrocan
                        </label>
                      </div>
                      <div className="w-min flex items-center">
                        <input
                          id="Cannamedical"
                          type="checkbox"
                          className="h-4 w-4 rounded border-[#62C3C6] text-[#62C3C6] focus:ring-[#E2F1F1] focus:bg-[#E2F1F1]"
                        />
                        <label
                          htmlFor="Cannamedical"
                          className="ml-3 min-w-0 flex-1 text-[#365758]"
                        >
                          Cannamedical
                        </label>
                      </div>
                    </div>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>

            <button type="button" className="my-8 md:w-full border-2 text-[#045A5C] border-[#ECFEAA] py-2 px-4 rounded-tl-[24px] rounded-br-[24px]">mehr anzeigen</button>

            <hr className='border-[#E2F1F1] mb-10' />

            <div className="w-full">
              <label className="block text-center font-medium text-[#365758] mb-4">THC Gehalt</label>
              <Range
                step={1}
                min={0}
                max={20}
                values={THCcontent}
                onChange={(newTHCcontent) => setTHCcontent(newTHCcontent)}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="h-[7px] bg-gray-200 rounded-full"
                    style={{ ...props.style }}
                  >
                    <div className="h-[7px] bg-[#62C3C6] rounded-full" style={{
                      position: 'absolute',
                      left: `${(THCcontent[0] / 20) * 100}%`,
                      width: `${((THCcontent[1] - THCcontent[0]) / 20) * 100}%`
                    }} />
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    className="h-4 w-4 bg-[#62C3C6] rounded-tl-[15px] rounded-br-[15px] shadow"
                    style={{ ...props.style }}
                  />
                )}
              />
              <div className="flex items-center justify-between mt-4 gap-1">
                <div className="w-full text-gray-700 bg-gray-100 rounded-full px-3 py-1">
                  {THCcontent[0]}%
                </div>
                <IconMinus className="text-[#585555]" />
                <div className="w-full text-gray-700 bg-gray-100 rounded-full px-3 py-1">
                  {THCcontent[1]}%
                </div>
              </div>
            </div>

            <hr className='border-[#E2F1F1] mb-10' />
            <div className="w-full">
              <label className="block text-center font-medium text-[#365758] mb-4">CBD Gehalt</label>
              <Range
                step={1}
                min={0}
                max={20}
                values={CBDcontent}
                onChange={(newCBDcontent) => setCBDcontent(newCBDcontent)}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="h-[7px] bg-gray-200 rounded-full"
                    style={{ ...props.style }}
                  >
                    <div className="h-[7px] bg-[#62C3C6] rounded-full" style={{
                      position: 'absolute',
                      left: `${(CBDcontent[0] / 20) * 100}%`,
                      width: `${((CBDcontent[1] - CBDcontent[0]) / 20) * 100}%`
                    }} />
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    className="h-4 w-4 bg-[#62C3C6] rounded-tl-[15px] rounded-br-[15px] shadow"
                    style={{ ...props.style }}
                  />
                )}
              />
              <div className="flex items-center justify-between mt-4 gap-1">
                <div className="w-full text-gray-700 bg-gray-100 rounded-full px-3 py-1">
                  {CBDcontent[0]}%
                </div>
                <IconMinus className="text-[#585555]" />
                <div className="w-full text-gray-700 bg-gray-100 rounded-full px-3 py-1">
                  {CBDcontent[1]}%
                </div>
              </div>
            </div>
            <hr className='border-[#E2F1F1] my-10' />
            <div className="w-full flex flex-col items-center">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Genetik</h2>
              <div className="w-full flex gap-2">
                <button
                  className={`w-full px-4 py-1 rounded ${buttonClasses('Indica')}`}
                  onClick={() => handleClick('Indica')}
                >
                  Indica
                </button>
                <button
                  className={`w-full px-4 py-1 rounded ${buttonClasses('Sativa')}`}
                  onClick={() => handleClick('Sativa')}
                >
                  Sativa
                </button>
                <button
                  className={`w-full px-4 py-1 rounded ${buttonClasses('Hybrid')}`}
                  onClick={() => handleClick('Hybrid')}
                >
                  Hybrid
                </button>
              </div>
            </div>

            <hr className='border-[#E2F1F1] my-10' />
            <div className="w-full flex flex-col items-center">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Bestrahltung</h2>
              <div className="w-full flex gap-2">
                <button
                  className={`px-4 py-1 rounded ${buttonClasses('bestrahlt')}`}
                  onClick={() => handleClick('bestrahlt')}
                >
                  bestrahlt
                </button>
                <button
                  className={`w-full px-4 py-1 rounded ${buttonClasses('nicht')}`}
                  onClick={() => handleClick('nicht')}
                >
                  nicht bestrahlt
                </button>
              </div>
            </div>

            <hr className='border-[#E2F1F1] my-10' />

            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="group flex w-full items-center justify-between bg-white pt-3 text-gray-400 hover:text-gray-500">
                    <h3 className="font-medium text-center text-[#365758]">Terpene</h3>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <IconChevronUp aria-hidden="true" className="h-9 w-9 text-[#62C3C6]" />
                      ) : (
                        <IconChevronDown aria-hidden="true" className="h-9 w-9 text-[#62C3C6]" />
                      )}
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="pt-4">
                    <div className="space-y-3">
                      <p>Terpene</p>
                    </div>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>

            <hr className='border-[#E2F1F1] my-10' />

            <button type="button" className='w-full flex items-center justify-center'><IconX className='text-[#62C3C6] h-[16px] w-[16px] mr-2' /> alle Filter zurücksetzen</button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="md:w-9/12">
          {/* Placeholder for cards */}
          card
        </div>
      </div>
    </div>
  );
}

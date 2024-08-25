'use client';

import { useState } from "react";
import { IconArrowNarrowRight, IconFilter, IconList, IconMinus, IconSearch, IconChevronDown, IconChevronUp, IconX } from "@tabler/icons-react";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, } from '@headlessui/react';


export default function Header() {
    const [showList, setShowList] = useState(true);
    const toggleList = () => setShowList(!showList);
    
    return (
        <>
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
            <div className="w-full xl:flex justify-between mb-10">
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
                                <div className="w-max">
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
                                className="w-min flex items-center justify-center text-sm font-semibold text-[#365758] block rounded-[4px] bg-[#C9EBEC] p-2 px-3 shadow-sm text-xs sm:max-w-xs sm:text-sm sm:leading-6"
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
        </>
    );
}
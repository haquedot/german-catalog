'use client';

import { useState } from 'react'
import { Range } from 'react-range';
import { IconFilter, IconMinus, IconChevronDown, IconChevronUp, IconX } from "@tabler/icons-react";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';



export default function Filter() {

    const [showModal, setShowModal] = useState(false);
    const [values, setValues] = useState([5, 10]);
    const [THCcontent, setTHCcontent] = useState([11, 18]);
    const [CBDcontent, setCBDcontent] = useState([1, 5]);
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
        <>
            <div className="md:w-3/12 relative w-full">
                <h2 className='w-full hidden md:block bg-[#E2F1F1] text-center py-1 rounded-[4px] text-[#045A5C] font-bold md:mb-10'>Filter</h2>

                <button
                    className={`md:hidden bg-[#E2F1F1] text-[#045A5C] p-2 rounded-md block ms-auto`}
                    onClick={toggleModal}
                >
                    <IconFilter />
                </button>
                <div className={`${showModal ? 'block' : 'hidden'} absolute md:relative bg-white w-full mx-auto mt-2 p-4 py-8 md:m-0 md:p-0 border-2  border-[#045A5C] md:border-0 rounded-lg md:rounded-0 max-h-[420px] md:max-h-full overflow-y-auto md:overflow-hidden md:block mb-5`}>
                    <h2 className='w-full md:hidden bg-[#E2F1F1] text-center py-1 rounded-[4px] text-[#045A5C] font-bold mb-4'>Filter</h2>

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
                        <div className="x:flex">
                            <button
                                className={`w-min px-4 py-1 mb-3 mr-2 rounded ${buttonClasses('Indica')}`}
                                onClick={() => handleClick('Indica')}
                            >
                                Indica
                            </button>
                            <button
                                className={`w-min px-4 py-1 mb-3 mr-2 rounded ${buttonClasses('Sativa')}`}
                                onClick={() => handleClick('Sativa')}
                            >
                                Sativa
                            </button>
                            <button
                                className={`w-min px-4 py-1 mb-3 rounded ${buttonClasses('Hybrid')}`}
                                onClick={() => handleClick('Hybrid')}
                            >
                                Hybrid
                            </button>
                        </div>
                    </div>

                    <hr className='border-[#E2F1F1] my-10' />
                    <div className="w-full flex flex-col items-center">
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">Bestrahltung</h2>
                        <div className="xl:flex">
                            <button
                                className={`w-min px-4 py-1 rounded mb-3 mr-2 ${buttonClasses('bestrahlt')}`}
                                onClick={() => handleClick('bestrahlt')}
                            >
                                bestrahlt
                            </button>
                            <button
                                className={`w-max px-4 py-1 rounded mb-3 ${buttonClasses('nicht')}`}
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
        </>
    );
}

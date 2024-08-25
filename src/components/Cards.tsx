'use client';

import React from "react";

import { useState } from "react";
import Image from "next/image";
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconCircleFilled } from "@tabler/icons-react";
import cardImage from "../../public/images/cardImage.png";
import cardIcon from "../../public/images/cardIcon.svg";

interface CardData {
    id: number;
    availability: string;
    productName: string;
    thcContent: string;
    cbdContent: string;
    price: string;
    currency: string;
    weight: string;
}

const cardData: CardData[] = [
    {
        id: 1,
        availability: "nicht lieferbar",
        productName: "Cannabis Flos 18/1 PT Mango",
        thcContent: "THC 18%",
        cbdContent: "CBD 1%",
        price: "11,66",
        currency: "€",
        weight: "pro Gramm"
    },
    // Repeat similar objects with different content...
    {
        id: 2,
        availability: "lieferbar",
        productName: "Cannabis Flos 16/1 PT Pineapple",
        thcContent: "THC 16%",
        cbdContent: "CBD 2%",
        price: "12,34",
        currency: "€",
        weight: "pro Gramm"
    },
    {
        id: 3,
        availability: "nicht lieferbar",
        productName: "Cannabis Flos 20/1 PT Banana",
        thcContent: "THC 20%",
        cbdContent: "CBD 1%",
        price: "13,50",
        currency: "€",
        weight: "pro Gramm"
    },
    {
        id: 4,
        availability: "lieferbar",
        productName: "Cannabis Flos 16/1 PT Pineapple",
        thcContent: "THC 16%",
        cbdContent: "CBD 2%",
        price: "12,34",
        currency: "€",
        weight: "pro Gramm"
    },
    {
        id: 5,
        availability: "nicht lieferbar",
        productName: "Cannabis Flos 20/1 PT Banana",
        thcContent: "THC 20%",
        cbdContent: "CBD 1%",
        price: "13,50",
        currency: "€",
        weight: "pro Gramm"
    },
    {
        id: 6,
        availability: "lieferbar",
        productName: "Cannabis Flos 16/1 PT Pineapple",
        thcContent: "THC 16%",
        cbdContent: "CBD 2%",
        price: "12,34",
        currency: "€",
        weight: "pro Gramm"
    },
    {
        id: 7,
        availability: "nicht lieferbar",
        productName: "Cannabis Flos 20/1 PT Banana",
        thcContent: "THC 20%",
        cbdContent: "CBD 1%",
        price: "13,50",
        currency: "€",
        weight: "pro Gramm"
    },
    {
        id: 8,
        availability: "lieferbar",
        productName: "Cannabis Flos 16/1 PT Pineapple",
        thcContent: "THC 16%",
        cbdContent: "CBD 2%",
        price: "12,34",
        currency: "€",
        weight: "pro Gramm"
    },
    {
        id: 9,
        availability: "nicht lieferbar",
        productName: "Cannabis Flos 20/1 PT Banana",
        thcContent: "THC 20%",
        cbdContent: "CBD 1%",
        price: "13,50",
        currency: "€",
        weight: "pro Gramm"
    },
    {
        id: 10,
        availability: "lieferbar",
        productName: "Cannabis Flos 16/1 PT Pineapple",
        thcContent: "THC 16%",
        cbdContent: "CBD 2%",
        price: "12,34",
        currency: "€",
        weight: "pro Gramm"
    },
    {
        id: 11,
        availability: "nicht lieferbar",
        productName: "Cannabis Flos 20/1 PT Banana",
        thcContent: "THC 20%",
        cbdContent: "CBD 1%",
        price: "13,50",
        currency: "€",
        weight: "pro Gramm"
    },
    {
        id: 12,
        availability: "lieferbar",
        productName: "Cannabis Flos 16/1 PT Pineapple",
        thcContent: "THC 16%",
        cbdContent: "CBD 2%",
        price: "12,34",
        currency: "€",
        weight: "pro Gramm"
    },
    {
        id: 13,
        availability: "nicht lieferbar",
        productName: "Cannabis Flos 20/1 PT Banana",
        thcContent: "THC 20%",
        cbdContent: "CBD 1%",
        price: "13,50",
        currency: "€",
        weight: "pro Gramm"
    },
    {
        id: 14,
        availability: "lieferbar",
        productName: "Cannabis Flos 16/1 PT Pineapple",
        thcContent: "THC 16%",
        cbdContent: "CBD 2%",
        price: "12,34",
        currency: "€",
        weight: "pro Gramm"
    },
    // Add 13 more objects...

    {
        id: 15,
        availability: "lieferbar",
        productName: "Cannabis Flos 20/1 PT Banana",
        thcContent: "THC 20%",
        cbdContent: "CBD 1%",
        price: "13,50",
        currency: "€",
        weight: "pro Gramm"
    }
];

export default function Cards() {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 9;

    const currentCards = cardData.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);
    const totalPages = Math.ceil(cardData.length / cardsPerPage);

    const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);
    const handleNextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
    const handlePrevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

    return (
        <>
            <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-3 my-10 md:mt-0">
                {currentCards.map((card) => (
                    <div key={card.id} className="card rounded-tl-[30px] rounded-br-[30px] border-[2px] border-[#28E3E9]">
                        <div className="card-header p-5 border-b-2 border-[#28E3E9]">
                            <div className="flex justify-between">
                                <h3 className={`w-max rounded-full py-1 px-3 flex items-center text-md ${card.availability === "lieferbar" ? "bg-[#F1FAF7] text-[#0D7052]" : "bg-[#FBF3F3] text-[#A10C0C]"} mb-3`}>
                                    <IconCircleFilled className="w-[4px] h-[4px] mr-1" /> {card.availability}
                                </h3>
                                {
                                    card.availability === "lieferbar" ? (
                                        <h3 className={`w-max rounded-full py-1 px-3 flex items-center text-md ${card.availability === "lieferbar" ? "bg-[#F1FAF7] text-[#0D7052]" : "bg-[#FBF3F3] text-[#A10C0C]"} mb-3`}>
                                            Neu
                                        </h3>
                                    ) : (
                                        ""
                                    )

                                }
                            </div>
                            <div className="flex justify-center w-full h-[130px]">
                                <Image src={cardImage} alt="card image" className="text-center w-min" />
                            </div>
                        </div>
                        <div className="card-body bg-[#C8ECED] p-5 rounded-br-[30px]">
                            <button type="button" className="bg-[#B1DEE0] text-[#365758] font-bold py-1 px-3 rounded mb-3">Canify</button>
                            <div className="w-full flex gap-2 mb-4">
                                <button type="button" className="w-max bg-white text-[#365758] py-1 px-3 rounded">{card.thcContent}</button>
                                <button type="button" className="w-max bg-[#62C3C6] text-white py-1 px-3 rounded">{card.cbdContent}</button>
                                <button type="button" className="w-max">
                                    <Image src={cardIcon} alt="card icon" className="h-[24px] w-[24px]" />
                                </button>
                            </div>
                            <h5 className="mb-5 text-[#116A6C] font-bold">{card.productName}</h5>
                            <div className="flex justify-between mb-5 text-[#365758] text-sm">
                                <div className="block">
                                    <p>Kultivar</p>
                                    <p>Kultivar</p>
                                </div>
                                <div className="block">
                                    <p>Kultivar</p>
                                    <p>Kultivar</p>
                                </div>
                            </div>
                            <div className="w-full flex items-center justify-between">
                                <div className="flex flex-col justify-center">
                                    <h2 className="text-[#116A6C] text-xl font-bold items-start">
                                        <span className="text-[#62C3C6] mr-1">{card.currency}</span> {card.price}
                                    </h2>
                                    <p className="text-[#365758] text-[12px]">{card.weight}</p>
                                </div>
                                <button type="button" className="text-[#045A5C] bg-[#ECFEAA] py-1 px-4 rounded-tl-[24px] rounded-br-[24px] h-[33px] text-[14px]">
                                    in den Warenkorb
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-end mt-4 mb-16">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className={`me-3 ${currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-[#62C3C6]"}`}
                >
                    <IconArrowNarrowLeft />
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`mx-2 ${currentPage === index + 1 ? "text-[#62C3C6]" : "text-gray-400"}`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`ms-3 ${currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-[#62C3C6]"}`}
                >
                    <IconArrowNarrowRight />
                </button>
            </div>
        </>
    );
}

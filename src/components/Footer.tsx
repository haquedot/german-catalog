export default function Footer() {
    return (
        <>
            <footer className="bg-[#1A8D91] rounded-t-[30px]">
                <div className="block md:w-10/12 mx-auto md:py-[50px]">
                    <div className="flex flex-col md:flex-row justify-between mx-4 py-6">
                        <div className="flex flex-col justify-end my-6 md:my-0 text-xs text-gray-300 gap-3">
                            <a href="#" className="hover:text-gray-100">AGB</a>
                            <a href="#" className="hover:text-gray-100">Impressum</a>
                            <a href="#" className="hover:text-gray-100">Datenschutz</a>
                        </div>
                        <div className="w-max flex flex-col text-white">
                            <div className="xl:flex w-full">
                                <a href="#" className="w-full flex items-center space-x-1">
                                    <div className='bg-[#28E3E9] w-[10px] h-[16px] rounded-tl-[16px] rounded-br-[16px] mr-1' />
                                    <span>Rezept einlösen</span>
                                </a>
                                <a href="#" className="w-full flex items-center space-x-1">
                                    <div className='bg-[#28E3E9] w-[10px] h-[16px] rounded-tl-[16px] rounded-br-[16px] mr-1' />
                                    <span>Live Bestand</span>
                                </a>
                            </div>
                            <div className="w-full xl:flex gap-3">
                                <a href="#" className="flex items-center space-x-1">
                                    <div className='bg-[#28E3E9] w-[10px] h-[16px] rounded-tl-[16px] rounded-br-[16px] mr-1' />
                                    <span>Videosprechstunde</span>
                                </a>
                                <a href="#" className="flex items-center space-x-1">
                                    <div className='bg-[#28E3E9] w-[10px] h-[16px] rounded-tl-[16px] rounded-br-[16px] mr-1' />
                                    <span>FAQs</span>
                                </a>
                                <a href="#" className="flex items-center space-x-1">
                                    <div className='bg-[#28E3E9] w-[10px] h-[16px] rounded-tl-[16px] rounded-br-[16px] mr-1' />
                                    <span>Kontakt</span>
                                </a>
                            </div>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <p className="text-gray-300">Standort</p>
                            <p className="text-white font-semibold">Bergstraße 49 - 57<br />69469 Weinheim<br />(3 Glocken Quartier)</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <p className="text-gray-300">Telefon</p>
                            <p className="text-white font-semibold">0223 545 5250</p>
                        </div>
                        <div className="mt-4 md:mt-0 font-light">
                            <p className="text-gray-300">Öffnungszeiten</p>
                            <span className="text-gray-300">Mo-Fr:</span>
                            <p className="text-white font-semibold"> 09:00 - 18:00 Uhr</p>
                            <span className="text-gray-300">Sa:</span>
                            <p className="text-white font-semibold"> 09:00 - 14:00 Uhr</p>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
}

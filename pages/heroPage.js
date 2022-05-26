import React from 'react';
import Image from 'next/image';
import HeroImage from '../public/images/ekipa-sprzatajaca1.jpg';

function heroPage() {
    return (
        <div className="min-w-7xl mx-0 md:mx-20">
            <div className="flex md:flex-row flex-col justify-between items-center my-10">
                <div className="flex-col px-10">
                    <h1 className="text-6xl text-blue-500 font-bold">
                        Mocna ekipa {" "}
                        <span className="text-blue-900">sprzątająca.</span> Zostaliśmy stworzeni do {" "}
                        <span className="text-blue-900 border-b border-blue-200">
                            zadań specjalnych
                        </span>
                    </h1>
                    <p className="text-2xl text-gray-500 mt-5 mb-10">
                       ...tak czysto to tu jeszcze nie było - to słowa, które najczęściej wypowiadają nasi klienci. 
                    </p>
                    <button className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:shadow-lg px-8 h-14 rounded-md hover:text-white ">
                        Zamów usługę
                    </button>
                </div>
                <div className="px-10">
                    <Image src={HeroImage} width={1300} height={1300} objectFit="contain" />
                </div>
            </div>
        </div>

    );
}

export default heroPage;
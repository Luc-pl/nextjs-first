import React from 'react';

function Clients() {
    return (
        <div className="min-w-7xl mx-0 md:mx-20 flex-col justify-center items-center my-40">
            <p className="text-blue-500 uppercase text-center">Dla nieprzekonanych</p>
            <h2 className="text-5xl   text-center">
                Opinie <span className="font-bold"> naszych klientów </span>
            </h2>        
            <div className="relative items-center w-full px-5 py-14 mx-auto md:px-12 lg:px-24 max-w-10xl">
                <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
                    <div className="flex flex-col w-full max-w-lg text-left lg:mx-auto">
                        <p className="mx-auto text-base leading-relaxed text-gray-500">Korzystałem już z kilku firm sprzątających ale żadna nie posprzątała mieszkania w tak szybkim tempie oraz tak dokładnie dodatkowo firma używa środków przyjaznych środowisku pozostawiaijących w mieszkaniu utrzymujący się długo przyjemny zapach. Firma godna polecenia</p>
                        <h2 className="mt-4 text-xs font-semibold tracking-widest text-blue-500 uppercase">
                        Pani Anna
                            <span href="#" className="font-semibold text-gray-200 lg:mb-0"> Katowice </span>
                        </h2>
                        <img alt="testimonial" className="inline-block object-cover object-center w-20 h-20 mt-8 rounded-full" src="https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171"/>
                    </div>
                    <div className="flex flex-col w-full max-w-lg text-left lg:mx-auto">
                        <p className="mx-auto text-base leading-relaxed text-gray-500">Polecam! Bardzo miłe Panie uwinęły się z umyciem okien w trzech pomieszczeniach w rekordowym czasie. Całkowity profesjonalizm, okna lśnią! Nie mam żadnych zastrzeżeń i będę polecać firmę rodzinie i znajomym czystym sumieniem i oknami ;)</p>
                        <h2 className="mt-4 text-xs font-semibold tracking-widest text-blue-500 uppercase">
                        Pani Monika
                            <span href="#" className="font-semibold text-gray-200 lg:mb-0"> Rybnik </span>
                        </h2>
                        <img alt="testimonial" className="inline-block object-cover object-center w-20 h-20 mt-8 rounded-full" src="https://images.unsplash.com/photo-1592621385612-4d7129426394?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387"/>
                    </div>
                    <div className="flex flex-col w-full max-w-lg text-left lg:mx-auto">
                        <p className="mx-auto text-base leading-relaxed text-gray-500">Kontakt z firmą to czysta przyjemność bez problemu umówiłem się na sprzątanie, które wykonane zostało profesjonalnie i szybko. Polecam wszystkim tę firmę sprzątającą na pewno nikt się nie zawiedzie.</p>
                        <h2 className="mt-4 text-xs font-semibold tracking-widest text-blue-500 uppercase">
                        Pan Dawid
                        <span href="#" className="font-semibold text-gray-200 lg:mb-0"> Sosnowiec </span>
                        </h2>
                        <img alt="testimonial" className="inline-block object-cover object-center w-20 h-20 mt-8 rounded-full" src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clients;
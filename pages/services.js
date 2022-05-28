import React from "react";
import {
  MdCleaningServices,
  MdOutlineDryCleaning,
  MdOutlineCleanHands
} from "react-icons/md";
import { RiWindowsLine } from "react-icons/ri";
import { GiVacuumCleaner } from "react-icons/gi";
import { GiWashingMachine } from "react-icons/gi";

function services() {
  return (
    <div className="flex-col justify-center items-center my-20">
      <p className="text-blue-500 uppercase text-center">co zyskujesz?</p>
      <h2 className="text-5xl  text-center">
        Ty odpoczywasz<span className="font-bold"> , a my sprzątamy.</span>
      </h2>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 md:mx-0 mx-10 md:grid-cols-3 gap-5 my-20">
          <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-blue-500 hover:shadow-lg  border-blue-100 rounded-md p-8 hover:border-blue-500">
            <MdCleaningServices className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-white my-2">
              Sprzątanie firm
            </h1>
          </div>
          <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-blue-500 hover:shadow-lg  border-blue-100 rounded-md p-8 hover:border-blue-500">
            <MdOutlineDryCleaning className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-white my-2">
              Sprzątanie domów
            </h1>
          </div>
          <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-blue-500 hover:shadow-lg  border-blue-100 rounded-md p-8 hover:border-blue-500">
            <GiVacuumCleaner className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-white my-2">
              Prace porządkowe
            </h1>
          </div>
          <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-blue-500 hover:shadow-lg  border-blue-100 rounded-md p-8 hover:border-blue-500">
            <RiWindowsLine className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-white my-2">
              Mycie okien
            </h1>
          </div>
          <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-blue-500 hover:shadow-lg  border-blue-100 rounded-md p-8 hover:border-blue-500">
            <GiWashingMachine className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-white my-2">
              Pranie wykładzin
            </h1>
          </div>
          <div className="group flex-col cursor-pointer justify-center items-center border hover:bg-blue-500 hover:shadow-lg  border-blue-100 rounded-md p-8 hover:border-blue-500">
            <MdOutlineCleanHands className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-white my-2">
              Dezynfekcja
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default services;
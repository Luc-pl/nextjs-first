import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">
              Sprząta<span className="text-indigo-600">MY</span>
            </p>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="text-2xl cursor-pointer text-gray-500 hover:text-yellow-600" />
              <FaTwitter className="text-2xl cursor-pointer text-gray-500 hover:text-blue-600" />
              <FaLinkedin className="text-2xl cursor-pointer text-gray-500 hover:text-blue-600" />
              <FaYoutube className="text-2xl cursor-pointer text-gray-500 hover:text-red-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Usługi</p>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Sprzątanie firm
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Sprzątanie domów
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Prace porządkowe
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Mycie okien
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Firma</p>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Zespół
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              O nas
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Blog
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Kontakt z nami</p>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              E-mail
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              FAQ's
            </li>

            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Telefon
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Adres
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className="text-sm text-gray-800 font-semibold">
          © 2022 Build with ❤ by{" "}
          <span className="hover:text-blue-600 font-semibold cursor-pointer">
            Blinker Studio{" "}
          </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;
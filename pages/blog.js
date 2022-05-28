import React from "react";
import { GiNewShoot, GiTrophyCup } from "react-icons/gi";
import { BiMedal } from "react-icons/bi";

function blog() {
  return (
    <div className="flex-col justify-center items-center my-20">
      <p className="text-blue-500 uppercase text-center">Aktualności</p>
      <h2 className="text-5xl text-center">
        Zobacz, co u nas <span className="font-bold"> słychać</span>
      </h2>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-20 mx-10">
          <div className="group flex-col cursor-pointer justify-center items-center border hover:border-blue-500  border-blue-100 rounded-md p-8 ">
            <GiTrophyCup className="text-4xl text-gray-600 0" />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-blue-500 my-2">
              Dostaliśmy nagrodę Najlepsza firma sprzątająca województwa Śląskiego.
            </h1>
            <a
              href="#"
              className="text-xl text-blue-500 group-hover:text-blue-800 "
            >
              Czytaj więcej
            </a>
          </div>
          <div className="group flex-col cursor-pointer justify-center items-center border   border-blue-100 rounded-md p-8 hover:border-blue-500">
            <GiNewShoot className="text-4xl text-gray-600 " />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-blue-500 my-2">
              Dbamy o środowisko! Do sprzątania używamy tylko ekologicznych środków.
            </h1>
            <a
              href="#"
              className="text-xl text-blue-500 group-hover:text-blue-800 "
            >
              Czytaj więcej
            </a>
          </div>
          <div className="group flex-col cursor-pointer justify-center items-center border  border-blue-100 rounded-md p-8 hover:border-blue-500">
            <BiMedal className="text-4xl text-gray-600 " />
            <h1 className="text-xl text-gray-800 font-semibold group-hover:text-blue-500 my-2">
              Słyniemy ze staranności. Dowiedz się, dlaczego jakość usług jest tak ważna.
            </h1>
            <a
              href="#"
              className="text-xl text-blue-500 group-hover:text-blue-800 "
            >
              Czytaj więcej
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default blog;
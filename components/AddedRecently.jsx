import React from "react";
import Image from "next/image";
import styles from "../styles/style";
import Swiper from "./Swiper";

import { temperos } from "../constants";

const AddedRecently = () => {
  return (
    <section className={`${styles.section} flex flex-col`}>
      <div className="w-full flex sm:items-end sm:flex-row flex-col justify-between">
        <div className="flex">
          <h1
            className={`font-poppins font-semibold sm:text-5xl text-3xl sm:leading-[60px]`}
          >
            Adicionados recentemente
          </h1>
        </div>
        <div className="flex">
          <p className={`${styles.paragraph} max-w-md h-[100%] sm:text-lg mt-2`}>
            Temperos secos, molhados e combinações para saladas.
          </p>
        </div>
      </div>
      <div className="hidden sm:flex">
        <Swiper />
      </div>
      <div className="flex sm:hidden grid grid-cols-2 gap-4 mt-4">
        {temperos.map((nav, index) => (
          <div
            key={index}
            className="w-full flex flex-col py-5 px-4 rounded-xl bg-white drop-shadow-xl"
          >
            <div className="flex bg-[#ECECEC] rounded-xl">
              <Image height={200} width={200} src={nav.img} alt={nav.title} />
            </div>
            <div className="w-full flex flex-col px-1">
              <div className="mt-4">
                <h1 className="font-poppins font-bold text-xs min-h-[56px]">
                  {nav.title}
                </h1>
              </div>
              <div className="flex">
                <p className="font-inter font-semibold text-grey text-[11px]">
                  Peso: {nav.peso}
                </p>
              </div>
              <div className="flex justify-end align-bottom mt-2">
                <button className="py-1 px-2 rounded-md border-solid border-2 border-orange text-orange font-regular font-poppins text-[10px]">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AddedRecently;

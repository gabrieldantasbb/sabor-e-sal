import React from "react";
import Image from "next/image";
import { temperos } from "../constants";
import styles from "../styles/style";

const TemperosSeco = () => {
  return (
    <section className={`${styles.section} pt-8 flex flex-col`}>
      <div className="w-full flex sm:flex-row sm:items-end flex-col justify-between">
        <div className="flex">
          <h1
            className={`font-poppins font-semibold sm:text-5xl text-3xl sm:leading-[60px] max-w-[500px]`}
          >
            Os artesanais a base de alho e sal
          </h1>
        </div>
        <div className="flex">
          <p
            className={`${styles.paragraph} max-w-md h-[100%] sm:text-lg mt-2`}
          >
            A facilidade do tempero caseiro artesanal a base de alho como
            pioneiro da culinária mundial.
          </p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 mt-6">
        {temperos.map((nav, index) => (
          <div
            key={index}
            className="w-[100%] rounded-lg bg-[#EAEAEA] flex flex-col sm:flex-row p-4 sm:p-7 items-center"
          >
            <div className="">
              <Image src={nav.img} height={200} width={200} />
            </div>
            <div className="p-2 sm:ml-9 justify-center">
              <div>
                <h1 className="font-poppins font-semibold text-lg ">
                  {nav.title}
                </h1>
              </div>
              <div className="mt-2">
                <p className="font-poppins text-[14px] max-w-[450px]">
                  {nav.description}
                </p>
              </div>
              <div className="flex items-end justify-between">
                <div className="">
                  <button className="py-1 px-3 rounded-md bg-orange text-white font-regular font-poppins text-[12px] ">
                    View Details
                  </button>
                </div>
                <div className="mt-4">
                  <h2 className="font-poppins text-orange text-4xl font-bold">
                    R$ 13,00
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TemperosSeco;

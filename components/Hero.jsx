import Image from "next/image";
import React from "react";
import { spices_banner, bubble_banner } from "../assets"

const Hero = () => {
  return (
    <section className="flex flex-col-reverse sm:flex-row max-w-[1028px] mx-auto py-2 mt-6">
      <div className="flex-col z-0 mb-9">
        <div>
          <h1 className="font-poppins font-bold text-5xl sm:text-7xl sm:leading-[108px] max-w-xl sm:mb-0 mb-3">Sua vida com mais sabor</h1>
        </div>
        <div className="mb-4">
          <p className="font-poppins font-regular text-sm font-gray sm:leading-6 max-w-sm">
            Temperos artesanais à base de alho e sal, com uma grande variedade
            para cada tipo de alimento. Sem conservantes.
          </p>
        </div>
        <div className="flex justify-center sm:justify-start">
          <button className="bg-orange rounded-xl px-7 py-2 text-white font-poppins font-medium drop-shadow-2xl">Nossos Produtos</button>
        </div>
      </div>
      <div className="flex relative justify-center">
        <div className=" w-[100%]"><Image src={bubble_banner} alt="bubble"/></div>
        <div className=" absolute sm:top-0 top-[-50px]"><Image src={spices_banner} alt="spices" /></div>
      </div>
    </section>
  );
};

export default Hero;

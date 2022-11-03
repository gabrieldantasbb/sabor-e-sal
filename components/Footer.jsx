import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-orange text-white flex sm:flex-row flex-col sm:px-[75px] py-[60px] items-center justify-center sm:gap-[300px] mt-11">
      <div className="grow-1 text-white ">
      <Link href="/">
      <div className="flex flex-col-reverse sm:mb-[46px]  cursor-pointer">
        <div className="flex items-end">
          <h1 className="font-poppins font-bold sm:text-2xl text-white ">Sabor e Sal</h1>
          <h1 className=" font-bold sm:text-2lx text-white items-end">.</h1>
        </div>
        <div>
          <h2 className="font-poppins font-bold sm:text-xs text-white ">
            Temperos Artesanais
          </h2>
        </div>
      </div>
      </Link>
        <div className="mt-5">
          <button className="py-2 px-6 border-solid border-2 border-white font-poppins semi-bold sm:text-[16px] text-white">FALE CONOSCO</button>
        </div>
      </div>
      <div className="font-poppins font-semibold text-[14px] leading-8 grid gap-6 mt-5 text-white ">
        <div>
          <a href="">FALE CONOSCO</a>
        </div>
        <div>
          <a href="">FALE CONOSCO</a>
        </div>
        <div>
          <a href="">FALE CONOSCO</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;

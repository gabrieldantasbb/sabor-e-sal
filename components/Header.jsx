import Image from "next/image";
import React, { useState } from "react";
import { menu, close} from "../assets";
import { navLinks } from "../constants";

const Header = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <section className="flex w-full justify-between max-w-[1028px] mr-auto ml-auto py-2 relative mt-6">
      <div className="flex flex-col-reverse">
        <div className="flex">
          <h1 className="font-poppins font-bold text-2xl">Sabor e Sal</h1>
          <h1 className="text-orange font-bold text-2xl">.</h1>
        </div>
        <div>
          <h2 className="font-poppins font-bold sm:text-xs">
            Temperos Artesanais
          </h2>
        </div>
      </div>
      <div className="sm:hidden">
        <Image
          src={toggle ? menu : close}
          onClick={() => setToggle(!toggle)}
          height={40}
          width={40}
          className="cursor-pointer"
        />
      </div>
      <div className="hidden sm:flex">
        <ul className={`flex-co sm:flex`}>
          {
          navLinks.map((nav, index) => (
            <li 
            key={nav.id}
            className={`${index === navLinks.length - 1 ? "mr-0" : "mr-10" }`}
            >
              <a
              href=""
              className="font-poppins font-medium text-sm"
              >
                {nav.title}
              </a>
            </li>
          ))
          }
        </ul>
      </div>
      <div className={`sm:hidden ${!toggle ? "flex" : "hidden"} absolute z-30 right-0 top-16 bg-orange rounded-2xl`}>
      <ul className="flex-co font-poppins font-medium text-white p-5">
      {
          navLinks.map((nav, index) => (
            <li 
            key={nav.id}
            className={`${index === navLinks.length - 1 ? "mb-0" : "mb-3" }`}
            >
              <a
              href=""
              className="font-poppins font-medium text-sm"
              >
                {nav.title}
              </a>
            </li>
          ))
          }
        </ul>
      </div>
    </section>
  );
};

export default Header;

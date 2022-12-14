import Image from "next/image";
import React, { useState } from "react";
import { menu, close } from "../assets";
import { navLinks } from "../constants";
import Link from "next/link";
import { BsCart4 } from "react-icons/bs";

const Header = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <section className="flex max-w-[1028px] mx-auto py-2 pt-6 sm:px-0 px-4 relative">
      <div className="flex justify-between w-full">
      <Link href="/">
        <div className="flex flex-col-reverse cursor-pointer">
          <div className="flex">
            <h1 className="font-poppins font-bold text-xl">Sabor e Sal</h1>
            <h1 className="text-orange font-bold text-xl">.</h1>
          </div>
          <div>
            <h2 className="font-poppins font-bold sm:text-xs">
              Temperos Artesanais
            </h2>
          </div>
        </div>
      </Link>
      <div className="sm:hidden flex justify-end">
        <Image
          src={toggle ? menu : close}
          onClick={() => setToggle(!toggle)}
          height={30}
          width={30}
          alt="toggle"
          className="cursor-pointer"
        />
      </div>
      <div className="hidden sm:flex">
        <ul className={`flex-co sm:flex`}>
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            >
              <Link href={`/${nav.link}`}>
                <p className="font-poppins font-medium text-sm text-[#404040] cursor-pointer">
                  {nav.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`sm:hidden ${
          !toggle ? "flex" : "hidden"
        } absolute z-30 right-4 top-20 bg-orange rounded-2xl`}
      >
        <ul className="flex-co font-poppins font-medium  p-5">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`${index === navLinks.length - 1 ? "mb-0" : "mb-3"}`}
            >
              <Link href={`/${nav.link}`}>
                <p className="font-poppins font-medium text-sm text-white cursor-pointer">
                  {nav.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      </div>
      {/*<div className="bg-orange rounded-6 text-white p-3">
          <BsCart4 className="h-4 w-4 sm:h-6 sm:w-6" />
      </div>*/}
    </section>
  );
};

export default Header;

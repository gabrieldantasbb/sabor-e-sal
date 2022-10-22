import Image from "next/image";
import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io";
import styles from "../styles/style";
import { banner, menu, close } from "../assets";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="flex w-full justify-between max-w-[1028px] mr-auto ml-auto py-2 my-12 px-8">
      <div className="flex flex-col-reverse">
        <div className="flex">
          <h1 className="font-poppins font-bold text-2xl">Sabor e Sal</h1>
          <h1 className="text-orange font-bold text-2xl">.</h1>
        </div>
        <div>
          <h2 className="font-poppins font-bold text-xs">
            Temperos Artesanais
          </h2>
        </div>
      </div>
      <div className="hidden sm:flex">
        <ul className="flex gap-9 font-poppins font-medium text-sm text-gray">
          <li className="text-orange">Home</li>
          <li>Temperos Artesanais</li>
          <li>Temperos Secos</li>
          <li>Receitas</li>
          <li>Sobre Nós</li>
        </ul>
      </div>
      <div>
        <Image
          src={toggle ? menu : close}
          onClick={() => setToggle(!toggle)}
          className="cursor-pointer"
        />
      </div>
    </section>
  );
};

export default Header;

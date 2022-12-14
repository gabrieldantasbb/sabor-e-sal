import React from "react";
import Image from "next/image";
import {saboresal} from "../assets";
import styles from "../styles/style";

const sobrenos = () => {
  return (
    <section className={`${styles.section} flex-col px-4 sm:px-0 mt-6 :mt-10`}>
      <div>
        <div>
          <h1 className="font-poppins text-3xl font-bold text-center">Quem somos nós?</h1>
        </div>
        <div className="flex sm:flex-row flex-col gap-3 sm:gap-6 mt-5">
        <div>
          <Image src={saboresal} alt="Uma pessoa na cozinha segurando um pote de tempero" />
        </div>
        <div>
          <p className="font-poppins text-xs ">
            Somos uma microempresa especializada em temperos artesanais a base
            de alho e sal. Todos feitos artesanalmente e mantidos em conservação
            sem produtos industrialiados, prejudiciais à saúde...
          </p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default sobrenos;

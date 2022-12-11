import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/style";
import Link from "next/link";

import { sanity, imageUrlBuilder } from "../lib/sanity";

const query = `
*[ _type == 'tempSeco'] { title, description, image, preco }
`;

const TemperosSecos = () => {
  const [temp, setTemp] = useState(null);

  useEffect(() => {
    sanity
      .fetch(query)
      .then((data) => setTemp(data))
      .catch(console.error);
  }, []);

  if (!temp) {
    return <h1>Loading…</h1>;
  }

  return (
    <section className={`${styles.section} pt-8 flex flex-col`}>
      <div className="w-full flex sm:flex-row sm:items-end flex-col justify-between">
        <Link href="/temperos-secos">
          <div className="flex">
            <h1
              className={`font-poppins font-semibold sm:text-5xl text-3xl sm:leading-[60px] max-w-[500px] cursor-pointer`}
            >
              Temperos secos para todo tipo de preparo
            </h1>
          </div>
        </Link>
        <div className="flex">
          <p
            className={`${styles.paragraph} max-w-md h-[100%] sm:text-lg mt-2`}
          >
            Os temperos secos são ótimas opções para temperar uma salada, dar
            aquele toque especial de sabor e sal em qualquer preparo de carnes.
            Além de um especial sal temperado para churrasco.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:flex flex-wrap gap-4 justify-center mt-5">
        {temp.map(({ title, description, image, preco }) => (
          <div
            key={title}
            className="max-w-full sm:w-[260px] bg-[#EAEAEA] rounded-lg flex flex-col items-center p-2"
          >
            <div className="flex h-[100px] w-[100px] sm:h-[200px] sm:w-[200px] relative">
              <Image
                layout="fill"
                src={imageUrlBuilder.width(200).height(200).image(image).url()}
                alt={title}
              />
            </div>
            <div className="flex flex-col items-center">
              <div>
                <h1 className="font-poppins font-semibold text-[12px] sm:text-base text-center w-[135px] sm:w-[200px]">
                  {title}
                </h1>
              </div>
              <div className="flex items-end justify-between">
                <div className="">
                  <h2 className="font-poppins text-orange text-sm sm:text-xl font-regular">
                    R${" "}
                    {Number(preco).toLocaleString("es-ES", {
                      minimumFractionDigits: 2,
                    })}
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

export default TemperosSecos;

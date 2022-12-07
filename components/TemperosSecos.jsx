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
  }, [])

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
      <div className="grid gap-4 sm:grid-cols-2 mt-6">
        {temp.map(({ title, description, image, preco }) => (
          <div
            key={title}
            className="w-[100%] rounded-lg bg-[#EAEAEA] flex flex-col sm:flex-row p-4 sm:p-7 items-center"
          >
            <div className="">
              <Image
                src={imageUrlBuilder
                  .width(200)
                  .height(200)
                  .image(image)
                  .url()}
                  width={200}
                  height={200}
                alt={title}
              />
            </div>
            <div className="p-2 sm:ml-9 justify-center">
              <div>
                <h1 className="font-poppins font-semibold text-lg ">
                  {title}
                </h1>
              </div>
              <div className="mt-2">
                <p className="font-poppins text-[14px] max-w-[450px]">
                  {description}
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
                    R$ { Number(preco).toLocaleString("es-ES", {minimumFractionDigits: 2}) }
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

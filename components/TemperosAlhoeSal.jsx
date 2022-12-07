import React, { useEffect, useState } from "react";
import styles from "../styles/style";
import Link from "next/link";
import { sanity, imageUrlBuilder } from "../lib/sanity";
import Image from "next/image";

const query = `
    *[ _type == 'tempArts'] { title, artesanalDesc, preco, artesanalImage }
  `;

const TemperosAlhoeSal = () => {
  const [temp, setTemp] = useState(null);

  useEffect(() => {
    sanity
      .fetch(query)
      .then((data) => setTemp(data))
      .catch(console.error);
  }, []);

  if (!temp) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className={`${styles.section} pt-8 flex flex-col`}>
      <div className="w-full flex sm:flex-row sm:items-end flex-col justify-between">
        <Link href="/temperos-artesanais">
          <div className="flex">
            <h1
              className={`font-poppins font-semibold sm:text-5xl text-3xl sm:leading-[60px] max-w-[500px] cursor-pointer`}
            >
              Os artesanais a base de alho e sal
            </h1>
          </div>
        </Link>
        <div className="flex">
          <p
            className={`${styles.paragraph} max-w-md h-[100%] sm:text-base mt-2`}
          >
            A facilidade do tempero caseiro artesanal a base de alho, o
            pioneiro da culinária mundial.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {temp.map(
          ({ title, artesanalDesc, preco, artesanalImage }) => (
            <div
              key={title}
              className="w-fit p-2 bg-[#EAEAEA] rounded-lg flex flex-col align-center items-center justify-center"
            >
              <div key={title} className="h-[200px] w-[200px] relative">
                <Image
                  layout="fill"
                  src={imageUrlBuilder
                    .width(200)
                    .height(200)
                    .image(artesanalImage)
                    .url()}
                  alt={title}
                />
              </div>
              <div className="sm:ml-9 justify-center">
                <div>
                  <h1 className="font-poppins font-semibold text-base ">
                    {title}
                  </h1>
                </div>
                <div className="mt-2">
                  <p className="font-poppins text-[12px] max-w-[250px] text-justify">
                    {artesanalDesc}
                  </p>
                </div>
                <div className="mt-4">
                  <h2 className="font-poppins text-orange text-2xl font-bold">
                    R$ { Number(preco).toLocaleString("es-ES", {minimumFractionDigits: 2}) }
                  </h2>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default TemperosAlhoeSal;

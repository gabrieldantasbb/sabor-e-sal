import React from "react";
import styles from "../styles/style";
import Link from "next/link";
import { sanity, imageUrlBuilder } from "../lib/sanity"
import { useQuery } from "react-query";

  const query = `
    *[ _type == 'tempArts'] { artesanalName, artesanalDesc, preco, artesanalImage }
  `;

const TemperosAlhoeSal = () => {
  const { data : temps } = useQuery('tempsList', () => sanity.fetch(query))

  if (!temps) {
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
            className={`${styles.paragraph} max-w-md h-[100%] sm:text-lg mt-2`}
          >
            A facilidade do tempero caseiro artesanal a base de alho como
            pioneiro da culinária mundial.
          </p>
        </div>
      </div>
      <div className="grid gap-4 mt-6">
        {temps.map(({ artesanalName, artesanalDesc, preco, artesanalImage }) => 
        (
          <div
            key={artesanalName}
            className="w-[100%] rounded-lg bg-[#EAEAEA] flex flex-col sm:flex-row p-4 sm:p-9 items-center justify-center"
          >
            <div className="h-[200px] w-[200px]">
            <img src={imageUrlBuilder.width(200).height(200).image(artesanalImage).url()} alt={artesanalName} />
            </div>
            <div className="p-2 sm:ml-9 justify-center">
              <div>
                <h1 className="font-poppins font-semibold text-lg ">
                  {artesanalName}
                </h1>
              </div>
              <div className="mt-2">
                <p className="font-poppins text-[14px] max-w-[450px]">
                  {artesanalDesc}
                </p>
              </div>
              <div className="mt-4">
                <h2 className="font-poppins text-orange text-4xl font-bold">
                  R$ {preco}0
                </h2>
              </div>
            </div>
            <div className="">
              <button className="py-2 px-4 rounded-md bg-orange text-white font-regular font-poppins text-[12px] ">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TemperosAlhoeSal;

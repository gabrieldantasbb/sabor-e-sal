import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/style";
import Swiper from "./Swiper";
import { imageUrlBuilder, sanity } from "../lib/sanity"

const query = `
  *[ _type == 'tempArts' ] { title, artesanalImage, peso}
`;


const AddedRecently = () => {

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
    <section className={`flex flex-col max-w-[1028px] mx-auto py-2 mt-6`}>
      <div className="w-full flex sm:items-end sm:flex-row flex-col justify-between">
        <div className="flex">
          <h1
            className="font-poppins font-semibold sm:text-5xl text-3xl sm:leading-[60px]"
          >
            Adicionados recentemente
          </h1>
        </div>
        <div className="flex">
          <p className={`${styles.paragraph} max-w-md h-[100%] sm:text-lg mt-2`}>
            Temperos secos, artesanais e combinações para saladas.
          </p>
        </div>
      </div>
      <div className="hidden sm:flex">
        <Swiper />
      </div>
      <div className="sm:hidden grid grid-cols-2 gap-4 mt-4">
        {temp.map(({title, artesanalImage, peso }) =>
        (
          <div
            key={title}
            className="w-full flex flex-col py-5 px-4 rounded-xl bg-white drop-shadow-xl"
          >
            <div className="flex bg-[#ECECEC] rounded-xl">
              <Image height={200} width={200} src={imageUrlBuilder.width(200).height(200).image(artesanalImage).url()} />
            </div>
            <div className="w-full flex flex-col px-1">
              <div className="mt-4">
                <h1 className="font-poppins font-bold text-xs min-h-[56px]">
                  Tempero {title}
                </h1>
              </div>
              <div className="flex">
                <p className="font-inter font-semibold text-grey text-[11px]">
                  Peso:{peso}
                </p>
              </div>
              <div className="flex justify-end align-bottom mt-2">
                <button className="py-1 px-2 rounded-md border-solid border-2 border-orange text-orange font-regular font-poppins text-[10px]">
                  View Details
                </button>
              </div>
            </div>
          </div>
          ))}
      </div>
    </section>
  );
};

export default AddedRecently;

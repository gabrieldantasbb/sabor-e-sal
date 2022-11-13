import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

import Image from "next/image";

import { sanity, imageUrlBuilder } from "../lib/sanity";

const query = `
*[ _type == 'tempArts'] { title, artesanalImage, peso }
`;

export default function App() {
  
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
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mt-6"
      >
        {temp.map(({ title, artesanalImage, peso }) => (
          <SwiperSlide
            key={title}
            className="flex flex-col py-5 px-4 rounded-xl bg-white drop-shadow-xl"
          >
            <div className="w-full flex bg-[#ECECEC] rounded-xl">
              <Image
                height={200}
                width={200}
                src={imageUrlBuilder
                  .width(200)
                  .height(200)
                  .image(artesanalImage)
                  .url()}
              />
            </div>
            <div className="w-full flex flex-col px-2">
              <div className="mt-4">
                <h1 className="font-poppins font-bold text-base min-h-[56px]">
                  {title}
                </h1>
              </div>
              <div className="my-2 flex">
                <p className="font-inter font-semibold text-sm text-grey">
                  Peso: {peso}
                </p>
              </div>
              <div className="flex justify-end align-bottom mt-2">
                <button className="py-2 px-3 rounded-md border-solid text-[12px] border-2 border-orange text-orange font-egular font-poppins">
                  View Details
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

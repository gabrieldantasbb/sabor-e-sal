import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

import Image from "next/image";

import { useQuery } from "react-query";
import { sanity, imageUrlBuilder } from "../lib/sanity"

const query = `
*[ _type == 'tempArts'] { artesanalName, artesanalImage, peso }
`

export default function App() {

  const { data : temps } = useQuery('tempsList', () => sanity.fetch(query))

  if (!temps) {
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
        {temps.map(({ artesanalName, artesanalImage, peso }) => (
          <SwiperSlide
            key={artesanalName}
            className="flex flex-col py-5 px-4 rounded-xl bg-white drop-shadow-xl"
          >
            <div className="w-full flex bg-[#ECECEC] rounded-xl">
            <img src={imageUrlBuilder.width(200).height(200).image(artesanalImage).url()} />
            </div>
            <div className="w-full flex flex-col px-2">
              <div className="mt-4">
                <h1 className="font-poppins font-bold text-base min-h-[56px]">
                  Tempero {artesanalName}
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

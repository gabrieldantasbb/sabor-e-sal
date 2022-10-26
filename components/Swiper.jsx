import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

import { temperos } from "../constants";
import Image from "next/image";

export default function App() {
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
        {temperos.map((nav, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col py-5 px-4 rounded-xl bg-white drop-shadow-xl"
          >
            <div className="w-full flex bg-[#ECECEC] rounded-xl">
              <Image src={nav.img} alt={nav.title} height={200} width={200} />
            </div>
            <div className="w-full flex flex-col px-2">
              <div className="mt-4">
                <h1 className="font-poppins font-bold text-base min-h-[56px]">
                  {nav.title}
                </h1>
              </div>
              <div className="my-2 flex">
                <p className="font-inter font-semibold text-sm text-grey">
                  Peso: {nav.peso}
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

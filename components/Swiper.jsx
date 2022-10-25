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
        slidesPerView={3}
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
            className="w-full flex flex-col sm:min-w-[330px] min-h-[209px] py-5 px-4 rounded-xl bg-white drop-shadow-xl"
          >
            <div className="flex bg-[#ECECEC] rounded-xl sm:h-[290px]">
              <Image
                src={nav.img}
                alt={nav.title}
              />
            </div>
            <div className="w-full flex flex-col px-2">
              <div className="mt-4">
                <h1 className="font-poppins font-bold sm:text-xl min-h-[56px]">
                  {nav.title}
                </h1>
              </div>
              <div className="my-2 flex">
                <p className="font-inter font-regular text-base font-grey">
                  {nav.id}
                </p>
              </div>
              <div className="flex justify-end align-bottom">
                <button className="py-2 px-3 rounded-md border-solid border-2 border-lightBlue text-lightBlue font-bold font-poppins">
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

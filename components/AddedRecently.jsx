import React from "react";
import styles from "../styles/style";
import Swiper from "./Swiper";

const AddedRecently = () => {
  return (
    <section className={`${styles.section} flex flex-col`}>
      <div className="w-full flex sm:flex-row flex-col justify-between">
        <div className="flex">
          <h1
            className={`font-poppins font-semibold sm:text-5xl text-3xl sm:leading-[60px]`}
          >
            Adicionados recentemente
          </h1>
        </div>
        <div className="flex">
          <p className={`${styles.paragraph} max-w-md h-[100%] sm:text-lg `}>
            Temperos secos, molhados e combinações para saladas.
          </p>
        </div>
      </div>
      <div className="hidden sm:flex">
        <Swiper />
      </div>
    </section>
  );
};

export default AddedRecently;

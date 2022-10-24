import React from "react";
import styles from "../styles/style";
import { temperos } from "../constants";
import Image from "next/image";

const AddedRecently = () => {
  return (
    <section className={`${styles.section} flex flex-col`}>
      <div className="w-full flex sm:flex-row flex-col justify-between">
        <div className="flex">
          <h1 className={`${styles.title} max-w-md`}>
            Adicionados recentemente
          </h1>
        </div>
        <div className="flex">
          <p className={`${styles.paragraph} max-w-md`}>
            Temperos secos, molhados e combinações para saladas.
          </p>
        </div>
      </div>
      <div className="flex overflow-auto">
        {temperos.map((nav, index) => (

          <div key={index}>
            <div>
              <Image 
              src={nav.img}
              alt={nav.title}
              />
            </div>
            <div>
              <div>
                <h1>{nav.title}</h1>
              </div>
              <div>
                <p>{nav.id}</p>
              </div>
              <div>
                <button>View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AddedRecently;

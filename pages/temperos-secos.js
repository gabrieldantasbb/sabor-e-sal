import Head from "next/head";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/style";
import { BsCart4 } from "react-icons/bs";
import { imageUrlBuilder, sanity } from "../lib/sanity";

const query = `
*[_type == 'tempSeco'] { title, image, description, preco, peso }
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
    return <h1>Loading...</h1>;
  }

  return (
    <div className={`${styles.section} flex-col px-4 sm:px-0 mt-6 :mt-10`}>
      <Head>
        <title>Temperos Sabor e Sal</title>
        <meta name="description" content="Site de de catálogo dos temperos artesanais sabor e sal." />
        <meta name="keywords" content="Tempero, Sal, Alho, Comida, Receita" />
        <meta name="author" content="Gabriel Dantas" />
      </Head>
      <div className="flex font-poppins font-bold sm:text-2xl">
        <h1 className="">Temperos Secos </h1>
        <h1 className="text-grey">
          ({temp.length})
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mt-4">
        {temp?.map(({ title, image, description, preco, peso }) => (
          <div
            key={title}
            className="flex flex-col justify-between border-2 border-solid p-2 sm:p-4 max-w-[300px] rounded-xl shadow-sm"
          >
            <div className="bg-[#ECECEC] rounded-xl">
              <Image
                src={imageUrlBuilder.image(image).url()}
                alt={title}
                height={200}
                width={200}
              />
            </div>
            <div className="flex-col justify-between">
              <div className="font-poppins font-semibold text-[12px] sm:text-base mb-1 mt-2 sm:mt-3">
                <h2>{title}</h2>
              </div>
            </div>

            <div className="flex justify-between p-2 items-center">
              <div className="font-poppins font-regular text-[14px] sm:text-base flex justify-center">
                <p>R$ { Number(preco).toLocaleString("es-ES", {minimumFractionDigits: 2}) }</p>
              </div>
              <div className="bg-orange rounded-full text-white p-3">
                <BsCart4 className="fill-white h-4 w-4 sm:h-6 sm:w-6" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemperosSecos;

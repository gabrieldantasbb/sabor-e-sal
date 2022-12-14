import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/style";
import Image from "next/image";
import { imageUrlBuilder, sanity } from "../lib/sanity";

const query = `
*[_type == 'receitas'] { title, receitaDesc, receitaImage}
`;

const Receitas = () => {
  const [receitas, setReceitas] = useState(null);

  useEffect(() => {
    sanity
      .fetch(query)
      .then((data) => setReceitas(data))
      .catch(console.error);
  }, []);

  if (!receitas) {
    return <h1>Loading…</h1>;
  }

  return (
    <section className={`${styles.section} flex-col px-4 sm:px-0 mt-6 :mt-10`}>
      <Head>
        <title>Temperos Sabor e Sal</title>
        <meta
          name="description"
          content="Site de de catálogo dos temperos artesanais sabor e sal."
        />
        <meta name="keywords" content="Tempero, Sal, Alho, Comida, Receita" />
        <meta name="author" content="Gabriel Dantas" />
      </Head>
      <div className="flex font-poppins font-bold text-xl sm:text-2xl">
        <h1 className="">Receitas</h1>
      </div>

      <div>
        <h2 className="font-poppins font-medium sm:mt-2 text-[12px] sm:text-sm">
          Ideias de receitas que você pode fazer usando Temperos Sabor e Sal.
          Não há limites para o seu uso.
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row w-full">
        {receitas.map(({ title, receitaDesc, receitaImage }) => (
          <div key={title} className="w-full rounded-lg p-4 flex flex-col">
            <div>
              <h3 className="flex font-poppins font-bold text-base sm:text-3xl">
                {title}
              </h3>
            </div>
            <div className="flex flex-col gap-3 sm:gap-6 sm:flex-row w-full sm:mt-3 mt-2">
              <div className="">
                <Image
                  className="rounded-lg"
                  width={600}
                  height={350}
                  layout="intrinsic"
                  src={imageUrlBuilder.image(receitaImage).url()}
                  alt={title}
                />
              </div>
                <div className="sm:w-[40%]">
                  <p className="font-poppins text-[12px] text-center sm:text-left">
                    {receitaDesc}
                  </p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Receitas;

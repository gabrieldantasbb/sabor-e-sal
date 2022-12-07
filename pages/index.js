import Head from 'next/head'
import {
  Hero,
  AddedRecently,
  TemperosAlhoeSal,
  TemperosSecos,
} from '../components'

export default function Home() {
  return (
    <div className="px-8 sm:px-0 ">
      <Head>
        <title>Temperos Sabor e Sal</title>
        <meta name="description" content="Site de de catálogo dos temperos artesanais sabor e sal." />
        <meta name="keywords" content="Tempero, Sal, Alho, Comida, Receita" />
        <meta name="author" content="Gabriel Dantas" />
      </Head>
      <div>
        <Hero />
        <AddedRecently />
        <TemperosAlhoeSal />
        <TemperosSecos />
      </div>
    </div>
  )
}

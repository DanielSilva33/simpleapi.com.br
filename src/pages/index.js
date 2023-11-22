import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { GrConnect } from "react-icons/gr";
import { MdDiversity2, MdMiscellaneousServices } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";

function Home() {
  return (
    <>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="max-w-5xl pt-40 pb-24 mx-auto">
          <h1 className="text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
            Desbloqueie o potencial das APIs
          </h1>
          <h2 className="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-600 text-center">
            Integração eficiente e acesso descomplicado a uma diversidade de
            APIs e serviços exclusivos.
          </h2>
          <div className="ml-6 text-center">
            <Link
              className="inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent bg-white px-7 text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline"
              href="/"
            >
              <div className="flex text-lg">
                <span className="justify-center">Documentação</span>
              </div>
            </Link>
            <Link
              className="inline-flex items-center py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent ml-11 bg-gradient-to-r from-blue-500 to-blue-800 px-14 text-md md:mt-0 focus:shadow-outline"
              href="https://github.com/DanielSilva33/simpleapi.com.br"
              target="_blank"
            >
              <div className="flex text-lg">
                <span className="justify-center">Github</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto">
          {/* <img
            className="object-cover object-center w-3/4 mb-10 border shadow-md g327"
            alt="Placeholder Image"
            src="./images/placeholder.png"
          ></img> */}
        </div>
        <h2 className="pt-32 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
          Recursos Poderosos do SimpleAPI
        </h2>
        <br></br>
        <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
          Desfrute da simplicidade e eficácia em nossos principais recursos.
        </p>
        <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
          <div className="ktq4">
            <GrConnect className="text-3xl" />
            <h3 className="pt-3 font-semibold text-lg text-white">
              Conexão Simplificada
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
              Integre-se de forma rápida e intuitiva a diversas APIs, eliminando
              complicações no desenvolvimento.
            </p>
          </div>
          <div className="ktq4">
            <MdDiversity2 className="text-3xl" />
            <h3 className="pt-3 font-semibold text-lg text-white">
              Diversidade de Setores
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
              Acesse uma ampla gama de APIs, desde dados financeiros até
              informações meteorológicas, tudo em um único lugar.
            </p>
          </div>
          <div className="ktq4">
            <IoDocumentText className="text-3xl" />
            <h3 className="pt-3 font-semibold text-lg text-white">
              Documentação Clara
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
              Explore nossa documentação abrangente, oferecendo orientações
              passo a passo para cada API disponível.
            </p>
          </div>
          <div className="ktq4">
            <MdMiscellaneousServices className="text-3xl" />
            <h3 className="pt-3 font-semibold text-lg text-white">
              Serviços Exclusivos
            </h3>
            <p className="pt-2 value-text text-md text-gray-200 fkrr1">
              Além das APIs públicas, oferecemos serviços exclusivos para
              enriquecer ainda mais suas aplicações.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;

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
      <section className="text-gray-600 body-font w-full pr-2 pl-2">
        <div className="max-w-5xl pt-40 pb-24 mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-bold text-white mb-6">
          Simplifique a autenticação e a integração de serviços
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-600 text-center mb-11">
          Uma plataforma poderosa para autenticação de usuários e soluções personalizadas, com implementação descomplicada.
          </h2>
          <div className="flex flex-wrap items-center justify-center mb-12 space-x-4">
            <Link href="https://www.simpleapi.com.br/swagger/index.html" passHref>
              <p className="py-2 px-4 rounded-md md:py-3 md:px-7 text-sm md:text-md lg:text-lg xl:text-xl bg-white text-black font-semibold inline-block hover:text-black hover:bg-white focus:shadow-outline">
                Documentação
              </p>
            </Link>
            <Link
              href="https://github.com/DanielSilva33/simpleapi.com.br"
              passHref
            >
              <p className="py-2 px-4 rounded-md md:py-3 md:px-7 text-sm md:text-md lg:text-lg xl:text-xl bg-gradient-to-r from-blue-500 to-blue-800 text-white font-semibold inline-block hover:text-white hover:bg-gradient-to-r focus:shadow-outline">
                GitHub
              </p>
            </Link>
          </div>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto"></div>
        <h2 className="pt-32 mb-1 text-3xl md:text-6xl lg:text-7xl font-semibold text-center text-gray-200">
          Recursos Poderosos do SimpleAPI
        </h2>
        <p className="mx-auto text-lg md:text-xl lg:text-2xl text-center text-gray-300 font-normal leading-relaxed mb-12 lg:w-2/3">
          Desfrute da simplicidade e eficácia em nossos principais recursos.
        </p>
        <div className="flex flex-wrap justify-center gap-8 pb-8">
          <div className="ktq4 flex text-center w-full md:w-1/2 lg:w-1/4">
            <div>
              <h3 className="flex items-center font-semibold text-xl text-white mb-2">
                <GrConnect
                  style={{
                    width: "3rem",
                    height: "3rem",
                    marginRight: "0.75rem",
                  }}
                  className="text-gray-500"
                />
                Conexão Rápida
              </h3>
              <p className="text-sm text-gray-200">
                Integre-se de forma rápida e intuitiva a diversos serviços,
                eliminando complicações no desenvolvimento.
              </p>
            </div>
          </div>
          <div className="ktq4 flex text-center w-full md:w-1/2 lg:w-1/4">
            <div>
              <h3 className="flex items-center font-semibold text-xl text-white mb-2">
                <MdDiversity2
                  style={{
                    width: "2.50rem",
                    height: "3rem",
                    marginRight: "0.53rem",
                  }}
                  className="text-gray-500"
                />
                Autenticação Simplificada
              </h3>
              <p className="text-sm text-gray-200">
              Garanta a segurança dos seus usuários com nossa solução de autenticação. 
              Fácil de integrar, escalável e adaptável às suas necessidades.
              </p>
            </div>
          </div>
          <div className="ktq4 flex text-center w-full md:w-1/2 lg:w-1/4">
            <div>
              <h3 className="flex items-center font-semibold text-xl text-white mb-2">
                <IoDocumentText
                  style={{
                    width: "3rem",
                    height: "3rem",
                    marginRight: "1rem",
                  }}
                  className="text-gray-500"
                />
                Documentação Clara
              </h3>
              <p className="text-sm text-gray-200">
                Explore nossa documentação abrangente, oferecendo orientações
                passo a passo para cada serviço disponível.
              </p>
            </div>
          </div>
          <div className="ktq4 flex items-center  w-full md:w-1/2 lg:w-1/4">
            <div>
              <h3 className="flex items-center font-semibold text-xl text-white mb-2">
                <MdMiscellaneousServices
                  style={{
                    width: "3rem",
                    height: "3rem",
                    marginRight: "1rem",
                  }}
                  className="text-gray-500"
                />
                Serviços Exclusivos
              </h3>
              <p className="text-sm text-gray-200">
                Oferecemos serviços exclusivos para
                enriquecer ainda mais suas aplicações.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;

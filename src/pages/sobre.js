import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BsInfoSquare } from "react-icons/bs";
import { HiOutlineSupport } from "react-icons/hi";
import { MdOutlineNotStarted } from "react-icons/md";
import { GrResources } from "react-icons/gr";

function Sobre() {
  return (
    <>
      <Header />
      <section className="text-gray-600 body-font pb-10">
        <div className="container mx-auto">
          <h2 className="pt-16 mb-1 text-2xl font-semibold tracking-tighter text-center text-white lg:text-7xl md:text-6xl">
            Sobre o SimpleAPI
          </h2>
          <div className="w-full max-w-2xl mx-auto h-80 bg-gray-900 rounded-lg p-8 mt-10 flex items-center">
            <div className="flex flex-col w-full">
              <div className="flex items-center">
                <BsInfoSquare className="text-5xl text-gray-400 mr-4 ml-4" />
                <h3 className="text-3xl font-semibold mb-4 text-white">
                  O que é o SimpleAPI?
                </h3>
              </div>
              <p className="mt-2 ml-4 text-gray-300">
                O SimpleAPI é o hub definitivo para desbloquear o potencial do
                mundo das APIs. Uma plataforma abrangente e centralizada,
                oferecendo acesso simplificado a uma variedade de APIs públicas
                de alta qualidade e serviços exclusivos. Simplificando a
                integração e a criação de aplicativos, nossa API é um recurso
                confiável para desenvolvedores que desejam impulsionar suas
                inovações com dados e funcionalidades de várias fontes.
              </p>
            </div>
          </div>
          <div className="w-full max-w-2xl mx-auto h-80 bg-gray-900 rounded-lg p-8 mt-10 flex items-center">
            <div className="flex flex-col w-full">
              <div className="flex items-center">
                <GrResources className="text-5xl text-gray-400 mr-4 ml-4" />
                <h3 className="text-3xl font-semibold mb-4 text-white">
                  Recursos do SimpleAPI
                </h3>
              </div>
              <p className="mt-2 ml-4 text-gray-300">
                O SimpleAPI oferece uma ampla gama de recursos para simplificar
                e aprimorar suas integrações com APIs públicas. Conecte-se com
                facilidade, acesse APIs de diferentes setores, explore
                documentação clara, aproveite serviços exclusivos e confie em
                uma fonte centralizada para todas as suas necessidades de
                integração com APIs.
              </p>
            </div>
          </div>
          <div className="w-full max-w-2xl mx-auto h-80 bg-gray-900 rounded-lg p-8 mt-10 flex items-center">
            <div className="flex flex-col w-full">
              <div className="flex items-center">
                <MdOutlineNotStarted className="text-5xl text-gray-400 mr-4 ml-4" />
                <h3 className="text-3xl font-semibold mb-4 text-white">
                  Como Começar com o SimpleAPI
                </h3>
              </div>
              <p className="mt-2 ml-4 text-gray-300">
                Para começar a usar o SimpleAPI, registre-se e obtenha suas
                credenciais de utilização da API. Explore a documentação para
                orientações passo a passo sobre como usar cada API e serviço.
                Inicie a integração em seus projetos e desfrute da simplicidade
                e eficiência oferecidas pelo SimpleAPI.
              </p>
            </div>
          </div>
          <div className="w-full max-w-2xl mx-auto h-80 bg-gray-900 rounded-lg p-8 mt-10 flex items-center">
            <div className="flex flex-col w-full">
              <div className="flex items-center">
                <HiOutlineSupport className="text-5xl text-gray-400 mr-4 ml-4" />
                <h3 className="text-3xl font-semibold mb-4 text-white">
                  Contribuições para o Projeto
                </h3>
              </div>
              <p className="mt-2 ml-4 text-gray-300">
                O projeto, inicialmente criado para estudos, visa melhorar as
                integrações via API. Atualmente, não gera custos, pois todos os
                recursos utilizados são gratuitos. No entanto, à medida que o
                projeto escala, os custos podem surgir. Toda contribuição para o
                projeto será bem-vinda.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Sobre;

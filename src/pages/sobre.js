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
          <h2 className="pt-16 mb-8 text-3xl font-semibold tracking-tighter text-center text-white lg:text-6xl md:text-5xl">
            Sobre o SimpleAPI
          </h2>
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            <div className="w-full h-auto bg-gray-900 rounded-lg p-6 flex items-center">
              <div>
                <h3 className="flex items-center text-xl font-semibold mb-4 text-white">
                  <BsInfoSquare
                    style={{
                      width: "3rem",
                      height: "3rem",
                      marginRight: "1rem",
                    }}
                    className="text-gray-400 mr-2"
                  />
                  O que é o SimpleAPI?
                </h3>
                <p className="text-base text-gray-300">
                  O <strong>SimpleAPI</strong> é uma plataforma feita para desenvolvedores e empresas, oferecemos soluções simples e robusta para autenticação de usuários. Em breve, lançaremos novos serviços, sempre com foco em simplificar a integração e acelerar o desenvolvimento.
                </p>
              </div>
            </div>

            <div className="w-full h-auto bg-gray-900 rounded-lg p-6 flex items-center">
              <div>
                <h3 className="flex items-center text-xl font-semibold mb-4 text-white">
                  <GrResources
                    style={{
                      width: "3rem",
                      height: "3rem",
                      marginRight: "1rem",
                    }}
                    className="text-gray-400 mr-2"
                  />
                  Recursos do SimpleAPI
                </h3>
                <p className="text-base text-gray-300">
                O <strong>SimpleAPI</strong> oferece uma solução simples e eficaz para autenticação de usuários, permitindo gerenciar cadastros, logins e autenticações com segurança. Nossa plataforma facilita a implementação, com documentação clara e suporte dedicado para uma experiência fluida.                </p>
              </div>
            </div>
            <div className="w-full h-auto bg-gray-900 rounded-lg p-6 flex items-center">
              <div>
                <h3 className="flex items-center text-xl font-semibold mb-4 text-white">
                  <MdOutlineNotStarted
                    style={{
                      width: "3rem",
                      height: "3rem",
                      marginRight: "0.75rem",
                    }}
                    className="text-gray-400 mr-2"
                  />
                  Como Começar com o SimpleAPI
                </h3>
                <p className="text-base text-gray-300">
                  Para começar a usar o <strong>SimpleAPI</strong>, crie sua conta e obtenha suas credenciais de acesso. Consulte nossa documentação para um guia detalhado sobre a integração com nossos serviços. Aproveite a simplicidade e eficiência que o <strong>SimpleAPI</strong> oferece.
                </p>
              </div>
            </div>
            <div className="w-full h-auto bg-gray-900 rounded-lg p-6 flex items-center">
              <div>
                <h3 className="flex items-center text-xl font-semibold mb-4 text-white">
                  <HiOutlineSupport
                    style={{
                      width: "3rem",
                      height: "3rem",
                      marginRight: "0.75rem",
                    }}
                    className="text-gray-400 mr-2"
                  />
                  Planos e Preços do SimpleAPI
                </h3>
                <p className="text-base text-gray-300">
                O <strong>SimpleAPI</strong> oferece soluções de autenticação e integração com preços flexíveis, adaptados ao seu uso. Nossa missão é fornecer um serviço eficiente e escalável, sempre evoluindo com novos recursos e melhorias.                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Sobre;

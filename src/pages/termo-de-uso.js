import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaRegUser, FaUserAstronaut } from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import Link from "next/link";

function TermoDeUso() {
  return (
    <>
      <Header />
      <section className="text-gray-600 body-font pb-10">
        <div className="container flex flex-col items-center justify-center mx-auto">
          <h2 className="pt-16 mb-1 text-4xl font-bold tracking-tighter text-center text-white lg:text-7xl md:text-6xl">
            Termos de Uso
          </h2>
          <div className="w-full max-w-4xl h-full bg-gray-900 rounded-lg p-8 mt-10 flex items-center">
            <div>
              <div className="flex">
                <FaUserAstronaut className="text-5xl text-gray-400 mr-4 ml-4" />
                <h3 className="text-3xl font-semibold mb-4 text-white">
                  SimpleAPI
                </h3>
              </div>
              <p className="mt-2 ml-4 text-gray-300">
                Ao utilizar o SimpleAPI você está de acordo com os seguintes
                termos:
              </p>

              <ul className="list-disc ml-4 text-white">
                <li className="mt-2">
                  O <span className="font-bold">SimpleAPI</span> tem como
                  objetivo principal simplificar e unificar a maneira em que
                  realizamos integrações via API.
                </li>
                <li className="mt-2">
                  O <span className="font-bold">SimpleAPI</span> nunca irá
                  vender os dados de seus usuários e nunca irá compartilhar
                  informações com terceiros.
                </li>
                <li className="mt-2">
                  O <span className="font-bold">SimpleAPI</span> somente irá
                  coletar dados que são fundamentalmente necessários para o
                  funcionamento e proteção do serviço. Nosso princípio neste
                  ponto é de quanto menos dados sobre o usuário coletarmos,
                  menos dados sensíveis teremos em nossa base, logo melhor
                  estaremos posicionados no quesito proteção do serviço e
                  usuários.
                </li>
                <li className="mt-2">
                  O <span className="font-bold">SimpleAPI</span> é um projeto de
                  natureza Open Source, com esforços feitos de forma espontânea
                  e não oferecemos nenhuma garantia para a disponibilidade do
                  serviço ou suporte. Apesar disto, realizamos esforços para
                  entregar o melhor serviço e atenção possível.
                </li>
                <li className="mt-2">
                  Os Termos de Uso e a Política de Privacidade podem ser
                  alterados conforme necessário, e todas as mudanças serão
                  prontamente disponibilizadas nesta página. Destacaremos de
                  maneira clara e simples quaisquer alterações realizadas.
                </li>
                <li className="mt-2">
                  O conteúdo disponibilizado no SimpleAPI, incluindo textos,
                  imagens, vídeos e qualquer outro material, está sujeito a
                  direitos autorais e é propriedade intelectual do SimpleAPI ou
                  de terceiros que concederam permissão para sua utilização. Os
                  usuários concordam em respeitar esses direitos e não
                  reproduzir, distribuir, modificar ou criar obras derivadas sem
                  a devida autorização. Qualquer uso não autorizado do conteúdo
                  pode violar leis de direitos autorais e resultar em medidas
                  legais.
                </li>
                <li className="mt-2">
                  <span className="font-bold">Interrupção do Serviço</span> - O
                  SimpleAPI reserva-se o direito de interromper ou modificar o
                  serviço a qualquer momento, com ou sem aviso prévio, por
                  razões como manutenção, atualizações ou circunstâncias
                  imprevistas.
                </li>
              </ul>

              <div className="flex mt-6">
                <FaRegUser className="text-5xl text-gray-400 mr-4 ml-4" />
                <h3 className="text-3xl font-semibold mb-4 text-white">
                  Usuário
                </h3>
              </div>

              <ul className="list-disc ml-4 text-white mt-2">
                <li className="mt-2">
                  Ao utilizar o SimpleAPI, você concorda em relatar quaisquer
                  bugs ou vulnerabilidades encontrados via email para{" "}
                  <Link
                    href="mailto:daniel.silva3320@gmail.com"
                    className="font-bold"
                  >
                    daniel.silva3320@gmail.com
                  </Link>
                </li>
                <li className="mt-2">
                  É estritamente proibido realizar qualquer tipo de ataque
                  contra os sistemas do SimpleAPI.
                </li>
                <li className="mt-2">
                  <span className="font-bold">Uso Adequado</span> - Os usuários
                  concordam em utilizar o SimpleAPI de maneira ética e legal,
                  respeitando todas as leis e regulamentos aplicáveis.
                </li>
                <li className="mt-2">
                  <span className="font-bold">Responsabilidade do Usuário</span>{" "}
                  - Os usuários são responsáveis por manter a confidencialidade
                  de suas credenciais de acesso e por todas as atividades
                  realizadas em suas contas.
                </li>
                <li className="mt-2">
                  <span className="font-bold">Suspensão de Conta</span> - O
                  SimpleAPI reserva-se o direito de suspender ou encerrar a
                  conta de usuários que violem os Termos de Uso ou envolvam-se
                  em atividades prejudiciais à plataforma.
                </li>
              </ul>

              <div className="flex mt-6">
                <MdOutlinePrivacyTip className="text-5xl text-gray-400 mr-4 ml-4" />
                <h3 className="text-3xl font-semibold mb-4 text-white">
                  Política de Privacidade
                </h3>
              </div>
              <p className="mt-2 ml-4 text-gray-300">
                Esta Política de Privacidade define como coletamos, armazenamos,
                usamos e protegemos os dados dos usuários do SimpleAPI.
              </p>

              <ul className="list-disc ml-4 text-white mt-2">
                <li className="mt-2">
                  <span className="font-bold">Coleta de Informações</span> - Ao
                  se registrar e usar o SimpleAPI, poderemos coletar as
                  seguintes informações:
                  <div className="ml-4 text-gray-400">
                    <li>Nome de usuário.</li>
                    <li>Email.</li>
                    <li>Senha.</li>
                  </div>
                </li>
                <li className="mt-2">
                  <span className="font-bold">Uso de Informações</span> - Usamos
                  as informações coletadas para:
                  <div className="ml-4 text-gray-400">
                    <li>Permitir acesso e uso do SimpleAPI.</li>
                    <li>
                      Detectar e proteger contra atividades fraudulentas ou
                      mal-intencionadas.
                    </li>
                  </div>
                </li>

                <li className="mt-2">
                  <span className="font-bold">Proteção de Informações</span> -
                  Implementamos medidas de segurança para proteger suas
                  informações pessoais contra acesso, alteração, divulgação ou
                  destruição não autorizados.
                </li>

                <li className="mt-2">
                  <span className="font-bold">
                    Compartilhamento de Informações
                  </span>{" "}
                  - Não vendemos, comercializamos ou transferimos de outra forma
                  para terceiros suas informações pessoais sem o seu
                  consentimento, exceto conforme exigido por lei ou para
                  proteger nossos direitos, propriedade ou segurança.
                </li>

                <li className="mt-2">
                  <span className="font-bold">Acesso e Correção</span> - Os
                  usuários têm o direito de acessar, corrigir e deletar seus
                  dados pessoais armazenados no SimpleAPI.
                </li>

                <li className="mt-2">
                  <span className="font-bold">Cookies</span> - Usamos cookies
                  para melhorar a experiência do usuário.
                </li>

                <li className="mt-2">
                  <span className="font-bold">Contato</span> - Para quaisquer
                  perguntas relacionadas a esta Política de Privacidade, entre
                  em contato conosco.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default TermoDeUso;

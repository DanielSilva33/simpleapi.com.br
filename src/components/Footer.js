import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {currentYear}{" "}
          <Link
            href="https://simpleapi.com.br/"
            target="_blank"
            className="hover:underline"
          >
            SimpleApi
          </Link>
          . Todos os direitos reservados.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="/" className="hover:underline me-4 md:me-6">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:underline me-4 md:me-6">
              Política de Privacidade
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/daniel-silva-1a3209196/"
              target="_blank"
              className="hover:underline"
            >
              Contato
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;

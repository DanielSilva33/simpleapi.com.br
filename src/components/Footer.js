import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className=" bottom-0 left-0 z-20 w-full p-4 border-t border-gray-700 shadow md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-300 sm:text-center">
          © {currentYear}{" "}
          <Link href="/" className="hover:underline">
            SimpleAPI
          </Link>
          . Todos os direitos reservados.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-300 sm:mt-0">
          <li>
            <Link href="/" className="hover:underline me-4 md:me-6">
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/daniel-silva-1a3209196/"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              Contato
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:underline">
              Política de Privacidade
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
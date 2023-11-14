import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="images/logo2.svg"
            alt="Logo da API"
            className="w-8 h-8 mr-2"
          />
          <span className="text-lg font-bold">SimpleAPI</span>
        </Link>

        <nav className="flex space-x-4">
          <Link href="/" className="hover:text-gray-300">
            Recursos
          </Link>
          <Link href="/" className="hover:text-gray-300">
            Sobre Nós
          </Link>
          <Link href="/" className="hover:text-gray-300">
            Documentação
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

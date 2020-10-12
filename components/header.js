import Link from "next/link";
import { useState } from "react";
import LanguageSelector from "./LanguageSelector";


function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="bg-background relative">
      <div className="flex flex-wrap items-center justify-between p-4 mx-auto md:flex-no-wrap ">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-xl font-bold text-primary md:ml-8">TicaCoder</a>
          </Link>
        </div>

        <button
          className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul
          className={`${
            isExpanded ? `block` : `hidden`
          } md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto`}
        >
          <li className="dropdown text-secondary">
            <img src="translate.svg" className="w-6 mr-3" />
            <LanguageSelector />
          </li>

          <li className="text-secondary">
            <img src="style.svg" className="w-6 mr-3 " />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

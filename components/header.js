import Link from "next/link";
import { useState } from "react";
import LanguageSelector from "./LanguageSelector";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className='bg-background relative'>
      <div className='flex flex-wrap items-center justify-between p-4 mx-auto md:flex-no-wrap '>
        <div className='flex items-center'>
          <Link href='/'>
            <a className='text-xl font-bold text-primary md:ml-8'>TicaCoder</a>
          </Link>
        </div>

        <button
          className='flex items-center block px-3 py-2 text-white border border-white rounded md:hidden'
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className='w-3 h-3 fill-current'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>

        <ul
          className={`${
            isExpanded ? `block` : `hidden`
          } md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto`}
        >
          <li className='dropdown text-secondary w-6 mr-3'>
            <svg
              class='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129'
              ></path>
            </svg>
            <LanguageSelector />
          </li>

          <li className='text-secondary w-6 mr-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
              />
            </svg>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

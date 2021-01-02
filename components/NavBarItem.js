import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from 'next/router';

function NavBarItem({ onClick, title, route, color }) {
    const router = useRouter();
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        if (router.pathname === route) {
            setSelected(true)
        }
    }, [selected]);

    return (

        <li
            className='pb-5 mt-3 text-lg font-bold'
            key={title}

        >
            <div className='flex items-center text-secondary '>
                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
                    ></path>
                </svg>
                <Link href={route} passHref>
                    <a className='block p-1 text-primary' onClick={onClick}>
                        {title}
                    </a>
                </Link>

            </div>
            <motion.div
                layoutId={title}
                className={selected ? "border rounded-sm rounded border-secondary" : null}
                initial={false}
                transition={spring}
            >

            </motion.div>
        </li>

    )
};

const spring = {
    type: "spring",
    stiffness: 9000,
    damping: 90
};

export default NavBarItem;
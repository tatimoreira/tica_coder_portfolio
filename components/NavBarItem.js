import React, { useContext, useEffect, useState } from "react";
import { faFemale } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from 'next/router';

function NavBarItem({ onClick, title, route, color, icon }) {
    const router = useRouter();
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        if (router.pathname === route) {
            setSelected(true)
        }
    }, [selected]);

    return (

        <li
            className='pb-5 mt-3 text-lg font-bold font-custom'
            key={title}

        >
            <Link href={route} passHref>
                <a className='block p-1 text-primary' onClick={onClick}>
                    {icon}
                </a>
            </Link>
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
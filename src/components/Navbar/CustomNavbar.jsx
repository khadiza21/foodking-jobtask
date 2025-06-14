

import bgImage from '../../assets/hero-bg-3.jpg';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomNavbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [bgWhite, setBgWhite] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 0) {
                setShowNavbar(true);
            }
            setBgWhite(currentScrollY > 100);
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {showNavbar && (
                <motion.div
                    key="navbar"
                    initial={{ y: -80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -80, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`navbar fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${bgWhite ? 'bg-white shadow-lg' : 'bg-cover bg-center bg-no-repeat'
                        }`}
                    style={{
                        backgroundImage: !bgWhite ? `url(${bgImage})` : 'none',
                        borderBottom: '1px solid #ffffff2b',
                    }}
                >
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl text-black">daisyUI</a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1 text-black">
                            <li><a>Link</a></li>
                            <li>
                                <details>
                                    <summary>Parent</summary>
                                    <ul className="bg-base-100 rounded-t-none p-2">
                                        <li><a>Link 1</a></li>
                                        <li><a>Link 2</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};


export default CustomNavbar;
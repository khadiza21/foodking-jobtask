import navIcon from '../../assets/logo-1.png'
import navIcon1 from '../../assets/logo-2.png'

import bgImage from '../../assets/hero-bg-3.jpg';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaTruck, FaSearch, FaShoppingCart, FaBars } from 'react-icons/fa';
import { ChevronDown } from 'lucide-react';


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




    const [openMenu, setOpenMenu] = useState(null);
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
        setOpenSubMenu(null); // reset submenus
    };

    const toggleSubMenu = (sub) => {
        setOpenSubMenu(openSubMenu === sub ? null : sub);
    };

    return (
        <AnimatePresence>
            {showNavbar && (
                <motion.div
                    key="navbar"
                    initial={{ y: -80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -80, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className={` px-10 navbar fixed top-0 left-0 right-0 z-50 transition-all ease-in-out transition-colors duration-500 ${bgWhite ? 'bg-white shadow-lg' : 'bg-cover bg-center bg-no-repeat'
                        }`}
                    style={{
                        backgroundImage: !bgWhite ? `url(${bgImage})` : 'none',
                        borderBottom: '1px solid #ffffff2b',
                    }}
                >
                    <div className="flex-1">
                        <Link className=" text-3xl font-bold text-white flex items-center gap-2">
                            <img src={navIcon1} alt="" /><span className='font-bold'>FOODKING</span>
                        </Link>
                    </div>
                    <div className="flex-none nav-list">
                        <ul className="menu menu-horizontal px-1 text-black flex items-center ">
                            <li><Link to="/">HOME PAGE</Link></li>
                            <li><Link to="/">SHOP</Link></li>
                            <li><Link to="/">BLOG</Link></li>




                            <li className="relative group">
                                <span className="cursor-pointer">PAGES</span>
                           
                                <ul className="absolute top-full left-0 bg-white w-56 rounded-sm shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-top z-50 text-sm font-semibold text-black">
                                    <li><Link to="/about" className="block px-5 py-3 hover:bg-red-600 hover:text-white transition">ABOUT US</Link></li>

                                 
                                    <li className="relative group/chef">
                                        <div className="flex justify-between items-center px-5 py-3 hover:bg-red-600 hover:text-white cursor-pointer transition">
                                            CHEF PAGE <span>›</span>
                                        </div>

                                    
                                        <ul className="absolute left-full top-0 bg-white w-48 rounded-sm shadow-lg opacity-0 scale-95 group-hover/chef:opacity-100 group-hover/chef:scale-100 transition-all duration-300 origin-left z-50">
                                            <li>
                                                <Link to="/chef" className="block px-4 py-3 hover:bg-red-600 hover:text-white transition">CHEF</Link>
                                            </li>
                                            <li>
                                                <Link to="/chef-details" className="block px-4 py-3 hover:bg-red-600 hover:text-white transition">CHEF DETAILS</Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li><Link to="/menu" className="block px-5 py-3 hover:bg-red-600 hover:text-white transition">FOOD MENU</Link></li>
                                    <li><Link to="/gallery" className="block px-5 py-3 hover:bg-red-600 hover:text-white transition">GALLERY</Link></li>
                                </ul>
                            </li>






                            <li><Link to="/">CONTACT</Link></li>
                            <li><div><FaSearch className="h-6 w-6 text-slate-900" /></div></li>
                            <li><div><FaShoppingCart className="h-6 w-6 text-slate-900" /></div></li>

                            <li>
                                <div className=''>
                                    <button className="relative overflow-hidden px-8 py-3 font-semibold text-black bg-white border border-red-500  group transition-colors duration-500">
                                        <div className='flex items-center justify-center gap-2'>
                                            <FaTruck className="h-6 w-6 text-gray-700" />  <span className="relative z-10 font-bold">ORDER NOW</span>
                                        </div>
                                        <span className="absolute inset-0 bg-green-800 scale-x-0 scale-y-0 group-hover:scale-100 transition-transform duration-500 ease-in-out origin-center opacity-100 z-0"></span>
                                    </button>
                                </div>
                            </li>
                            <li><div><FaBars className="h-6 w-6 text-slate-900" /></div></li>

                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// <FaCar className="h-6 w-6 text-gray-700" />


export default CustomNavbar;
import navIcon from '../../assets/logo-1.png'
import navIcon1 from '../../assets/logo-2.png'
import './CustomNavbar.css'
import bgImage from '../../assets/hero-bg-3.jpg';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaTruck, FaSearch, FaShoppingCart, FaBars } from 'react-icons/fa';
import { ChevronDown } from 'lucide-react';


const CustomNavbar = () => {

    const [showNavbar, setShowNavbar] = useState(true);
    const [isScrolledPastTop, setIsScrolledPastTop] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);
    const [hasCrossedOnce, setHasCrossedOnce] = useState(false);

    const handleScroll = () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 100 && !hasCrossedOnce) {

            setShowNavbar(false);
            setHasCrossedOnce(true);

            const newTimeout = setTimeout(() => {
                setIsScrolledPastTop(true);
                setShowNavbar(true);
            }, 400);

            setTimeoutId(newTimeout);
        }


        if (currentScroll < 100) {
            setIsScrolledPastTop(false);
            setHasCrossedOnce(false);
        }
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [hasCrossedOnce]);

    return (
        <div
            className={` fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out transform ${showNavbar ? 'translate-y-0' : '-translate-y-full'
                } ${isScrolledPastTop ? 'bg-white shadow-md' : 'bg-transparent'}`}
            style={{
                backgroundImage: !isScrolledPastTop ? `url(${bgImage})` : 'none',
                borderBottom: isScrolledPastTop ? '1px solid #ddd' : '1px solid #ffffff2b',
            }}
        >
            <div className='flex items-center justify-between px-18 py-6 navbarCom'>
                <div className="navLogo">
                    <Link className="text-3xl font-bold flex items-center gap-2 text-black">
                        <img src={`${isScrolledPastTop ? navIcon : navIcon1}`} alt="Logo" />
                        <span className={`font-bold text-3xl ${isScrolledPastTop ? 'text-black' : 'text-white'}`}>
                            FOODKING
                        </span>
                    </Link>
                </div>

                <div className="flex gap-5 items-center nav-list">
                    <div className='flex gap-6 items-center font-semibold larger-nav'>
                        <div className='mr-5 flex gap-4'>



                            {/* HOME */}
                            <div className="relative group">
                                <Link
                                    className={`cursor-pointer flex items-center gap-1 transition-colors duration-300 ${isScrolledPastTop ? 'text-black' : 'text-white'}`}
                                    to="/"
                                >
                                    HOME <ChevronDown className="w-4 h-4 font-bold transition-transform duration-300 group-hover:rotate-180" />
                                </Link>

                                <div className="absolute top-full left-0 mt-6 w-60 bg-white shadow-lg  opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                                    <Link to="/home/intro" className="dorpdownList block px-6 py-3 text-slate-800 hover:text-white hover:bg-red-700">Introduction</Link>
                                    <Link to="/home/about" className="dorpdownList block px-6 py-3 text-slate-800 hover:text-white hover:bg-red-700">About Us</Link>


                                    <div className="relative group/dropdown">
                                        <Link
                                            to="/home/mission"
                                            className="flex justify-between items-center px-6 py-3 text-slate-800 hover:text-white hover:bg-red-700"
                                        >
                                            Our Mission
                                            <ChevronDown className="w-4 h-4" />
                                        </Link>


                                        <div className="absolute left-full top-0  w-56 bg-white shadow-lg opacity-0 group-hover/dropdown:opacity-100 invisible group-hover/dropdown:visible transition-all duration-300 z-50 ">
                                            <Link to="/home/mission/vision" className="dorpdownList block px-5 py-3 text-slate-800 hover:text-white hover:bg-red-700">Our Vision</Link>
                                            <Link to="/home/mission/team" className="dorpdownList block px-5 py-3 text-slate-800 hover:text-white hover:bg-red-700">Our Team</Link>
                                            <Link to="/home/mission/goals" className="dorpdownList block px-5 py-3 text-slate-800 hover:text-white hover:bg-red-700">Our Goals</Link>
                                        </div>
                                    </div>




                                </div>

                            </div>


                            {/* SHOP */}
                            <div className="relative group">
                                <Link
                                    className={`cursor-pointer flex items-center gap-1 transition-colors duration-300 ${isScrolledPastTop ? 'text-black' : 'text-white'}`}
                                    to="/"
                                >
                                    SHOP <ChevronDown className="w-4 h-4 font-bold transition-transform duration-300 group-hover:rotate-180" />
                                </Link>

                                <div className="absolute top-full left-0 mt-6 w-60 bg-white shadow-lg  opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                                    <Link to="/home/intro" className="dorpdownList block px-6 py-3 text-slate-800 hover:text-white hover:bg-red-700">SHOP GRID</Link>
                                    <Link to="/home/about" className="dorpdownList block px-6 py-3 text-slate-800 hover:text-white hover:bg-red-700">SHOP LIST</Link>
                                    <Link to="/home/about" className="dorpdownList block px-6 py-3 text-slate-800 hover:text-white hover:bg-red-700">SHOP LEFT SIDEBAR</Link>
                                    <Link to="/home/about" className="dorpdownList block px-6 py-3 text-slate-800 hover:text-white hover:bg-red-700">SHOP RIGHT SIDEBAR</Link>
                                    <Link to="/home/about" className="dorpdownList block px-6 py-3 text-slate-800 hover:text-white hover:bg-red-700">SHOP SINGLE</Link>
                                    <Link to="/home/about" className="dorpdownList block px-6 py-3 text-slate-800 hover:text-white hover:bg-red-700">SHOP CART</Link>
                                    <Link to="/home/about" className="dorpdownList block px-6 py-3 text-slate-800 hover:text-white hover:bg-red-700">CHECKOUT</Link>

                                </div>
                            </div>


                            {/* blogs */}
                            <div className="relative group">
                                <Link
                                    className={`cursor-pointer flex items-center gap-1 transition-colors duration-300 ${isScrolledPastTop ? 'text-black' : 'text-white'}`}
                                    to="/"
                                >
                                    BLOGS <ChevronDown className="w-4 h-4 font-bold transition-transform duration-300 group-hover:rotate-180" />
                                </Link>

                                <div className="absolute top-full left-0 mt-6 w-60 bg-white shadow-lg  opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                                    <Link to="/home/intro" className="dorpdownList block px-6 py-3 text-slate-800 hover:text-white hover:bg-red-700">BLOGS</Link>
                                    <Link to="/home/about" className="dorpdownList block px-6 py-3 text-slate-800 hover:text-white hover:bg-red-700">BLOGS DETAILS</Link>
                                </div>
                            </div>

                            {/* pages */}
                            <div className="relative group">
                                <Link
                                    className={`cursor-pointer flex items-center gap-1 transition-colors duration-300 ${isScrolledPastTop ? 'text-black' : 'text-white'}`}
                                    to="/"
                                >
                                    PAGES <ChevronDown className="w-4 h-4 font-bold transition-transform duration-300 group-hover:rotate-180" />
                                </Link>

                                <div className="absolute top-full left-0 mt-6 w-60 bg-white shadow-lg  opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                                    <Link to="/home/intro" className="dorpdownList block px-6 py-3 text-slate-800 hover:text-white hover:bg-red-700">ABOUT US</Link>
                                    <Link to="/home/about" className="dorpdownList block px-6 py-3 text-slate-800 hover:text-white hover:bg-red-700">GALLERY</Link>

                                    <div className="relative group/dropdown">
                                        <Link
                                            to="/home/mission"
                                            className="flex justify-between items-center px-6 py-3 text-slate-800 hover:text-white hover:bg-red-700"
                                        >
                                            CHEF PAGE
                                            <ChevronDown className="w-4 h-4" />
                                        </Link>


                                        <div className="absolute left-full top-0  w-56 bg-white shadow-lg opacity-0 group-hover/dropdown:opacity-100 invisible group-hover/dropdown:visible transition-all duration-300 z-50 ">
                                            <Link to="/home/mission/vision" className="dorpdownList block px-5 py-3 text-slate-800 hover:text-white hover:bg-red-700">CHEF</Link>
                                            <Link to="/home/mission/team" className="dorpdownList block px-5 py-3 text-slate-800 hover:text-white hover:bg-red-700">CHEF DETAILS</Link>

                                        </div>
                                    </div>



                                    <div className="relative group/dropdown">
                                        <Link
                                            to="/home/mission"
                                            className="flex justify-between items-center px-6 py-3 text-slate-800 hover:text-white hover:bg-red-700"
                                        >
                                            FOOD MENU
                                            <ChevronDown className="w-4 h-4" />
                                        </Link>


                                        <div className="absolute left-full top-0  w-56 bg-white shadow-lg opacity-0 group-hover/dropdown:opacity-100 invisible group-hover/dropdown:visible transition-all duration-300 z-50 ">
                                            <Link to="/home/mission/vision" className="dorpdownList block px-5 py-3 text-slate-800 hover:text-white hover:bg-red-700">FOOD MENU 01</Link>
                                            <Link to="/home/mission/team" className="dorpdownList block px-5 py-3 text-slate-800 hover:text-white hover:bg-red-700">FOOD MENU 02</Link>

                                        </div>
                                    </div>

                                    <Link to="/home/about" className="dorpdownList block px-6 py-3 text-slate-800 hover:text-white hover:bg-red-700">TESTIMONIALS</Link>
                                    <Link to="/home/about" className="dorpdownList block px-6 py-3 text-slate-800 hover:text-white hover:bg-red-700">RESERVATION</Link>
                                    <Link to="/home/about" className="dorpdownList block px-6 py-3 text-slate-800 hover:text-white hover:bg-red-700">FAQ's</Link>
                                    <Link to="/home/about" className="dorpdownList block px-6 py-3 text-slate-800 hover:text-white hover:bg-red-700">404 PAGE</Link>



                                </div>
                            </div>


                
                            <Link className={`cursor-pointer transition-colors duration-300 ${isScrolledPastTop ? 'text-black' : 'text-white'}`} to="/">CONTACT</Link>




                        </div>
                        <FaShoppingCart className={`h-6 w-6 cursor-pointer ${isScrolledPastTop ? 'text-black' : 'text-white'}`} />
                        <FaSearch className={`h-6 w-6 cursor-pointer ${isScrolledPastTop ? 'text-black' : 'text-white'}`} />

                        {
                            isScrolledPastTop ?


                                <button className="relative overflow-hidden px-8 py-3 font-semibold text-black bg-red-800  group transition-colors duration-500 orderNowNavBtn">
                                    <div className='flex items-center justify-center gap-2'>
                                        <FaTruck className="h-6 w-6 text-dark DeliveryTruckIcon" />
                                        <span className="relative z-10 font-bold ">ORDER NOW</span>
                                    </div>
                                    <span className="absolute inset-0 bg-green-800 scale-x-0 scale-y-0 group-hover:scale-100 transition-transform duration-500 ease-in-out origin-center opacity-100 z-0"></span>
                                </button>
                                :

                                <button className="relative overflow-hidden px-8 py-3 font-semibold text-black bg-transparent
 border border-yellow-500 group transition-colors duration-500">
                                    <div className='flex items-center justify-center gap-2'>
                                        <FaTruck className="h-6 w-6 text-dark DeliveryTruckIcon" />
                                        <span className="relative z-10 font-bold">ORDER NOW</span>
                                    </div>
                                    <span className="absolute inset-0 bg-yellow-500 scale-x-0 scale-y-0 group-hover:scale-100 transition-transform duration-500 ease-in-out origin-center opacity-100 z-0"></span>
                                </button>
                        }
                    </div>
                    <FaBars className={`h-6 w-6 cursor-pointer ${isScrolledPastTop ? 'text-black' : 'text-white'}`} />
                </div>
            </div>
        </div>
    );
};


export default CustomNavbar;
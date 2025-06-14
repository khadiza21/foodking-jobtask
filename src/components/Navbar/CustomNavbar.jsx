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


                            <Link className={`cursor-pointer flex items-center gap-1 transition-colors duration-300 ${isScrolledPastTop ? 'text-black' : 'text-white'}`} to="/">HOME <ChevronDown className="w-4 h-4 font-bold" /></Link>
                            <Link className={`cursor-pointer flex items-center gap-1 transition-colors duration-300 ${isScrolledPastTop ? 'text-black' : 'text-white'}`} to="/">SHOP  <ChevronDown className="w-4 h-4 font-bold" /></Link>
                            <Link className={`cursor-pointer flex items-center gap-1 transition-colors duration-300 ${isScrolledPastTop ? 'text-black' : 'text-white'}`} to="/">PAGE  <ChevronDown className="w-4 h-4 font-bold" /></Link>
                            <Link className={`cursor-pointer flex items-center gap-1 transition-colors duration-300 ${isScrolledPastTop ? 'text-black' : 'text-white'}`} to="/">BLOG  <ChevronDown className="w-4 h-4 font-bold" /></Link>
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
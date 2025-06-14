import { useEffect, useState } from 'react';
import bgImage from '../../assets/hero-bg-3.jpg';
import pizzaImage from '../../assets/pizza-2.png';
import pizzaImage1 from '../../assets/pizza.png';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import img1 from '../../assets/frame.png'
import img2 from '../../assets/frame-2.png'
import img3 from '../../assets/frame-3.png'
import img5 from '../../assets/frame-5.png'
import img6 from '../../assets/frame-6.png'
import './HeroBanner.css';

const HeroBanner = () => {
    const slides = [
        {
            id: 1,
            title: "SUPER DELICIOUS PIZZA",
            subtitle: "Star Your Order Just Only $25.00",
            button: "Order Now",
            image: pizzaImage,
        },
        {
            id: 2,
            title: "HOT & FRESH TASTE",
            subtitle: "Grab the Best Pizza in Town",
            button: "Get Yours",
            image: pizzaImage1,
        },
        {
            id: 3,
            title: "CHEESY PERFECTION",
            subtitle: "Melt in Your Mouth Goodness",
            button: "Try Today",
            image: pizzaImage,
        },
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const variants = {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 1 } },
        exit: { y: -100, opacity: 0, transition: { duration: 0.8 } },
    };

    const imageVariants = {
        initial: { rotate: 0 },
        animate: { rotate: 360, transition: { duration: 15, ease: "linear", repeat: Infinity } },
    };

    return (
        <>

            <div style={{ backgroundImage: `url(${bgImage})` }}>


                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                        exit={{ opacity: 0, y: -50, transition: { duration: 0.6 } }}
                        className="hidden md:flex px-4 justify-between pt-12 lg:px-10 xl:px-12"
                        style={{ marginBottom: '-150px' }}
                    >
                        <motion.img src={img1} alt="" />
                        <motion.img src={img2} alt="" />
                        <motion.img src={img3} alt="" />
                    </motion.div>
                </AnimatePresence>


                <div
                    className="w-full h-70vh bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >


                    <div className="max-w-7xl w-full mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center   ">


                        <div className="pizzaLeft col-xl-4 col-lg-4 w-full" style={{ overflow: 'hidden' }}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index + "text"}
                                    variants={variants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="text-white space-y-4 "
                                >

                                    <h1 class="text-[100px] font-bold leading-none text-white font-barlow animate-fadeInUp delay-[0.4s]">
                                        {slides[index].title}
                                    </h1>
                                    <p class="text-2xl text-white font-barlow mt-4 animate-fadeInUp delay-[0.8s]">
                                        {slides[index].subtitle}
                                    </p>
                                    <div class="hero-button mt-6">



                                       <div className='orderNowBtn'>
                                         <button className="relative overflow-hidden px-14 py-4 font-semibold text-black bg-white border border-yellow-500  group transition-colors duration-500">
                                            <div className='flex items-center gap-2'><span className="relative z-10 font-bold">{slides[index].button}</span><ArrowRightIcon className="w-5 h-5" /></div>
                                            <span className="absolute inset-0 bg-yellow-400 scale-x-0 scale-y-0 group-hover:scale-100 transition-transform duration-500 ease-in-out origin-center opacity-100 z-0"></span>
                                        </button>
                                       </div>




                                    </div>
                                    <div className='countSlider flex items-center gap-5 font-semibold'>
                                        <span className=' font-barlow '>{slides[index].id}</span> <hr className='w-10/100  font-barlow font-sm-bold' /> <span className=' font-barlow '>/ 3</span>

                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div style={{ marginBottom: '-250px' }} className='col-xl-7 col-lg-7  overflow-hidden relative w-full pizzaImage'>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index + "img"}
                                    variants={variants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="flex justify-center items-center mt-8  animateImageParent md:mt-0 h-[120vh]"
                                >
                                    <motion.img
                                        src={slides[index].image}
                                        alt="Pizza"
                                        className="w-full h-auto max-h-[150vh] object-cover object-top md:max-h-[120vh] animateImage"
                                        variants={imageVariants}
                                        animate="animate"
                                        initial="initial"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                        exit={{ opacity: 0, y: -50, transition: { duration: 0.6 } }}
                        className="hidden md:flex px-4 justify-between pt-12 lg:px-10 xl:px-12"
                        style={{ marginTop: '-250px' }}
                    >
                        <motion.img src={img3} alt="" />
                        <motion.img src={img5} alt="" />
                        <motion.img src={img6} alt="" />
                    </motion.div>
                </AnimatePresence>

            </div>
        </>
    );
};

export default HeroBanner;
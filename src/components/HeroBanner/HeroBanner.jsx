import { useEffect, useState } from 'react';
import bgImage from '../../assets/hero-bg-3.jpg';
import pizzaImage from '../../assets/pizza-2.png';
import { motion, AnimatePresence } from "framer-motion";
import Button from '../Button/Button';

const HeroBanner = () => {
    const slides = [
        {
            title: "SUPER DELICIOUS PIZZA",
            subtitle: "Star Your Order Just Only $25.00",
            button: "Order Now",
            image: pizzaImage,
        },
        {
            title: "HOT & FRESH TASTE",
            subtitle: "Grab the Best Pizza in Town",
            button: "Get Yours",
            image: pizzaImage,
        },
        {
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
        animate: { rotate: 360, transition: { duration: 5, ease: "linear", repeat: Infinity } },
    };

    return (
        <>
            <div
                className="w-full h-[0.5px]"
                style={{ backgroundColor: 'rgba(241, 20, 20, 0.01)' }}
            />

            <div
                className="w-full h-screen bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="max-w-7xl w-full mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index + "text"}
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="text-white space-y-4"
                        >
                            <h1 className="text-5xl font-bold leading-tight">{slides[index].title}</h1>
                            <p className="text-lg">{slides[index].subtitle}</p>
                            <Button className="bg-yellow-400 text-black hover:bg-yellow-300">
                                {slides[index].button}
                            </Button>
                        </motion.div>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index + "img"}
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="flex justify-center mt-8 md:mt-0"
                        >
                            <motion.img
                                src={slides[index].image}
                                alt="Pizza"
                                className="w-80 h-80 object-contain"
                                variants={imageVariants}
                                animate="animate"
                                initial="initial"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
};

export default HeroBanner;
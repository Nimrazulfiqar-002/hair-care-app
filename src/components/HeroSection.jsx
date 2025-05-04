import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import { useNavigate } from "react-router-dom"; 

const images = [
  "/images/img1.PNG",
  "/images/img2.PNG",
  "/images/img3.PNG"
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-green-50 min-h-[90vh]">
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-10 py-14 rounded-3xl">
        
        <div className="max-w-md text-center md:text-left">
          <motion.h2
            className="text-4xl font-bold text-green-700 mb-2 tracking-wide font-serif"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Hair Care App
          </motion.h2>
          <motion.p
            className="italic text-green-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Discover The Perfect Solutions For Your Hair!
          </motion.p>
          <motion.p
            className="text-gray-600 text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Find ultimate care for your hair,Suggests solutions & Doctor Recommendantions. Discover Problems, Give Remedies for your hair & Doctor Advice
          </motion.p>

          <button className="mt-6 px-6 py-2 bg-green-500 text-white rounded-900 hover:bg-green-600 transition-all shadow-lg"
           onClick={() => navigate("/problem")}>
            Explore Now
          </button>
        </div>

        <div className="w-60 h-60 overflow-hidden relative rounded-xl shadow-md">
          <AnimatePresence>
            <motion.img
              key={index}
              src={images[index]}
              alt={`slide-${index}`}
              className="w-full h-full object-cover absolute rounded-xl"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

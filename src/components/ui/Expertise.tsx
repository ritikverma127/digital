"use client";
import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

interface SlideData {
  id: string;
  number: string;
  title: string;
  description: string;
  img: string;
}

const slides: SlideData[] = [
  {
    id: "1",
    number: "01",
    title: "Healthcare & Fitness",
    img: "/carosel1.jpg",
    description:
      "Leveraging smart technologies like AI, ML, IoT, and more to empower global health organizations.",
  },
  {
    id: "2",
    number: "02",
    title: "Logistics and Distribution",
    img: "/carosel2.jpg",
    description:
      "Bring your logistic industry-specific development requirements to get unique customer-centric solutions.",
  },
  {
    id: "3",
    number: "03",
    title: "Social Networking",
    img: "/carosel3.jpg",
    description:
      "Build engaging and seasoned social media applications that can offer a unique user experience.",
  },
  {
    id: "4",
    number: "04",
    title: "Real Estate",
    img: "/carosel4.jpg",
    description:
      "Get cutting-edge real-estate solutions designed specifically to meet your unique business requirements.",
  },
  {
    id: "5",
    number: "05",
    title: "Travel and Hospitality",
    img: "/carosel5.jpg",
    description:
      "Deliver seamless travel experience along with seamless user experience with top-notch features.",
  },
  {
    id: "6",
    number: "06",
    title: "Food and Restaurant",
    img: "/carosel6.jpg",
    description:
      "Building innovative solutions for businesses belonging to food and restaurants that can help them scale up.",
  },
  {
    id: "7",
    number: "07",
    title: "On-Demand and Solutions",
    img: "/carosel7.jpg",
    description:
      "Leveraging our development expertise to build astute on-demand solutions.",
  },
  {
    id: "8",
    number: "08",
    title: "Gaming",
    img: "/carosel8.jpg",
    description:
      "Integrating innovative tech stacks with our development expertise to build interactive gaming solutions.",
  },
  {
    id: "9",
    number: "09",
    title: "Retail and Ecommerce",
    img: "/carosel9.jpg",
    description:
      "Scale up your retail store to meet the growing demand of future consumers.",
  },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && !isHovered) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full space-y-4 md:space-y-8 mb-8 md:mb-16 py-16 md:py-24">
      <div className="max-w-[95vw] md:max-w-[90vw] mx-auto px-4">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Industry-Specific <br />
            Software Development Expertise
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300">
            Our IT team ensures global businesses receive tailored digital
            solutions
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Previous Slide - Hidden on mobile */}
          <motion.div
            className="hidden md:block w-1/4 h-[300px] lg:h-[400px] opacity-40 hover:opacity-70 cursor-pointer transform transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div
              className="h-full bg-cover bg-center rounded-xl"
              style={{
                backgroundImage: `url(${
                  slides[(currentSlide - 1 + slides.length) % slides.length].img
                })`,
              }}
              onClick={prevSlide}
            />
          </motion.div>

          {/* Current Slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              layoutId={`slide-${currentSlide}`} // Ye ensure karega ki same layout maintain ho
              className="w-full md:w-1/2 h-[400px] md:h-[450px] lg:h-[500px] bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden mx-0 md:mx-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slides[currentSlide].img})` }}
              >
                <div className="w-full h-full bg-black/60 p-6 md:p-8 lg:p-12 flex flex-col justify-center transform transition-transform duration-500 hover:scale-105">
                  <motion.h2
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-8"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {slides[currentSlide].title}
                  </motion.h2>
                  <motion.p
                    className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {slides[currentSlide].description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Next Slide - Hidden on mobile */}
          <motion.div
            className="hidden md:block w-1/4 h-[300px] lg:h-[400px] opacity-40 hover:opacity-70 cursor-pointer transform transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div
              className="h-full bg-cover bg-center rounded-xl"
              style={{
                backgroundImage: `url(${
                  slides[(currentSlide + 1) % slides.length].img
                })`,
              }}
              onClick={nextSlide}
            />
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-4 md:mt-6 space-x-2 md:space-x-3 overflow-x-auto px-4">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 md:w-6 h-2 md:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-blue-800 w-6 md:h-3 md:w-14"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
// import { ChevronUp, ChevronDown } from "lucide-react";

const VerticalAutoImageSlider = ({
  images,
  interval,
}: {
  images: string[];
  interval?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const sliderRef = useRef(null);

  // Function to move to the next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images]);

  // Function to move to the previous slide
  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images]);

  // Function to handle dot click
  // const goToSlide = (index) => {
  //   setCurrentIndex(index);
  // };

  // Auto-advance the slider when not paused
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        nextSlide();
      }, interval);

      return () => clearInterval(timer);
    }
  }, [interval, isPaused, nextSlide]); // Fixed dependencies (prevSlide hata diya)

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    const isSwipeDown = distance < -50;
    const isSwipeUp = distance > 50;

    if (isSwipeDown) {
      prevSlide();
    }

    if (isSwipeUp) {
      nextSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Responsive sizing with container width detection
  useEffect(() => {
    const handleResize = () => {
      // This is where you'd update any responsive behavior if needed
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-lg"
      ref={sliderRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides with smooth transition */}
      <div
        className="flex flex-col h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateY(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows with improved hover effect */}
      {/* <button
        onClick={prevSlide}
        className="absolute top-2 left-1/2 -translate-x-1/2 bg-white/30 hover:bg-white/70 p-2 rounded-full transition-colors duration-300 transform hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronUp className="h-5 w-5 text-gray-800" />
      </button> */}

      {/* <button
        onClick={nextSlide}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/30 hover:bg-white/70 p-2 rounded-full transition-colors duration-300 transform hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronDown className="h-5 w-5 text-gray-800" />
      </button> */}

      {/* Improved indicator dots with animations */}
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-blue-600 scale-150"
                : "bg-white/30 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}

      {/* Optional progress indicator */}
      {/* <div className="absolute bottom-4 left-4 text-white text-sm bg-black/50 px-2 py-1 rounded-md">
        {currentIndex + 1} / {images.length}
      </div> */}
    </div>
  );
};

export default VerticalAutoImageSlider;

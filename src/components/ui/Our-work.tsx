"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";

const TestimonialCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-24 space-y-8 sm:space-y-28">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#003366] mb-12">
          Brands find success with Taboola
        </h2>

        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Video/Screenshot Section */}
          <div className="relative rounded-lg overflow-hidden bg-[#1a3c54] w-full h-[400px]">
            <div className="relative w-full h-full">
              <Image
                src="/digitalize.webp"
                alt="Taboola campaign interface"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <button
                  onClick={openModal}
                  className="w-20 h-20 rounded-full bg-teal-400/90 flex items-center justify-center hover:bg-teal-500/90 transition-colors"
                >
                  <Play className="w-10 h-10 text-white ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div className="space-y-2 flex gap-4">
              <div className="text-[#0066ff] text-6xl md:text-7xl font-serif">
                +300%
              </div>
              <div className="text-lg md:text-xl font-semibold text-blue-600">
                INCREASE IN NEW
                <br />
                USER GROWTH
              </div>
            </div>

            <blockquote className="text-gray-700 text-lg">
              Taboola gave us another point of view in terms of the volume of
              content we create for our users. Instead of focusing solely on the
              conversion part of the funnel, we started seeing a bigger impact
              from users inside that already play and engage with the game.
            </blockquote>

            <div className="flex gap-4 pt-4">
              <div className="w-40 h-40">
                <Image
                  src="/goodlogo.png"
                  alt="Good Game logo"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <div className="py-4">
                <div className="font-semibold text-gray-900">MARY J. KIM</div>
                <div className="text-gray-600 text-sm">
                  Senior Online Marketing Manager
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative pt-[56.25%] w-full">
              <iframe
                src="/video.mp4" // Replace with your video URL
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                allowFullScreen
                allow="autoplay; encrypted-media"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialCard;

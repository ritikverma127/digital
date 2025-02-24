"use client";
import React from "react";
import { motion } from "framer-motion";
export default function Page() {
  return (
    <div className="container mx-auto px-4 py-4">
      <main className="max-w-6xl mx-auto text-center space-y-14 mb-4 sm:space-y-4 mt-16">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-4xl md:text-4xl  font-bold font-sans text-newPrimary tracking-tight"
        >
          Accelerate Growth with Digital Innovation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Leverage technology for smarter, faster, and sustainable business
          growth. Stay ahead with future-proof strategies that drive results.
        </motion.p>
      </main>

      <div className="relative max-w-4xl mx-auto space-y-14 mb-4 sm:space-y-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative rounded-2xl overflow-hidden h-96 md:h-[32rem]"
        >
          <video
            src="/video.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          ></video>
          {/* <div className="absolute inset-0 bg-[#1a3c61]/60 flex items-center justify-center"></div> */}
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-2xl md:text-3xl font-bold text-[#1a3c61] text-center mt-6"
        >
          Run Ads on Premium Publisher Sites
        </motion.h2>
      </div>
    </div>
  );
}

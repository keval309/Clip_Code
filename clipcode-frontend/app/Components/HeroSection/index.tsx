"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center text-center md:text-left mx-6 mt-16 gap-12 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
      {/* Left Section - Text Content */}
      <div className="flex-1 space-y-6 flex flex-col justify-center">
        <motion.h2
          className="font-extrabold text-4xl md:text-6xl text-gray-900 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Your Universal Code Hub. <br />
          <span className="text-main">Organized & Accessible.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-xl px-4 md:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Store, search, and manage your code snippets effortlessly. Save time,
          boost productivity, and keep your workflow seamless with our
          easy-to-use platform.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="px-8 py-4 text-lg text-white bg-main rounded-xl shadow-lg hover:bg-main/90 transition w-full sm:w-auto">
            Get Started
          </button>
          <button className="px-8 py-4 text-lg border border-main text-main rounded-xl hover:bg-main hover:text-white transition w-full sm:w-auto">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Right Section - Image */}
      <div className="flex-1 flex justify-center items-center h-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative flex justify-center items-center"
        >
          <Image
            src="/hero-image.webp"
            alt="Hero Image"
            width={550}
            height={450}
            className="w-full max-w-lg rounded-lg shadow-xl object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

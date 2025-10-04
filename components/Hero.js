"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center bg-black text-white">
      {/* Left Side - Text & Resume Button */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Hi! I am Christian, a <br /> Front-End Developer & UI/UX Designer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-lg md:text-xl mt-4"
        >
          Welcome to my portfolio
        </motion.p>

        {/* Resume Download Button */}
        <motion.a
          href="/Christian Cuario - Resume.pdf"
          download="Christian_Resume.pdf"
          className="mt-6 px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition duration-300 text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6 }}
        >
          Download Resume
        </motion.a>
      </div>

      {/* Right Side - Background Video */}
      <div className="w-full md:w-1/2 h-full">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

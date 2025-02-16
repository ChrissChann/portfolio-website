"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-8 bg-black text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Animated Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-10"
        >
          About Me
        </motion.h2>

        {/* Flex Container */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Side: me.gif as Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 h-96 bg-cover bg-center rounded-lg shadow-lg"
            style={{
              backgroundImage: "url('/me.gif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></motion.div>

          {/* Right Side: About Text + Personal Info & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6"
          >
            {/* About Text */}
            <p className="text-lg text-gray-300">
            Hi! I'm Christian, a 4th year student studying a Bachelor of Science in Information technology 
            in Holy Cross College of Davao. I am a passionate Front-End Developer and UI/UX Designer that 
            loves creating beautiful, user-friendly web interfaces and interactive designs. My goal is to 
            build flawless digital experiences that make people's lives easier.
            </p>

            {/* Two-Column Layout for Personal Info & Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-2xl font-semibold">Personal Information</h3>
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-gray-300 space-y-2"
                >
                  <li><strong>Name:</strong> Christian</li>
                  <li><strong>Age:</strong> 23</li>
                  <li><strong>Location:</strong> Davao City, Philippines</li>
                  <li><strong>Civil Status:</strong> Single</li>
                </motion.ul>
              </div>

              {/* Skills Section (Bullet Form) */}
              <div>
                <h3 className="text-2xl font-semibold">My Skills</h3>
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-gray-300 list-disc list-inside space-y-2"
                >
                  <li>Graphic Design</li>
                  <li>UI/UX Design</li>
                  <li>Front-End Development</li>
                  <li>Photography</li>
                </motion.ul>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

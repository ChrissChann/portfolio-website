"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "Huyuhoy Webpage", description: "An online website of a local food restaurant.", image: "/project1.jpg" },
  { id: 2, title: "HCDC Handbook with an AI Assistant", description: "A smart AI-powered school handbook.", image: "/project2.jpg" },
  { id: 3, title: "Food Grande' Mobile App", description: "A mobile app for food ordering & delivery.", image: "/project3.jpg" },
  { id: 4, title: "Blood Donation System", description: "A platform for managing blood donations.", image: "/project4.jpg" },
  { id: 5, title: "Eco-Farm (Capstone)", description: "An IoT-based project that rewards users with seeds for recycling plastic bottles.", image: "/project5.jpg" },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 text-white overflow-hidden bg-black">
      {/* Running Person Animation */}
      <div className="absolute bottom-10 w-32 h-32 animate-running bg-cover"
       // style={{ backgroundImage: "url('/running-person.gif')" }}//
      ></div>

      <div className="container mx-auto max-w-6xl relative z-10 px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>

        {/* Project Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col h-full"
            >
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400 flex-grow">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

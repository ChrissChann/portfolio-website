"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "Huyuhoy Webpage", description: "Is an online website of a local food restaurant, offering a menu showcase, ordering options, and essential information for a great dining experience.", image: "/project1.jpg" },
  { id: 2, title: "HCDC Handbook with an AI Assistant", description: "A smart guide that provides quick access to school policies, rules, and essential information. Integrated with an AI assistant, it offers instant answers and assistance for a seamless student experience.", image: "/project2.jpg" },
  { id: 3, title: "Food Grande' Mobile App", description: "A mobile app designed for convenient food ordering, delivery, and restaurant browsing. It offers a seamless user experience, allowing customers to explore menus, place orders, and track deliveries effortlessly.", image: "/project3.jpg" },
  { id: 4, title: "Blood Donation System", description: "A platform that manages blood donations, donor records, and blood inventory, ensuring efficient collection, storage, and distribution to those in need.", image: "/project4.jpg" },
  { id: 5, title: "Eco-Farm (Capstone)", description: "A reverse vending machine (IoT-based) automation project using solar energy that converts your plastic bottle into a reward of a pechay seed.", image: "/project5.jpg" },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const projectsPerPage = 3;
  const totalProjects = projects.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + projectsPerPage >= totalProjects ? 0 : prev + projectsPerPage));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="relative py-20 text-white overflow-hidden bg-black">
      {/* Running Person Animation */}
      <div className="absolute bottom-10 w-32 h-32 animate-running bg-cover"
        style={{ backgroundImage: "url('/running-person.gif')" }}
      ></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h2>

        {/* Project Carousel Container */}
        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={() => setIndex((prev) => (prev - projectsPerPage < 0 ? totalProjects - projectsPerPage : prev - projectsPerPage))}
            className="absolute left-0 z-10 bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
          >
            ❮
          </button>

          {/* Project Grid */}
          <div className="overflow-hidden w-full max-w-4xl">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${index * (100 / projectsPerPage)}%)` }}>
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-1/3 flex-shrink-0 p-4"
                >
                  {/* Ensuring Equal Height for All Cards */}
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-full flex flex-col">
                    <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-gray-400 flex-grow">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={() => setIndex((prev) => (prev + projectsPerPage >= totalProjects ? 0 : prev + projectsPerPage))}
            className="absolute right-0 z-10 bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}

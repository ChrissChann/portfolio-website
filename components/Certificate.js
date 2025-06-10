"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const certificates = [
  {
    id: 1,
    title: "Capstone Project Writing 1",
    provider: "Holy Cross of Davao College",
    image: "/cert1.jpg",
  },
  {
    id: 2,
    title: "Capstone Project Writing 2",
    provider: "Holy Cross of Davao College",
    image: "/cert2.jpg",
  },
  {
    id: 3,
    title: "Introduction to Critical Infrastructure Protection",
    provider: "OPSWAT",
    image: "/cert3.jpg",
  },
  {
    id: 4,
    title: "Mindanao Conference for IT Students 2023",
    provider: "Philippine Society of Information Technology Educators - Davao Region",
    image: "/cert4.jpg",
  },
  {
    id: 5,
    title: "Mindanao Conference for IT Students 2024",
    provider: "Philippine Society of Information Technology Educators - Davao Region",
    image: "/cert5.jpg",
  },
  {
    id: 6,
    title: "JavaScript Tutorial: Learn JavaScript",
    provider: "Learnoverse",
    image: "/cert6.jpg",
  },
  // Add more certificates
];

export default function Certificate() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificate" className="py-20 bg-black text-white relative">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          My Certificates
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onClick={() => setSelectedCert(cert)}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition duration-300"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="text-sm text-gray-400">{cert.provider}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg overflow-hidden max-w-3xl w-full relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 text-black text-2xl hover:text-red-600"
              >
                &times;
              </button>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full object-contain max-h-[80vh]"
              />
              <div className="p-4 text-black text-center">
                <h3 className="text-xl font-bold">{selectedCert.title}</h3>
                <p className="text-sm">{selectedCert.provider}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

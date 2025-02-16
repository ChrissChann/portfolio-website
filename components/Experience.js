"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Virtual Assitant",
    company: "Unlimit Agency",
    date: "2023 - Present",
    description: " · provides remote administrative support, managing tasks like emails, scheduling, data entry, and customer service to help businesses run smoothly.",
  },
  {
    id: 2,
    title: "Data Entry Clerk",
    company: "GSPB (NGO)",
    date: "2019 - 2020",
    description: " · inputs, updates, and maintains accurate records in databases and spreadsheets.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-black text-white">
      <div className="container mx-auto max-w-4xl">
        {/* Section Title with Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Work Experiences
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative border-l-4 border-gray-700 pl-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-10 relative"
            >

              {/* Experience Card */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-400">{exp.company}</p>
                <span className="text-sm text-gray-500">{exp.date}</span>
                <p className="mt-2 text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

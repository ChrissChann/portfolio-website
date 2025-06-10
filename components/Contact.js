"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react"; // Import icons

export default function Contact() {
  return (
    <footer id="contact" className="bg-white text-black py-12">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6"
        >
          Get in Touch
        </motion.h2>

        {/* Contact Info (Side-by-Side Layout with Icons) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700 text-lg">
          <div className="flex flex-col items-center">
            <Mail className="w-8 h-8 text-blue-600 mb-2" />
            <p className="font-semibold">Email</p>
            <p>christian4cuario@gmail.com</p>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 text-blue-600 mb-2" />
            <p className="font-semibold">Phone</p>
            <p>+939275913925</p>
          </div>
          <div className="flex flex-col items-center">
            <Send className="w-8 h-8 text-blue-600 mb-2" />
            <p className="font-semibold">Telegram</p>
            <a
              href="https://t.me/ChrissChann"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              @ChrissChann
            </a>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 text-blue-600 mb-2" />
            <p className="font-semibold">Location</p>
            <p>Davao City, Philippines</p>
          </div>
        </div>

        
      </div>
    </footer>
  );
}

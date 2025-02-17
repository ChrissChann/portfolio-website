"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for menu open/close
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold">
        𝕮
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="#about" className="hover:text-gray-400 transition">About</Link>
          <Link href="#experience" className="hover:text-gray-400 transition">Experience</Link>
          <Link href="#projects" className="hover:text-gray-400 transition">Projects</Link>
          <Link href="#contact" className="hover:text-gray-400 transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black flex flex-col items-center space-y-4 py-6 shadow-lg">
          <Link href="#about" className="hover:text-gray-400 transition" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#experience" className="hover:text-gray-400 transition" onClick={() => setIsOpen(false)}>Experience</Link>
          <Link href="#projects" className="hover:text-gray-400 transition" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="#contact" className="hover:text-gray-400 transition" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

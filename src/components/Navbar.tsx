"use client"; // Client-side component
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa"; // Mobile menu icon and account icon
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background text-text px-4 py-3 md:px-24">
      <div className="flex justify-between items-center">
        {/* Left - Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src="/rebike.svg"
              alt="Logo"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Center - Title and Buttons */}
        <div className="flex-grow text-center flex items-center justify-center space-x-4">
          <Link href="/auth/login">
            <button className="text-primary hover:text-accent px-4 py-2">
              I need a bike
            </button>
          </Link>
          <Link href="/" className="text-2xl font-bold">
            <span className="text-accent">re</span>
            <span className="text-primary">Bike</span>
          </Link>
          <Link href="/auth/login">
            <button className="text-primary hover:text-accent px-4 py-2">
              I have a bike
            </button>
          </Link>
        </div>

        {/* Right - Account Icon */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/admin">
            <FaUserCircle className="text-2xl text-primary hover:text-accent cursor-pointer" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaBars className="text-2xl text-text" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="mt-4 md:hidden flex flex-col items-center space-y-2">
          <Link href="/auth/login">
            <button className="text-primary hover:text-accent px-4 py-2">
              I need a bike
            </button>
          </Link>

          <Link href="/auth/login">
            <button className="text-primary hover:text-accent px-4 py-2">
              I have a bike
            </button>
          </Link>

          <Link href="/admin">
            <FaUserCircle className="text-2xl text-primary hover:text-accent cursor-pointer" />
          </Link>
        </div>
      )}
    </nav>
  );
}

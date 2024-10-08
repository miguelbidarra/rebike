"use client"; // Client-side component
import Link from "next/link";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa"; // Mobile menu icon and account icon
import { TiThMenu } from "react-icons/ti";
import Image from "next/image";
import { Session } from "next-auth";

interface NavbarProps {
  session: Session | null;
}

export default function Navbar({ session }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed md:static top-0 w-full bg-background text-text px-4 py-3 md:px-24 z-50">
      <div className="flex justify-between items-center">
        {/* Left - Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/bikes">
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
          <Link href="/auth/login" className="hidden sm:block">
            <button className="text-primary hover:text-accent px-4 py-2">
              I need a bike
            </button>
          </Link>
          <Link href="/" className="text-2xl font-bold">
            <span className="text-accent">re</span>
            <span className="text-primary">Bike</span>
          </Link>
          {session && (
            <Link href="/profile" className="hidden sm:block">
              <button className="text-primary hover:text-accent px-4 py-2">
                Profile
              </button>
            </Link>
          )}
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
            <TiThMenu className="text-2xl text-primary" />
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

          {session && (
            <Link href="/">
              <button className="text-primary hover:text-accent px-4 py-2">
                Profile
              </button>
            </Link>
          )}
          <Link href="/admin">
            <FaUserCircle className="text-2xl text-primary hover:text-accent cursor-pointer" />
          </Link>
        </div>
      )}
    </nav>
  );
}

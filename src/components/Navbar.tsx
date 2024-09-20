"use client"; // Make it a client-side component
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa"; // Importing a hamburger icon for mobile responsiveness

export default function Navbar({ session }: { session: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background text-text px-4 py-3 md:px-24">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-8 md:h-10 cursor-pointer" />
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaBars className="text-2xl text-text" />
          </button>
        </div>

        <div className={`flex-1 md:flex justify-center items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 text-center">
            <li>
              <Link href="/" className="hover:text-primary">Home</Link>
            </li>
            <li>
              <Link href="/puzzles" className="hover:text-primary">Puzzles</Link>
            </li>
            {!session?.user ? (
              <>
                <li>
                  <Link href="/auth/login" className="hover:text-primary">Login</Link>
                </li>
                <li>
                  <Link href="/auth/register" className="hover:text-primary">Register</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/dashboard" className="hover:text-primary">Dashboard</Link>
                </li>
                <li>
                  <Link href="/api/auth/signout" className="hover:text-primary">Logout</Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="hidden md:flex items-center">
          <Link href="/auth/login">
            <button className="bg-primary hover:bg-accent text-background px-4 py-2 rounded ml-4">
              Get it here
            </button>
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="flex justify-center mt-4 md:hidden">
          <Link href="/auth/login">
            <button className="bg-primary hover:bg-accent text-background px-4 py-2 rounded">
              Get it here
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

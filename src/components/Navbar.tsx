import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import logo from "@/assets/puzzle-logo.jpg";

async function Navbar() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <nav className="navbar bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-24 py-3">
      <div className="navbar-start">
        <Link href="/">
          <img
            src="/puzzle-logo.jpg"
            alt="Logo"
            className="h-10 cursor-pointer"
          />
        </Link>
      </div>

      <div className="navbar-center">
        <ul className="menu menu-horizontal p-0">
          {!session?.user ? (
            <>
              <li>
                <Link href="/" className="hover:text-yellow-300">Home</Link>
              </li>
              <li>
                <Link href="/auth/login" className="hover:text-yellow-300">Login</Link>
              </li>
              <li>
                <Link href="/auth/register" className="hover:text-yellow-300">Register</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/dashboard" className="hover:text-yellow-300">Dashboard</Link>
              </li>
              <li>
                <Link href="/api/auth/signout" className="hover:text-yellow-300">Logout</Link>
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="navbar-end">
        <Link href="/auth/login">
          <button className="btn btn-success ml-4">
            Get it here
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
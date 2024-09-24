import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import { getServerSession } from "next-auth/next"; // Server session
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Your NextAuth options
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "reBike",
  description: "Discover a new 3D printed puzzle every month! Delivered straight to your door.",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions); // Fetch session on server side

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar session={session} /> {/* Pass session to Navbar */}
        {children}
      </body>
    </html>
  );
}

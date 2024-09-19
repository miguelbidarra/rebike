"use client";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="h-[calc(100vh-7rem)] flex flex-col justify-center items-center p-8 bg-cover bg-center relative">
        <img
          src="/puzzle-bg.jpg"
          alt="Puzzle Background"
          className="absolute inset-0 w-full h-full object-cover object-right z-0 filter blur-lg"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-4 text-yellow-400">Puzzle Monthly</h1>
          <p className="text-2xl max-w-2xl text-pink-300">
            Discover a new 3D printed puzzle every month! Delivered straight to your door.
          </p>
          <motion.button
            className="mt-8 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Subscribe Now
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Why Puzzle Monthly?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-yellow-300 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">1. Boost your IQ</h3>
              <p className="text-lg text-gray-800">Engage your brain with challenging puzzles that help improve your cognitive skills.</p>
            </div>
            <div className="bg-green-300 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">2. Impress your friends</h3>
              <p className="text-lg text-gray-800">Show off your puzzle-solving skills and impress your friends with unique designs.</p>
            </div>
            <div className="bg-blue-300 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">3. Have fun!</h3>
              <p className="text-lg text-gray-800">Enjoy hours of entertainment and satisfaction with each new puzzle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Our Pricing</h2>
          <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="bg-white text-black p-8 m-4 rounded-lg shadow-lg w-full max-w-sm">
              <h3 className="text-3xl font-bold mb-4">Normal</h3>
              <p className="text-2xl mb-4">$10/month</p>
              <ul className="text-lg mb-4">
                <li className="mb-2">1 Puzzle Delivered Monthly</li>
                <li className="mb-2">Basic Difficulty</li>
                <li>Standard Shipping</li>
              </ul>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-xl">Choose Plan</button>
            </div>
            <div className="bg-white text-black p-8 m-4 rounded-lg shadow-lg w-full max-w-sm">
              <h3 className="text-3xl font-bold mb-4">Premium</h3>
              <p className="text-2xl mb-4">$20/month</p>
              <ul className="text-lg mb-4">
                <li className="mb-2">1 Puzzle Delivered Monthly</li>
                <li className="mb-2">Advanced Difficulty</li>
                <li>Priority Shipping</li>
              </ul>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-xl">Choose Plan</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg mb-4 text-gray-900">
                "Puzzle Monthly has been a game-changer for me! The puzzles are always challenging and fun. I look forward to my delivery every month."
              </p>
              <h3 className="text-xl font-bold text-gray-900">- Alex B.</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg mb-4 text-gray-900">
                "I signed up for the Premium plan, and the puzzles have been top-notch. They’re intricate, unique, and definitely worth the price!"
              </p>
              <h3 className="text-xl font-bold text-gray-900">- Sarah P.</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg mb-4 text-gray-900">
                "The variety and quality of puzzles are excellent! I’ve recommended Puzzle Monthly to all my puzzle-loving friends."
              </p>
              <h3 className="text-xl font-bold text-gray-900">- Michael R.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center text-gray-500">
        <p>&copy; 2024 Puzzle Monthly. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function HomePage() {
  // Motion variants for animation reuse
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const hoverEffect = {
    hover: { scale: 1.05, boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)" },
    tap: { scale: 0.95 },
  };

  return (
    <div className="bg-background text-text">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container px-4 md:px-6">
          <motion.div
            className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="flex flex-col justify-center space-y-4 lg:pe-12">
              <motion.div
                className="space-y-2 text-center lg:text-left"
                initial="hidden"
                animate="visible"
                variants={slideIn}
              >
                <motion.h1
                  className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Unlock Your Mind
                </motion.h1>
                <motion.p
                  className="max-w-[600px] text-zinc-200 md:text-xl mx-auto lg:mx-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  Challenge yourself with our Monthly Puzzle subscription. A new
                  brain-teaser delivered to your inbox every month.
                </motion.p>
              </motion.div>
              <motion.div className="w-full max-w-sm space-y-2 mx-auto lg:mx-0 text-center lg:text-left">
                <motion.button
                  className="bg-white text-purple-600 hover:bg-zinc-100 px-8 py-4 rounded-lg text-xl"
                  variants={hoverEffect}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Start Puzzling Now
                </motion.button>
                <p className="text-xs text-zinc-300">
                  No credit card required. Cancel anytime.
                </p>
              </motion.div>
            </div>
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                alt="Puzzle Pieces"
                className="aspect-[4/3] overflow-hidden rounded-xl object-cover object-center"
                height={400}
                src="/placeholder.svg?height=400&width=600"
                width={600}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-8 text-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Why Puzzle Monthly?
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {[
              {
                number: "1",
                title: "Boost IQ",
                description: "Engage your brain.",
              },
              {
                number: "2",
                title: "Impress Friends",
                description: "Show off your skills.",
              },
              {
                number: "3",
                title: "Have Fun!",
                description: "Enjoy hours of entertainment.",
              },
            ].map((feature, index) => (
              <motion.div
                className="flex flex-col items-center justify-center p-6 rounded-full bg-secondary shadow-lg hover:bg-white transition-colors duration-300 border-4 border-purple-600 hover:border-accent"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                key={index}
              >
                <motion.div className="text-5xl font-bold text-purple-600 mb-2">
                  {feature.number}
                </motion.div>
                <h3 className="text-lg font-bold text-text mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-text text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-5xl font-bold mb-10 text-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Unlock Your Puzzle Adventure
          </motion.h2>
          <div className="flex flex-col md:flex-row justify-center items-start">
            {[
              {
                plan: "Basic",
                price: "10€",
                features: [
                  "1 Monthly Puzzle",
                  "Casual Difficulty",
                  "Free Shipping",
                ],
                description: "Perfect for beginners!",
              },
              {
                plan: "Plus",
                price: "20€",
                features: [
                  "1 Challenging Puzzle/Month",
                  "Expert Difficulty",
                  "Expedited Shipping",
                ],
                description: "For seasoned puzzlers!",
              },
            ].map((pricing, index) => (
              <motion.div
                className="bg-secondary text-text p-8 m-4 rounded-lg shadow-lg w-full max-w-xs transform transition-transform duration-300 hover:scale-105"
                key={index}
                variants={fadeIn}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative mb-6">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-accent text-background text-4xl font-bold p-4 rounded-full">
                    {pricing.plan}
                  </div>
                  <div className="mt-10 mb-4 text-3xl font-bold">
                    {pricing.price} <span className="text-lg">/ month</span>
                  </div>
                </div>
                <p className="text-lg italic mb-4">{pricing.description}</p>
                <ul className="text-lg mb-6">
                  {pricing.features.map((feature, idx) => (
                    <li key={idx} className="mb-2 flex items-center">
                      <span className="mr-2 text-xl text-accent">✔️</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="bg-primary hover:bg-accent text-background px-8 py-3 rounded-lg text-xl transition-colors duration-300 shadow-md"
                  variants={hoverEffect}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-center text-text">
        <p>&copy; 2024 Puzzle Monthly. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;

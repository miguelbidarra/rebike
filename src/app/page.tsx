"use client";

import { useState } from "react";
import {
  Bike,
  Calendar,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Recycle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How long can I keep the bike?",
      a: "You can rent a bike for as short as a day or as long as several months. We offer flexible rental periods to suit your needs.",
    },
    {
      q: "What if the bike gets damaged?",
      a: "We have an insurance policy that covers minor damages. For major damages, we assess each case individually.",
    },
    {
      q: "How do I return the bike?",
      a: "You can return the bike to any of our designated return points. We&apos;ll provide you with a list of locations when you rent the bike.",
    },
    {
      q: "Are the bikes well-maintained?",
      a: "Yes, all our bikes undergo a thorough inspection and maintenance check before being rented out to ensure they&apos;re in excellent condition.",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ride, Return, Repeat with rebike
          </h1>
          <p className="text-xl mb-8">
            Your sustainable solution for short-term bike needs. Rent a
            second-hand bike and return it when you&apos;re done.
          </p>
          <div className="space-x-4">
            <Link href="/bikes" className="bg-[var(--primary)] text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
              Find a Bike
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/rebike.svg"
            alt="Rebike hero"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="bg-[var(--background)] py-20 overflow-x-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="bg-gray-100 p-6 flex flex-col sm:py-12 rounded-lg shadow-md">
            <ul className="list-none">
              {[
                {
                  icon: Bike,
                  text: "You need a bike for a short period of time",
                },
                {
                  icon: Calendar,
                  text: "Choose the bike and schedule a meeting",
                },
                {
                  icon: CheckCircle,
                  text: "Use the bike until you don't need it anymore",
                },
                {
                  icon: Recycle,
                  text: "Return the bike for the next person to use",
                },
              ].map((step, index) => (
                <li
                  key={index}
                  className="rounded-lg group cursor-pointer mb-6"
                >
                  <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-col items-center">
                      {index !== 0 && (
                        <div className="border-l-2 h-16 border-gray-400"></div>
                      )}
                      <div className="bg-[var(--accent)] border-2 border-gray-400 rounded-full h-12 w-12 flex items-center justify-center mb-2">
                        <step.icon className="text-white w-6 h-6" />
                      </div>
                      {index !== 3 && (
                        <div className="border-l-2 h-16 border-gray-400"></div>
                      )}
                    </div>
                    <div className="flex flex-col group-hover:bg-white ml-4 p-4 pr-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
                      <div className="text-lg font-medium text-gray-800">
                        {step.text}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Why Choose rebike?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[var(--secondary)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Re(bi)cycle</h3>
            <p>
              Close the waste cycle by using second-hand bikes. Give a new life
              to perfectly good bicycles and reduce waste.
            </p>
          </div>
          <div className="bg-[var(--secondary)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Hassle-free Experience
            </h3>
            <p>
              No need to buy and have the trouble of selling back. We handle all
              the work for you, making your biking experience smooth and easy.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--background)] py-20" id="faq">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            {/* Left - Section Heading */}
            <div className="md:w-1/3 text-left mb-12 md:mb-0 md:pr-8">
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                FAQ
              </h2>
              <h5
                className="text-lg"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Answers to some questions you might have.
              </h5>
            </div>

            {/* Right - FAQ List */}
            <div className="md:w-2/3 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-accent overflow-hidden"
                >
                  <button
                    className="flex justify-between items-center w-full p-4 text-left font-semibold"
                    onClick={() => toggleFaq(index)}
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {faq.q}
                    {openFaq === index ? (
                      <ChevronUp className="faq-icon" width={23} height={23} />
                    ) : (
                      <ChevronDown
                        className="faq-icon"
                        width={23}
                        height={23}
                      />
                    )}
                  </button>
                  {openFaq === index && (
                    <div
                      className="p-4 bg-gray-50"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--primary)] text-white py-2">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 rebike. Website made by a student for students.</p>
        </div>
      </footer>
    </div>
  );
}
import { ChevronDown, ChevronUp } from "lucide-react";
import { FaQuestionCircle } from "react-icons/fa";
import { useState } from "react";

interface FaqProps {
  openFaq: number | null;
  toggleFaq: (index: number) => void;
}

const FAQ: React.FC<FaqProps> = ({ openFaq, toggleFaq }) => {
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
    <section className="bg-[var(--background)] py-20" id="faq">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Left - Section Heading */}
          <div className="md:w-1/3 flex flex-col items-center mb-12 md:mb-0 md:pr-8">
            <h1
              className="text-5xl font-bold text-center"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              FAQ
            </h1>
            <div className="flex justify-center items-center h-full mt-4">
              <FaQuestionCircle size={100} className="text-accent" />
            </div>
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
                    <ChevronDown className="faq-icon" width={23} height={23} />
                  )}
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaq === index ? "max-h-96" : "max-h-0"
                  }`}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <div className="p-4 bg-gray-50">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

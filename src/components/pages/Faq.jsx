import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do I book a trip?",
    a: "You can book a trip directly through our booking page. Simply choose your destination, trip type, preferred dates, and submit your request. Our team will contact you within 24 hours."
  },
  {
    q: "Do you offer customized travel packages?",
    a: "Yes! We specialize in fully customized trips based on your preferences, budget, and travel style."
  },
  {
    q: "Are flights included in the package?",
    a: "Flights may or may not be included depending on the package. Our travel experts will clearly explain everything before confirmation."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Visa, MasterCard, American Express, and bank transfers. Secure payment options are provided."
  },
  {
    q: "Is it safe to travel with your company?",
    a: "Absolutely. We work with verified partners, provide 24/7 support, and prioritize your safety at every step."
  },
  {
    q: "Can I cancel or reschedule my trip?",
    a: "Yes, cancellation and rescheduling policies depend on the selected package. Our team will guide you clearly."
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-gray-50 font-body">
      <div className="max-w-5xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent uppercase tracking-widest text-sm mb-3">
            Need Help?
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-primary-dark">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about booking, payments, and travel
            experiences with us.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300
                  ${isOpen
                    ? "border-primary shadow-lg"
                    : "border-gray-200 hover:border-primary/50"
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-heading font-medium text-primary-dark">
                    {item.q}
                  </span>

                  <ChevronDown
                    className={`transition-transform duration-300 text-primary
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-300
                    ${isOpen ? "max-h-40 pb-6" : "max-h-0"}
                  `}
                >
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-medium transition"
          >
            Contact Our Team
          </a>
        </div>

      </div>
    </section>
  );
}

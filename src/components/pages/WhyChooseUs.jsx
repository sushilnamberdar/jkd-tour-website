import React from "react";
import {
  ShieldCheck,
  UserCheck,
  BadgeDollarSign,
  Headphones,
} from "lucide-react";

import whyImage from "../assets/why-choose.webp";

const features = [
  {
    title: "Safety First",
    description:
      "Your well-being is our top priority. We partner only with trusted operators and follow strict safety protocols for every adventure.",
    icon: ShieldCheck,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Personalized Experiences",
    description:
      "No two travelers are the same. We tailor your journey to your pace, style, and passion — from solo escapes to family vacations.",
    icon: UserCheck,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Transparent Pricing",
    description:
      "What you see is what you get. No hidden fees. No surprises. Just honest, fair pricing for unforgettable experiences.",
    icon: BadgeDollarSign,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "24/7 Support",
    description:
      "Questions before, during, or after your trip? Our dedicated support team is here for you whenever you need us.",
    icon: Headphones,
    color: "bg-pink-100 text-pink-600",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div data-aos="fade-right">
          <img
            src={whyImage}
            alt="Happy travelers"
            className="w-full h-[520px] object-cover rounded-3xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div data-aos="fade-left">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-gray-800 mb-4">
            Why Choose Us?
          </h2>

          <p className="text-gray-600 mb-8 max-w-xl">
            We’re not just about travel — we’re about transforming the way you
            explore the world. Here’s what sets us apart:
          </p>

          <div className="space-y-6">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex gap-4 items-start"
                >
                  <div
                    className={`w-14 h-10 flex items-center justify-center rounded-full ${item.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;

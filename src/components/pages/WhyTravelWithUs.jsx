import React from "react";
import {
  ShieldCheck,
  Award,
  HeartHandshake,
  ArrowRight,
  Star,
} from "lucide-react";

const features = [
  {
    title: "Classic & Trusted",
    description:
      "Discover the world with confidence, comfort, and expert care.",
    icon: ShieldCheck,
  },
  {
    title: "Experience-Oriented",
    description:
      "We’re more than a booking agency — we’re your travel partner.",
    icon: Award,
  },
  {
    title: "Approachable",
    description:
      "Choose us for attention to detail, honest pricing, and unforgettable experiences.",
    icon: HeartHandshake,
  },
];

const reviews = [
  {
    name: "Tripadvisor",
    rating: "4.8/5",
    stars: 5,
    text: "Trusted by over 1,700 reviewers worldwide.",
  },
  {
    name: "Google",
    rating: "5/5",
    stars: 5,
    text: "Based on 1200+ Reviews",
  },
  {
    name: "Trustpilot",
    rating: "5/5",
    stars: 5,
    text: "Based on 800+ Reviews",
  },
  {
    name: "Facebook",
    rating: "4.5/5",
    stars: 4,
    text: "Based on 800+ Reviews",
  },
];

const awards = ["2015", "2018", "2020", "2022", "2023", "2024"];

const WhyTravelWithUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">

          {/* LEFT */}
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-gray-800">
              Why Travel <br />
              <span className="text-primary">With Us?</span>
            </h2>

            <button className="mt-6 inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition">
              Learn More <ArrowRight size={18} />
            </button>
          </div>

          {/* RIGHT FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-accent/20 text-accent">
                    <Icon size={22} />
                  </div>
                  <h4 className="font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* REVIEWS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reviews.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="bg-white rounded-2xl shadow-sm p-6 text-center border"
            >
              <h4 className="font-semibold text-lg">{item.name}</h4>

              <div className="flex justify-center my-2">
                {[...Array(item.stars)].map((_, idx) => (
                  <Star key={idx} size={16} className="text-accent fill-accent" />
                ))}
              </div>

              <p className="font-medium">{item.rating}</p>
              <p className="text-sm text-gray-500 mt-1">{item.text}</p>
            </div>
          ))}
        </div>

        {/* AWARDS */}
        <div className="text-center">
          <p className="text-gray-700 font-medium mb-6">
            We are proud to be awarded by TripAdvisor Excellence Award
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {awards.map((year, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                className="text-sm text-gray-600"
              >
                🏆 {year}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyTravelWithUs;

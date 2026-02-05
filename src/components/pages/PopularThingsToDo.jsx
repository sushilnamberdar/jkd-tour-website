import React from "react";
import { ArrowRight } from "lucide-react";

const activities = [
  {
    name: "Bird Watching",
    trips: "3 Trips",
    image:
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=800",
  },
  {
    name: "Cultural Heritage",
    trips: "5 Trips",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
  },
  {
    name: "Jungle Safari",
    trips: "3 Trips",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800",
  },
  {
    name: "Photography",
    trips: "3 Trips",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800",
  },
  {
    name: "Scuba Diving",
    trips: "3 Trips",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
  },
  {
    name: "Skiing",
    trips: "3 Trips",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800",
  },
];

const PopularThingsToDo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Heading */}
        <p className="text-accent uppercase tracking-wide font-medium mb-2">
          Unforgettable Activities
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-gray-800 mb-12">
          Popular Things to Do
        </h2>

        {/* Activities */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-14">
          {activities.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Circle Image */}
              <div className="w-36 h-36 rounded-full overflow-hidden mb-4 transition-transform duration-500 group-hover:scale-105">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <h4 className="font-semibold text-gray-800">
                {item.name}
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                {item.trips}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-full hover:bg-primary-dark transition">
          See All Travel Deals
          <ArrowRight size={18} />
        </button>

      </div>
    </section>
  );
};

export default PopularThingsToDo;

import React from "react";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    categories: ["Adventure Travel", "Travel Guide"],
    title: "Behind the Scenes: A Day in the Life of a Travel Planner",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    categories: ["Solo Travel", "Travel Guide"],
    title: "Romantic Getaways: Top Destinations for Couples in 2025",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    categories: ["Road Trips", "Solo Travel"],
    title: "How to Make the Most of a 7-Day Trip in Thailand",
  },
];

const TravelDeskPage = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-medium uppercase tracking-wide">
            Our Travel Diary
          </p>
          <h2 className="text-4xl font-heading mt-3">
            From Our <span className="font-semibold">Travel Desk</span>
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {articles.map((item) => (
            <article
              key={item.id}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Categories */}
              <div className="flex gap-4 mt-4 text-xs text-primary">
                {item.categories.map((cat, index) => (
                  <span key={index} className="hover:underline">
                    {cat}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="mt-3 text-base font-semibold text-gray-900 leading-snug group-hover:text-primary transition">
                {item.title}
              </h3>
            </article>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-14">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition"
          >
            Explore All Articles
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default TravelDeskPage;

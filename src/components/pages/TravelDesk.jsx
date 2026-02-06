import React from "react";
import { Link } from "react-router-dom";

const articles = [
    {
        id: 1,
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        tags: ["Adventure Travel", "Travel Guide"],
        title: "Behind the Scenes: A Day in the Life of a Travel Planner",
    },
    {
        id: 2,
        image:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        tags: ["Solo Travel", "Travel Guide"],
        title: "Romantic Getaways: Top Destinations for Couples in 2025",
    },
    {
        id: 3,
        image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        tags: ["Road Trips", "Solo Travel"],
        title: "How to Make the Most of a 7-Day Trip in Thailand",
    },
];

const TravelDesk = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-14">
                    <p className="text-accent text-sm font-medium uppercase tracking-wide">
                        Our Travel Diary
                    </p>
                    <h2 className="text-4xl font-heading mt-3">
                        From Our <span className="text-primary">Travel Desk</span>
                    </h2>
                </div>

                {/* Articles */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {articles.map((item) => (
                        <article key={item.id} className="group">
                            {/* Image */}
                            <div className="overflow-hidden rounded-2xl">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Tags */}
                            <div className="flex gap-4 mt-4 text-xs text-primary">
                                {item.tags.map((tag, i) => (
                                    <span key={i} className="hover:underline cursor-pointer">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Title */}
                            <h3 className="mt-3 text-lg font-semibold text-gray-800 leading-snug group-hover:text-primary transition">
                                {item.title}
                            </h3>
                        </article>
                    ))}
                </div>

                {/* Button */}
                <div className="flex justify-center mt-14">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-full hover:bg-secondary transition"
                    >
                        Explore All Articles
                        <span> <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5" /* This controls the icon size perfecty */
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg></span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TravelDesk;

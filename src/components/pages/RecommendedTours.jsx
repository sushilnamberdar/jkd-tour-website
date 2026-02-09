import React from "react";
import { Heart, MapPin, Clock, Activity, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Discover the Best of Europe in 15 Days",
    location: "France, Greece",
    image:
      "https://api.jkdtour.com/images/recomondation/france.jpeg",
    duration: "15 Days",
    activities: "2 Activities",
    price: "$1350",
    oldPrice: "$1400",
    featured: false,
  },
  {
    title: "Grand Asia Tour: From Tokyo to Bangkok",
    location: "Japan",
    image:
      "https://api.jkdtour.com/images/recomondation/japan.jpg",
    duration: "7 Days",
    activities: "2 Activities",
    price: "$1300",
    featured: false,
  },
  {
    title: "Australia & New Zealand Discovery Tour",
    location: "Australia",
    image:
      "https://api.jkdtour.com/images/recomondation/australia.jpeg",
    duration: "6 Days",
    activities: "3 Activities",
    price: "$1800",
    featured: true,
  },
  {
    title: "Japan Highlights Tour – Kyoto and Mt. Fuji Views",
    location: "Japan",
    image:
      "https://api.jkdtour.com/images/recomondation/japan1.jpeg",
    duration: "8 Days",
    activities: "2 Activities",
    price: "$1200",
    featured: true,
  },
  {
    title: "Wild Canadian Rockies Hiking Adventure",
    location: "Greece",
    image:
      "https://api.jkdtour.com/images/recomondation/australia1.jpeg",
    duration: "6 Days",
    activities: "2 Activities",
    price: "$1599",
    oldPrice: "$1800",
    featured: true,
  },
  {
    title: "Best of Thailand – Feel Free To Travel Here",
    location: "Philippines, Thailand",
    image:
      "https://api.jkdtour.com/images/recomondation/thailand.jpeg",
    duration: "5 Days",
    activities: "2 Activities",
    price: "$2299",
    featured: false,
  },
  {
    title: "Mystical Mountain Escape: Scenic Himalayan Trekking Tour",
    location: "Nepal",
    image:
      "https://api.jkdtour.com/images/recomondation/nepal.jpeg",
    duration: "7 Days",
    activities: "2 Activities",
    price: "$2299",
    featured: true,
  },
  {
    title: "Cultural Odyssey: An Immersive Experience",
    location: "Nepal",
    image:
      "https://api.jkdtour.com/images/recomondation/nepal1.webp",
    duration: "7 Days",
    activities: "2 Activities",
    price: "$2099",
    featured: false,
  },
];

const RecommendedTours = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Heading */}
        <p className="text-accent font-medium mb-2">
          We’ve got something you’ll love.
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-gray-800 mb-12">
          Recommended <span className="font-bold">Just for You</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {tours.map((tour, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="bg-white rounded-2xl shadow-sm border overflow-hidden group"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Featured badge */}
                {tour.featured && (
                  <span className="absolute top-3 left-3 bg-accent text-white text-xs px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}

                {/* Wishlist */}
                <button className="absolute top-3 right-3 bg-white/90 p-2 rounded-full">
                  <Heart size={16} className="text-gray-600" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 text-left">
                <p className="text-xs text-gray-500 flex items-center gap-1 mb-1">
                  <MapPin size={12} /> {tour.location}
                </p>

                <h3 className="font-semibold text-gray-800 text-sm mb-3 line-clamp-2">
                  {tour.title}
                </h3>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {tour.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Activity size={14} /> {tour.activities}
                  </span>
                </div>

                <div className="text-sm font-semibold">
                  {tour.oldPrice && (
                    <span className="line-through text-gray-400 mr-2">
                      {tour.oldPrice}
                    </span>
                  )}
                  <span className="text-gray-900">{tour.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link to="/search">

          <button className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-full hover:bg-primary-dark transition">
            Explore All Tours <ArrowRight size={18} />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default RecommendedTours;

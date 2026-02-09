import React from "react";
import { MapPin, Clock, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const tours = [
  {
    id: 1,
    title: "Discover the Best of Europe in 15 Days",
    location: "France, Greece",
    days: "15 Days",
    price: 1350,
    oldPrice: 1400,
    image: "https://api.jkdtour.com/images/traveldream/france.webp",
    discount: "10% Off",
  },
  {
    id: 2,
    title: "Grand Asia Tour: From Tokyo to Bangkok",
    location: "Japan",
    days: "7 Days",
    price: 1300,
    image: "https://api.jkdtour.com/images/traveldream/japan.webp",
  },
  {
    id: 3,
    title: "Australia & New Zealand Discovery Tour",
    location: "Australia",
    days: "6 Days",
    price: 1800,
    image: "https://api.jkdtour.com/images/traveldream/australia.webp",
  },
  {
    id: 4,
    title: "Everest Passes Trek – High Altitude Challenge Route",
    location: "Everest, Nepal",
    days: "15 Days",
    price: 1800,
    oldPrice: 2400,
    discount: "25% Off",
    image: "https://api.jkdtour.com/images/traveldream/nepal.webp",
  },
  {
    id: 1,
    title: "Discover the Best of Europe in 15 Days",
    location: "France, Greece",
    days: "15 Days",
    price: 1350,
    oldPrice: 1400,
    image: "https://api.jkdtour.com/images/traveldream/greece.webp",
    discount: "10% Off",
  },
  {
    id: 2,
    title: "Grand Asia Tour: From Tokyo to Bangkok",
    location: "Japan",
    days: "7 Days",
    price: 1300,
    image: "https://api.jkdtour.com/images/traveldream/japan1.jpeg",
  },
  {
    id: 3,
    title: "Australia & New Zealand Discovery Tour",
    location: "Australia",
    days: "6 Days",
    price: 1800,
    image: "https://api.jkdtour.com/images/traveldream/australia1.jpeg",
  },
  {
    id: 4,
    title: "Everest Passes Trek – High Altitude Challenge Route",
    location: "Everest, Nepal",
    days: "15 Days",
    price: 1800,
    oldPrice: 2400,
    discount: "25% Off",
    image: "https://api.jkdtour.com/images/traveldream/everest.jpg",
  },
];

const Tours = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 data-aos="fade-up" className="text-3xl font-bold playwrite-font  text-center mb-8">Dedicated to Turning Your Travel Dreams <br /><p data-aos="fade-left" className="text-accent hover:text-secondary transition duration-300 ease-in-out mt-5"> Into Reality</p></h2>

        {/* Grid */}
        <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="h-56 w-full object-cover"
                />

                {/* Discount */}
                {tour.discount && (
                  <span className="absolute top-3 left-3 bg-accent text-black text-xs font-semibold px-3 py-1 rounded-full">
                    {tour.discount}
                  </span>
                )}

                {/* Wishlist */}
                <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow">
                  <Heart className="w-4 h-4 text-gray-400 hover:text-red-500" />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center text-sm text-gray-500 gap-1 mb-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  {tour.location}
                </div>

                <h3 className="font-heading font-semibold text-lg leading-snug mb-4">
                  {tour.title}
                </h3>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="w-4 h-4" />
                    {tour.days}
                  </div>

                  <div className="text-right">
                    {tour.oldPrice && (
                      <span className="line-through text-gray-400 text-sm mr-2">
                        ${tour.oldPrice}
                      </span>
                    )}
                    <span className="font-semibold text-primary">
                      ${tour.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <Link to="/search">
            <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition flex items-center gap-2">
              Explore All Tours →
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Tours;

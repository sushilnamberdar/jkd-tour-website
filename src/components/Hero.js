import React from "react";
import bgImage from "./assets/background.webp";
import bottomimag from "./assets/cloudbottom.png";
import Search from "./Search";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen border-none overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-30">
        <div className="text-center flex flex-col items-center px-4">
          {/* Heading */}
          <h1 data-aos="fade-up" className="text-white flex   text-4xl font-heading font-bold uppercase md:text-6xl ">
            J <p className="text-accent hover:text-secondary transition duration-300 ease-in-out"> K </p>D<span className="text-accent ml-3 hover:text-secondary transition duration-300 ease-in-out">Tours</span>
          </h1>

          {/* Sub text */}
          <p data-aos="fade-up" className="text-gray-100 text-lg mt-4 md:text-xl animate-fade-up delay-200">
            Discover Beautiful Destinations, Create Unforgettable Memories
          </p>

          {/* Search */}
          <div data-aos="fade-right" className="mt-8">
            <Search />
          </div>
        </div>
      </div>

      {/* Bottom cloud image */}
      <div
        className="absolute bottom-0 w-full h-40 bg-cover bg-center animate-fade-in delay-600"
        style={{ backgroundImage: `url(${bottomimag})` }}
      />
      <div className="absolute bottom-0 w-full h-40 mt-[40px] bg-gradient-to-b from-transparent to-gray-50 animate-fade-in delay-600">
        {/* Content goes here */}
      </div>
    </div>
  );
};

export default Hero;

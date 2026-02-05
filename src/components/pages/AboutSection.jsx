import React from "react";
import aboutImage from "../assets/image-2.webp";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <div data-aos="fade-left">
            <p className="text-accent playpen-sans mb-3">About Us</p>

            <h2 className="text-3xl md:text-4xl font-light playpen-sans  text-gray-800 leading-tight">
              Explore the World <span className="font-bold">with</span>
              <br />
              <span className="font-bold">Confidence</span>
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              With expert knowledge, personalized service, and carefully curated
              tours, we help you travel smarter, safer, and more meaningfully.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We are a trusted travel agency dedicated to making your travel dreams
              a reality. Whether you're planning a relaxing beach holiday, a cultural
              city tour, a romantic getaway, or a thrilling adventure, we’re here to
              guide you every step of the way.
            </p>

            <button className="mt-7 inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition">
              Know Before You Go
              <span className="text-lg">→</span>
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative  " data-aos="page-turn">
            <img
              src={aboutImage}
              alt="Adventure travel"
              data-aos="fade-right"
              className="w-full   h-[620px] object-cover rounded-2xl  "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

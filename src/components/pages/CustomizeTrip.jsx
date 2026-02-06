import React from "react";
import bgImage from "../assets/ice-mount.webp"; 

const CustomizeTrip = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Main Card */}
        <div
        aos-animate="fade-up"
         data-aos="fade-up"
         data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
          className="  relative rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* LEFT CONTENT */}
          <div data-aos="fade-left" className="relative z-10 p-10 lg:p-14 text-white flex flex-col justify-center">
            <p className="text-sm uppercase tracking-wide text-accent mb-3">
              Customize Your Trip
            </p>

            <h2 className="text-3xl md:text-4xl font-heading font-semibold leading-tight">
              Plan Your Dream Trip,
              <br />
              <span className="text-accent">Your Way</span>
            </h2>

            <p className="mt-6 text-white/90 max-w-md text-sm leading-relaxed">
              Tell us what you’re looking for, and we’ll craft a personalized
              travel experience just for you — whether it’s a romantic escape,
              a family getaway, or an off-the-beaten-path adventure.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div data-aos="fade-right" className="relative z-10 p-8 lg:p-10">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full border-b border-gray-300 focus:border-primary outline-none py-2 text-sm"
                />

                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full border-b border-gray-300 focus:border-primary outline-none py-2 text-sm"
                />

                <input
                  type="text"
                  placeholder="Whatsapp number"
                  className="w-full border-b border-gray-300 focus:border-primary outline-none py-2 text-sm"
                />

                <input
                  type="text"
                  placeholder="Dates"
                  className="w-full border-b border-gray-300 focus:border-primary outline-none py-2 text-sm"
                />

                <textarea
                  placeholder="Special req / notes"
                  rows="3"
                  className="w-full border-b border-gray-300 focus:border-primary outline-none py-2 text-sm resize-none"
                />

                <button
                  type="submit"
                  className="w-full mt-6 bg-primary hover:bg-secondary text-white py-3 rounded-full transition font-medium"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <Stat value="10yrs+" text="A decade of creating unforgettable travel memories." />
          <Stat value="5k+" text="Delighted clients from all around the globe." />
          <Stat value="150+" text="From iconic cities to hidden gems across continents." />
          <Stat value="1.2k+" text="Tailored experiences designed to fit every traveler." />
        </div>

      </div>
    </section>
  );
};

export default CustomizeTrip;

/* ---------- STAT ---------- */
const Stat = ({ value, text }) => (
  <div>
    <h3 className="text-4xl font-heading text-primary font-semibold">
      {value}
    </h3>
    <p className="mt-3 text-sm text-gray-600 max-w-xs mx-auto">
      {text}
    </p>
  </div>
);

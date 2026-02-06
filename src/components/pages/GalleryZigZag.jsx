import React from "react";
import bgImage from "../assets/image-44.webp"; // ✅ your local background image

// 🔹 Dummy gallery images (you can replace later if needed)
const galleryImages = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
  "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
  "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
];

const GalleryZigZag = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-gray-50">

        {/* 🔹 TOP CONTENT */}
        <div className="max-w-5xl mx-auto text-center pt-24 pb-12 px-4">
          <p className="text-accent text-sm uppercase tracking-wide">
            Our Gallery
          </p>

          <h2 className="text-4xl font-heading mt-3">
            Travel in <span className="font-semibold">Frames</span>
          </h2>

          <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-4">
            Step into a world of unforgettable journeys, breathtaking landscapes,
            and heartfelt moments captured along the way.
          </p>

          <button className="mt-6 inline-flex items-center gap-2 border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white transition">
            Uncover Hidden Gems →
          </button>

        </div>
        <div className="   h-12 w-full bg-gradient-to-b from-gray-50 to-white ext-sm">

        </div>

        {/* 🔹 BACKGROUND IMAGE SECTION */}
        <div
          className="relative min-h-[720px] h-[500px] md:min-h-[520px] lg:min-h-[800px] max-h-[850px] bg-cover bg-center flex items-center bg-gray-50  "
          style={{ backgroundImage: `url(${bgImage})` }}
        >


          {/* Soft overlay */}
          <div className="absolute inset-0 bg-white/40 md:bg-white/30" />

          {/* 🔹 ZIG-ZAG GALLERY */}
          <div className="relative z-10 max-w-6xl mx-auto flex flex-wrap justify-center items-center content-center gap-4 md:gap-6 px-4">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className={`
                relative rounded-xl overflow-hidden shadow-xl border-4 border-white
                transition-transform duration-500 hover:scale-105
                ${index % 2 === 0 ? "translate-y-6" : "-translate-y-6"}
                ${index === 2
                    ? "w-40 h-56 md:w-44 md:h-60"
                    : "w-32 h-44 md:w-36 md:h-52"}
              `}
              >
                <img
                  src={img}
                  alt="Travel moment"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="relative mt-[-22px]">
          <div className="
    absolute left-1/2 -translate-x-1/2
    h-12 w-[calc(100%+24px)]
    bg-gradient-to-t
    from-gray-50 via-gray-100 via-blue-50 to-blue-100
    blur-[12px]
  " />
        </div>

        {/* 🔹 BOTTOM CTA */}
        <div className="max-w-5xl mx-auto text-center py-20 px-4">
          <h3 className="text-2xl font-heading">
            Ready to <span className="font-semibold">Plan Your Next Trip?</span>
          </h3>

          <p className="text-gray-600 text-sm mt-3 max-w-xl mx-auto">
            Our travel experts are here to help you design the perfect journey.
            Get in touch with us to start customizing your next adventure.
          </p>

          <button className="mt-6 bg-primary text-white px-7 py-3 rounded-full hover:bg-secondary transition">
            Request a Free Quote →
          </button>
        </div>

      </section>


    </>
  );
};

export default GalleryZigZag;

import React from "react";

const destinations = [
  {
    name: "France",
    trips: "2 Trips",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
  {
    name: "Greece",
    trips: "2 Trips",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
  },
  {
    name: "Iceland",
    trips: "1 Trip",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    name: "Japan",
    trips: "2 Trips",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    name: "Nepal",
    trips: "4 Trips",
    image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
  },
];

const Destinations = () => {
  return (
    <section className="py-20 bg-white">
      <div data-aos="fade-up" className="max-w-7xl  mx-auto px-4">

        {/* Heading */}
        <div data-aos="fade-right" className="text-center mb-12">
          <p className="text-accent font-medium destination-component-heading uppercase tracking-wide">
            Tailor-Made Travel Packages
          </p>
          <h2 className="text-4xl font-heading destination-component-heading mt-3">
            Top <span className="text-primary">Destinations</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

          <DestinationCard {...destinations[0]} />
          <DestinationCard {...destinations[1]} />
          <DestinationCard {...destinations[2]} />

          <div className="md:col-span-2">
            <DestinationCard {...destinations[3]} wide />
          </div>

          <DestinationCard {...destinations[4]} />

        </div>

      </div>
    </section>
  );
};

export default Destinations;

/* ---------- CARD ---------- */

const DestinationCard = ({ name, trips, image, wide }) => {
  return (
    <div
      className={`
        relative rounded-2xl overflow-hidden group cursor-pointer
        ${wide ? "aspect-[16/9]" : "aspect-[4/3]"}
      `}
    >
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Text */}
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm opacity-80">{trips}</p>
      </div>
    </div>
  );
};


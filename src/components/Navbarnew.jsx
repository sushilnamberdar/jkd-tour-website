import { useState } from "react";

const Navbarnew = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <header className="bg-gray-100/50 shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          TripAdventure
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center  space-x-8">

          <a href="/" className="font-medium hover:text-orange-600">
            Home
          </a>

          {/* All Trips */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("trips")}
              className="font-medium hover:text-orange-600"
            >
              All Trips
            </button>

            {openMenu === "trips" && (
              <div className="absolute left-0 top-full mt-3 w-64 bg-white shadow-lg rounded">
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                  Single Tour (Multi Days)
                </a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                  Single Tour (One Day)
                </a>
              </div>
            )}
          </div>

          {/* Destination */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("destination")}
              className="font-medium hover:text-orange-600"
            >
              Destination
            </button>

            {openMenu === "destination" && (
              <div className="absolute left-0 top-full mt-3 w-72 bg-white shadow-lg rounded">
                <div className="px-4 py-2 font-semibold text-gray-700">
                  Nepal
                </div>
                <a className="block px-6 py-2 hover:bg-gray-100" href="#">
                  Annapurna
                </a>
                <a className="block px-6 py-2 hover:bg-gray-100" href="#">
                  Everest
                </a>

                <div className="border-t my-2" />

                <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                  France
                </a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                  USA
                </a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                  Australia
                </a>
              </div>
            )}
          </div>

          {/* Activities */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("activities")}
              className="font-medium hover:text-orange-600"
            >
              Activities
            </button>

            {openMenu === "activities" && (
              <div className="absolute left-0 top-full mt-3 w-64 bg-white shadow-lg rounded">
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                  Trekking
                </a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                  Photography
                </a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                  Sky Diving
                </a>
              </div>
            )}
          </div>

          <a href="/blog" className="font-medium hover:text-orange-600">
            Blog
          </a>

          <a href="/contact-us" className="font-medium hover:text-orange-600">
            Contact
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Search */}
          <button
            aria-label="Search"
            className="p-2 rounded hover:bg-gray-100 hover:text-orange-600"
          >
            🔍
          </button>

          {/* CTA Button */}
          <a
            href="/contact-us"
            className="hidden sm:inline-block bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition"
          >
            Customize Your Trip
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbarnew;
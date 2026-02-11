import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Heart,
  Mountain,
  Landmark,
  Snowflake,
  Plane,
  Footprints,
  Waves,
  Camera,
  Map,
  Compass,
  MapPin,
} from "lucide-react";


export default function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  const [toursOpen, setToursOpen] = React.useState(false);
  const [destinationsOpen, setDestinationsOpen] = React.useState(false);
  const [activitiesOpen, setActivitiesOpen] = React.useState(false);
  const [tripTypesOpen, setTripTypesOpen] = React.useState(false);
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 20); // shrink on scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuRef = React.useRef(null);

  // CLOSE MENU ON OUTSIDE CLICK
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
        setToursOpen(false);
        setDestinationsOpen(false);
        setActivitiesOpen(false);
        setTripTypesOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleToursOpen = () => {
    setToursOpen(!toursOpen);
    setDestinationsOpen(false);
    setActivitiesOpen(false);
    setTripTypesOpen(false);
  };

  const handleDestinationsOpen = () => {
    setDestinationsOpen(!destinationsOpen);
    setToursOpen(false);
    setActivitiesOpen(false);
    setTripTypesOpen(false);
  };

  const handleActivitiesOpen = () => {
    setActivitiesOpen(!activitiesOpen);
    setToursOpen(false);
    setDestinationsOpen(false);
    setTripTypesOpen(false);
  };

  const handleTripTypesOpen = () => {
    setTripTypesOpen(!tripTypesOpen);
    setToursOpen(false);
    setDestinationsOpen(false);
    setActivitiesOpen(false);
  };

  return (
    <div className=" lg:hidden  relative" ref={menuRef}>
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 border rounded-lg bg-white shadow-sm"
      >
        {open ? (
          <svg width="22" height="22" stroke="currentColor" fill="none" strokeWidth="2">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" stroke="currentColor" fill="none" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        )}
      </button>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className={`fixed top-16  left-0 right-0 w-full bg-white shadow-xl border-t p-5 z-50 space-y-4 ${shrink ? "mt-10" : "mt-12"}`}>
          <Link to="/" className="hover:text-primary">Home</Link>

          {/* TOURS DROPDOWN */}
          <div>
            <button
              className="flex justify-between items-center w-full py-2 text-gray-700 font-medium"
              onClick={handleToursOpen}
            >
              Tours
              {toursOpen ? (
                <svg width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2">
                  <path d="M18 15l-6-6-6 6" />
                </svg>
              ) : (
                <svg width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              )}
            </button>

            {toursOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <Link to="/tours/kashmir" className="block text-gray-700 hover:text-primary"><Map className="w-5 h-5 text-primary inline-block mr-2" />Kashmir Tour Packages</Link>
                <Link to="/tours/himachal" className="block text-gray-700 hover:text-primary"><Mountain className="w-5 h-5 text-secondary inline-block mr-2" />Himachal Tour Packages</Link>
                <Link to="/tours/adventure" className="block text-gray-700 hover:text-primary"><Compass className="w-5 h-5 text-accent inline-block mr-2" />Adventure Tours</Link>
                <Link to="/tours/honeymoon" className="block text-gray-700 hover:text-primary"><Heart className="w-5 h-5 text-secondary inline-block mr-2" />Honeymoon Packages</Link>
              </div>
            )}
          </div>

          {/* DESTINATIONS DROPDOWN */}
          <div>
            <button
              className="flex justify-between items-center w-full py-2 text-gray-700 font-medium"
              onClick={handleDestinationsOpen}
            >
              Destinations
              {destinationsOpen ? (
                <svg width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2">
                  <path d="M18 15l-6-6-6 6" />
                </svg>
              ) : (
                <svg width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              )}
            </button>

            {destinationsOpen && (
              <div className="pl-4 mt-2 space-y-2">
                  <Link to="/destinations/kashmir" className="block text-gray-700 hover:text-primary"><MapPin className="w-5 h-5 text-primary inline-block mr-2" />kashmir</Link>
                  <Link to="/destinations/himachal" className="block text-gray-700 hover:text-primary"><Mountain className="w-5 h-5 text-secondary inline-block mr-2" />Himachal Pradesh</Link>
                  <Link to="/destinations/ladakh" className="block text-gray-700 hover:text-primary"><Compass className="w-5 h-5 text-accent inline-block mr-2" />Ladakh</Link>
              </div>
            )}
          </div>

           {/* Activities DROPDOWN */}
           <div>
            <button
              className="flex justify-between items-center w-full py-2 text-gray-700 font-medium"
              onClick={handleActivitiesOpen}
            >
              Activities
              {activitiesOpen ? (
                <svg width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2">
                  <path d="M18 15l-6-6-6 6" />
                </svg>
              ) : (
                <svg width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              )}
            </button>

            {activitiesOpen && (
              <div className="pl-4 mt-2 space-y-2">
                  <Link to="/activities/trekking" className="block text-gray-700 hover:text-primary"><Landmark className="w-5 h-5 text-primary inline-block mr-2" />Cultural Heritage</Link>
                  <Link to="/activities/skiing" className="block text-gray-700 hover:text-primary"><Snowflake className="w-5 h-5 text-secondary inline-block mr-2" />Skiing</Link>
                  <Link to="/activities/sky-diving" className="block text-gray-700 hover:text-primary"><Plane className="w-5 h-5 text-accent inline-block mr-2" />Sky Diving</Link>
                  <Link to="/activities/tracking" className="block text-gray-700 hover:text-primary"><Footprints className="w-5 h-5 text-secondary inline-block mr-2" />Trekking</Link>
                  <Link to="/activities/river-rafting" className="block text-gray-700 hover:text-primary"><Waves className="w-5 h-5 text-primary inline-block mr-2" />River Rafting</Link>
                  <Link to="/activities/photography" className="block text-gray-700 hover:text-primary"><Camera className="w-5 h-5 text-secondary inline-block mr-2" />Photography</Link>
              </div>
            )}
          </div>

           {/* trip types DROPDOWN */}
           <div>
            <button
              className="flex justify-between items-center w-full py-2 text-gray-700 font-medium"
              onClick={handleTripTypesOpen}
            >
              Trip Types
              {tripTypesOpen ? (
                <svg width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2">
                  <path d="M18 15l-6-6-6 6" />
                </svg>
              ) : (
                <svg width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              )}
            </button>

            {tripTypesOpen && (
              <div className="pl-4 mt-2 space-y-2">
                  <Link to="/trip-types/family" className="block text-gray-700 hover:text-primary"><Users className="w-5 h-5 text-secondary inline-block mr-2" />Family Tours</Link>
                  <Link to="/trip-types/honeymoon" className="block text-gray-700 hover:text-primary"><Heart className="w-5 h-5 text-accent inline-block mr-2" />Solo & Honeymoon Tours</Link>
                  <Link to="/trip-types/adventure" className="block text-gray-700 hover:text-primary"><Mountain className="w-5 h-5 text-secondary inline-block mr-2" />Adventure Tours</Link>
                  <Link to="/trip-types/cultural" className="block text-gray-700 hover:text-primary"><Landmark className="w-5 h-5 text-primary inline-block mr-2" />Cultural Tours</Link>
              </div>
            )}
          </div>


          {/* EXTRA LINKS */}
          <Link to="/Why-Choose-Us" className="block py-2 text-gray-700 hover:text-primary">
            Why Choose Us
          </Link>




          {/* CONTACT BUTTON */}
          <Link
            to="/contact"
            className="block py-2 text-center bg-primary text-white rounded-md shadow"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}

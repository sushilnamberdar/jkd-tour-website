import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Star,
} from "lucide-react";

import visalogo from "./assets/visa.png";
import mastercardlogo from "./assets/Mastercard.png";
import amexlogo from "./assets/american-express.png";
import FooterBrandSection from "./pages/FooterBrandSection";

const Footer = () => {
  return (
    
    <>
    <FooterBrandSection/>
      <footer className="bg-black text-gray-300 pt-20">
        <div className="max-w-7xl mx-auto px-4">

          {/* TOP GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

            {/* BRAND */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                TripAdventure
              </h2>

              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
                <span className="ml-2 text-sm text-white">4.9/5.0</span>
              </div>

              <p className="text-sm text-gray-400">
                Based on <span className="text-white">16,824 reviews</span>
              </p>
            </div>

            {/* DESTINATIONS */}
            <FooterColumn
              title="Destinations"
              items={["Nepal", "USA", "Australia", "Philippines", "France", "Greece"]}
            />

            {/* ACTIVITIES */}
            <FooterColumn
              title="Activities"
              items={[
                "Sky Diving",
                "Trekking",
                "Skiing",
                "Bird Watching",
                "Cultural Heritage",
                "Snorkeling",
              ]}
            />

            {/* TRIP TYPES */}
            <FooterColumn
              title="Trip Types"
              items={[
                "Culinary Tours",
                "Cruise Tours",
                "Family Tours",
                "Solo Travel Tours",
                "Cultural Tours",
                "Luxury Tours",
              ]}
            />

            {/* COMPANY */}
            <FooterColumn
              title="Company"
              items={[
                "Home",
                "Blog",
                "Our Team",
                "FAQ’s",
                "Contact Us",
                "About Us",
              ]}
              highlight="Home"
            />
          </div>

          {/* MIDDLE BOX */}
          <div className="border border-white/10 rounded-2xl mt-16 p-10 grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* CONTACT INFO */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info.</h4>

              <div className="space-y-3 text-sm">
                <p className="flex items-center gap-2">
                  <Phone size={16} /> 01 2345 65486
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} /> contact@yourdomain.com
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={16} /> Thamel, Kathmandu
                </p>
              </div>

              <div className="mt-5 text-sm">
                <p className="text-orange-400 font-medium">Emergency SOS (24/7)</p>
                <p>WhatsApp: (01)123-456-789</p>
                <p>Mobile: (01)123-456-789</p>
              </div>
            </div>

            {/* AWARD */}
            <div className="flex justify-center items-center">
              <div className="text-center">
                <p className="text-lg font-semibold text-white mb-4">
                  Tripadvisor Travelers’ Choice
                </p>
                <div className="text-4xl font-bold">🏆</div>
                <p className="mt-2 text-sm">2024</p>
              </div>
            </div>

            {/* AFFILIATED & PAYMENTS */}
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-semibold mb-3">
                  Affiliated with:
                </h4>
                <div className="flex gap-3 text-sm text-gray-400">
                  <span>NTB</span>
                  <span>TAAN</span>
                  <span>NMA</span>
                  <span>KEEP</span>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">We Accept:</h4>
                <div className="flex gap-4 text-sm">
                  <img className="w-18 h-12" src={amexlogo} alt="American Express" />
                  <img className="w-18 h-12" src={visalogo} alt="Visa" />

                  <img className="w-18 h-12" src={mastercardlogo} alt="MasterCard" />

                </div>
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="text-center text-sm text-gray-400 mt-12 pb-8">
            © Copyright 2025{" "}
            <span className="text-white"> Developed </span> by{" "}
            <a
              href="https://www.linkedin.com/in/sushilnamberdar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-orange-400 transition"
            >
              @sushilnamberdar
            </a>

          </div>
        </div>
      </footer>
    </>

  );
};

export default Footer;

/* ---------- FOOTER COLUMN ---------- */
const FooterColumn = ({ title, items, highlight }) => (
  <div>
    <h4 className="text-white font-semibold mb-4">{title}</h4>
    <ul className="space-y-2 text-sm">
      {items.map((item, i) => (
        <li
          key={i}
          className={`hover:text-orange-400 transition cursor-pointer ${highlight === item ? "text-orange-400" : ""
            }`}
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

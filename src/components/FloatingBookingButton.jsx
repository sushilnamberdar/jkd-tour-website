import { Link } from "react-router-dom";

export default function FloatingBookingButton() {
  return (
    <Link
      to="/booking"
      className="
    fixed bottom-6 right-6 z-50
    flex items-center gap-3
    bg-primary text-white
    px-6 py-4 rounded-full
    shadow-xl
    hover:bg-primary-dark
    transition-all duration-300
    animate-float

    shadow-[0_0_20px_rgba(108,159,244,0.6)]
    hover:shadow-[0_0_30px_rgba(108,159,244,0.9)]
  "
    >

      {/* Icon */}
      <span className="text-xl animate-pulse">✈️</span>

      {/* Text */}
      <span className="font-heading font-medium tracking-wide">
        Book Now
      </span>
    </Link>
  );
}

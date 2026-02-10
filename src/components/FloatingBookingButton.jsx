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

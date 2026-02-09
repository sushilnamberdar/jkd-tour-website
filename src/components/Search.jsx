import React, { useState } from "react";
import { MapPin, Clock, Wallet, Mountain, Search as SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [duration, setDuration] = useState("");
  const [budget, setBudget] = useState("");
  return (
    <div data-aos="fade-up" className="relative mt-5 z-20 px-4">
      <div className="bg-white rounded-3xl lg:rounded-full flex flex-col lg:flex-row items-stretch shadow-xl max-w-6xl mx-auto">

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center py-4 px-4 lg:px-6 flex-1">

          {/* Destination */}
          <div className="search-div focus-within:border-secondary focus-within:ring-1 focus-within:ring-secondary transition">
            <MapPin className="w-5 h-5 text-primary shrink-0" />


            <select
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-72   px-4 focus:outline-none text-gray bg-transparent cursor-pointer appearance-none"
            >
              <option className="w-72 p-4" value="All">Destinations</option>
              {["Kashmir", "Himachal", "Ladakh", "France", "Greece", "Iceland", "Japan", "Nepal"].map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          {/* Duration */}
          <div className="search-div focus-within:border-secondary focus-within:ring-1 focus-within:ring-secondary transition">
            <Clock className="w-5 h-5 text-primary" />
            <input
              type="text"
              placeholder="Duration (Days)"
              onChange={(e) => setDuration(e.target.value)}
              value={duration}
              className="w-full focus:outline-none text-gray"
            />
          </div>

          {/* Budget */}
          <div className="search-div focus-within:border-secondary focus-within:ring-1 focus-within:ring-secondary transition">
            <Wallet className="w-5 h-5 text-primary" />
            <input
              type="text"
              placeholder="Budget"
              onChange={(e) => setBudget(e.target.value)}
              value={budget}
              className="w-full focus:outline-none text-gray"
            />
          </div>

          {/* Activity */}
          <div className="search-div focus-within:border-secondary focus-within:ring-1 focus-within:ring-secondary transition">
            <Mountain className="w-5 h-5 text-primary" />
            <input
              type="text"
              placeholder="Activity"
              className="w-full focus:outline-none text-gray"
            />
          </div>
        </div>

        {/* Search Button */}
        <Link to={`/search?query=${searchTerm}&duration=${duration}&budget=${budget}`} className="flex">
          <button className="
          flex items-center justify-center gap-2 
          w-full lg:w-auto
          py-4 lg:py-6
          px-6 lg:px-20
          rounded-2xl lg:rounded-full
          bg-accent hover:bg-secondary
          text-black hover:text-white
          font-semibold transition
        ">
            <SearchIcon className="w-5 h-5" />
            Search
          </button>
        </Link>

      </div>
    </div>
  );
};

export default Search;

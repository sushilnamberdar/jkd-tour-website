import React from "react";
import { MapPin, Clock, Wallet, Mountain, Search as SearchIcon } from "lucide-react";

const Search = () => {
    return (
        <div  data-aos="fade-up" className="relative mt-5 z-20 rounded-full shadow-lg">
            <div className="bg-white rounded-full flex justify-between items-center shadow-xl max-w-6xl mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center py-3">

                    {/* Destination */}
                    <div className="search-div focus-within:border-secondary focus-within:ring-1 focus-within:ring-secondary transition">
                        <MapPin className="w-5 h-5 text-primary" />
                        <input
                            type="text"
                            placeholder="Destination"
                            className="w-full focus:outline-none text-gray"
                        />
                    </div>

                    {/* Duration */}
                    <div className="search-div focus-within:border-secondary focus-within:ring-1 focus-within:ring-secondary transition">

                        <Clock className="w-5 h-5 text-primary group-focus:text-secondary" />
                        <input
                            type="text"
                            placeholder="Duration (Days)"
                            className="w-full focus:outline-none text-gray"
                        />
                    </div>

                    {/* Budget */}
                    <div className="search-div focus-within:border-secondary focus-within:ring-1 focus-within:ring-secondary transition">
                        <Wallet className="w-5 h-5 text-primary" />
                        <input
                            type="text"
                            placeholder="Budget"
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

                    {/* Search Button */}


                </div>
                <button className="flex py-6 px-20   items-center rounded-full justify-center  bg-accent hover:bg-secondary text-black hover:text-white   font-semibold transition">
                    <SearchIcon className="w-5 h-5" />
                    Search
                </button>
            </div>

        </div>
    );
};

export default Search;

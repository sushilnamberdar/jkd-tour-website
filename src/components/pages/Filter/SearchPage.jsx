import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';

const BASE_DESCRIPTION = "Travel is the movement of people between relatively distant geographical locations, and can involve travel by foot, bicycle, automobile, train, boat, bus, airplane, or other means.";

const DEFAULT_DEPARTURES = [
  "February 6, 2026",
  "February 7, 2026",
  "February 8, 2026",
];

const DEFAULT_AVAILABILITY = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const trips = [
  {
    id: 1,
    title: "Kashmir Paradise Escape",
    location: "Kashmir",
    duration: 6,
    price: 1350,
    originalPrice: 1400,
    description: BASE_DESCRIPTION,
    nextDepartures: DEFAULT_DEPARTURES,
    availability: DEFAULT_AVAILABILITY,
    level: "Easy",
    people: 2,
    images: [
      "https://images.unsplash.com/photo-1566837497312-7be4c6e4c9e8",
      "https://images.unsplash.com/photo-1600359756098-04f36f6b6e5e",
      "https://images.unsplash.com/photo-1627748868908-6a2c6f9b391d",
    ],
  },
  {
    id: 2,
    title: "Himachal Mountain Adventure",
    location: "Himachal",
    duration: 7,
    price: 900,
    originalPrice: 980,
    description: BASE_DESCRIPTION,
    nextDepartures: DEFAULT_DEPARTURES,
    availability: DEFAULT_AVAILABILITY,
    level: "Moderate",
    people: 2,
    images: [
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
      "https://images.unsplash.com/photo-1580657018954-8c92d5c06f21",
      "https://images.unsplash.com/photo-1615196534055-7b1cfd1ced1b",
    ],
  },
  {
    id: 3,
    title: "Ladakh Road Trip Experience",
    location: "Ladakh",
    duration: 8,
    price: 1100,
    originalPrice: 1200,
    description: BASE_DESCRIPTION,
    nextDepartures: DEFAULT_DEPARTURES,
    availability: DEFAULT_AVAILABILITY,
    level: "Hard",
    people: 2,
    images: [
      "https://images.unsplash.com/photo-1599400851845-8b5b9a4a2c07",
      "https://images.unsplash.com/photo-1621951753015-740c6998c08b",
      "https://images.unsplash.com/photo-1632461992124-9f30b89c7479",
    ],
  },
  {
    id: 4,
    title: "Romantic France Getaway",
    location: "France",
    duration: 5,
    price: 1200,
    originalPrice: 1280,
    description: BASE_DESCRIPTION,
    nextDepartures: DEFAULT_DEPARTURES,
    availability: DEFAULT_AVAILABILITY,
    level: "Easy",
    people: 2,
    images: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      "https://images.unsplash.com/photo-1522098543979-ffc7f79d5cce",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
    ],
  },
  {
    id: 5,
    title: "Greek Islands Explorer",
    location: "Greece",
    duration: 6,
    price: 1250,
    originalPrice: 1320,
    description: BASE_DESCRIPTION,
    nextDepartures: DEFAULT_DEPARTURES,
    availability: DEFAULT_AVAILABILITY,
    level: "Easy",
    people: 2,
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
      "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca",
    ],
  },
  {
    id: 6,
    title: "Iceland Northern Lights Tour",
    location: "Iceland",
    duration: 7,
    price: 1500,
    originalPrice: 1600,
    description: BASE_DESCRIPTION,
    nextDepartures: DEFAULT_DEPARTURES,
    availability: DEFAULT_AVAILABILITY,
    level: "Moderate",
    people: 2,
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    ],
  },
  {
    id: 7,
    title: "Tokyo City Highlights",
    location: "Japan",
    duration: 5,
    price: 1000,
    originalPrice: 1080,
    description: BASE_DESCRIPTION,
    nextDepartures: DEFAULT_DEPARTURES,
    availability: DEFAULT_AVAILABILITY,
    level: "Easy",
    people: 2,
    images: [
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
      "https://images.unsplash.com/photo-1526481280690-7eadf9c38c3c",
    ],
  },
  {
    id: 8,
    title: "Nepal Himalayan Trek",
    location: "Nepal",
    duration: 10,
    price: 950,
    originalPrice: 1050,
    description: BASE_DESCRIPTION,
    nextDepartures: DEFAULT_DEPARTURES,
    availability: DEFAULT_AVAILABILITY,
    level: "Hard",
    people: 2,
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7",
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
    ],
  },
  {
    id: 9,
    title: "France & Greece Combo Tour",
    location: "France, Greece",
    duration: 9,
    price: 1400,
    originalPrice: 1480,
    description: BASE_DESCRIPTION,
    nextDepartures: DEFAULT_DEPARTURES,
    availability: DEFAULT_AVAILABILITY,
    level: "Easy",
    people: 2,
    images: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
    ],
  },
  {
    id: 10,
    title: "Scenic Himachal & Ladakh",
    location: "Himachal, Ladakh",
    duration: 12,
    price: 1300,
    originalPrice: 1400,
    description: BASE_DESCRIPTION,
    nextDepartures: DEFAULT_DEPARTURES,
    availability: DEFAULT_AVAILABILITY,
    level: "Hard",
    people: 2,
    images: [
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
      "https://images.unsplash.com/photo-1599400851845-8b5b9a4a2c07",
      "https://images.unsplash.com/photo-1632461992124-9f30b89c7479",
    ],
  },
  {
    id: 11,
    title: "Japan Cultural Experience",
    location: "Japan",
    duration: 8,
    price: 1350,
    originalPrice: 1450,
    description: BASE_DESCRIPTION,
    nextDepartures: DEFAULT_DEPARTURES,
    availability: DEFAULT_AVAILABILITY,
    level: "Moderate",
    people: 2,
    images: [
      "https://images.unsplash.com/photo-1526481280690-7eadf9c38c3c",
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
    ],
  },
  {
    id: 12,
    title: "Iceland Ring Road Adventure",
    location: "Iceland",
    duration: 10,
    price: 1600,
    originalPrice: 1720,
    description: BASE_DESCRIPTION,
    nextDepartures: DEFAULT_DEPARTURES,
    availability: DEFAULT_AVAILABILITY,
    level: "Moderate",
    people: 2,
    images: [
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    ],
  },
  {
    id: 13,
    title: "Nepal Spiritual Journey",
    location: "Nepal",
    duration: 7,
    price: 850,
    originalPrice: 920,
    description: BASE_DESCRIPTION,
    nextDepartures: DEFAULT_DEPARTURES,
    availability: DEFAULT_AVAILABILITY,
    level: "Easy",
    people: 2,
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7",
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
    ],
  },
  {
    id: 14,
    title: "Royal Kashmir & Ladakh",
    location: "Kashmir, Ladakh",
    duration: 11,
    price: 1450,
    originalPrice: 1550,
    description: BASE_DESCRIPTION,
    nextDepartures: DEFAULT_DEPARTURES,
    availability: DEFAULT_AVAILABILITY,
    level: "Hard",
    people: 2,
    images: [
      "https://images.unsplash.com/photo-1566837497312-7be4c6e4c9e8",
      "https://images.unsplash.com/photo-1599400851845-8b5b9a4a2c07",
      "https://images.unsplash.com/photo-1627748868908-6a2c6f9b391d",
    ],
  },
  {
    id: 15,
    title: "Best of Nepal & India Himalayas",
    location: "Nepal, Himachal",
    duration: 14,
    price: 1500,
    originalPrice: 1620,
    description: BASE_DESCRIPTION,
    nextDepartures: DEFAULT_DEPARTURES,
    availability: DEFAULT_AVAILABILITY,
    level: "Hard",
    people: 2,
    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada",
      "https://images.unsplash.com/photo-1615196534055-7b1cfd1ced1b",
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
    ],
  },
];

function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full md:w-64 h-48 md:h-48 overflow-hidden">
      <img src={images[index]} alt="trip" className="w-full h-full object-cover" />
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 rounded"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 rounded"
      >
        ›
      </button>
    </div>
  );
}

export default function SearchPage() {
  const [price, setPrice] = useState(2000);
  const [duration, setDuration] = useState(15);
  const [destination, setDestination] = useState("All");
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("recent");

  const [searchParams] = useSearchParams();
  const urlQuery = searchParams.get('query') || "";
  const urlDuration = searchParams.get('duration') || 15;
  const urlBudget = searchParams.get('budget') || 2000;


  useEffect(() => {
    if (urlQuery) setSearch(urlQuery);
    if (urlDuration) setDuration(Number(urlDuration));
    if (urlBudget) setPrice(Number(urlBudget));
  }, [urlQuery, urlDuration, urlBudget]);

  const ITEMS_PER_PAGE = 5;

  const filteredData = trips
    .filter((item) => {
      const matchPrice = item.price <= price;
      const matchDuration = item.duration <= duration;
      const matchDestination =
        destination === "All" || item.location.includes(destination);
      const searchText = search.toLowerCase().trim().replace("days", "").trim();

      const matchSearch =
        item.title.toLowerCase().includes(searchText) ||
        item.location.toLowerCase().includes(searchText) ||
        item.level.toLowerCase().includes(searchText) ||
        item.price.toString().includes(searchText) ||
        item.duration.toString().includes(searchText);

      return matchPrice && matchDuration && matchDestination && matchSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "lowPrice":
          return a.price - b.price;
        case "highPrice":
          return b.price - a.price;
        case "shortDuration":
          return a.duration - b.duration;
        case "longDuration":
          return b.duration - a.duration;
        case "az":
          return a.title.localeCompare(b.title);
        case "za":
          return b.title.localeCompare(a.title);
        default:
          return b.id - a.id; // Recently Added
      }
    });

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Desktop Filter */}
      <aside className="hidden md:block w-72 bg-gray-200 p-5 rounded-lg h-[700px] border-r">
        <h2 className="font-semibold text-lg mb-6">Filter By</h2>




        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2">By Price</h3>
          <label className="text-sm block mb-1">Up to ${price}</label>
          <input
            type="range"
            min="500"
            max="3000"
            value={price}
            onChange={(e) => {
              setPrice(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="w-full"
          />

          <hr className="my-4 bg-gray-300 h-1" />

          <h3 className="text-sm font-semibold mb-2">By Destination</h3>
          <div className="space-y-2">
            {["All", "Kashmir", "Himachal", "Ladakh", "France", "Greece", "Iceland", "Japan", "Nepal"].map((d) => (
              <label key={d} className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  checked={destination === d}
                  onChange={() => {
                    setDestination(d);
                    setCurrentPage(1);
                  }}
                />
                {d}
              </label>
            ))}
          </div>
        </div>
        <hr className="my-4 bg-gray-300 h-1" />

        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2">By Duration</h3>
          <label className="text-sm block mb-1">Up to {duration} Days</label>
          <input
            type="range"
            min="1"
            max="30"
            value={duration}
            onChange={(e) => {
              setDuration(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="w-full"
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">
        {/* Search + Sort */}
        <div className="flex flex-col md:flex-row gap-3 mb-4">
          <input
            type="text"
            placeholder="Search trips..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="border rounded px-3 py-2 w-full"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded px-3 py-2"
          >
            <option value="recent">Recently Added</option>
            <option value="lowPrice">Lowest Price First</option>
            <option value="highPrice">Highest Price First</option>
            <option value="shortDuration">Shortest Duration First</option>
            <option value="longDuration">Longest Duration First</option>
            <option value="az">Alphabetical - A to Z</option>
            <option value="za">Alphabetical - Z to A</option>
          </select>
        </div>


        {/* button for mobile filer and code  */}

        {/* Mobile Filter Button */}
        <button
          onClick={() => setShowMobileFilter(true)}
          className="md:hidden mb-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Open Filters
        </button>

        {/* Mobile Filter Drawer */}
        {showMobileFilter && (
          <div className="fixed inset-0 bg-black/40 z-50 md:hidden">
            <div className="absolute left-0 top-0 h-full w-80 bg-white p-5 overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-lg">Filters</h2>
                <button onClick={() => setShowMobileFilter(false)}>✕</button>
              </div>

              {/* By Price */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-2">By Price</h3>
                <label className="text-sm block mb-1">Up to ${price}</label>
                <input
                  type="range"
                  min="500"
                  max="3000"
                  value={price}
                  onChange={(e) => {
                    setPrice(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="w-full"
                />

                <hr className="my-4" />

                {/* By Destination */}
                <h3 className="text-sm font-semibold mb-2">By Destination</h3>
                <div className="space-y-2">
                  {[
                    "All",
                    "Kashmir",
                    "Himachal",
                    "Ladakh",
                    "France",
                    "Greece",
                    "Iceland",
                    "Japan",
                    "Nepal",
                  ].map((d) => (
                    <label key={d} className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        checked={destination === d}
                        onChange={() => {
                          setDestination(d);
                          setCurrentPage(1);
                        }}
                      />
                      {d}
                    </label>
                  ))}
                </div>
              </div>

              {/* By Duration */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-2">By Duration</h3>
                <label className="text-sm block mb-1">
                  Up to {duration} Days
                </label>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={duration}
                  onChange={(e) => {
                    setDuration(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="w-full"
                />
              </div>

              <button
                onClick={() => setShowMobileFilter(false)}
                className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}


        <div className="space-y-4">
          {paginatedData.map((item) => (
            <>
              <div className="bg-white p-4 rounded-lg shadow" key={item.id}>
                <div key={item.id} className="flex flex-col md:flex-row  rounded-lg shadow overflow-hidden">
                  <ImageCarousel images={item.images} />

                  <div className="p-4 flex-1">
                    {item.description && (
                      <p className="text-sm text-gray-500 mb-2">{item.description}</p>
                    )}
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.location}</p>
                    <div className="flex gap-4 text-sm mt-3">
                      <span>⏱ {item.duration} Days</span>
                      <span>👤 {item.people} People</span>
                      <span>⭐ {item.level}</span>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col justify-center items-start md:items-end w-full md:w-auto">
                    {item.originalPrice && (
                      <p className="text-sm line-through text-gray-400">From ${item.originalPrice}</p>
                    )}
                    <p className="text-xl font-bold">${item.price}</p>
                    {item.originalPrice && (
                      <p className="text-sm text-green-600">
                        You save ${item.originalPrice - item.price}
                      </p>
                    )}
                    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">View Details</button>
                    <div className="mt-3 text-xs text-gray-600 text-right">
                      <p className="font-semibold">Next Departures</p>
                      {item.nextDepartures?.map((d) => (
                        <p key={d}>{d} (Available)</p>
                      ))}
                    </div>

                  </div>

                </div>

                <hr />
                <div className="mt-2 bg-white flex flex-wrap gap-1 justify-end">
                  {item.availability?.map((m) => (
                    <span key={m} className="px-2 py-0.5 text-xs border rounded">{m}</span>
                  ))}
                </div>
              </div>
            </>
          ))}


        </div>

        {/* Pagination */}
        <div className="flex flex-wrap justify-center items-center gap-2 mt-6">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 border rounded disabled:opacity-40"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-blue-600 text-white" : ""}`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1 border rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}

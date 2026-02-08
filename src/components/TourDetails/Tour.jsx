
import React, { useState } from "react";


import {
    Bus,
    Hotel,
    Mountain,
    Plane,
    Calendar,
    Users,
    Utensils,
    Languages,
    Activity,
    Baby,
    User
} from "lucide-react";


const Tour = ({data}) => {
    const archives = ["July 2025", "October 2022", "March 2022"];
    const categories = [
        "Adventure Travel",
        "Camping",
        "City Guides",
        "Road Trips",
        "Solo Travel",
        "Travel Guide",
    ];
  
    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-2">

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-semibold">
                        {data.title}
                    </h1>

                    <div className="border rounded-sm bg-primary border-primary  text-center">
                        <p className="text-2xl px-3 py-3 font-bold bg-primary text-white">8</p>
                        <p className="text-sm px-3 text-gray-500 bg-white">Hours</p>
                    </div>
                </div>

                <hr className="mb-6" />

                {/* Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    <Info icon={<Bus />} label="Transportation" value={data.features[0].value} />
                    <Info icon={<Hotel />} label="Accommodation" value={data.features[1].value} />
                    <Info icon={<Mountain />} label="Maximum Altitude" value={data.features[2].value} />

                    <Info icon={<Plane />} label="Departure From" value={data.features[3].value} />
                    <Info icon={<Calendar />} label="Best Season" value={data.features[4].value} />
                    <Info icon={<Activity />} label="Tour Type" value={data.features[5].value} />

                    <Info icon={<Utensils />} label="Meals" value={data.features[6].value} />
                    <Info icon={<Languages />} label="Language" value={data.features[7].value} />
                    <Info icon={<Activity />} label="Fitness Level" value={data.features[8].value} />

                    <Info icon={<Users />} label="Group Size" value={data.features[9].value} />
                    <Info icon={<Baby />} label="Minimum Age" value={data.features[10].value} />
                    <Info icon={<User />} label="Maximum Age" value={data.features[11].value} />
                </div>

                <div className="min-h-screen">
                    {/* Tabs */}
                    <TourTabs />

                    <Overview />
                    <Itinerary />
                    <Cost />
                    <MoreInfo />
                    <FAQs />
                    <Map />
                </div>



            </div>

            {/* RIGHT SIDEBAR */}
            <div className="lg:sticky top-24">
                <PricingCard data={data.price} />

                <SidebarListCard title="Archives" items={archives} />
                <SidebarListCard title="Categories" items={categories} />
            </div>
        </div>
    );
};

export default Tour;


const Info = ({ icon, label, value }) => {
    return (
        <div className="flex items-start gap-3">
            <div className="text-blue-600">{icon}</div>
            <div>
                <p className="text-sm text-gray-500">{label}</p>
                <p className="font-medium">{value}</p>
            </div>
        </div>
    );
};


const PricingCard = ({ data }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">

            {/* Discount */}
            <span className="inline-block bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
               {data.discount}  % Off
            </span>

            {/* Prices */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="text-sm text-gray-500 line-through">From ${data.adult.old}</p>
                    <p className="text-2xl font-bold">${data.adult.new}</p>
                    <p className="text-sm text-gray-500">/ Adult</p>
                </div>

                <div>
                    <p className="text-sm text-gray-500 line-through">From ${data.child.old}</p>
                    <p className="text-2xl font-bold">${data.child.new}</p>
                    <p className="text-sm text-gray-500">/ Child</p>
                </div>
            </div>

            {/* Benefits */}
            <ul className="space-y-2 text-sm">
                <li>✅ Best Price Guaranteed</li>
                <li>✅ No Booking Fees</li>
                <li>✅ Professional Local Guide</li>
            </ul>

            {/* CTA */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full transition">
                Check Availability
            </button>

            <p className="text-sm text-center text-gray-500">
                Need help with booking?
                <span className="text-blue-600 cursor-pointer"> Send Us A Message</span>
            </p>
        </div>
    );
};


const SidebarListCard = ({ title, items }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
            <h3 className="text-lg font-semibold mb-4">{title}</h3>

            <ul className="space-y-3">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="text-sm text-gray-700 pb-3 border-b last:border-b-0"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};



const TourTabs = () => {
    const tabs = ["Overview", "Itinerary", "Cost", "More Info", "FAQs", "Map"];
    const [activeTab, setActiveTab] = useState("Overview");

    return (
        <div className="mt-12">

            {/* TAB HEADERS */}
            <div className="border-b flex gap-8 text-sm flex-wrap font-medium">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-3 relative ${activeTab === tab
                            ? "text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-600"
                            : "text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* TAB CONTENT */}
            <div className="mt-8">
                {activeTab === "Overview" && <Overview />}
                {activeTab === "Itinerary" && <Itinerary />}
                {activeTab === "Cost" && <Cost />}
                {activeTab === "More Info" && <MoreInfo />}
                {activeTab === "FAQs" && <FAQs />}
                {activeTab === "Map" && <Map />}
            </div>
        </div>
    );
};






const Overview = () => (
    <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Overview</h2>

        <p className="text-gray-700 leading-relaxed">
            Travel is the movement of people between relatively distant geographical
            locations, and can involve travel by foot, bicycle, automobile, train,
            boat, bus, airplane, or other means, with or without luggage...
        </p>

        <p className="text-gray-700 leading-relaxed">
            The origin of the word “travel” is most likely lost to history...
        </p>

        <h3 className="text-xl font-semibold mt-8">Highlights</h3>

        <ul className="space-y-3">
            {[
                "Trek to the world-famous Everest Base Camp",
                "Enjoy the amazing view of the Himalayas from Kala Patthar",
                "Travel through the Sherpa villages of Namche, Khumjung, Khunde, and Dingboche",
                "Visit Tengboche the biggest and oldest monastery in the region",
            ].map((item, i) => (
                <li key={i} className="flex gap-3">
                    <span className="text-blue-600">✔</span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);




const Itinerary = () => {
    const [openIndex, setOpenIndex] = React.useState(null);
    const [expandAll, setExpandAll] = React.useState(false);
    const itineraryData = [
        {
            day: "Day 1",
            title: "Kathmandu to Pokhara",
            desc:
                "Arrive at Tribhuwan International Airport... travel has become easier and more accessible.",
        },
        {
            day: "Day 2",
            title: "Drive to Nayapul and trek to Ulleri",
            desc:
                "While early travel tended to be slower, more dangerous...",
        },
        {
            day: "Day 3",
            title: "Trek to Ghorepani",
            desc:
                "The Palace of Fifty Five Windows was built during the reign of King Yakshya Malla...",
        },
    ];

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Itinerary</h2>

                <label className="flex items-center gap-2 text-sm">
                    Expand all
                    <input
                        type="checkbox"
                        onChange={() => setExpandAll(!expandAll)}
                    />
                </label>
            </div>

            <div className="space-y-6">
                {itineraryData.map((item, i) => (
                    <div key={i} className="border-l pl-6 relative">
                        <span className="absolute -left-[7px] top-2 w-3 h-3 bg-blue-600 rounded-full" />

                        <button
                            className="font-semibold"
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        >
                            {item.day}: {item.title}
                        </button>

                        {(expandAll || openIndex === i) && (
                            <p className="mt-3 text-gray-700">{item.desc}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};


const Cost = () => {
    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-semibold">Cost</h2>

            {/* Cost Includes */}
            <div>
                <h3 className="font-semibold mb-3">The Cost Includes</h3>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    <li>Pick-up or Drop-off service from and to Airport (our vehicle)</li>
                    <li>Transportation to and from</li>
                    <li>
                        Food during the trip (Breakfast, Lunch, Dinner and tea/coffee)
                        and accommodation in hotels
                    </li>
                    <li>Transportation, food, accommodation and insurance of Guide</li>
                    <li>
                        Down jacket, sleeping bag, duffel bag and trekking map (must be
                        returned after trip)
                    </li>
                    <li>First Aid Medical Kit</li>
                    <li>All required permits and paperwork</li>
                </ul>
            </div>

            {/* Cost Excludes */}
            <div>
                <h3 className="font-semibold mb-3">The Cost Excludes</h3>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    <li>International Airfare</li>
                    <li>Visa Charges</li>
                    <li>Hotel expenses in Kathmandu</li>
                    <li>Travel and medical insurance</li>
                    <li>Personal expenses (shopping, bar bills, laundry, etc.)</li>
                    <li>Food and accommodation in Kathmandu</li>
                    <li>Emergency expenses such as helicopter rescue</li>
                </ul>
            </div>
        </div>
    );
};


const MoreInfo = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold">All About Your Trek</h2>

            <p className="text-gray-700">
                Embark on an exhilarating trekking journey that immerses you in the
                pristine beauty of nature and the rich cultural heritage of the region.
            </p>

            <Section
                title="Route & Terrain"
                text="The trek covers diverse landscapes including forests, terraced fields, rocky paths and high-altitude meadows."
            />

            <Section
                title="Duration & Pace"
                text="The trek lasts several days with daily walks averaging 4–7 hours, allowing time for rest and exploration."
            />

            <Section
                title="Accommodation & Facilities"
                text="Overnight stays are in traditional teahouses offering basic but comfortable amenities."
            />

            <Section
                title="Cultural Experience"
                text="You’ll meet friendly locals, learn about their customs, and experience indigenous cultures."
            />

            <Section
                title="Best Time to Visit"
                text="Best seasons are March–May and September–November for clear weather and great views."
            />

            <Section
                title="Health & Safety"
                text="Experienced guides ensure safety, monitor conditions, and provide first aid when needed."
            />
        </div>
    );
};


const Section = ({ title, text }) => (
    <div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{text}</p>
    </div>
);


const FAQs = () => {
    const [open, setOpen] = useState(null);

    const questions = [
        "How fit do I need to be to do this trek?",
        "How long do we walk every day?",
        "What is the highest altitude reached?",
        "Are there ATMs on the way?",
        "What about internet access?",
        "Is it necessary to hire guides?",
    ];

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6">FAQs</h2>

            {questions.map((q, i) => (
                <div key={i} className="border-b py-4">
                    <button
                        className="flex justify-between w-full font-medium"
                        onClick={() => setOpen(open === i ? null : i)}
                    >
                        {q}
                        <span>{open === i ? "−" : "+"}</span>
                    </button>

                    {open === i && (
                        <p className="mt-3 text-gray-700">
                            Answer content goes here. This can be customized per question.
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
};


const Map = () => {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Map</h2>

            <div className="w-full h-[400px] bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                Map will be displayed here
            </div>
        </div>
    );
};

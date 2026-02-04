import React from 'react';

const tours = [
  {
    name: 'Kashmir Valley Tour',
    duration: '7 Days',
    price: '₹15,000',
    image: 'https://images.unsplash.com/photo-1549887552-cb107269b0c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Experience the stunning beauty of Srinagar, Gulmarg, and Pahalgam.',
  },
  {
    name: 'Leh Ladakh Adventure',
    duration: '10 Days',
    price: '₹25,000',
    image: 'https://images.unsplash.com/photo-1581690623399-9175c5897e1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A thrilling journey through the high-altitude desert of Ladakh.',
  },
  {
    name: 'Vaishno Devi Yatra',
    duration: '3 Days',
    price: '₹5,000',
    image: 'https://images.unsplash.com/photo-1604132840517-3e1d37e6f85e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A holy pilgrimage to the sacred shrine of Vaishno Devi.',
  },
];

const Tours = () => {
  return (
    <div className="py-16 fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={tour.image} alt={tour.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
                <p className="text-gray-600 mb-2">{tour.description}</p>
                <p className="text-gray-600 mb-4">{tour.duration}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">{tour.price}</span>
                  <button className="bg-yellow-400 text-white py-2 px-4 rounded-full hover:bg-yellow-500 transition duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tours;
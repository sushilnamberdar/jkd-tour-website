import React from 'react';

const destinations = [
  {
    name: 'Srinagar',
    image: 'https://images.unsplash.com/photo-1587314168485-260a3563a5d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'The summer capital of Jammu and Kashmir, known for its beautiful lakes and gardens.',
  },
  {
    name: 'Gulmarg',
    image: 'https://images.unsplash.com/photo-1588881696433-2b2a6a5e1d3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A popular skiing destination and hill station in Jammu and Kashmir.',
  },
  {
    name: 'Leh Ladakh',
    image: 'https://images.unsplash.com/photo-1581690623399-9175c5897e1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A high-desert region in the Indian Himalayas, known for its dramatic landscapes and Buddhist monasteries.',
  },
  {
    name: 'Pahalgam',
    image: 'https://images.unsplash.com/photo-1604132840517-3e1d37e6f85e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A popular tourist destination in the Anantnag district of Jammu and Kashmir.',
  },
];

const Destinations = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <div key={destination.name} className="group bg-white rounded-lg shadow-lg overflow-hidden relative transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl fade-in">
              <img src={destination.image} alt={destination.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                <p className="text-gray-600">{destination.description}</p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
                <button className="bg-yellow-400 text-white py-2 px-4 rounded-full hover:bg-yellow-500 transition duration-300 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
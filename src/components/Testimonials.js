import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    quote: 'An amazing experience! The tour was well-organized and the sights were breathtaking. Highly recommended!',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Jane Smith',
    quote: 'JKD Tour made our dream vacation a reality. Everything was perfect, from the accommodation to the guided tours.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Sam Wilson',
    quote: 'I have traveled with many tour operators, but JKD Tour is by far the best. Their attention to detail is commendable.',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-gray-100 fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
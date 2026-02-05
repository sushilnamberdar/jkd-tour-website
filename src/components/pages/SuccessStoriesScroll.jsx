import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselDots,
} from "../ui/carousel";

import leftImage from "../assets/Group.png";

const testimonials = [
    {
        name: "Maria López",
        date: "May 26, 2024",
        text:
            "I’ve traveled with other agencies before, but this experience stood out. Everything was handled with care from start to finish.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "James Carter",
        date: "April 12, 2024",
        text:
            "Perfect balance between adventure and relaxation. Highly recommended!",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Aisha Khan",
        date: "March 3, 2024",
        text:
            "Professional guides and unforgettable experiences.",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        name: "Luca Romano",
        date: "February 19, 2024",
        text:
            "Every detail exceeded expectations. Truly premium service.",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
];

const SuccessStoriesCarousel = () => {

    const autoplay = useRef(
        Autoplay({
            delay: 3000,
            stopOnInteraction: false,
        })
    );

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT IMAGE */}
                <div data-aos="fade-right">
                    <img
                        src={leftImage}
                        alt="Happy travelers"
                        className="w-full h-[420px] object-cover rounded-3xl"
                    />
                </div>

                {/* RIGHT TEXT */}
                <div data-aos="fade-left">
                    <h2 className="text-3xl md:text-4xl  font-thin text-gray-800">
                        Success Stories <b> From
                            <br />
                            <span className="text-primary">Travellers Worldwide</span></b>
                    </h2>

                    <p className="text-gray-600 mt-4 max-w-lg">
                        Real stories from happy explorers who trusted us with their journeys. Hear firsthand how we’ve helped create unforgettable travel experiences across the globe.
                    </p>
                    <button className="mt-6 bg-primary flex items-center justify-center gap-2 text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors duration-200">
                        <span>Take me There</span>
                        {/* SVG Arrow Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5" /* This controls the icon size perfecty */
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* CAROUSEL */}
            <div className="mt-14 flex items-center justify-center max-w-7xl mx-auto px-4">
                <Carousel
                    opts={{
                        loop: true,
                        align: "start",
                    }}
                    plugins={[autoplay.current]}
                    className="relative w-96"
                >
                    <CarouselContent className="-ml-4"> {/* Negative margin compensates for padding */}
                        {testimonials.map((item, i) => (
                            <CarouselItem key={i} className="md:basis-1/2 lg:basis-2/3 pl-4">
                                {/* Your Card Content */}
                                <div className="bg-white rounded-2xl p-6 h-full">
                                    {/* Changed text to gray-300 because background is black */}
                                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                        “{item.text}”
                                    </p>

                                    <div className="flex items-center justify-center gap-3">
                                        <img
                                            src={item.avatar}
                                            alt={item.name}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="font-semibold text-white text-sm">
                                                {item.name}
                                            </p>
                                            <p className="text-xs text-gray-400">{item.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="absolute  left-0 right-0 flex justify-center mt-4">
                    <CarouselDots  />
                    </div>
                </Carousel>
            </div>
        </section>
    );
};

export default SuccessStoriesCarousel;

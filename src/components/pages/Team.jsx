import { Linkedin, Mail } from "lucide-react";
import defultImage from "../assets/default.webp";

const teamMembers = [
    {
        name: "Sushil Namberdar",
        role: "Founder & Travel Consultant",
        image: "/images/team/sushil.webp",
        email: "contact@jkdtours.com",
        linkedin: "#",
    },
    {
        name: "Anita Sharma",
        role: "Operations Manager",
        image: "/images/team/anita.webp",
        email: "operations@jkdtours.com",
        linkedin: "#",
    },
    {
        name: "Ravi Thapa",
        role: "Adventure & Trek Expert",
        image: "/images/team/ravi.webp",
        email: "adventure@jkdtours.com",
        linkedin: "#",
    },
    {
        name: "Emily Carter",
        role: "International Travel Specialist",
        image: "/images/team/emily.webp",
        email: "international@jkdtours.com",
        linkedin: "#",
    },
];

export default function Team() {
    return (
        <section className="py-24 bg-gray-50 font-body">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-20">
                    <p className="text-accent uppercase tracking-widest text-sm mb-3">
                        Meet The People
                    </p>
                    <h1 className="text-4xl md:text-5xl font-heading font-semibold text-primary-dark">
                        Our Travel Experts
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        A passionate team of travel professionals dedicated to crafting
                        unforgettable journeys around the world.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {teamMembers.map((member, i) => (
                        <div
                            key={i}
                            className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition"
                        >
                            {/* Image */}
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={member.defultImage || defultImage}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/30 transition" />
                            </div>

                            {/* Content */}
                            <div className="p-6 text-center">
                                <h3 className="font-heading text-lg font-semibold text-primary-dark">
                                    {member.name}
                                </h3>

                                <p className="text-sm text-gray-500 mt-1">
                                    {member.role}
                                </p>

                                {/* Actions */}
                                <div className="flex justify-center gap-4 mt-5">
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition"
                                    >
                                        <Mail size={16} />
                                    </a>

                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition"
                                    >
                                        <Linkedin size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-24">
                    <h3 className="text-2xl font-heading font-semibold text-primary-dark mb-4">
                        Want to Travel With Experts?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Let our experienced team design a journey that fits your dreams.
                    </p>
                    <a
                        href="/booking"
                        className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-medium transition"
                    >
                        Book Your Trip
                    </a>
                </div>

            </div>
        </section>
    );
}

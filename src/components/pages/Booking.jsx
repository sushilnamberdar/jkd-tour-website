import { useState } from "react";
import toast from "react-hot-toast";

export default function Booking() {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        tripType: "",
        destination: "",
        persons: 1,
        date: "",
        message: "",
    });



    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form);
        if (!form.fullName || !form.email || !form.tripType || !form.destination) {
            toast.error("Please fill required fields");
            return;
        }


        setLoading(true);

        try {
            const res = await fetch("https://api.jkdtour.com/book-tour.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (data.success) {
                toast.success("Booking request sent! WE WILL CONTACT YOU SOON");
                setForm({
                    fullName: "",
                    email: "",
                    phone: "",
                    tripType: "",
                    destination: "",
                    persons: 1,
                    date: "",
                    message: "",
                });
            } else {
                toast.error(data.error || "Something went wrong");
            }
        } catch {
            toast.error("Server not responding");
        } finally {
            setLoading(false);
        }
    };


    return (
        <section className="relative py-24 bg-gray-50 font-body">
            <div className="max-w-6xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-accent uppercase tracking-widest text-sm mb-3">
                        Book Your Experience
                    </p>
                    <h1 className="text-4xl md:text-5xl font-heading font-semibold text-primary-dark">
                        Start Your Journey
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-xl mx-auto">
                        Choose your dream destination and let us take care of everything.
                    </p>
                </div>

                {/* Card */}
                <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-xl bg-white">

                    {/* LEFT INFO */}
                    <div className="bg-primary p-10 lg:p-14 text-white flex flex-col justify-center">
                        <h2 className="text-3xl font-heading font-semibold leading-tight">
                            Travel Made Simple,
                            <br />
                            <span className="text-accent">Memories Made Forever</span>
                        </h2>

                        <p className="mt-6 text-white/90 text-sm leading-relaxed max-w-md">
                            Whether it’s a romantic honeymoon, a thrilling adventure, or a peaceful
                            spiritual escape — we design trips that feel personal and unforgettable.
                        </p>

                        <ul className="mt-8 space-y-3 text-sm">
                            <li>✔ Handcrafted itineraries</li>
                            <li>✔ Trusted local experts</li>
                            <li>✔ 24/7 travel support</li>
                            <li>✔ Transparent pricing</li>
                        </ul>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="p-8 lg:p-12">
                        <form onSubmit={handleSubmit} className="space-y-5">

                            {/* Name & Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="fullName"
                                    value={form.fullName}
                                    onChange={handleChange}
                                    placeholder="Full name"
                                    className="input"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Email address"
                                    className="input"
                                />
                            </div>

                            {/* Phone */}
                            <input
                                type="text"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Phone / WhatsApp number"
                                className="input"
                            />

                            {/* Dropdowns */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <select
                                    name="tripType"
                                    value={form.tripType}
                                    onChange={handleChange}
                                    className="input"
                                >
                                    <option value="">Trip Type</option>
                                    <option>Adventure</option>
                                    <option>Cultural</option>
                                    <option>Family</option>
                                    <option>Honeymoon</option>
                                    <option>Spiritual</option>
                                    <option>Trek</option>
                                </select>

                                <select
                                    name="destination"
                                    value={form.destination}
                                    onChange={handleChange}
                                    className="input"
                                >
                                    <option value="">Destination</option>
                                    <option>Himachal</option>
                                    <option>Kashmir</option>
                                    <option>Ladakh</option>
                                    <option>France</option>
                                    <option>Greece</option>
                                    <option>Iceland</option>
                                    <option>Japan</option>
                                    <option>Nepal</option>
                                </select>
                            </div>

                            {/* Date & Persons */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="date"
                                    name="date"
                                    value={form.date}
                                    onChange={handleChange}
                                    className="input"
                                />

                                <input
                                    type="number"
                                    name="persons"
                                    min="1"
                                    value={form.persons}
                                    onChange={handleChange}
                                    placeholder="Number of persons"
                                    className="input"
                                />
                            </div>

                            {/* Notes */}
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Any special requests or notes..."
                                className="input resize-none"
                            />

                            {/* Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full mt-6 bg-primary hover:bg-primary-dark text-white py-4 rounded-full font-medium tracking-wide transition disabled:opacity-60"
                            >
                                {loading ? "Submitting..." : "Submit Booking Request"}
                            </button>

                        </form>

                    </div>

                </div>
            </div>
        </section>
    );
}

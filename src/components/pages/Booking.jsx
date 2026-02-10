import { useState } from "react";
import toast from "react-hot-toast";

export default function Booking() {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        tripType: "",
        destination: "",
        tour: "",
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

        if (!form.fullName || !form.email || !form.tour) {
            toast.error("Please fill required fields");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("https://api.jkdtours.com/book-tour.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (data.success) {
                toast.success("Booking request sent!");
                setForm({
                    fullName: "",
                    email: "",
                    phone: "",
                    tour: "",
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
        <section className="py-20 mt-20 bg-gray-50">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow">
                <h2 className="text-3xl font-semibold mb-6 text-center">
                    Book Your Tour
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <select
                        name="tripType"
                        value={form.tripType}
                        onChange={handleChange}
                        className="input"
                        required
                    >
                        <option value="">Select Trip Type</option>
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
                        required
                    >
                        <option value="">Select Destination</option>
                        <option>Himachal</option>
                        <option>Kashmir</option>
                        <option>Ladakh</option>
                        <option>France</option>
                        <option>Greece</option>
                        <option>Iceland</option>
                        <option>Japan</option>
                        <option>Nepal</option>
                    </select>

                    <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full name" className="input" />
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" className="input" />
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone / WhatsApp" className="input" />
                    <input name="tour" value={form.tour} onChange={handleChange} placeholder="Tour name" className="input" />

                    <div className="grid grid-cols-2 gap-4">
                        <input name="persons" type="number" min="1" value={form.persons} onChange={handleChange} className="input" />
                        <input name="date" type="date" value={form.date} onChange={handleChange} className="input" />
                    </div>

                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Notes" className="input h-24" />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary text-white py-3 rounded-full disabled:opacity-60"
                    >
                        {loading ? "Submitting..." : "Submit Booking"}
                    </button>
                </form>
            </div>
        </section>
    );
}

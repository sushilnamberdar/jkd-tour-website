import { useState } from "react";
import ContactExtras from "./ContactExtras";

export default function Contact() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch(
                "https://api.jkdtour.com/contact.php",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        fullName,
                        email,
                        subject,
                        message,
                    }),
                }
            );

            const data = await res.json();

            if (data.success) {
                setStatus("success");
                setFullName("");
                setEmail("");
                setSubject("");
                setMessage("");
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    };

    return (
        <>
            <div className=" mt-[100px] bg-white px-6 py-16 ">
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">

                    {/* LEFT SIDE */}
                    <div>
                        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                        <p className="text-gray-600 mb-10">
                            Need help with something? Want to travel? Get in touch with our
                            friendly team and we’ll get in touch within 24 hours.
                        </p>

                        {/* Call Us */}
                        <div className="mb-8">
                            <h3 className="font-semibold mb-1">Call Us</h3>
                            <p className="text-sm text-gray-500 mb-1">Mon–Fri from 8am to 5pm.</p>
                            <p className="text-blue-600 font-medium">+1 (555) 000-0000</p>
                        </div>

                        {/* Chat */}
                        <div className="mb-8">
                            <h3 className="font-semibold mb-1">Chat with us</h3>
                            <p className="text-sm text-gray-500 mb-2">
                                Chat with our team and get support.
                            </p>
                            <a href="mailto:chat@jkdtour.com" className="text-blue-600  cursor-pointer">Shoot an email</a> {" "}
                            <a href="mailto:chat@jkdtour.com" className="text-blue-600 cursor-pointer">chat@jkdtour.com</a>
                        </div>

                        {/* Visit */}
                        <div>
                            <h3 className="font-semibold mb-1">Visit Us</h3>
                            <p className="text-sm text-gray-500 mb-2">
                                Chat to us in person at our HQ.
                            </p>
                            <p className="text-blue-600">
                                456 Maple Street, Apt 12C<br />
                                Chicago, IL 60610
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SIDE FORM */}
                    <div className="rounded-2xl bg-gray-50 p-8 shadow-sm">
                        <h2 className="text-2xl font-semibold mb-2 text-center">
                            Get In <span className="text-blue-600">Touch</span>
                        </h2>
                        <p className="text-center text-gray-500 mb-8">
                            We’ll get back to you within 24 hours.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">

                            <input
                                type="text"
                                placeholder="Full name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <textarea
                                placeholder="Write your message..."
                                rows="4"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="w-full rounded-full bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-60"
                            >
                                {status === "sending" ? "Sending..." : "Submit"}
                            </button>

                            {status === "success" && (
                                <p className="text-green-600 text-center">
                                    Message sent successfully!
                                </p>
                            )}

                            {status === "error" && (
                                <p className="text-red-600 text-center">
                                    Something went wrong. Please try again.
                                </p>
                            )}

                        </form>

                    </div>

                </div>
            </div>
            <ContactExtras />
        </>
    );
}

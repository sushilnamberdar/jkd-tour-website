import ContactExtras from "./ContactExtras";

export default function Contact() {
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
            <p className="text-blue-600 mb-1 cursor-pointer">Shoot an email</p>
            <p className="text-blue-600 cursor-pointer">Message us on Facebook</p>
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

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full name"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Write your message..."
              rows="4"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full rounded-full bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
    <ContactExtras/>
    </>
  );
}

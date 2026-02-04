import React from "react";
import { Link } from "react-router-dom";
import { useCookieConsent } from "./CookieConsent";

export default function CookiePolicy() {
  const { openSettings } = useCookieConsent();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-10">

        <h1 className="text-3xl font-bold">Cookie Policy</h1>
        <p className="text-gray-700">
          This Cookie Policy explains how we use cookies and similar technologies
          on our website in accordance with the UK GDPR and the Privacy and
          Electronic Communications Regulations (PECR).  
        </p>

        {/* What Are Cookies */}
        <section>
          <h2 className="text-2xl font-semibold">1. What Are Cookies?</h2>
          <p className="text-gray-700 mt-2">
            Cookies are small text files placed on your device when you access
            our website. They allow us to recognise your device, remember your
            preferences, improve the website, and provide certain functionality.
          </p>
        </section>

        {/* Types of Cookies */}
        <section>
          <h2 className="text-2xl font-semibold">2. Types of Cookies We Use</h2>

          <h3 className="text-xl font-semibold mt-4">2.1 Strictly Necessary Cookies</h3>
          <p className="text-gray-700">
            These cookies are essential for the website to work and cannot be
            disabled. They do not require your consent under UK law.
          </p>

          <h3 className="text-xl font-semibold mt-4">2.2 Analytics & Performance Cookies</h3>
          <p className="text-gray-700">
            These cookies help us understand how visitors use our site (e.g.
            Google Analytics). They are only used **with your consent**.
          </p>

          <h3 className="text-xl font-semibold mt-4">2.3 Functional Cookies</h3>
          <p className="text-gray-700">
            These improve your experience by remembering preferences. Consent is
            required for non-essential functional cookies.
          </p>

          <h3 className="text-xl font-semibold mt-4">2.4 Advertising & Marketing Cookies</h3>
          <p className="text-gray-700">
            These track browsing behaviour to show personalised ads. They are
            only activated if you explicitly consent.
          </p>
        </section>

        {/* Why We Use Cookies */}
        <section>
          <h2 className="text-2xl font-semibold">3. Why We Use Cookies</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>To ensure the website functions properly</li>
            <li>To analyse website traffic and performance</li>
            <li>To improve user experience</li>
            <li>To personalise content (if consented)</li>
            <li>To provide relevant advertising (if consented)</li>
          </ul>
        </section>

        {/* Legal Basis */}
        <section>
          <h2 className="text-2xl font-semibold">4. Legal Basis for Using Cookies</h2>
          <p className="text-gray-700">
            Under UK GDPR and PECR:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mt-2">
            <li>
              **Strictly necessary cookies** are allowed without consent.
            </li>
            <li>
              **Analytics, functional, and advertising cookies** require explicit,
              opt-in consent.
            </li>
          </ul>
        </section>

        {/* Managing Cookies */}
        <section>
          <h2 className="text-2xl font-semibold">5. Managing Your Cookie Preferences</h2>
          <p className="text-gray-700">
            You can change or withdraw your consent at any time using the button
            below:
          </p>

          <button
            onClick={openSettings}
            className="mt-4 px-6 py-3 rounded-full bg-gray-800 text-white text-sm hover:bg-gray-700 shadow"
          >
            Manage Cookie Preferences
          </button>

          <p className="text-gray-700 mt-4">
            You can also control cookies directly in your browser settings.  
            Disabling cookies may affect website functionality.
          </p>
        </section>

        {/* Data Sharing */}
        <section>
          <h2 className="text-2xl font-semibold">6. Third-Party Cookies</h2>
          <p className="text-gray-700">
            Some cookies may be placed by third-party services such as analytics,
            advertising networks, or embedded content providers. We only load
            these after you have given consent.
          </p>
        </section>

        {/* How long cookies last */}
        <section>
          <h2 className="text-2xl font-semibold">7. Cookie Duration</h2>
          <p className="text-gray-700">
            Cookies may be:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mt-2">
            <li><strong>Session cookies</strong> – deleted when you close your browser</li>
            <li><strong>Persistent cookies</strong> – remain on your device for a defined period</li>
          </ul>
        </section>

        {/* Updates */}
        <section>
          <h2 className="text-2xl font-semibold">8. Updates to This Policy</h2>
          <p className="text-gray-700">
            We may update this Cookie Policy from time to time. The updated
            version will always be posted on this page.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold">9. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions or requests regarding this Cookie Policy,
            you can reach us at:
          </p>

          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-[#009EE3] text-white rounded-lg text-lg font-semibold shadow hover:bg-[#007bb8] mt-4"
          >
            Contact Us
          </Link>
        </section>

      </div>
    </section>
  );
}

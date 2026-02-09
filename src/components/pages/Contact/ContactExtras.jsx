import { useState } from "react";

const faqs = [
  {
    question: "How do I book a tour with Travelista?",
    answer:
      "You can book directly through our website by selecting your desired tour and following the checkout process. If you need a custom itinerary or personal help, our travel experts are happy to assist you via chat, email, or phone.",
  },
  {
    question: "Can I customize a tour or itinerary?",
    answer:
      "Yes! We offer fully customizable tours tailored to your preferences, schedule, and budget.",
  },
  {
    question: "Do I need to pay the full amount while booking?",
    answer:
      "In most cases, you only need to pay a deposit. The remaining balance can be paid closer to your departure date.",
  },
  {
    question: "What countries or destinations do you operate in?",
    answer:
      "We operate in multiple destinations worldwide including Europe, Asia, Africa, and the Americas.",
  },
  {
    question: "Can I join a tour solo?",
    answer:
      "Absolutely! Many of our travelers join solo and love the experience.",
  },
];

export default function ContactExtras() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mt-20 max-w-6xl mx-auto px-6">
      {/* MAP */}
      <div className="w-full h-[420px] rounded-2xl overflow-hidden">
        <iframe
          title="London Map"
          src="https://www.google.com/maps?q=London%20Eye&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>

      {/* FAQ SECTION */}
      <div className="mx-auto max-w-6xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Do you have <span className="text-blue-600">any questions</span>
            <br /> for us?
          </h2>
          <p className="text-gray-600 max-w-md">
            Planning a trip comes with questions—and we’re here to answer all of them.
          </p>
        </div>

        {/* RIGHT FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4 cursor-pointer"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-900">
                  {faq.question}
                </h3>
                <span className="text-xl text-gray-400">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-sm">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

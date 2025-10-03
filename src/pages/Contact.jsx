import React from "react";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-6">
        Got questions about our scarves? Reach out and we’ll get back to you.
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-lg p-3"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded-lg p-3"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border border-gray-300 rounded-lg p-3 h-32"
        />
        <button
          type="submit"
          className="bg-black text-white font-medium px-6 py-3 rounded-lg hover:bg-gray-800"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

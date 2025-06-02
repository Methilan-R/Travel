import React from 'react'
import Image from 'next/image';
const Contact = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
  src="https://images.unsplash.com/photo-1494173853739-c21f58b16055?auto=format&fit=crop&w=1950&q=80"
  alt="Contact Hero"
  fill
  className="object-cover brightness-75"
/>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">Get in Touch</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-md">
            Have a question or ready to start your journey? We’re here to help.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-blue-50 to-white shadow-2xl rounded-3xl p-10 sm:p-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Contact Us</h2>
          <form className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                  placeholder="Methilan"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                  placeholder="Methilan@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                placeholder="Booking inquiry"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                rows={6}
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-10 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

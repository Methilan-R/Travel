import React from 'react'

const About = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Travel Abroad"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg">
            Discover the World with Us
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">About Our Travel Platform</h2>
        <p className="text-lg leading-relaxed text-gray-700 text-justify">
          At <strong>GoGlobal Travels</strong>, we are passionate about turning your dream vacations into reality.
          Our platform is dedicated to offering seamless international travel experiences, from personalized
          itineraries to hassle-free bookings. Whether you're seeking a romantic getaway in Paris, an adventure in
          the Alps, or a cultural escape in Japan — we’ve got you covered.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div>
            <h3 className="text-2xl font-semibold mb-3">Why Choose Us?</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Trusted by thousands of global travelers</li>
              <li>24/7 customer support & travel assistance</li>
              <li>Affordable and flexible travel packages</li>
              <li>Real-time booking confirmation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700">
              Our mission is to make international travel accessible, enjoyable, and memorable for everyone.
              We are committed to innovation, customer satisfaction, and ensuring every trip is your best yet.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="mb-6">Start your next international journey with us. Where will you go next?</p>
          <a
            href="/book"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Book Your Trip
          </a>
        </div>
      </div>
    </div>
  )
}

export default About

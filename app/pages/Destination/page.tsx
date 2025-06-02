import React from 'react';
import Image from 'next/image';

const destinations = [
  {
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    description: "The city of love, lights, and legendary cuisine.",
  },
  {
    name: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
    description: "A vibrant blend of tradition, technology, and culture.",
  },
  {
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    description: "Tropical paradise with stunning beaches and temples.",
  },
  {
    name: "New York, USA",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    description: "The city that never sleeps, full of energy and dreams.",
  },
  {
    name: "Rome, Italy",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*gfzxEKbwzFDI8L-h2FQSrw.jpeg",
    description: "An open-air museum of ancient ruins and rich history.",
  },
  {
    name: "Sydney, Australia",
    image: "https://files.vroomvroomvroom.com/cms/assets/images/hero-desktop-one-day-in-sydney_1x.jpg",
    description: "Iconic harbor views and sun-kissed beaches await.",
  }
];

const Destination = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/hotel.jpg"
          alt="Destinations Hero"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">Explore Top Destinations</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-md">
            Hand-picked places around the globe to turn your journey into unforgettable memories.
          </p>
        </div>
      </div>

      {/* Destination Cards Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              <div className="relative w-full h-64">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-2xl font-semibold mb-2">{dest.name}</h3>
                <p className="text-gray-600">{dest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;

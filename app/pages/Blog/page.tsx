import React from 'react'
import Image from 'next/image';

const blogPosts = [
  {
    title: "10 Must-Know Travel Hacks",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80",
    excerpt: "Save time and money with these essential travel tips that frequent flyers swear by.",
    author: "Admin",
    date: "May 12, 2025",
  },
  {
    title: "Top 5 Budget-Friendly Countries to Visit in 2025",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1950&q=80",
    excerpt: "Want to travel the world without breaking the bank? Here are 5 stunning countries to explore affordably.",
    author: "Travel Expert",
    date: "April 30, 2025",
  },
  {
    title: "A Guide to Solo Traveling Safely",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1950&q=80",
    excerpt: "Discover how to stay safe, confident, and connected while exploring the world solo.",
    author: "Guest Blogger",
    date: "March 20, 2025",
  },
  {
    title: "Hidden Gems: Underrated Destinations You Shouldn't Miss",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1950&q=80",
    excerpt: "Skip the tourist traps and visit these breathtaking spots known only to seasoned travelers.",
    author: "Explorer Team",
    date: "February 10, 2025",
  },
];

const Blog = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80"
          alt="Blog Hero"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">Travel Stories & Guides</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-md">
            Dive into inspiring travel blogs, guides, and tips from experts and explorers around the globe.
          </p>
        </div>
      </div>

      {/* Blog Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Blogs</h2>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-[1.02] transition duration-300"
            >
              <div className="relative w-full h-60">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-3">{post.excerpt}</p>
                <div className="text-sm text-gray-500">
                  By <span className="font-medium">{post.author}</span> | {post.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

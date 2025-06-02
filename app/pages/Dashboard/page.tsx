'use client';

import React from 'react';
import Image from 'next/image';
import {
  BarChart, Bar,
  LineChart, Line,
  PieChart, Pie, Cell,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer
} from 'recharts';

const destinationsData = [
  { name: 'Paris', visits: 120 },
  { name: 'Tokyo', visits: 98 },
  { name: 'Rome', visits: 85 },
  { name: 'London', visits: 130 },
];

const expenseTrend = [
  { month: 'Jan', expense: 400 },
  { month: 'Feb', expense: 600 },
  { month: 'Mar', expense: 800 },
  { month: 'Apr', expense: 700 },
];

const expenseBreakdown = [
  { name: 'Flights', value: 500 },
  { name: 'Hotels', value: 300 },
  { name: 'Food', value: 200 },
  { name: 'Activities', value: 150 },
];

const activityScore = [
  { activity: 'Adventure', score: 120 },
  { activity: 'Relaxation', score: 90 },
  { activity: 'Culture', score: 110 },
  { activity: 'Nature', score: 100 },
];

const COLORS = ['#6366F1', '#10B981', '#F59E0B', '#EF4444'];

export default function DashboardPage() {
  return (
    <div className="bg-gradient-to-br from-indigo-100 via-white to-teal-100 min-h-screen px-4 pb-12">
      
      {/* Hero Section */}
      <div className="relative w-full h-[450px] rounded-3xl overflow-hidden mb-16 shadow-2xl">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80"
          alt="Travel Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-600 bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
            Explore the World with Insights
          </h1>
          <p className="text-lg max-w-2xl drop-shadow-md">
            Track your journeys, understand your habits, and make the most of every destination you visit.
          </p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="grid gap-12 md:grid-cols-2">
        
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-indigo-200 transition duration-300">
          <h2 className="text-xl font-semibold mb-4 text-indigo-700">🌍 Top Destinations</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={destinationsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="visits" fill="#6366F1" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-emerald-200 transition duration-300">
          <h2 className="text-xl font-semibold mb-4 text-emerald-700">📈 Monthly Travel Expenses</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={expenseTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="expense"
                stroke="#10B981"
                strokeWidth={4}
                dot={{ r: 6 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-yellow-200 transition duration-300">
          <h2 className="text-xl font-semibold mb-4 text-yellow-700">💸 Expense Breakdown</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={expenseBreakdown}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {expenseBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Radar Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-orange-200 transition duration-300">
          <h2 className="text-xl font-semibold mb-4 text-orange-700">🎯 Activity Preferences</h2>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart outerRadius={90} data={activityScore}>
              <PolarGrid />
              <PolarAngleAxis dataKey="activity" />
              <PolarRadiusAxis />
              <Radar
                name="You"
                dataKey="score"
                stroke="#F59E0B"
                fill="#F59E0B"
                fillOpacity={0.6}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

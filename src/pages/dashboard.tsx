import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Languages,
  Clock,
  Award,
  LayoutGrid,
  BarChart2,
  ArrowRight,
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      icon: <BookOpen className="w-6 h-6 text-black" />,
      title: "Total Courses",
      value: "0",
      desc: "Available to learn",
    },
    {
      icon: <Languages className="w-6 h-6 text-black" />,
      title: "Translations",
      value: "∞",
      desc: "ISL translations available",
    },
    {
      icon: <Clock className="w-6 h-6 text-black" />,
      title: "Learning Hours",
      value: "0",
      desc: "Start learning today",
    },
    {
      icon: <Award className="w-6 h-6 text-black" />,
      title: "Achievements",
      value: "0",
      desc: "Complete lessons to earn",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold mb-2">Welcome back, <span className="text-black">Student</span>!</h1>
        <p className="text-gray-600 text-lg">
          Continue your learning journey with ISL-powered education.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-gray-100 rounded-lg">{s.icon}</div>
              <LayoutGrid className="w-5 h-5 text-gray-400" />
            </div>
            <h2 className="text-3xl font-bold mb-1">{s.value}</h2>
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-gray-500 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions & Progress */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <h2 className="font-bold text-lg mb-2">Quick Actions</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Start learning or explore features instantly.
          </p>

          <div className="flex flex-col gap-3">
            <Link
              to="/courses"
              className="flex items-center justify-between bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>Browse Courses</span>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/translate"
              className="flex items-center justify-between border px-5 py-3 rounded-lg hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-2">
                <Languages className="w-5 h-5" />
                <span>Try Translation</span>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Progress Section */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <h2 className="font-bold text-lg mb-2">Your Progress</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Overview of your learning statistics.
          </p>

          <div className="flex items-center justify-between text-sm mb-2">
            <span className="font-semibold">Courses Started</span>
            <span className="text-gray-600">0 of 0</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
            <div className="bg-black h-2 rounded-full" style={{ width: "0%" }}></div>
          </div>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <BarChart2 className="w-4 h-4" />
            <span>Start your first course to see progress</span>
          </div>
        </div>
      </div>
    </div>
  );
}

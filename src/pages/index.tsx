import React from "react";
import { Link } from "react-router-dom";
import {
  Hand,
  Languages,
  Video,
  BookOpen,
  Accessibility,
  ChartBar,
  Globe,
  CheckCircle,
  PlayCircle,
} from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm mb-6 font-medium">
          ⚙️ AI-Powered Learning for Everyone
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Learn Without Barriers <br /> with{" "}
          <span className="text-black">Indian Sign Language</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8 text-lg">
          SignBridge empowers deaf and mute students with AI-driven educational
          content, real-time ISL translations, and an inclusive learning
          experience built for accessibility and engagement.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/dashboard"
            className="px-6 py-3 bg-black text-white rounded-lg text-lg hover:bg-gray-800 transition"
          >
            Go to Dashboard
          </Link>
          <Link
            to="/learn-more"
            className="px-6 py-3 border border-gray-300 rounded-lg text-lg hover:bg-gray-50 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">
            Powerful Features for Inclusive Learning
          </h2>
          <p className="text-gray-600 mb-12">
            Everything you need to learn effectively with Indian Sign Language
            support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            {[
              {
                icon: <Hand className="w-8 h-8" />,
                title: "ISL Avatar Lessons",
                desc: "Interactive lessons with animated ISL avatars demonstrating concepts clearly and engagingly.",
              },
              {
                icon: <Languages className="w-8 h-8" />,
                title: "Real-Time Translation",
                desc: "Convert text and speech to ISL instantly or translate ISL back to text seamlessly.",
              },
              {
                icon: <Video className="w-8 h-8" />,
                title: "Video-to-ISL",
                desc: "Transform educational videos into ISL format with AI-powered conversion technology.",
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Comprehensive Courses",
                desc: "Access a wide range of subjects adapted for ISL learners with visual guidance.",
              },
              {
                icon: <Accessibility className="w-8 h-8" />,
                title: "High Accessibility",
                desc: "High-contrast UI, gesture navigation, subtitles, and more — designed for everyone.",
              },
              {
                icon: <ChartBar className="w-8 h-8" />,
                title: "Progress Tracking",
                desc: "Track your learning milestones with intuitive dashboards and insights.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 text-left shadow-sm border hover:shadow-md hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="flex items-center gap-3 mb-3 text-black">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-3">How SignBridge Works</h2>
        <p className="text-gray-600 mb-12">
          Simple steps to start your accessible learning journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            {
              step: 1,
              title: "Open URL and Access 24/7",
              desc: "Instantly access SignBridge anytime, anywhere — no sign-up required.",
              icon: <Globe className="w-10 h-10 mx-auto text-black" />,
            },
            {
              step: 2,
              title: "Choose Courses",
              desc: "Browse and select from our ISL-enabled course library.",
              icon: <CheckCircle className="w-10 h-10 mx-auto text-black" />,
            },
            {
              step: 3,
              title: "Start Learning",
              desc: "Learn at your own pace with ISL translations and interactive lessons.",
              icon: <PlayCircle className="w-10 h-10 mx-auto text-black" />,
            },
          ].map((step, i) => (
            <div
              key={i}
              className="p-8 border rounded-xl bg-gray-50 hover:shadow-md hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="font-semibold text-xl mb-2">
                {step.step}. {step.title}
              </h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white text-center py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Ready to Break Down Communication Barriers?
        </h2>
        <p className="text-gray-300 mb-10 text-lg max-w-xl mx-auto">
          Join SignBridge today and experience accessible education designed for
          everyone.
        </p>
        <Link
          to="/dashboard"
          className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
        >
          Go to Dashboard →
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 text-gray-600 text-sm">
        © {new Date().getFullYear()} SignBridge — Empowering education through
        inclusivity.
      </footer>
    </div>
  );
}
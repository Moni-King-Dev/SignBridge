import React from "react";

interface Course {
  title: string;
  description: string;
  videos: { title: string; url: string }[];
  isLocal?: boolean;
}

export default function CoursesPage() {
  const courses: Course[] = [
    // 🧩 Blender Animation Course
    {
      title: "Animated ISL Learning (Blender Series)",
      description:
        "Watch 3D animated Blender videos demonstrating Indian Sign Language signs. These visual lessons help you understand hand movements, gestures, and expressions clearly.",
      videos: [
        {
          title: "Air (ISL Animation)",
          url: "/videos/Air animation (INDIAN SIGN LANGUAGE).mp4",
        },
        {
          title: "Beat (ISL Animation)",
          url: "/videos/Beat animation (INDIAN SIGN LANGUAGE).mp4",
        },
        {
          title: "Break (ISL Animation)",
          url: "/videos/Break animation (INDIAN SIGN LANGUAGE).mp4",
        },
        {
          title: "School (ISL Animation)",
          url: "/videos/School animation (INDIAN SIGN LANGUAGE).mp4",
        },
        {
          title: "Sun (ISL Animation)",
          url: "/videos/Sun animation (INDIAN SIGN LANGUAGE).mp4",
        },
        {
          title: "Thank You (ISL Animation)",
          url: "/videos/Thankyou animation (INDIAN SIGN LANGUAGE).mp4",
        },
        {
          title: "Us (ISL Animation)",
          url: "/videos/Us animation (INDIAN SIGN LANGUAGE).mp4",
        },
        {
          title: "Woman (ISL Animation)",
          url: "/videos/Woman animation (INDIAN SIGN LANGUAGE).mp4",
        },
      ],
      isLocal: true,
    },

    // 💻 YouTube Information Technology Course
    {
      title: "Information Technology in ISL",
      description:
        "Explore Information Technology topics through Indian Sign Language videos. Each lesson covers key computer concepts and related terms.",
      videos: [
        {
          title: "Information Technology",
          url: "https://www.youtube.com/embed/4B7W5gZOUxY",
        },
        {
          title: "Information Technology Devices",
          url: "https://www.youtube.com/embed/UAhf9nll-5g",
        },
        {
          title: "Computer Related Terminologies",
          url: "https://www.youtube.com/embed/TMJn6Zjf5jY",
        },
        {
          title: "Components of a Computer",
          url: "https://www.youtube.com/embed/t9VIMFYyYN0",
        },
        {
          title: "Basics of a Computer",
          url: "https://www.youtube.com/embed/-ePKjKMO3b8",
        },
        {
          title: "The World of Computer",
          url: "https://www.youtube.com/embed/TgiVMx6gRb8",
        },
        {
          title: "Characteristics of a Computer",
          url: "https://www.youtube.com/embed/9bzIdUy54gg",
        },
      ],
    },
  ];

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">
        📚 SignBridge Learning Courses
      </h1>

      <div className="space-y-12">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100"
          >
            <h2 className="text-2xl font-semibold mb-2 text-blue-700">
              {course.title}
            </h2>
            <p className="text-gray-700 mb-6">{course.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {course.videos.map((video, vIdx) => (
                <div
                  key={vIdx}
                  className="rounded-xl overflow-hidden shadow-sm border hover:shadow-md transition"
                >
                  <div className="bg-black aspect-video">
                    {course.isLocal ? (
                      <video
                        controls
                        preload="metadata"
                        src={video.url}
                        className="w-full h-full object-cover"
                      >
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <iframe
                        src={video.url}
                        title={video.title}
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    )}
                  </div>
                  <div className="p-3 bg-gray-50">
                    <h3 className="text-lg font-medium text-gray-900">
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

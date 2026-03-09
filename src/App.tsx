import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import Dashboard from "./pages/dashboard";
import Courses from "./pages/courses";
import Translate from "./pages/translate";
import Profile from "./pages/profile";
import Settings from "./pages/settings";
import Nav from "./components/layout/nav";

export default function App() {
  return (
    <div>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/translate" element={<Translate />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

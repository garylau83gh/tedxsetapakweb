import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import EventLayout from './components/EventLayout'; // new
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Speakers from "./components/Speakers";
import Events from "./components/Events";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import Schedule from "./components/Schedule";
import Location from "./components/Location";
import Theme from "./components/Theme";
import Team from "./components/Team";
import Sponsors from "./components/Sponsors";

function ScrollToAnchor() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        // Delay helps with layout settling on slow devices
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  return null;
}

// Wrap homepage content in a separate component
function HomePage() {
  return (
    <>
      <Navbar />
      <About />
      <Events />
      <Team />
      <Sponsors />
      <Connect />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToAnchor /> {/* 👈 Add this line */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event" element={<EventLayout />}>
          <Route path="theme" element={<Theme />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="*" element={<div style={{ color: "white" }}>404 - Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;

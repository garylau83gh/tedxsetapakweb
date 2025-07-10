import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
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

// Wrap homepage content in a separate component
function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Connect />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={/* homepage layout */ <HomePage />} />
        <Route path="/event" element={<EventLayout />}>
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

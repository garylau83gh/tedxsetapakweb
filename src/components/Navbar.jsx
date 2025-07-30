import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../components/logo-white.png"; // adjust the path as needed

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome =
    location.pathname === "/" ||
    location.pathname === "/tedxsetapakweb/" ||
    location.hash === "#/";

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const tryScroll = () => {
          const elAfter = document.getElementById(id);
          if (elAfter) {
            elAfter.scrollIntoView({ behavior: "smooth" });
          }
        };
        setTimeout(tryScroll, 500);
      }, 100);
    }
  };

  return (
    <nav
      style={{ backgroundColor: "#000000" }}
      className="navbar navbar-expand-lg navbar-dark"
    >
      <div className="container">
        {/* Brand Logo + Subtext */}
        <a className="navbar-brand d-flex flex-column align-items-start" href="#" style={{ lineHeight: 1 }}>
          <div className="d-flex flex-column">
            <img
              src={Logo}
              alt="TEDxSetapak"
              height="50"
              style={{
                objectFit: "contain",
                marginBottom: "-4px", // bring text closer to logo
                marginLeft: "1px"      // aligns the x= with Setapak text
              }}
            />
            <small style={{
              fontSize: "0.57rem",
              marginLeft: "15px",     // aligns with Setapak instead of the red 'TED'
            }}>
            <span style={{ color: "#E62B1E" }}>x</span>
            <span style={{ color: "white" }}> = independently organized TED event</span>
          </small>
        </div>
      </a>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-end">
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("about");
                }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("speakers");
                }}
              >
                Speakers
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("events");
                }}
              >
                Events
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("team");
                }}
              >
                Team
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("sponsors");
                }}
              >
                Sponsors
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("connect");
                }}
              >
                Connect With Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

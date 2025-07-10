import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/" || location.pathname === "/tedxsetapakweb/" || location.hash === "#/";

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // If not on homepage, navigate first, then scroll
      navigate("/");
      setTimeout(() => {
        const tryScroll = () => {
          const elAfter = document.getElementById(id);
          if (elAfter) {
            elAfter.scrollIntoView({ behavior: "smooth" });
          }
        };
        // retry scroll in case the element is rendered after delay
        setTimeout(tryScroll, 500);
      }, 100);
    }
  };

  return (
    <nav
      style={{ backgroundColor: "#E62B1E" }}
      className="navbar navbar-expand-lg navbar-dark"
    >
      <div className="container">
        {/* Brand Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <span style={{ fontWeight: 800, fontSize: "1.8rem" }}>TED</span>
          <span
            style={{
              fontWeight: 700,
              fontSize: "1.5rem",
              marginLeft: "2px",
              position: "relative",
              top: "-0.3rem",
              textTransform: "lowercase",
            }}
          >
            x
          </span>
          <span
            style={{
              fontWeight: 300,
              fontSize: "1.5rem",
              marginLeft: "2px",
            }}
          >
            Setapak
          </span>
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
            <a className="nav-link text-white" href="#" onClick={(e) => { e.preventDefault(); handleScroll("about"); }}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#" onClick={(e) => { e.preventDefault(); handleScroll("speakers"); }}>
              Speakers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#" onClick={(e) => { e.preventDefault(); handleScroll("events"); }}>
              Events
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#" onClick={(e) => { e.preventDefault(); handleScroll("team"); }}>
              Team
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#" onClick={(e) => { e.preventDefault(); handleScroll("connect"); }}>
              Connect With Us
            </a>
          </li>
        </ul>
      </div>

      </div>
    </nav>
  );
}

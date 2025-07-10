// src/components/EventLayout.jsx
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function EventLayout() {
  return (
    <>
      <nav style={{ backgroundColor: '#E62B1E' }} className="navbar navbar-expand-lg">
        <div className="container">
<Link className="navbar-brand d-flex flex-column" to="/event/speakers">
  <div className="d-flex align-items-center">
    <span style={{ fontWeight: 800, color: 'white', fontSize: '1.8rem' }}>TED</span>
    <span style={{
      fontWeight: 700, color: 'white', fontSize: '1.5rem',
      marginLeft: '2px', position: 'relative', top: '-0.3rem'
    }}>x</span>
    <span style={{ fontWeight: 600, color: 'white', fontSize: '1.5rem', marginLeft: '2px' }}>
      Setapak
    </span>
  </div>
  <small className="text-white" style={{ fontSize: '1rem', fontWeight: 600 }}>
    23 Aug 2025 &nbsp;&bull;&nbsp; TAR UMT &nbsp;&bull;&nbsp; 8:30 AM – 2:00 PM
  </small>
</Link>


          {/* Toggle button for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarEvent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarEvent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/event/theme">Theme</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/event/speakers">Speakers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/event/schedule">Schedule</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/event/location">Location</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container py-4">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

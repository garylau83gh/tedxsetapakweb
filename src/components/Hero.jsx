import React from "react";
import Splash00 from "../image/spash_00.jpg"; // Adjust path if needed

export default function Hero() {
  return (
    <div className="bg-black text-white py-5">
      <div className="container">
        <div
          className="position-relative rounded overflow-hidden"
          style={{ height: "450px" }} // Smaller height here
        >
          <img
            src={Splash00}
            alt="Hero Background"
            className="img-fluid w-100 h-100"
            style={{ objectFit: "cover", filter: "brightness(0.7)" }}
          />

          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background: "linear-gradient(to right, rgba(0,0,0,0.9) 15%, rgba(0,0,0,0.3) 80%, transparent 100%)",
              zIndex: 1,
            }}
          />

          <div
            className="position-absolute top-0 start-0 h-100 d-flex align-items-center"
            style={{ zIndex: 2, padding: "1rem" }} // Adjust padding to fit height
          >
            <div className="text-start text-white">
              <h2 className="mb-1">
                <span style={{ fontWeight: 800, color: '#E62B1E' }}>TED</span>
                <span style={{
                  fontWeight: 700,
                  color: '#E62B1E',
                  marginLeft: '4px',
                  position: 'relative',
                  top: '-0.4rem',
                  fontSize: '1.5rem'
                }}>x</span>
                <span style={{
                  fontWeight: 300,
                  color: 'white',
                  marginLeft: '8px'
                }}>Setapak</span>
              </h2>

              <small style={{ fontSize: '0.85rem' }}>
                <span style={{ color: '#E62B1E' }}>x</span>
                <span style={{ color: 'white' }}> = independently organized TED event</span>
              </small>

              <p className="mb-2" style={{ fontSize: '0.95rem' }}>
                Unearthing Ideas Worth Spreading
              </p>

              <button
                className="btn btn-outline-light btn-sm"
                onClick={() => {
                  const el = document.getElementById("about");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

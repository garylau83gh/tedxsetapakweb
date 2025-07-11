import React from "react";
import Splash00 from "../image/spash_00.jpg";

export default function Hero() {
  return (
    <div className="bg-black text-white py-5">
      <div className="container">
        <div
          className="position-relative rounded overflow-hidden"
          style={{ height: "450px" }}
        >
          <img
            src={Splash00}
            alt="Hero Background"
            className="img-fluid w-100 h-100"
            style={{ objectFit: "cover", filter: "brightness(0.7)" }}
          />

          {/* Gradient overlay */}
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background: "linear-gradient(to right, rgba(0,0,0,0.9) 15%, rgba(0,0,0,0.3) 80%, transparent 100%)",
              zIndex: 1,
            }}
          />

          {/* Foreground content */}
          <div
            className="position-absolute top-0 start-0 h-100 d-flex align-items-center"
            style={{ zIndex: 2, padding: "1rem" }}
          >
            <div className="text-start text-white">
              <p className="mb-1" style={{ fontSize: "1.9rem" }}>Welcome to</p>

              <h1 className="mb-2" style={{ fontSize: "3.5rem", fontWeight: "600" }}>
                TEDxSetapak
              </h1>

              <p className="mb-3" style={{ fontSize: "0.95rem" }}>
                Where Ideas Change Everything
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

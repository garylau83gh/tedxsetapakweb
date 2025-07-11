// src/components/TEDxLogo.jsx
import React from "react";
import "./tedxlogo.css";

export default function TEDxLogo({ location = "Setapak" }) {
  return (
    <div className="tedx-logo-container">
      <div className="tedx-main">
        <span className="ted">TED</span>
        <span className="x">x</span>
        <span className="location">{location}</span>
      </div>
      <div className="tedx-tagline">
        independently organized TED event
      </div>
    </div>
  );
}

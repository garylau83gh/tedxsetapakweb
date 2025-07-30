import React from "react";
import sponsor_2025_1 from "../image/tarumt_logo.png";
import sponsor_2025_2 from "../image/sponsor.png";
import sponsor_2025_3 from "../image/sponsor.png";
import sponsor_2025_4 from "../image/sponsor.png";
import sponsor_2025_5 from "../image/sponsor.png";
import sponsor_2025_6 from "../image/sponsor.png";

// Sponsor data
const sponsors = [
  { image: sponsor_2025_1, alt: "Sponsor 1" },
  { image: sponsor_2025_2, alt: "Sponsor 2" },
  { image: sponsor_2025_3, alt: "Sponsor 3" },
  { image: sponsor_2025_4, alt: "Sponsor 4" },
  { image: sponsor_2025_5, alt: "Sponsor 5" },
  { image: sponsor_2025_6, alt: "Sponsor 6" }
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="text-white bg-black py-5">
      <div className="container text-center">
        <h2 className="mb-4">2025 Sponsors</h2>

        <div className="row justify-content-center">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center"
              style={{ padding: "10px" }}
            >
              <div
                style={{
                  width: "300px",
                  height: "150px",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px"
                }}
              >
                <img
                  src={sponsor.image}
                  alt={sponsor.alt}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain"
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

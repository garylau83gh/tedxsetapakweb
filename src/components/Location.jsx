import React from "react";
import "./Location.css";
import VenueImage from "../image/TARUMT.png";
import MaybankQR from "../image/QR.png";

const Location = () => {
  return (
    <section id="location" className="bg-dark text-white py-5">
      <div className="container location-container">
        <h2 className="text-center mb-5">
          Discover inspiring talks. Get your{" "}
          <span className="tedx-highlight">TEDxSetapak</span> now.
        </h2>

        <div className="row g-5">
          {/* Left column */}
          <div className="col-md-7">
            <h4>Venue : TAR UMT, KL</h4>
            <p><strong>Tunku Abdul Rahman University of Management and Technology</strong></p>
            <p>Auditorium Hall, Bangunan Tun Tan Siew Sin</p>
            <p>Jalan Genting Kelang, Setapak, 53300 Kuala Lumpur</p>
            <p>Federal Territory of Kuala Lumpur</p>

            <p>
              <strong>Maps</strong>:{" "}
              <a href="https://g.co/kgs/65427EM" target="_blank" rel="noopener noreferrer">
                https://g.co/kgs/65427EM
              </a><br />
              <strong>Waze</strong>:{" "}
              <a href="https://waze.com/ul/hw2866ck35" target="_blank" rel="noopener noreferrer">
                https://waze.com/ul/hw2866ck35
              </a>
            </p>

            <p><strong>Date</strong>: 23 August 2025</p>
            <p><strong>Time</strong>: 8.30am to 2.00pm</p>

            <h5 className="mt-4">Ticket Price:</h5>
            <p><strong>Early Bird (Now until 23 July 2025)</strong></p>
            <ul>
              <li>RM 60.00 (Without Lunch)</li>
              <li>RM 79.00 (With Lunch)</li>
            </ul>

            <p><strong>Normal Rate (From 24 July 2025 onwards)</strong></p>
            <ul>
              <li>RM 80.00 (Without Lunch)</li>
              <li>RM 99.00 (With Lunch)</li>
            </ul>

            <p><strong>Lunch</strong>: Halal bento box</p>

            <p>
              If you have any questions, feel free to contact the Organising Chair –{" "}
              <strong>Soh Chean Fai</strong> at{" "}
              <a href="tel:+601154267687" className="text-info">+6011 5426 7687</a>
            </p>
          </div>

          {/* Right column */}
          <div className="col-md-5 text-center">
            <img src={VenueImage} alt="TAR UMT" className="img-fluid rounded mb-4" />
            <div className="bg-light p-3 rounded shadow-sm d-inline-block">
              <img src={MaybankQR} alt="Maybank QR - Soh Chean Fai" className="img-fluid" style={{ maxWidth: "200px" }} />
              <p className="mt-2 text-dark fw-bold mb-0">Maybank</p>
              <p className="text-dark">Soh Chean Fai</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

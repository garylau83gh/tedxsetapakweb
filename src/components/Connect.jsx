import React from "react";
import "../App.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Connect = () => {
  return (
    <section id="connect" className="community-section">
      <h2 className="section-title">Join the TEDxSetapak Community</h2>
      <p className="section-subtext">
        The conversations and connections begun at TEDxSetapak need not end with our event.
        We invite you to continue mining for insights and sharing your discoveries.
      </p>

      {/* Grid with 3 items */}
      <div className="community-grid">
        {/* Item 1 */}
        <div className="community-item">
          <div className="number-box">1</div>
          <div className="item-content">
            <h4>Follow Our Journey</h4>
            <p>
              Connect with us on social media to stay updated
              on future events and community initiatives.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="community-item">
          <div className="number-box">2</div>
          <div className="item-content">
            <h4>Get Involved</h4>
            <p>
              Volunteer for future TEDxSetapak events and be part of something impactful.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="community-item">
          <div className="number-box">3</div>
          <div className="item-content">
            <h4>Share Your Gems</h4>
            <p>
              Apply to speak at our next event or nominate someone with valuable insights to share.
            </p>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="social-icons" style={{ marginTop: "2rem", textAlign: "center" }}>
        <a href="https://www.facebook.com/TEDxSetapak" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px", fontSize: "2rem", color: "#4267B2" }}>
          <span style={{ margin: "0 10px", fontSize: "3rem" }}>
          <FaFacebook />
          </span>
        </a>
        <a href="https://www.instagram.com/TEDxSetapak" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px", fontSize: "2rem", color: "#C13584" }}>
          <span style={{ margin: "0 10px", fontSize: "3rem" }}>
            <FaInstagram />
            </span>
        </a>
        <a href="https://www.youtube.com/@TEDxSetapak" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px", fontSize: "2rem", color: "#FF0000" }}>
          <span style={{ margin: "0 10px", fontSize: "3rem", color: "#888", cursor: "not-allowed" }} title="YouTube coming soon">
            <FaYoutube />
          </span>

        </a>
      </div>
    </section>
  );
};

export default Connect;

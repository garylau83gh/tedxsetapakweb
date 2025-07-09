import React from "react";
import "../App.css"; // Make sure your CSS is imported here

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
              Connect with us on social media <strong>@TEDxSetapak</strong> to stay updated
              on future events and community initiatives.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="community-item">
          <div className="number-box">2</div>
          <div className="item-content">
            <h4>Become a Miner</h4>
            <p>
              Volunteer for future TEDxSetapak events and help us unearth more ideas worth spreading.
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

      {/* Ticket link */}
    <div className="ticket-section">
    <p><strong>Get Your Ticket:</strong></p>
    <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfQ3iajJcPwxYVJ13g20PoT6t0PRhyPp8skPPysLwVm_DiLg/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="ticket-link"
    >
        Fill out the registration form here
    </a>
    </div>

    </section>
  );
};

export default Connect;

// src/components/Events.jsx
import "../App.css"; // or import Events.css if you separated styles

export default function Events() {
  return (
    <section id="events" className="events-section">
      <div className="container">
        <h2 className="mb-4 text-center">Past & Upcoming Events</h2>

<div className="row g-4 justify-content-center">

          {/* TEDxSetapak 2025 Event Card */}
          <div className="col-md-6">
            <div className="card h-100 bg-dark text-white border-0">
              <div className="card-body">
                <h2 className="card-title">
                  <span>M.I.N.E.S</span>
                </h2>
                <p className="card-text fs-7">
                  <strong>23 August 2025 &nbsp;&bull;&nbsp; 8:30 AM – 2:00 PM &nbsp;&bull;&nbsp; TAR UMT</strong> <br />
                  Join us for a day filled with inspiring talks, fresh ideas, and meaningful connections. Featuring 10 incredible speakers and interactive sessions. Don’t miss out!
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    const base =
                      window.location.hostname === "localhost"
                        ? "http://localhost:3000/#/event/theme"
                        : "https://garylau83gh.github.io/tedxsetapakweb/#/event/theme";

                    window.open(base, "_blank");
                  }} 
                >
                  View Event
                </button>


              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

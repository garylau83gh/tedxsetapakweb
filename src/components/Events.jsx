// src/components/Events.jsx
export default function Events() {
  return (
    <section id="events" className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4 text-center">Past & Upcoming Events</h2>

        <div className="row g-4">
          {/* Example Event 1 */}
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">TEDxSetapak 2024</h5>
                <p className="card-text">A celebration of ideas on innovation, education, and community building. Held at Taylor's University on 15 November 2024.</p>
                <a href="#" className="btn btn-outline-primary">Watch Replay</a>
              </div>
            </div>
          </div>

          {/* Example Event 2 */}
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">TEDxSetapak 2025</h5>
                <p className="card-text">Coming soon in November 2025 — stay tuned for updates on speakers, venue, and theme!</p>
                <a href="#" className="btn btn-danger">Pre-Register</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

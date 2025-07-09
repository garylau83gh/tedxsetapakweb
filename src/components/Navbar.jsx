export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#E62B1E' }} className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <span style={{ fontWeight: 800, color: 'white', fontSize: '1.8rem' }}>TED</span>
          <span style={{ fontWeight: 700, color: 'white', fontSize: '1.5rem', marginLeft: '2px',
            position: 'relative',
            top: '-0.3rem' }}>x</span>
          <span style={{ fontWeight: 300, color: 'white', fontSize: '1.5rem', marginLeft: '2px' }}>Setapak</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link text-white" href="#about">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#speakers">Speakers</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#schedule">Schedule</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#events">Events</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#location">Location</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#connect">Connect With Us</a>
            </li>
            </ul>
        </div>
      </div>
    </nav>
  );
}

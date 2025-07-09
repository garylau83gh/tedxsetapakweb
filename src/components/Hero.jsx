export default function Hero() {
  return (
    <div className="bg-dark text-white py-5 text-center">
      <div className="container">
        {/* TEDxSetapak styled like official logo */}
        <h1 className="d-flex justify-content-center align-items-center flex-wrap">
          <span style={{ fontWeight: 800, color: '#E62B1E', fontSize: '3rem' }}>TED</span>
          <span style={{ fontWeight: 700, color: '#E62B1E', fontSize: '2.8rem',
            position: 'relative',
            top: '-0.5rem', marginLeft: '4px' }}>x</span>
          <span style={{ fontWeight: 300, color: 'white', fontSize: '2.8rem', marginLeft: '8px' }}>Setapak</span>
        </h1>

        {/* Subtitle with red x and white text */}
        <small className="d-block mt-2" style={{ fontSize: '0.95rem' }}>
          <span style={{ color: '#E62B1E' }}>x</span>
          <span style={{ color: 'white' }}> = independently organized TED event</span>
        </small>

        <p className="lead text-white mt-4">
          Unearthing Ideas Worth Spreading
        </p>

        <a className="btn btn-outline-light mt-3" href="#about">Learn More</a>
      </div>
    </div>
  );
}

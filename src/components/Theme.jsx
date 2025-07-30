import MINESImage from "../image/MINES.png";
import Splash02 from "../image/spash_02.jpg"; 

const Theme = () => {
  return (
    <>
      {/* === Updated M.I.N.E.S Section with Background and Left Text === */}
      <section id="theme" className="bg-black text-white py-5">
        <div
          className="container position-relative rounded overflow-hidden"
          style={{
            backgroundImage: `url(${Splash02})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Right-side fade effect */}
          <div
            className="position-absolute top-0 start-0 h-100"
            style={{
              width: "100%",
              background: "linear-gradient(to right, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.3) 75%, transparent 100%)",
              zIndex: 1,
            }}
          ></div>

          {/* Text aligned left */}
          <div className="row justify-content-start" style={{ position: "relative", zIndex: 2 }}>
            <div className="col-md-6 py-5 px-4">
              <h2 className="fw-bold fs-3 mb-4">
                <span className="text-white">M.I.N.E.S - The Idea That Shapes The Future</span>
              </h2>
              <p className="mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                Our theme <strong>M.I.N.E.S</strong> reflects our belief that each individual possesses unique treasures that, when shared,
                can enrich society. Join us as we explore innovative approaches to <strong>Mindset, Investment, Networking, Environment</strong>,
                and <strong>Sustainability</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === M.I.N.E.S Section === */}
      <section className="bg-black text-white py-5">
        <div className="container">
          <h2 className="text-center display-5 fw-bold fs-3 mb-4">The M.I.N.E.S Framework</h2>

          <div className="text-center">
<img
  src={MINESImage}
  alt="The M.I.N.E.S Framework"
  className="rounded shadow mx-auto d-block"
  style={{
    width: "100%",
    maxWidth: "1000px",    // Force larger size
    height: "auto",
    imageRendering: "auto" // You can try 'pixelated' or 'crisp-edges' for different effects
  }}
/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Theme;
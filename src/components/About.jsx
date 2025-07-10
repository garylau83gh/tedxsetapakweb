import React from "react";
import Background from "../image/spash_01.jpg"; 
import Splash02 from "../image/spash_02.jpg"; 
import MINESImage from "../image/MINES.png";

const About = () => {
  return (
    <>
      {/* === Background with fade and overlayed text === */}
      <section id="about" className="bg-black text-white py-5">
        <div
          className="container position-relative rounded overflow-hidden"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Right side gradient fade */}
          <div
            className="position-absolute top-0 start-0 h-100"
            style={{
              width: "100%",
              background: "linear-gradient(to left, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.3) 75%, transparent 100%)",
              zIndex: 1,
            }}
          ></div>

          <div className="row justify-content-end" style={{ position: "relative", zIndex: 2 }}>
            <div className="col-md-6 py-5 px-4">
              <h2 className="fw-bold mb-3">
                About <span className="text-red">TED</span>
                  <span className="text-red align-x lowercase">x</span>
              </h2>
              <h5 className="fw-semibold mb-3">x = independently organized event</h5>
              <p className="lead mb-3" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                In the spirit of discovering and spreading ideas, TEDx is a program of local,
                self-organized events that bring people together to share a TED-like experience.
                At a TEDx event, TED Talks video and live speakers combine to spark deep
                discussion and connection.
              </p>
              <p className="lead mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                These local, self-organized events are branded TEDx, where x = independently
                organized TED event. The TED Conference provides general guidance for the TEDx
                program, but individual TEDx events are self-organized.
                <span className="fst-italic"> (Subject to certain rules and regulations.)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Updated M.I.N.E.S Section with Background and Left Text === */}
      <section className="bg-black text-white py-5">
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
                What is                   <span className="text-red">TED</span>
                  <span className="text-red align-x lowercase">x</span>
                <span className="text-white">Setapak</span>?
              </h2>

              <p className="mb-3" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                  <span className="text-red">TED</span>
                  <span className="text-red align-x lowercase">x</span>
                <span className="text-white fw-semibold">Setapak</span> represents our community's contribution to the global movement of <em>ideas worth spreading</em>.
                Taking inspiration from the historic mining industry, we seek to extract valuable insights from diverse speakers and perspectives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

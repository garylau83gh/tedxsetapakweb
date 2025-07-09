import React from "react";
import MINESImage from "../image/MINES.png";

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-5 font-sans">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Page Title */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-5">
          About                   <span className="text-red">TED</span>
                  <span className="text-red align-x lowercase">x</span>
                  Setapak 2025
        </h2>

        <p className="text-lg leading-relaxed mb-4 text-center">
          <span className="text-red-600 font-semibold">TED</span>
          <span className="text-red-600 lowercase font-semibold">x</span>
          <span className="text-white font-semibold">Setapak</span> represents our community's contribution to the global movement of <em>ideas worth spreading</em>.
          Taking inspiration from the historic mining industry, we seek to extract valuable insights from diverse speakers and perspectives.
        </p>

        <p className="text-lg leading-relaxed mb-10 text-center">
          Our theme <strong>M.I.N.E.S</strong> reflects our belief that each individual possesses unique treasures that, when shared,
          can enrich society. Join us as we explore innovative approaches to <strong>Mindset, Investment, Networking, Environment</strong>,
          and <strong>Sustainability</strong>.
        </p>

        <hr className="border-t border-white my-12" />

        {/* Framework Title */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-5">
          The <span className="text-white">M.I.N.E.S</span> Framework
        </h2>

        <div className="text-center">
          <img
            src={MINESImage}
            alt="The M.I.N.E.S Framework"
            className="img-fluid rounded-lg shadow-lg"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        <hr className="border-t border-white my-12" />
      </div>
    </section>
  );
};

export default About;

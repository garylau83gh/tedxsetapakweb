import React from "react";
import "./Team.css";
import GroupPhoto from "../image/group2.png"; 
import Speaker1 from "../image/blank.png"; 
import Weining from "../image/weining.png";
import Gary from "../image/gary.png";

// Example images – replace with actual paths
/* import CheanFai from "../image/team/cheanfai.png";
import Arafah from "../image/team/arafah.png";
import Patricia from "../image/team/patricia.png";
import Elaine from "../image/team/elaine.png";
import Weining from "../image/team/weining.png";
import Samantha from "../image/team/samantha.png";
import Chelsey from "../image/team/chelsey.png";
import Gary from "../image/team/gary.png"; */

const teamMembers = [
  {
    name: "Soh Chean Fai",
    role: "Team Lead",
    image: Speaker1
  },
  {
    name: "Arafah",
    role: "Co-Curator",
    image: Speaker1
  },
  {
    name: "Patricia Lim",
    role: "Communication & Marketing",
    image: Speaker1
  },
  {
    name: "Elaine Soo",
    role: "Communication & Marketing",
    image: Speaker1
  },
  {
    name: "Loh Wei Ning",
    role: "Host",
    image: Weining
  },
  {
    name: "Samantha Yong",
    role: "Event Manager",
    image: Speaker1
  },
  {
    name: "Chelsey Siew",
    role: "Executive Producer",
    image: Speaker1
  },
  {
    name: "Gary Lau",
    role: "Web Manager",
    image: Gary
  }
];

export default function Team() {
  return (
    <section id="team" className="team-section text-white bg-black py-5">
      <div className="container">
        {/* Intro Section */}
        <div className="row align-items-center mb-5 position-relative overflow-hidden">
          {/* Left image with fade */}
          <div className="col-md-6 position-relative">
                <img
                src={GroupPhoto}
                alt="TEDxSetapak Team"
                className="img-fluid w-100"
                style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "auto",
                    maxHeight: "400px" // or any value you want
                }}
                />
            <div
              className="position-absolute top-0 start-0 h-100"
              style={{
                width: "100%",
                zIndex: 1
              }}
            ></div>
          </div>

          {/* Right text */}
          <div className="col-md-6 text-white">
            <h4 className="fw-bold mb-3">Who’s Behind TEDxSetapak?</h4>
            <p className="mb-0">
              <strong>TEDxSetapak</strong> is organized by a passionate team of volunteers from
              Toastmasters. Every detail — from planning to execution — is driven by their
              dedication to sharing <em>ideas worth spreading</em> with the community.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <h2 className="mb-4 text-center">Meet The Team</h2>
        <div className="row justify-content-center g-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="team-photo mb-3"
              />
              <h5 className="fw-semibold mb-1">{member.name}</h5>
              <p className="small text-white">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

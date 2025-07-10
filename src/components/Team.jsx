import React from "react";
import "./Team.css";
import Speaker1 from "../image/blank.png"; // Replace with actual image paths
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
    name: "Chean Fai",
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
    name: "Elaine",
    role: "Communication & Marketing",
    image: Speaker1
  },
  {
    name: "Weining",
    role: "Host",
    image: Speaker1
  },
  {
    name: "Samantha Yong",
    role: "Event Manager",
    image: Speaker1
  },
  {
    name: "Chelsey",
    role: "Executive Producer",
    image: Speaker1
  },
  {
    name: "Gary Lau",
    role: "Web Manager",
    image: Speaker1
  }
];

export default function Team() {
  return (
    <section id="team" className="team-section text-white bg-black py-5">
      <div className="container">
        <h2 className="mb-4 text-center">Meet The Team</h2>
        <div className="row justify-content-center g-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-circle mb-3 team-photo"
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

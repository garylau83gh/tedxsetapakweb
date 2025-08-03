import React from "react";
import "./Team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

import Weining from "../image/weining_formal.png";
import Gary from "../image/gary_formal.png";
import Chelsey from "../image/chelsey_formal.png";
import Patricia from "../image/patricia_formal.png";
import Elaine from "../image/elaine_formal.png";
import Samantha from "../image/samantha_formal.png";
import Cheanfai from "../image/cheanfai_formal.png";
import Arafah from "../image/arafah_formal.png";

const teamMembers = [
  {
    name: "Soh Chean Fai",
    role: "Team Lead",
    image: Cheanfai,
    description: "Drives the team with vision and coordination.",
    funFact: "Loves making spreadsheets for fun.",
    email: "cheanfai@yahoo.com",
    linkedin: "https://www.linkedin.com/in/cheanfai-soh-8638141aa/"
  },
  {
    name: "Arafah",
    role: "Co-Curator",
    image: Arafah,
    description: "Curates inspiring ideas and speakers.",
    funFact: "Can finish a novel in a day.",
    email: "arafahzaharah@gmail.com"
  },
  {
    name: "Patricia Lim",
    role: "Communication & Marketing Director",
    image: Patricia,
    description: "Crafts the message and spreads the word.",
    funFact: "Has a collection of quirky mugs.",
    email: "pat.limhuipeng@gmail.com"
  },
  {
    name: "Elaine Soo",
    role: "Designer and Visual Director",
    image: Elaine,
    description: "Designs the visuals that wow.",
    funFact: "Can sketch portraits in under 10 minutes.",
    email: "elainemarmora@gmail.com"
  },
  {
    name: "Loh Wei Ning",
    role: "Host",
    image: Weining,
    description: "Brings energy and warmth on stage.",
    funFact: "Never misses a morning coffee.",
    facebook: "https://www.facebook.com/share/175ChUq826/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/im.weining/"
  },
  {
    name: "Samantha Yong",
    role: "Event Manager",
    image: Samantha,
    description: "Master planner of timelines and logistics.",
    funFact: "Bakes a killer cheesecake.",
    email: "samanthayong_1026@hotmail.com"
  },
  {
    name: "Chelsey Siew",
    role: "Executive Producer",
    image: Chelsey,
    description: "Oversees the magic behind the scenes.",
    funFact: "Is a pro at claw machines.",
    linkedin: "http://linkedin.com/in/chelseysiew",
    facebook: "https://www.facebook.com/chelsey.siew"
  },
  {
    name: "Gary Lau",
    role: "Web Manager",
    image: Gary,
    description: "Maintains our digital home.",
    funFact: "Collects quirky domain names.",
    email: "garylau.80s@gmail.com",
    linkedin: "https://www.linkedin.com/in/gary-lau-3449a8275/"
  }
];

export default function Team() {
  return (
    <section id="team" className="team-section text-white bg-black py-5">
      <div className="container">
        <h2 className="mb-4 text-center">Meet The Team</h2>
        <div className="row justify-content-center g-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-6 d-flex">
              <div className="team-card d-flex flex-column flex-md-row align-items-center bg-dark p-4 rounded shadow w-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-photo mb-3 mb-md-0 me-md-4 rounded-circle"
                  style={{ width: "200px", height: "200px", objectFit: "cover" }}
                />
                <div>
                  <h4 className="fw-bold mb-1" style={{ color: '#FFFFFF' }}>
                    {member.name}
                  </h4>
                  <h5 className="fw-normal mb-2" style={{ color: '#FFD166' }}>
                    {member.role}
                  </h5>
                  <p className="mb-1 small">{member.description}</p>
                  <p className="mb-1 small"><strong>Fun Fact:</strong> {member.funFact}</p>
                  <div className="d-flex gap-3 mt-2">
                    {member.email && (
                      <a href={`mailto:${member.email}`} style={{ color: "#fff" }}>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                    )}
                    {member.facebook && (
                      <a href={member.facebook} target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                    )}
                    {member.instagram && (
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

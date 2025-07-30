import React from "react";
import "./Team.css";
import GroupPhoto from "../image/group2.png"; 
import Speaker1 from "../image/blank.png"; 
/* import Weining from "../image/weining3.png";
import Gary from "../image/gary3.png";
import Chelsey from "../image/chelsey3.png";
import Patricia from "../image/patricia3.png";
import Elaine from "../image/elaine.png";
import Samantha from "../image/samantha.png";
import Cheanfai from "../image/cheanfai.png";
import Arafah from "../image/arafah.png"; */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// formal attire
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
  email: "gary@example.com"
  },
  {
    name: "Arafah",
    role: "Co-Curator",
    image: Arafah,
  email: "gary@example.com"
  },
  {
    name: "Patricia Lim",
    role: "Communication & Marketing",
    image: Patricia,
  email: "gary@example.com"
  },
  {
    name: "Elaine Soo",
    role: "Communication & Marketing",
    image: Elaine,
  email: "elainemarmora@gmail.com"
  },
  {
    name: "Loh Wei Ning",
    role: "Host",
    image: Weining,
  email: "gary@example.com"
  },
  {
    name: "Samantha Yong",
    role: "Event Manager",
    image: Samantha,
  email: "samanthayong_1026@hotmail.com"
  },
  {
    name: "Chelsey Siew",
    role: "Executive Producer",
    image: Chelsey,
  email: "gary@example.com"
  },
  {
    name: "Gary Lau",
    role: "Web Manager",
    image: Gary,
  email: "garylau.80s@gmail.com"
  }
];

export default function Team() {
  return (
    <section id="team" className="team-section text-white bg-black py-5">
      <div className="container">
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
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="d-block mb-2"
                  style={{ color: "#fff" }}
                >
                  {/* Option B: FontAwesome icon */}
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

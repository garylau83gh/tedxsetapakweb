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
import Rodric from "../image/rodric_formal.png";

const leadCurators = [
  {
    name: "Soh Chean Fai",
    role: "Lead Organizer & Curator",
    career: "Accountant to Dance Instructor to Public Speaking Coach",
    education: "BA (Hon) Accountancy, SFDF (SG) Dance certification",
    quote: "Pause, Reflect, Renew, Show Up",
    image: Cheanfai,
    description: "Drives the team with vision and coordination.",
    funFact: "Beach cleaning activity, hiking, coffee + book and dancing.",
    email: "cheanfai@yahoo.com",
    linkedin: "https://www.linkedin.com/in/cheanfai-soh-8638141aa/"
  },
  {
    name: "Arafah",
    role: "Co-Curator",
    career: "Production Lead",
    education: "Bsc (Hons) Computing",
    quote: "Pause, Reflect, Renew, Show Up",
    image: Arafah,
    description: "Curates inspiring ideas and speakers.",
    funFact: "Can finish a novel in a day.",
    email: "arafahzaharah@gmail.com"
  }
];

const creativeTeam = [
  {
    name: "Patricia Lim",
    role: "Communications, Editorial & Marketing Director",
    career: "Production Lead",
    education: "Bsc (Hons) Computing",
    quote: "Pause, Reflect, Renew, Show Up",
    image: Patricia,
    description: "Crafts the message and spreads the word.",
    funFact: "Has a collection of quirky mugs.",
    email: "pat.limhuipeng@gmail.com"
  },
  {
    name: "Elaine Soo",
    role: "Designer and Visual Director",
    career: "Production Lead",
    education: "Bsc (Hons) Computing",
    quote: "Pause, Reflect, Renew, Show Up",
    image: Elaine,
    description: "Designs the visuals that wow.",
    funFact: "Can sketch portraits in under 10 minutes.",
    email: "elainemarmora@gmail.com"
  },
  {
    name: "Gary Lau",
    role: "Website Manager",
    career: "Software Engineer",
    education: "Bsc (Hons) Computing",
    quote: `Tell my tale to those who asked. 
    tell them truly, 
    the ill deeds along with the good, 
    and let me be judged accordingly. 
    The rest is silence.`,
    image: Gary,
    description: "Maintains our digital home.",
    funFact: "Loves coffee but also immune to coffee",
    email: "garylau.80s@gmail.com",
    linkedin: "https://www.linkedin.com/in/gary-lau-3449a8275/"
  }
];

const productionTeam = [
  {
    name: "Chelsey Siew",
    role: "Executive Producer",
    career: "Production Lead",
    education: "Bsc (Hons) Computing",
    quote: "Pause, Reflect, Renew, Show Up",
    image: Chelsey,
    description: "Oversees the magic behind the scenes.",
    funFact: "Is a pro at claw machines.",
    linkedin: "http://linkedin.com/in/chelseysiew",
    facebook: "https://www.facebook.com/chelsey.siew"
  },
  {
    name: "Rodric Chan",
    role: "Production Lead",
    career: "Production Lead",
    education: "Bsc (Hons) Computing",
    quote: "Pause, Reflect, Renew, Show Up",
    image: Rodric,
    description: "Maintains our digital home.",
    funFact: "Collects quirky domain names.",
    email: "garylau.80s@gmail.com",
    linkedin: "https://www.linkedin.com/in/gary-lau-3449a8275/"
  },
  {
    name: "Loh Wei Ning",
    role: "Event Host",
    career: "Production Lead",
    education: "Bsc (Hons) Computing",
    quote: "Pause, Reflect, Renew, Show Up",
    image: Weining,
    description: "Brings energy and warmth on stage.",
    funFact: "Never misses a morning coffee.",
    facebook: "https://www.facebook.com/share/175ChUq826/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/im.weining/"
  },
  {
    name: "Samantha Yong",
    role: "Event Manager",
    career: "Production Lead",
    education: "Bsc (Hons) Computing",
    quote: "Pause, Reflect, Renew, Show Up",
    image: Samantha,
    description: "Master planner of timelines and logistics.",
    funFact: "Bakes a killer cheesecake.",
    email: "samanthayong_1026@hotmail.com"
  }
];

function TeamRow({ title, members }) {
  return (
    <div className="mb-5">
      {title && <h3 className="text-center text-warning mb-4">{title}</h3>}
      <div className="row justify-content-center g-4">
        {members.map((member, index) => (
          <div key={index} className="col-md-6 d-flex">
            <div className="team-card d-flex flex-column flex-md-row align-items-center bg-dark p-4 rounded shadow w-100">
              <img
                src={member.image}
                alt={member.name}
                className="team-photo mb-3 mb-md-0 me-md-4 rounded-circle"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
              <div>
                <h5 className="fw-normal mb-1" style={{ color: '#FFD166' }}>{member.role}</h5>
                <h4 className="fw-bold mb-1" style={{ color: '#FFFFFF' }}>{member.name}</h4>
                {member.career && (
                  <p className="mb-3 small">{member.career}</p>
                )}
                {member.education && (
                  <p className="mb-3 small"> {member.education}</p>
                )}
                <p className="mb-1 small">{member.description}</p>
                <p className="mb-3 small"><strong>Fun Fact:</strong> {member.funFact}</p>
                {member.quote && (
                  <p className="mb-1 small fst-italic text-warning">“{member.quote}”</p>
                )}
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
  );
}

export default function Team() {
  return (
    <section id="team" className="team-section text-white bg-black py-5">
      <div className="container">
        <h2 className="mb-4 text-center">Meet The Team</h2>
        <TeamRow title="Leads & Curators" members={leadCurators} />
        <TeamRow title="Creative & Tech" members={creativeTeam} />
        <TeamRow title="Production & Events" members={productionTeam} />
      </div>
    </section>
  );
}

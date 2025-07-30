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
import { faLinkedinIn, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";



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
    email: "cheanfai@yahoo.com",
    linkedin: "https://www.linkedin.com/in/cheanfai-soh-8638141aa/",
    facebook: "",
    instagram: ""
  },
  {
    name: "Arafah",
    role: "Co-Curator",
    image: Arafah,
    email: "arafahzaharah@gmail.com",
    linkedin: "",
    facebook: "",
    instagram: ""
  },
  {
    name: "Patricia Lim",
    role: "Communication & Marketing",
    image: Patricia,
    email: "pat.limhuipeng@gmail.com",
    linkedin: "",
    facebook: "",
    instagram: ""
  },
  {
    name: "Elaine Soo",
    role: "Communication & Marketing",
    image: Elaine,
    email: "elainemarmora@gmail.com",
    linkedin: "",
    facebook: "",
    instagram: ""
  },
  {
    name: "Loh Wei Ning",
    role: "Host",
    image: Weining,
    email: "",
    linkedin: "",
    facebook: "https://www.facebook.com/share/175ChUq826/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/im.weining/"
  },
  {
    name: "Samantha Yong",
    role: "Event Manager",
    image: Samantha,
    email: "samanthayong_1026@hotmail.com",
    linkedin: "",
    facebook: "",
    instagram: ""
  },
  {
    name: "Chelsey Siew",
    role: "Executive Producer",
    image: Chelsey,
    email: "valentine.remix.one@gmail.com",
    linkedin: "",
    facebook: "",
    instagram: ""
  },
  {
    name: "Gary Lau",
    role: "Web Manager",
    image: Gary,
    email: "garylau.80s@gmail.com",
    linkedin: "https://www.linkedin.com/in/gary-lau-3449a8275/",
    facebook: "",
    instagram: ""
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
                {(member.email || member.linkedin || member.facebook || member.instagram) && (
                  <div className="d-flex justify-content-center gap-3">
                    {member.email && (
                      <a href={`mailto:${member.email}`} style={{ color: "#fff" }}>
                        <FontAwesomeIcon icon={faEnvelope} size="lg" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
                        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                      </a>
                    )}
                    {member.facebook && (
                      <a href={member.facebook} target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
                        <FontAwesomeIcon icon={faFacebookF} size="lg" />
                      </a>
                    )}
                    {member.instagram && (
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                      </a>
                    )}
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

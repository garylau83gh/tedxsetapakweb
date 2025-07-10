import React from "react";
import Speaker1 from "../image/blank.png"; // Replace with actual image paths
import Emily from "../image/emily.png";
import JinYang from "../image/jinyang.png";
import Zhennee from "../image/zhen.png";
import Eva from "../image/eva.png";
import Saras from "../image/saras.png";
import Weekien from "../image/weekien.png";
import Kim from "../image/kim.png";
import Mannisa from "../image/mannisa.png";
import Clement from "../image/clementong.png";

const speakers = [
  {
    name: "Mannisa Lee",
    role: "Speaker",
    image: Mannisa,
    title: "The Power Of Saying 'Yes!' First",
    description:
      "From the mic to the stage, Mannisa Lee is someone who boldly says 'Yes' to possibilities and growth. Her courage to embrace challenges has enriched her journey ~ earning her 3rd Place at the Area C5 Evaluation Contest (Toastmasters) and recognition as a Trilingual Children’s Storyteller. She shares how choosing growth over comfort unlocks doors to new value, purpose, and endless potential."
  },
  {
    name: "Clement Ong Tun Heang",
    role: "Speaker",
    image: Clement,
    title: "Leading Through Purpose",
    description: `Believes the future needs more than smart machines — it needs curious minds that think across fields.
    Through his journey with double degrees, he became not just a problem solver but a bridge builder.
    His talk is a call to pursue purposeful learning, not just paper qualification.`,
  },
  {
    name: "Low Kim Ching",
    role: "Speaker",
    image: Kim,
    title: "Rebirth - A Journey From Trauma to Transformation",
    description: `Meet Low Kim Ching ~ Educator, Corporate Speaker & Passionate Public Speaking Coach for kids and teens.
From District 102 International Speech Finalist (2020) to training at AIESEC Nottingham and Fairview International School, she brings heart and strategy to every stage.
Her core belief: "Change your mindset, change your lift."`
  },
  {
    name: "Chong Jin Yang",
    role: "Speaker",
    image: JinYang,
    title: "You Shouldn't Be Afraid of Cockroaches",
    description: `Meet Chong Jin Yang ~ a junior engineer from Cheras with unstoppable dedication to growth.
He walks an hour every weekend and braves traffic every other Tuesday just to sharpen his public speaking skills.
Now an emcee and a part-time coach at MicFront Damansara, he’s inspiring the next generation of speakers, one session at a time.`
  },  {
    name: "Dr. Saraswathy Thurairaj",
    role: "Speaker",
    image: Saras,
    title: "The Secret Superpower for Work and Life: Emotional Intelligence",
    description: `Dr. Saraswathy Thurairaj believes emotional intelligence is the superpower that transforms how we think, connect, and lead.
In a fast-paced, ever-changing world, it's not just what you do ~ it's how you relate that truly sets you apart.
Her talk equips you with practical tools to lead with empathy, communicate deeply, and build human connections that last.`
  },
  {
    name: "Eva Ng Tsiu Wen",
    role: "Speaker",
    image: Eva,
    title: "Homecoming: A New Way of Seeing",
    description: `Eva Ng Tsiu Wen reminds us that authenticity isn’t about changing who we are ~ it’s about remembering who we've always been.
When we stop trying to fit in and start giving ourselves permission to be different, we reclaim our voice, our space, and our truth.
Her message: Speak in your own voice ~ that’s where real connection begins.`
  },{
  name: "Gan Zhen Nee",
  role: "Speaker",
  image: Zhennee,
  title: "You Can Lose Money and Still Win",
  description: `Gan Zhen Nee believes that failure isn’t the end ~ it’s feedback.
Her message is simple but transformative: reinvest in yourself. Even when things fall apart, you’re never too broken to begin again.
This talk is a gentle, empowering reminder that the greatest returns come when we stop chasing validation and start coming home to ourselves.`
},
{
  name: "Emily Cheah Foong Kwan",
  role: "Speaker",
  image: Emily,
  title: "How Changing the Question You Ask Yourself, Changes Your Life",
  description: `Emily Cheah Foong Kwan ~ Destiny Consultant & Life Coach ~ helps people uncover the real reason they feel stuck: the inner blocks they’ve placed themselves.
By simply reframing the question, she guides others to find their own answers ~ unlocking clarity, confidence, and purpose.
Her mission? To empower you to live a little better, one self-discovery at a time.`
},{
  name: "Ken Ang Wee Kien",
  role: "Speaker",
  image: Weekien,
  title: "How to Start Building a Personal Brand Before You Feel Ready",
  description: `Ken Ang Wee Kien knows that your brand doesn’t begin when you feel ready ~ it begins the moment you take action.
His message? Shift from thinking to doing, and surround yourself with people who push you to grow.
Because real progress doesn’t happen alone ~ it happens in motion, and in community.`
}
];

export default function Speakers() {
  return (
<section id="speakers" style={{ backgroundColor: "#000" }} className="text-white py-5">
  <div className="container">
    <h2 className="text-center mb-5">Speakers</h2>

    <div className="row justify-content-center g-4">
      {speakers.map((speaker, index) => (
        <div className="col-md-6 col-lg-4 d-flex" key={index}>
          <div className="card profile-card shadow bg-light text-dark w-100 h-100">
            <div className="card-body text-center d-flex flex-column">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="rounded-circle mb-3 mx-auto"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <h3 className="text-lg font-bold text-gray-900">{speaker.name}</h3>
              <p className="text-sm text-purple-600 font-medium mb-1">{speaker.role}</p>
              <h5 className="text-base font-semibold text-gray-800">{speaker.title}</h5>
              <p className="text-sm small text-gray-600 mt-2">{speaker.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}



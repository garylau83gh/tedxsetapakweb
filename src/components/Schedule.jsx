import React from "react";
import "./Schedule.css";

const scheduleItems = [
  { time: "8:30 – 9:00 AM", title: "Registration & Networking" },
  { time: "9:00 – 9:15 AM", title: "Opening Ceremony & Welcome Address by Organiser" },
  { time: "9:15 – 10:15 AM", title: "Session 1: 3 Speaker" },
  { time: "10:15 – 10:35 AM", title: "Break (Bio & Coffee)" },
  { time: "10:35 – 12:25 PM", title: "Session 2: 5 Speaker" },
  { time: "12:25 – 12:45 PM", title: "Break (Bio & Coffee)" },
  { time: "12:45 – 1:45 PM", title: "Session 3: 3 Speaker" },
  {
    time: "1:45 – 2:00 PM",
    title: "Closing Remarks & Appreciation\nGroup photo session & Networking",
  },
  { time: "2:00 PM", title: "END – Lunch (Optional)" },
];

const Schedule = () => {
  return (
    <section id="schedule" className="schedule-container">
      <h2 className="schedule-title">Event Schedule</h2>
      <div className="timeline-line" />
      <div className="timeline">
        <div className="timeline-grid">
  {scheduleItems.map((item, index) => (
    <div key={index} className="timeline-row">
      {index % 2 === 0 ? (
        <>
          <div className="timeline-content right-align">
            <p className="timeline-time">{item.time}</p>
            <p className="timeline-title">{item.title}</p>
          </div>
          <div className="timeline-number">{index + 1}</div>
          <div className="timeline-empty" />
        </>
      ) : (
        <>
          <div className="timeline-empty" />
          <div className="timeline-number">{index + 1}</div>
          <div className="timeline-content left-align">
            <p className="timeline-time">{item.time}</p>
            <p className="timeline-title">{item.title}</p>
          </div>
        </>
      )}
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Schedule;

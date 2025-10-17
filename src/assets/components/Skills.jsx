import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css"; 

export default function Skills() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after page load
    setTimeout(() => setLoaded(true), 200);
  }, []);

  const skills = [
    { name: "HTML5", color: "#FFF5EE" },
    { name: "CSS3", color: "#F0F8FF" },
    { name: "JavaScript", color: "#FFF6E9" },
    { name: "React.js", color: "#EAF6FF" },
    { name: "Bootstrap", color: "#F5EFFF" },
    { name: "Node.js", color: "#FFF2E1" },
    { name: "Express.js", color: "#E9F7EF" },
    { name: "RESTful APIs", color: "#FFF0F5" },
    { name: "Java", color: "#FFECEC" },
    { name: "C/C++", color: "#F0FFF0" },
    { name: "Python", color: "#E8F0FE" },
    { name: "MongoDB", color: "#E9F7EF" },
    { name: "SQL", color: "#E6E6FA" },
    { name: "Git & GitHub", color: "#E8F0FE" },
  ];

  return (
    <section id="skills"
      className="hero-section d-flex align-items-center py-5"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(-45deg, #FF69B4, #FFB6C1, #FFC0CB, #FFDDEE)",
        overflow: "hidden",
      }}
    >
      {/* Floating Particles */}
      <div className="particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="container text-center text-white">
        <h2 className="text-primary fw-bold mb-4">Skills</h2>
        <div className="row g-4 justify-content-center">
          {skills.map((skill, index) => (
            <div className="col-6 col-sm-4 col-md-3" key={index}>
              <div
                className={`card shadow-sm skill-card ${loaded ? "show" : ""}`}
                style={{
                  backgroundColor: skill.color,
                  border: "2px solid white",
                  color: "#1e90ff",
                  animationDelay: `${index * 0.3}s`,
                }}
              >
                <div className="card-body">
                  <p className="mb-0 fw-bold">{skill.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css"; 

export default function About() {
  return (
    <section id="about"
      className="hero-section d-flex align-items-center py-5"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(-45deg, #1e3c72, #2a5298, #3b5998, #4a6ea9)", // darker blue gradient
        backgroundSize: "400% 400%",
        animation: "gradientMove 15s ease infinite",
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

      <div className="container">
        <h2 className="text-center mb-4 fw-bold text-primary " >
          About Me
        </h2>

        <div className="row align-items-center">
          
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <div
              className="rounded-circle shadow-lg d-inline-flex align-items-center justify-content-center border border-light"
              style={{
                width: "230px",
                height: "230px",
                background: "linear-gradient(135deg, #2a5298 0%, #1e3c72 100%)",
                color: "white",
                fontSize: "2rem",
                fontWeight: "bold",
                
              }}
            >
              KT
            </div>
          </div>

          {/* About Text */}
          <div className="col-md-8">
            <div
              className="p-4 rounded shadow-sm"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                border: "2px solid #1e90ff",
                backdropFilter: "blur(8px)",
                
              }}
            >
              
              <p className="lead mb-3" style={{ textDecorationColor:"2px solid #C71585"}}>
                👋 Hi! I’m <span className="fw-bold " >Kritika Trivedi</span>, a tech enthusiast who loves exploring different technologies, from programming in C to experimenting with cloud computing. I enjoy learning, experimenting, and building creative solutions across various domains.
              </p>

              <p className="mb-3">
                I enjoy transforming ideas into interactive digital experiences using clean code, logical thinking, and innovative approaches. My curiosity drives me to explore new tools, frameworks, and technologies constantly.
              </p>

              <p>
                <strong>Skills:</strong> React.js, Java, Node.js, Express.js, MongoDB, SQL, Bootstrap, HTML, CSS, JavaScript, and Ethical Hacking.
              </p>

              <a
                href="#projects"
                className="btn btn-outline mt-3 px-4 py-2 rounded-pill "style={{ color: "#4169E1" }}
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

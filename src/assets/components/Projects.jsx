import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Website (In Progress)",
      description:
        "A full-stack e-commerce website  with real-time product listings, secure user authentication, cart management, and payment integration. Frontend built in EJS templates. Currently adding advanced features and prepping deployment.",
      techStack: "EJS, Node.js, Express.js, MongoDB, Bootstrap, AWS",
      status: "In Progress",
      link: "#",
      color: "rgba(255, 182, 193, 0.2)",
    },
    {
      title: "Full-Stack Stock Monitoring Tool",
      description:
        "Built a stock-tracking app with real-time data, secure authentication, and MongoDB integration. Added unit tests (Jest) and prepping AWS deployment.",
      techStack: "React.js, Node.js, Express.js, MongoDB, Bootstrap",
      link: "https://github.com/kritika1724/Fullstack-stock-monitoring",
      color: "rgba(173, 216, 230, 0.2)",
    },
    {
      title: "Fake News Detection Model",
      description: "Developed a ML model to classify news as fake or genuine.",
      techStack: "Python, Logistic Regression, Pandas, Scikit-learn",
      link: "https://github.com/kritika1724/fakenewsdetection",
      color: "rgba(144, 238, 144, 0.2)", 
    },
    {
      title: "Portfolio & College Helpdesk Website",
      description: "Created a responsive personal portfolio and college helpdesk site.",
      techStack: "HTML, CSS, JavaScript",
      link: "https://github.com/kritika1724/portfolio",
      color: "rgba(255, 250, 205, 0.2)", 
    },
    {
      title: "Mini Chatting App",
      description:
        "Built a chat app with message creation, editing, deletion, and server-side rendering.",
      techStack: "Node.js, Express, MongoDB, EJS",
      link: "https://github.com/kritika1724/mini-chatting-app-backend",
      color: "rgba(221, 160, 221, 0.2)", 
    },
    {
      title: "Express Quora Clone",
      description:
        "A simple Quora-like CRUD web app built with Express.js, EJS, and Method-Override. Users can create, read, update, and delete posts dynamically.",
      techStack: "Express.js, EJS, MongoDB, Node.js",
      status: "Completed",
      link: "https://github.com/kritika1724/Express-quora-clone",
      color: "rgba(135, 206, 250, 0.2)", 
    },
  ];

  return (
    <section id="projects" className="projects-section py-5 position-relative">
      <div className="particles">
        <span></span><span></span><span></span><span></span><span></span><span></span>
      </div>

      <div className="container position-relative">
        <h2 className="text-center mb-4 fw-bold text-primary">My Projects</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="card h-100 shadow-sm rounded-4 p-3 project-card"
                style={{
                  background: project.color,
                  border: "2px solid #1e90ff" ,
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  borderRadius: "1rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="card-body d-flex flex-column text">
                  <h5 className="card-title fw-bold"style={{ color: "white" }}>{project.title} </h5>
                  <p className="card-text flex-grow-1" style={{ color: "white" }}>{project.description}</p>
                  <a href={project.link} className="btn btn-outline-primary mt-2">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded CSS */}
      <style>{`
        /* Projects Section Background */
        .projects-section {
          position: relative;
          overflow: hidden;
          background: linear-gradient(-45deg, #FF69B4, #FFB6C1, #FFC0CB, #FFDDEE);
          background-size: 400% 400%;
          animation: gradientMove 15s ease infinite;
          color: white;
        }

        /* Gradient Animation */
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Floating Particles */
        .particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .particles span {
          position: absolute;
          display: block;
          width: 8px;
          height: 8px;
          background: rgba(255,255,255,0.6);
          border-radius: 50%;
          animation: float 10s linear infinite;
        }

        .particles span:nth-child(1) { left: 10%; animation-duration: 8s; }
        .particles span:nth-child(2) { left: 25%; animation-duration: 12s; }
        .particles span:nth-child(3) { left: 40%; animation-duration: 10s; }
        .particles span:nth-child(4) { left: 60%; animation-duration: 14s; }
        .particles span:nth-child(5) { left: 75%; animation-duration: 11s; }
        .particles span:nth-child(6) { left: 90%; animation-duration: 13s; }

        @keyframes float {
          0% { transform: translateY(100vh) translateX(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-10vh) translateX(20px); opacity: 0; }
        }

        /* Ensure cards are above particles */
        .projects-section .container {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </section>
  );
}

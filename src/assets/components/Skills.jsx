import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Skills() {
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

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.6, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      className="hero-section d-flex align-items-center py-5"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(-45deg, #FF69B4, #FFB6C1, #FFC0CB, #FFDDEE)",
        overflow: "hidden",
      }}
    >
      {/* Floating Particles */}
      <div className="particles" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span><span></span>
      </div>

      <div className="container text-center text-white">
        {/* Animated Heading */}
        <motion.h2
          className="text-primary fw-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Skills
        </motion.h2>

        {/* Animated Grid */}
        <motion.div
          className="row g-4 justify-content-center"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              className="col-6 col-sm-4 col-md-3"
              key={index}
              variants={cardVariant}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(30,144,255,0.8)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="card skill-card shadow-sm"
                style={{
                  backgroundColor: skill.color,
                  border: "2px solid rgba(255,255,255,0.8)",
                  color: "#1e90ff",
                  borderRadius: "15px",
                  transition: "all 0.3s ease",
                }}
              >
                <div className="card-body py-4">
                  <p className="mb-0 fw-bold fs-5">{skill.name}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      college: "AKTU University",
      year: "2022 - 2026",
      cgpa: "7.8",
      bgColor: "rgba(255, 255, 255, 0.15)",
    },
    {
      degree: "Higher Secondary",
      college: "Rajkiya Abhinav Vidyalay",
      year: "2021 - 2022",
      percentage: "78%",
      bgColor: "rgba(255, 255, 255, 0.15)",
    },
    {
      degree: "Secondary School",
      college: "Jagran Public School",
      year: "2019 - 2020",
      percentage: "81%",
      bgColor: "rgba(255, 255, 255, 0.15)",
    },
  ];

  return (
    <section
      id="education"
      className="hero-section d-flex align-items-center py-5"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(-45deg, #FF69B4, #FFB6C1, #FFC0CB, #FFDDEE)",
      }}
    >
      {/* Floating Particles */}
      <div className="particles" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span><span></span>
      </div>

      <div className="container text-white">
        {/* 🎬 Animated Heading */}
        <motion.h2
          className="text-center mb-4 fw-bold text-primary"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <div className="row g-4 justify-content-center">
          {education.map((edu, index) => (
            <motion.div
              className="col-md-6"
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div
                className="card shadow-sm education-card"
                style={{
                  background: edu.bgColor,
                  border: "2px solid #1e90ff",
                }}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title fw-bold mb-0 text-white">
                      {edu.degree}
                    </h5>
                    <span className="text-primary small">{edu.year}</span>
                  </div>
                  <p className="card-text mb-1 text-primary">{edu.college}</p>
                  <p className="card-text text-light">
                    {edu.degree.toLowerCase().includes("b.tech")
                      ? `CGPA: ${edu.cgpa}`
                      : `Percentage: ${edu.percentage}`}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

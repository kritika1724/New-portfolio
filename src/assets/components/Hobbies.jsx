import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hobbies.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import hobby1 from "../hobbies/airplanelight.jpeg";
import hobby2 from "../hobbies/badminton2.jpeg";
import hobby3 from "../hobbies/coding2.jpeg";
import hobby4 from "../hobbies/cooking2.jpeg";
import hobby5 from "../hobbies/yoga.jpeg";
import { FaLaptopCode, FaPlane, FaBasketballBall, FaUtensils, FaSpa } from "react-icons/fa";

export default function Hobbies() {
  const hobbies = [
    {
      title: <><FaPlane className="me-2 text-gradient" />Travel</>,
      desc: "✈️ I love exploring new places, discovering hidden gems, and capturing memorable moments. Traveling inspires me and fuels my creativity!",
      img: hobby1,
      icon: "✈️",
    },
    {
      title: <><FaBasketballBall className="me-2 text-gradient" />Playing Outdoor Games</>,
      desc: "🏸 I love staying active by playing outdoor games like badminton and tennis. It keeps me energized, competitive, and refreshed!",
      img: hobby2,
      icon: "🏸",
    },
    {
      title: <><FaLaptopCode className="me-2 text-gradient" />Coding & Problem Solving</>,
      desc: "💻 I love solving problems and building creative solutions with code. Experimenting keeps me curious and motivated!",
      img: hobby3,
      icon: "💻",
    },
    {
      title: <><FaUtensils className="me-2 text-gradient" />Cooking & Foodie Adventures</>,
      desc: "🍲 I love experimenting in the kitchen and trying new recipes. Being a foodie, I enjoy creating and tasting delicious dishes!",
      img: hobby4,
      icon: "🍲",
    },
    {
      title: <><FaSpa className="me-2 text-gradient" />Yoga & Mindfulness</>,
      desc: "🧘‍♀️ Practicing yoga and mindfulness helps me stay focused, balanced, and calm.",
      img: hobby5,
      icon: "🧘‍♀️",
    },
  ];

  return (
    <section id="hobbies" className="hobbies-section py-5">
      {/* Floating Particles */}
      <div className="hobby-particles">
        <span></span><span></span><span></span>
        <span></span><span></span><span></span>
      </div>

      <div className="container text-center">
        <motion.h2
          className="fw-bold mb-5 text-primary"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          ✨ My Hobbies & Interests
        </motion.h2>

        <div className="row g-4 justify-content-center">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              className="col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotateZ: 1 }}
            >
              <div className="hobby-card shadow-sm rounded-4">
                <div className="hobby-icon">{hobby.icon}</div>
                <div className="hobby-floating-icons">
                  <span>⭐</span><span>✨</span><span>💫</span>
                </div>
                <img
                  src={hobby.img}
                  alt={hobby.title}
                  className="card-img-top rounded-top-4"
                />
                <div className="card-body">
                  <h5 className="fw-bold text-dark">{hobby.title}</h5>
                  <p className="small text-muted">{hobby.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section id="hero">
    <section className="hero-section d-flex align-items-center justify-content-center text-center vh-100">
      
      {/* Floating Particles */}
      <div className="particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Hi, I’m Kritika Trivedi</h1>
        <p className="hero-subtitle">Full Stack Developer | Tech Explorer | Cloud Computing & Programming Enthusiast | Always Learning</p>
        <a href="https://github.com/kritika1724?tab=repositories" className="btn hero-btn">
          View My Projects
        </a>
      </div>
    </section>
    </section>
  );
}

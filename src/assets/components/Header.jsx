import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow sticky-top"
      style={{
        background:
          "linear-gradient(90deg, rgba(65,105,225,0.7), rgba(30,144,255,0.7))",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
        minHeight: "80px",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <div className="container">
        {/* Logo / Name */}
        <Link className="navbar-brand fw-bold fs-4 text-gradient" to="/">
          Kritika Trivedi
        </Link>

        {/* Firefly Animation */}
        {[...Array(40)].map((_, i) => (
          <div key={i} className="firefly"></div>
        ))}

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fw-semibold">
            {["About", "Education", "Skills", "Projects", "Hobbies"].map(
              (item) => (
                <li className="nav-item" key={item}>
                  <Link
                    className="nav-link px-3"
                    to={`/${item.toLowerCase()}`}
                    style={{
                      color: "rgba(255,255,255,0.85)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#b197fc")}
                    onMouseLeave={(e) =>
                      (e.target.style.color = "rgba(255,255,255,0.85)")
                    }
                  >
                    {item}
                  </Link>
                </li>
              )
            )}

            {/* External Links */}
            <li className="nav-item">
              <a
                className="nav-link px-3"
                href="https://leetcode.com/u/kritika2117/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "rgba(255,255,255,0.85)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#b197fc")}
                onMouseLeave={(e) =>
                  (e.target.style.color = "rgba(255,255,255,0.85)")
                }
              >
                LeetCode
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link px-3"
                href="https://my-card-eight-iota.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "rgba(255,255,255,0.85)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#b197fc")}
                onMouseLeave={(e) =>
                  (e.target.style.color = "rgba(255,255,255,0.85)")
                }
              >
                My Card
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import "./FireFly.css"
export default function Footer() {
  return (
    <footer className="footer-glass text-white py-4 mt-5 position-relative">
      {/* Floating particles */}
      <div className="footer-particles">
        {[...Array(40)].map((_, i) => (
        <div key={i} className="firefly"></div>
      ))}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {[...Array(40)].map((_, i) => (
        <div key={i} className="firefly"></div>
      ))}
      </div>

      <div className="container text-center position-relative" style={{ zIndex: 2 }}>
        <p className="mb-1">&copy; 2025 Kritika Trivedi</p>
        <p>
          Connect:{" "}
          <a
            href="https://www.linkedin.com/in/kritika-trivedi-86b213246/"
            className="footer-link"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a href="https://github.com/kritika1724" className="footer-link">
            GitHub
          </a>{" "}
          |{" "}
          <a href="#" className="footer-link">
            Twitter
          </a>
        </p>
      </div>
    </footer>
  );
}

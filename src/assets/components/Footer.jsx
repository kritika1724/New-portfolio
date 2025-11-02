import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import "./FireFly.css";

export default function Footer() {
  return (
    <footer className="footer-glass text-white position-relative">
      {/* Floating particles */}
      <div className="footer-particles">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="firefly"></div>
        ))}
      </div>

      <div className="container text-center position-relative py-3" style={{ zIndex: 2 }}>
        <p className="mb-1 small"> Made with <span className="heart">♥</span> by <strong>Kritika Trivedi</strong> © 2025</p>
        <div className="d-flex justify-content-center flex-wrap gap-3">
          <a
            href="https://www.linkedin.com/in/kritika-trivedi-86b213246/"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/kritika1724"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="#" className="footer-link">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

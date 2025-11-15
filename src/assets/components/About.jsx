// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";


export default function About() {
  // animation variants
  const headingVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };


  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.15 * i, ease: "easeOut" },
    }),
  };

  const btnVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.6 } },
  };

  return (
    <section
      id="about"
      className="hero-section d-flex align-items-center py-5"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(-45deg, #1e3c72, #2a5298, #3b5998, #4a6ea9)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 15s ease infinite",
      }}
    >
      <div className="particles">
        <span></span><span></span><span></span><span></span><span></span><span></span>
      </div>

      <div className="container">
        {/* Animated heading */}
        <motion.h2
          className="text-center mb-4 fw-bold text-primary"
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            {/* animated avatar circle */}
            <motion.div
              className="rounded-circle shadow-lg d-inline-flex align-items-center justify-content-center border border-light"
              style={{
                width: "230px",
                height: "230px",
                background: "linear-gradient(135deg, #2a5298 0%, #1e3c72 100%)",
                color: "white",
                fontSize: "2rem",
                fontWeight: "bold",
              }}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              KT
            </motion.div>
          </div>

          {/* About Text (card) */}
          <div className="col-md-8">
            <motion.div
              className="p-4 rounded shadow-sm"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                border: "2px solid #1e90ff",
                backdropFilter: "blur(8px)",
              }}
              custom={0}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <p className="lead mb-3">
                👋 Hi! I’m <span className="fw-bold">Kritika Trivedi</span>, a tech
                enthusiast who loves exploring different technologies, from
                programming in C to experimenting with cloud computing. I enjoy
                learning, experimenting, and building creative solutions across
                various domains.
              </p>

              <p className="mb-3">
                I enjoy transforming ideas into interactive digital experiences
                using clean code, logical thinking, and innovative approaches.
                My curiosity drives me to explore new tools, frameworks, and
                technologies constantly.
              </p>

              <p>
                <strong>Skills:</strong> React.js, Java, Node.js, Express.js,
                MongoDB, SQL, Bootstrap, HTML, CSS, JavaScript, and Ethical
                Hacking.
              </p>

              {/* Buttons row - buttons animate slightly after card */}
              <div className="mt-4 d-flex flex-wrap gap-3">
                <motion.a
                  href="https://github.com/kritika1724"
                  className="btn px-4 py-2 rounded-pill fw-semibold"
                  style={{
                    background: "linear-gradient(90deg, rgba(65,105,225,0.8), rgba(30,144,255,0.8))",
                    color: "white",
                    border: "none",
                  }}
                  variants={btnVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                >
                  🚀 View My Work
                </motion.a>

                


              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// styles
import "./About.css";
// images
import OurMission from "../../assets/png/about-banner.png";
import OurVision from "../../assets/png/our-vision.png";
// react
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
//
function About({ textAnimation, textAnimationTop }) {
  // scroll top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className="about-section"
    >
      <div className="about-section__container container">
        {/* ABOUT TITLE */}
        <motion.h1
          custom={1}
          variants={textAnimation}
          className="about-section__intro-title intro-title"
        >
          Welcome to <span>Besh Technologies</span>
        </motion.h1>
        {/* OUR MISSION */}
        <div className="our-mission">
          {/* OUR MISSION IMAGE */}
          <motion.img
            custom={2}
            variants={textAnimation}
            src={OurMission}
            alt="image for OUR MISSION"
            className="about-section__img"
          />
          {/* OUR MISSION CONTENT */}
          <motion.div
            custom={3}
            variants={textAnimation}
            className="about-section__content"
          >
            <span className="about-section__intro intro">Our Mission</span>
            <h2 className="about-section__title">
              Mission: Empowering Excellence Through Technology
            </h2>
            <p className="about-section__text">
              We strive to provide top-notch IT services, tailored to meet the
              unique needs of our clients. Our dedicated team of professionals
              is committed to delivering excellence, innovation, and
              reliability.
            </p>
          </motion.div>
        </div>
        {/* OUR VISION */}
        <div className="our-vision">
          {/* OUR VISION CONTENT */}
          <motion.div
            custom={1}
            variants={textAnimationTop}
            className="about-section__content"
          >
            <span className="about-section__intro intro">Our Vision</span>
            <h2 className="about-section__title">
              Charting Tomorrow: Our Vision for Technological Excellence
            </h2>
            <p className="about-section__text">
              At Besh Technologies, we envision a future where technology is a
              powerful force for positive transformation, propelling businesses
              and communities toward unprecedented heights. Our vision serves as
              the guiding star, inspiring every aspect of our work and defining
              the impact we aim to make in the world.
            </p>
          </motion.div>
          {/* OUR VISION IMAGE */}
          <motion.img
            custom={2}
            variants={textAnimationTop}
            src={OurVision}
            alt="image for OUR VISION"
            className="about-section__img"
          />
        </div>
      </div>
    </motion.section>
  );
}

export default About;

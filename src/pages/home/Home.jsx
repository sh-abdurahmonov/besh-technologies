// styles
import "./Home.css";
// images
import IntroImg from "../../assets/svg/intro-img.svg";
import CustomerFocusIcon from "../../assets/svg/customer-focus-icon.svg";
import ProfessionalismIcon from "../../assets/svg/professionalism-icon.svg";
import InnovationIcon from "../../assets/svg/innovation-icon.svg";
import TransparencyIcon from "../../assets/svg/transparency-icon.svg";
import BillClintonImg from "../../assets/jpg/bill-clinton-img.jpg";
import BillGatesImg from "../../assets/jpg/bill-gates-shirt.jpg";
// react
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
// icons
import { FaQuoteLeft } from "react-icons/fa";
function Home({ textAnimation }) {
  // scroll top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <main className="main">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className="intro-section"
      >
        <div className="container intro-section__container">
          {/* INTRODUCTION CONTENT */}
          <div className="intro-section__content">
            <motion.h1
              custom={2}
              variants={textAnimation}
              className="intro-section__title"
            >
              Besh technologies Services: Elevating Your{" "}
              <span>Digital Experience</span>
            </motion.h1>
            <motion.p
              custom={3}
              variants={textAnimation}
              className="intro-section__text"
            >
              Make your business thrive together with our wonderful team of
              experts. We will make your dreams come true!
            </motion.p>
            <motion.button
              custom={4}
              variants={textAnimation}
              className="btn intro-section__btn light-btn"
            >
              Get In Touch
            </motion.button>
          </div>
          {/* INTRODUCTION IMAGE */}
          <motion.img
            custom={1}
            variants={textAnimation}
            src={IntroImg}
            alt="vector image of people who work on the laptop"
            className="intro-section__img"
          />
        </div>
      </motion.section>
      {/* INFORMATION SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className="info-section"
      >
        <div className="info-section__container container">
          {/* INFORMATION CONTENT */}
          <motion.h1
            custom={1}
            variants={textAnimation}
            className="info-section__title"
          >
            Why Besh technologies ?
          </motion.h1>
          <motion.p
            custom={2}
            variants={textAnimation}
            className="info-section__context"
          >
            Our team analyzes and studies the product in order to understand its
            target audience, development strategy and further promotion.
            Designers, project managers, and developers of the company offer
            optimal solutions at every stage of working with the product..
          </motion.p>
          {/* INFORMATION LIST */}
          <motion.ul
            custom={3}
            variants={textAnimation}
            className="info-section__list"
          >
            <li className="info-section__item">
              <img
                src={CustomerFocusIcon}
                alt="customer focus item icon"
                className="info-section__img"
              />
              <h3 className="info-section__subtitle">Customer Focus</h3>
              <p className="info-section__text">
                We build long-term relationships with our clients. The team is
                interested in the customer’s product, strategy development and
                its further development.
              </p>
            </li>
            <li className="info-section__item">
              <img
                src={ProfessionalismIcon}
                alt="professionalism item icon"
                className="info-section__img"
              />
              <h3 className="info-section__subtitle">Professionalism</h3>
              <p className="info-section__text">
                A team of 100 people with more than 10 years of experience in
                the market. We have worked with projects of various sizes.
              </p>
            </li>
            <li className="info-section__item">
              <img
                src={InnovationIcon}
                alt="innovation item icon"
                className="info-section__img"
              />
              <h3 className="info-section__subtitle">Innovation</h3>
              <p className="info-section__text">
                Softvoya masters advanced technologies to improve the efficiency
                of the software products we create, increase their investment
                potential and offer our clients solutions that fully meet their
                current and future needs.
              </p>
            </li>
            <li className="info-section__item">
              <img
                src={TransparencyIcon}
                alt="transparency item icon"
                className="info-section__img"
              />
              <h3 className="info-section__subtitle">Transparency</h3>
              <p className="info-section__text">
                All our work processes are simple and devoid of bureaucracy. We
                select the optimal price-quality ratio for the customer and move
                together along the project plan.
              </p>
            </li>
          </motion.ul>
          {/* INFORMATION BUTTON */}
          <Link to="/contact" className="info-section__btn btn light-btn">
            Order a Project
          </Link>
        </div>
      </motion.section>
      {/* COMMENT SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className="comment-section"
      >
        {/* COMMENT TITLE */}
        <div className="container comment-section__container">
          <motion.div
            custom={1}
            variants={textAnimation}
            className="comment-section__content"
          >
            <h1 className="comment-section__title">What Our Clients Say</h1>
            <p className="comment-section__context">
              Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
              labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem
              sit clita duo justo
            </p>
          </motion.div>
          {/* COMMENT LIST */}
          <ul className="comments-list">
            <motion.li
              custom={2}
              variants={textAnimation}
              className="comments-list__item"
            >
              <p className="comments-list__text">
                <FaQuoteLeft className="quote" />
                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                erat ipsum et lorem et sit sed stet lorem sit clita duo justo.
              </p>
              <div className="comment-author">
                <img
                  src={BillClintonImg}
                  alt="image of man"
                  className="comment-author__img"
                />
                <div>
                  <h3 className="comment-author__name">John Clinton</h3>
                  <span className="comment-author__job">
                    Founder of LKW WALTER
                  </span>
                </div>
              </div>
            </motion.li>
            <motion.li
              custom={3}
              variants={textAnimation}
              className="comments-list__item"
            >
              <p className="comments-list__text">
                <FaQuoteLeft className="quote" />
                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                erat ipsum et lorem et sit sed stet lorem sit clita duo justo.
              </p>
              <div className="comment-author">
                <img
                  src={BillGatesImg}
                  alt="image of man"
                  className="comment-author__img"
                />
                <div>
                  <h3 className="comment-author__name">Bill Gates</h3>
                  <span className="comment-author__job">
                    Founder of Microsoft Corporation
                  </span>
                </div>
              </div>
            </motion.li>
          </ul>
        </div>
      </motion.section>
    </main>
  );
}

export default Home;

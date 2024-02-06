// styles
import "./BannerSection.css";
// images
import PLaneImg from "../../assets/svg/plane-icon.svg";
import PLaneImgTwo from "../../assets/svg/plane-icon-two.svg";
// react
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function BannerSection({ textAnimation }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className="banner-section"
    >
      <div className="container banner-section__container">
        {/* BANNER CONTNET */}
        <motion.h1
          ustom={1}
          variants={textAnimation}
          className="banner-section__title"
        >
          To Get a Consultation
        </motion.h1>
        <p className="banner-section__text">
          Leave a request and we will contact you
        </p>
        {/* BANNER BUTTON */}
        <Link to="/contact" className="btn banner-section__btn">
          Submit your application
        </Link>
        {/* BANNER IMAGE PLANE */}
        <motion.img
          ustom={2}
          variants={textAnimation}
          src={PLaneImg}
          alt="plane icon"
          className="banner-section__img"
        />
        <motion.img
          custom={3}
          variants={textAnimation}
          src={PLaneImgTwo}
          alt="plane icon"
          className="banner-section__img-two"
        />
      </div>
    </motion.section>
  );
}

export default BannerSection;

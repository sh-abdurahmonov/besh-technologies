// styles
import "./Footer.css";
// images
import TelegramIcon from "../../assets/telegram-icon.svg";
import InstagramIcon from "../../assets/instagram-icon.svg";
import FacebookIcon from "../../assets/facebook-icon.svg";
import SiteLogo from "../../assets/site-logo-light.svg";
// react
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
function Footer({ textAnimation }) {
  // scroll top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="footer"
    >
      <div className="container footer__container">
        <motion.div custom={1} variants={textAnimation} className="wrapper">
          <div className="wrapper-left">
            <a href="/" className="footer__site-logo">
              <img
                src={SiteLogo}
                alt="Besh technologies's logo"
                width="100"
                height="80"
              />
            </a>
            <p className="wrapper-left__text">
              Develop extraordinary IT services that will bring you more
              confidence
            </p>
            {/* FOOTER SITENAV */}
            <nav className="wrapper-left__sitenav">
              <ul className="wrapper-left__list">
                <li className="wrapper-left__item">
                  <NavLink to="/" className="wrapper-left__link">
                    Home
                  </NavLink>
                </li>
                <li className="wrapper-left__item">
                  <NavLink to="/about" className="wrapper-left__link">
                    About us
                  </NavLink>
                </li>
                <li className="wrapper-left__item">
                  <NavLink to="/services" className="wrapper-left__link">
                    Our service
                  </NavLink>
                </li>
                <li className="wrapper-left__item">
                  <NavLink to="/contact" className="wrapper-left__link">
                    Contacts
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="wrapper-right">
            <p className="wrapper-right__text">For Application</p>
            <Link to="/contact" className="wrapper-right__btn dark-btn btn">
              Get Started
            </Link>
          </div>
        </motion.div>
        {/* FOOTER LINE */}
        <motion.hr
          custom={2}
          variants={textAnimation}
          className="footer__line"
        />
        {/* FOOTER CONTACTS */}
        <motion.div
          custom={3}
          variants={textAnimation}
          className="footer__contacts"
        >
          {/* COPYRIGHT */}
          <p class="copyright-text">
            © 2024 Besh technologies. All rights reserved.
          </p>
          <ul className="footer__contacts-list">
            <li className="footer__contacts-item">
              <a
                target="blank"
                href="https://t.me"
                className="footer__contacts-link"
              >
                <img src={TelegramIcon} alt="telegram's icon" />
              </a>
            </li>
            <li className="footer__contacts-item">
              <a
                target="blank"
                href="https://instagram.com"
                className="footer__contacts-link"
              >
                <img src={InstagramIcon} alt="instagram's icon" />
              </a>
            </li>
            <li className="footer__contacts-item">
              <a
                target="blank"
                href="https://facebook.com"
                className="footer__contacts-link"
              >
                <img src={FacebookIcon} alt="facebook's icon" />
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;

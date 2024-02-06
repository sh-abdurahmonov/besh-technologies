// styles
import "./Header.css";
// images
import SiteLogoLight from "../../assets/svg/site-logo-light.svg";
import SiteLogo from "../../assets/svg/site-logo.svg";
// icons
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
// react
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
function Header() {
  // scroll top
  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  // for hamburger
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <header>
      {/* CONTACTS ITEM */}
      <address className="header-contacts">
        <div className="container header-contacts__container">
          {/* CONTACTS INFO */}
          <div className="contacts">
            {/* EMAIL */}
            <a href="mailto:info@mygo.uz" className="email">
              <svg
                width={16}
                height={16}
                fill="none"
                stroke="#262250"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              <span className="contact__link">info@mygo.uz</span>
            </a>
            {/* CALL */}
            <a href="tel:+998977333899" className="call">
              <svg
                width={16}
                height={16}
                fill="none"
                stroke="#262250"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.05 5A5 5 0 0 1 19 8.95" />
                <path d="M15.05 1A9 9 0 0 1 23 8.94" />
                <path d="M22 16.92v3a1.998 1.998 0 0 1-2.18 2 19.791 19.791 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16.001 16.001 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.908.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              <span className="contact__link">+998 97 733 38 99</span>
            </a>
          </div>
          {/* LOCATION */}
          <a
            className="location"
            href="https://yandex.uz/maps/-/CDBQVSoJ"
            target="blank"
          >
            <svg
              width={16}
              height={16}
              fill="none"
              stroke="#262250"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.657 16.657 13.414 20.9a1.997 1.997 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0v0Z" />
              <path d="M14.121 13.121A3 3 0 1 0 9.88 8.88a3 3 0 0 0 4.242 4.242Z" />
            </svg>
            <span className="contact__link">
              г.Ташкент, Юнусабадский район, массив Минор, 89А
            </span>
          </a>
        </div>
      </address>
      {/* SITENAV */}
      <div className="header-nav">
        <div className="container header-nav__container">
          {/* SITE LOGO */}
          <a href="/" className="site-logo">
            <img
              src={SiteLogoLight}
              alt="Besh technologies's logo"
              width="100"
              height="80"
            />
          </a>
          <motion.nav
            className={`${isOpen ? "sitenav-open" : "sitenav-close"} sitenav`}
          >
            <a href="/" className="site-logo">
              <img
                className="sitenav__site-logo"
                src={SiteLogo}
                alt="Besh technologies logo"
                width="100"
                height="80"
              />
            </a>
            <ul className="sitenav__list">
              <li className="sitenav__item">
                <NavLink to="/" className="sitenav__link">
                  Home
                </NavLink>
              </li>
              <li className="sitenav__item">
                <NavLink to="/about" className="sitenav__link">
                  About us
                </NavLink>
              </li>
              <li className="sitenav__item">
                <NavLink to="/services" className="sitenav__link">
                  Our service
                </NavLink>
              </li>
              <li className="sitenav__item">
                <NavLink to="/contact" className="sitenav__link">
                  Contacts
                </NavLink>
              </li>
            </ul>
          </motion.nav>
          {/* HEADER BUTTON */}
          <Link to="/contact" className="btn dark-btn header__btn">
            Get a service
          </Link>
          {/* HAMBURGER FOR SITEBAR */}
          <button className="hamburger-btn" onClick={handleClick}>
            {!isOpen && <RxHamburgerMenu className="hamburger" />}
            {isOpen && <RxCross1 className="cross" />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

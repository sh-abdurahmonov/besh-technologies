// styles
import "./OurServices.css";
// react
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
// images
import SeoIcon from "../../assets/svg/seo-icon.svg";
import WebsiteIcon from "../../assets/svg/website-icon.svg";
import DesignIcon from "../../assets/svg/design-icon.svg";
import MobileIcon from "../../assets/svg/mobile-icon.svg";
function OurServices({ textAnimation }) {
  // scroll top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="service-section"
    >
      <div className="container service-section__container">
        {/* OUR SERVICES TITLE */}
        <motion.h1
          custom={1}
          variants={textAnimation}
          className="service-section__title intro-title"
        >
          We're making work meaningful for <span>everyone, everwhere.</span>
        </motion.h1>
        {/* OUR SERVICES LIST */}
        <div className="service-section__list">
          <motion.h2
            custom={2}
            variants={textAnimation}
            className="service-section__subtitle"
          >
            Our Services
          </motion.h2>
          <motion.ul
            custom={3}
            variants={textAnimation}
            className="service-list"
          >
            <li className="service-list__item">
              <img
                src={MobileIcon}
                alt="mobile development icon"
                className="service-list__img"
              />
              <h3 className="service-list__subtitle">
                Application development
              </h3>
              <p className="service-list__text">
                We offer a full cycle of mobile application development for
                business, creating solutions in accordance with the individual
                needs of the client and user expectations. Starting with initial
                analytics and product development, we provide further IT and
                marketing services
              </p>
            </li>
            <li className="service-list__item">
              <img
                src={SeoIcon}
                alt="CRM system icon"
                className="service-list__img"
              />
              <h3 className="service-list__subtitle">CRM system</h3>
              <p className="service-list__text">
                The CRM system automates the management of the client base,
                allows you to control and develop a client-oriented business.
                With its help, you can take into account and control processes
                within the company and effectively interact with clients and
                partners.
              </p>
            </li>
            <li className="service-list__item">
              <img
                src={DesignIcon}
                alt="design development icon"
                className="service-list__img"
              />
              <h3 className="service-list__subtitle">Design development</h3>
              <p className="service-list__text">
                We create selling and unique website designs, web and mobile
                applications to solve business problems.
              </p>
            </li>
            <li className="service-list__item">
              <img
                src={SeoIcon}
                alt="SEO promotion"
                className="service-list__img"
              />
              <h3 className="service-list__subtitle">SEO promotion</h3>
              <p className="service-list__text">
                Website optimization, increased traffic, increased conversion –
                all this is included in our SEO promotion services. Trust us
                with your success on the Internet. Improve your brand visibility
                with our SEO promotion services. Effective solutions for the
                growth of your business in the online world!
              </p>
            </li>
            <li className="service-list__item">
              <img
                src={WebsiteIcon}
                alt="website development icon"
                className="service-list__img"
              />
              <h3 className="service-list__subtitle">Website development</h3>
              <p className="service-list__text">
                A high-quality website is the basis for promoting your business
                on the Internet. It creates a company image and increases your
                sales 24/7. We will make for you a working tool that will
                significantly help in business development.
              </p>
            </li>
          </motion.ul>
        </div>
      </div>
    </motion.section>
  );
}

export default OurServices;

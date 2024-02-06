// styles
import "./Contact.css";
// images
import ContactImg from "../../assets/svg/contact-img.svg";
// react
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contact({ textAnimation }) {
  //! sending data
  const form = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_ekrcq0n",
        "template_jkm98lo",
        form.current,
        {
          publicKey: "mIugaRSrMOiqO0z6R",
        }
      );
      // Show success toast message
      toast.success("Message sent successfully!", {
        className: "toast-message",
      });
      form.current.reset();
      // Reset the form fields after successful submission
      form.current.reset();
    } catch (error) {
      // Show error toast message
      console.log(error.message);
      toast.error(`Failed to send message: ${error.status}`, {
        className: "toast-message",
      });
    }
  };
  //! scroll top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
      className="contact-section"
    >
      <div className="container contact-section__container">
        {/* CONTACTS INTRODUCTION */}
        <div className="contact-header">
          <motion.div
            custom={1}
            variants={textAnimation}
            className="contact-header__content"
          >
            <h1 className="contact-header__title">Contact us</h1>
            <p className="contact-header__text">
              contact with us now and get the all efficient service on your home
              let's have a chat. Shall we?
            </p>
          </motion.div>
          <motion.img
            custom={2}
            variants={textAnimation}
            src={ContactImg}
            alt="Contact intro image"
            className="contact-header__img"
          />
        </div>
        {/* CONTACTS and MAP */}
        <div className="contact-hero">
          <motion.span
            custom={1}
            variants={textAnimation}
            className="contact-hero__intro intro"
          >
            Contact us
          </motion.span>
          <motion.h2
            custom={2}
            variants={textAnimation}
            className="contact-hero__title"
          >
            Get In Touch With <span> Besh Technologies</span>
          </motion.h2>
          {/* CONTACT LIST */}
          <ul className="contact-list">
            <motion.li
              custom={1}
              variants={textAnimation}
              className="contact-list__item"
            >
              <a href="https://yandex.uz/maps/-/CDBQVSoJ" target="blank">
                <svg
                  className="contact-list__img"
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
                <h3 className="contact-list__subtitle">Our Location</h3>
                <p className="contact-list__content">89A Minor array</p>
              </a>
            </motion.li>
            <motion.li
              custom={2}
              variants={textAnimation}
              className="contact-list__item"
            >
              <a href="mailto:info@mygo.uz" target="_blank">
                <svg
                  className="contact-list__img"
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
                <h3 className="contact-list__subtitle">Email Us</h3>
                <p className="contact-list__content">info@mygo.uz</p>
              </a>
            </motion.li>
            <motion.li
              custom={3}
              variants={textAnimation}
              className="contact-list__item"
            >
              <a href="tel:+998977333899" target="_blank">
                <svg
                  className="contact-list__img"
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
                <h3 className="contact-list__subtitle">Phone Number</h3>
                <p className="contact-list__content">+998 97 733 38 99</p>
              </a>
            </motion.li>
            <motion.li
              custom={4}
              variants={textAnimation}
              className="contact-list__item"
            >
              <span>
                <svg
                  className="contact-list__img"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
                  <path d="M12 6v6l4 2"></path>
                </svg>
                <h3 className="contact-list__subtitle">Working Hours</h3>
                <p className="contact-list__content">
                  Mon - Fri : 10.00 - 19.00
                </p>
              </span>
            </motion.li>
          </ul>
        </div>
        <div className="contact-form">
          {/* MAP */}
          <iframe
            className="contact-form__map"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A68f4857e69132f2fe3fa96d1c39ff5ffa9cb8f545dbc105d7bb6ed3e2573534b&amp;source=constructor"
            width="570"
            height="627"
            frameborder="0"
          ></iframe>
          {/* FORM */}
          <form
            ref={form}
            onSubmit={handleSubmit}
            target="blank"
            id="form"
            action="https://echo.htmlacademy.ru"
          >
            <input
              autoComplete="off"
              id="input-text"
              placeholder="Name"
              required
              type="text"
              name="name"
            />
            <input
              autoComplete="off"
              id="input-email"
              placeholder="Email"
              required
              type="email"
              name="email"
            />
            <input
              autoComplete="off"
              id="input-call"
              placeholder="Call Number"
              required
              type="number"
              name="number"
            />
            <textarea
              placeholder="Message..."
              id="input-message"
              name="message"
              cols="30"
              rows="5"
            ></textarea>
            {/* CONTACT BUTTON */}
            <button className="btn contact-form__btn" type="submit">
              Send Message
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </motion.section>
  );
}

export default Contact;

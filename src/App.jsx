// react
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
// components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import BannerSection from "./components/banner/BannerSection";
// pages
import Home from "./pages/home/Home";
import OurServices from "./pages/services/OurServices";
import About from "./pages/about/About";
import Contact from "./pages/contacts/Contact";
function App() {
  // animation
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  const textAnimationTop = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home textAnimation={textAnimation} />} />
          <Route
            path="/about"
            element={
              <About
                textAnimation={textAnimation}
                textAnimationTop={textAnimationTop}
              />
            }
          />
          <Route
            path="/contact"
            element={<Contact textAnimation={textAnimation} />}
          />
          <Route
            path="/services"
            element={<OurServices textAnimation={textAnimation} />}
          />
        </Routes>
        <BannerSection textAnimation={textAnimation} />
        <Footer textAnimation={textAnimation} />
      </Router>
    </>
  );
}

export default App;

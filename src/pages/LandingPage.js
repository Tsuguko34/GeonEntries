import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/landingpage.css";

import largeLogo from "../assets/images/largeLogo.png";
import miniLogo from "../assets/images/miniLogo.png";

// Icons
import * as IoIcons from "react-icons/io";
import { HomePageLessons } from "../components";

function LandingPage() {
  const navigate = useNavigate();
  const [activeSide, setActiveSide] = useState("right");
  const [logoHover, setLogoHover] = useState(true);
  const [showLessons, setShowLessons] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleLogoMouseOver = (action) => {
    // if (action === "Enter") {
    //   setLogoHover(true);
    // } else if (action === "Leave") {
    //   setLogoHover(false);
    // }
  };

  useEffect(() => {
    document.title = "GeomEntries";

    const intervalId = setInterval(() => {
      setActiveSide((prevSide) => (prevSide === "left" ? "right" : "left"));
    }, 15000);

    return () => clearInterval(intervalId); // Cleanup function
  }, []);

  return (
    <section id="LandingPage" className="LandingPage">
      <div className="loading_Logo">
        <img src={miniLogo} alt="" />
        <div className="loading_bar"></div>
      </div>

      {showLessons && (
        <HomePageLessons
          isVisible={showLessons}
          setIsVisible={setShowLessons}
        />
      )}

      <div className="wrapper">
        {/* TopSide */}
        <div className="LandingPage_Top">
          <img src={largeLogo} alt="Large Logo" className="Logo" />
        </div>
        {/* MiddleSide */}
        <div className="LandingPage_Middle">
          <div className="LandingPage_Paragraph_Container">
            <div
              className={`Paragraph_Item ${
                activeSide === "right" && "hideLeft"
              } leftSide`}
            >
              <span
                className={activeSide === "right" && "hideLeft"}
                onClick={() => setActiveSide("right")}
              >
                <IoIcons.IoIosArrowBack />
              </span>
              <p>
                Geometric principles play a crucial role in various
                applications, including computer graphics, where tasks such as
                3D transformations, rendering, and modeling heavily rely on
                these principles. The GeomEntries website provides an
                interactive learning platform featuring graphics, illustrations,
                and animations designed to facilitate a thorough and efficient
                grasp of modern geometry.
              </p>
            </div>
            <div
              className={`Paragraph_Item ${
                activeSide === "left" && "hideRight"
              }`}
            >
              <p>
                Geometry deals with the study of shapes, dimensions, sizes, and
                characteristics of both objects and spaces. Its impact is
                evident across diverse fields like architecture, art,
                engineering, navigation, and numerous other areas, establishing
                it as a fundamental building block of human understanding.
              </p>
              <span
                className={activeSide === "left" && "hideRight"}
                onClick={() => setActiveSide("left")}
              >
                <IoIcons.IoIosArrowForward />
              </span>
            </div>
          </div>
        </div>
        {/* BottomSide */}
        <div
          className="LandingPage_Bottom"
          onMouseOver={() => handleLogoMouseOver("Enter")}
          onMouseLeave={() => handleLogoMouseOver("Leave")}
        >
          <img
            src={miniLogo}
            alt="Mini Logo"
            onClick={() => setShowLessons(true)}
            className={`Logo ${logoHover && "active"}`}
          />
          <button
            className={`${logoHover && "active"}`}
            onClick={() => setShowLessons(true)}
          >
            Get Started!
          </button>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;

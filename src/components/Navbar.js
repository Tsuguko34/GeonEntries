import React, { useEffect, useRef, useState } from "react";
import "../styles/navbar.css";

import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";

import { GetWindowWidth } from "../utils";

import largeLogo from "../assets/images/largeLogo.png";
import miniLogo from "../assets/images/miniLogo.png";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar({ setOpenSidebar, pageHasSidebar }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const windowWidth = GetWindowWidth();
  const handleNavbarClose = () => setNavbarOpen(!navbarOpen);
  const [showUnits, setShowUnits] = useState(false);

  const navbarRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function handleEsacapePress(event) {
      if (event.key && event.key === "Escape") {
        setNavbarOpen(false);
      }
    }

    document.addEventListener("keydown", handleEsacapePress);

    return () => {
      document.removeEventListener("keydown", handleEsacapePress);
    };
  }, []);

  const hasUnits = () => {
    return /^\/Lesson\/[a-zA-Z0-9]+\/[a-zA-Z0-9]+$/.test(location.pathname);
  };

  useEffect(() => {
    setShowUnits(hasUnits());
  }, [location.pathname]);

  const handleCopy = () => {
    // Create a temporary textarea element
    const textarea = document.createElement("textarea");
    textarea.value = document.getElementById("linkToCopy").innerHTML; // Replace 'Text to copy' with the content you want to copy
    document.body.appendChild(textarea);

    // Select the text inside the textarea
    textarea.select();

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the temporary textarea element
    document.body.removeChild(textarea);

    // Optionally, provide some visual feedback to the user
    alert("Copied to clipboard!");
  };

  return (
    <section id="NavBar" className={`NavBar ${navbarOpen && "open"}`}>
      {location.pathname !== "/" && (
        <div className="Hamburger_Icon">
          {(windowWidth > 1366 || !pageHasSidebar) && (
            <FaIcons.FaHome
              onClick={() => navigate("/LessonsList")}
              className="home"
            />
          )}
          {windowWidth <= 1366 && pageHasSidebar && (
            <IoIcons.IoMdMenu onClick={() => setOpenSidebar(true)} />
          )}
        </div>
      )}

      <div ref={navbarRef} className="wrapper">
        <div className="Navbar_Content_Container">
          <div className="Top_Side">
            <div className="Logo">
              <img src={miniLogo} alt="" />
            </div>
            <div className="LeftSide">
              <div className="Title">
                <span>About</span>
              </div>
              <br />
              <div className="Content">
                <div className="Main">
                  <p>
                    GeomEntries is a geometry interactive learning website that
                    aims to provide and disseminate fundamental to core modern
                    geometry concepts. The website to be created offers an
                    interactive learning experience that showcases graphics,
                    illustrations, and animations that will aid in an efficient
                    comprehension in modern geometry.
                  </p>
                </div>
                <div className="Credits">
                  <span>Huge credits to:</span>
                  <br />
                  <p>
                    Estrella, B. M. (2020). Modern Geometry. Bulacan State
                    University
                  </p>
                </div>

                <div className="Trademark">
                  <span>GeomEntries • 2023</span>
                </div>
              </div>
            </div>
            <span className="vertical_divider"></span>
            <div className="Right_Side">
              <div className="Creators">
                <p>Creators:</p>
                <p>Atienza Jr., Renato</p>
                <p>Cajiuat, Justine Rinoa</p>
                <p>De Vera, Marielle Rowie</p>
                <p>Santos, Charles Darwin</p>
                <p
                  id="linkToCopy"
                  className="link"
                  onClick={handleCopy}
                  style={{ marginTop: "100px" }}
                >
                  geomentries@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="Bottom_Side">
            {location.pathname !== "/" && (
              <img src={largeLogo} alt="Large Logo" />
            )}
          </div>
        </div>
        {/* {showUnits && (
          <div className="Navbar_Units">
            <span
              className={
                location.pathname.includes("PlaneEuclideanGeometry")
                  ? "active"
                  : ""
              }
              onClick={() =>
                navigate("/Lesson/PlaneEuclideanGeometry/VectorsIn2Space3Space")
              }
            >
              Unit I
            </span>
            <span
              className={
                location.pathname.includes("NonEuclideanGeometry")
                  ? "active"
                  : ""
              }
              onClick={() =>
                navigate("/Lesson/NonEuclideanGeometry/HyperbolicGeometry")
              }
            >
              Unit II
            </span>
          </div>
        )} */}

        <span className="Navbar_Toggle" onClick={() => handleNavbarClose()}>
          <span>i</span>
        </span>
      </div>
    </section>
  );
}

export default Navbar;

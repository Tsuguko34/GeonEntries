import React, { useEffect, useRef, useState } from "react";
import "../styles/navbar.css";

import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";

import { GetWindowWidth } from "../utils";

import largeLogo from "../assets/images/largeLogo.png";
import miniLogo from "../assets/images/miniLogo.png";
import { useNavigate } from "react-router-dom";

function Navbar({ setOpenSidebar }) {
  const navigate = useNavigate();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const windowWidth = GetWindowWidth();
  const handleNavbarClose = () => setNavbarOpen(!navbarOpen);

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

  return (
    <section id="NavBar" className={`NavBar ${navbarOpen && "open"}`}>
      <div className="Hamburger_Icon">
        {windowWidth > 1024 && (
          <FaIcons.FaHome
            onClick={() => navigate("/LessonsList")}
            className="home"
          />
        )}
        {windowWidth <= 1024 && (
          <IoIcons.IoMdMenu onClick={() => setOpenSidebar(true)} />
        )}
      </div>

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
                <br />
                <br />
                <br />
                <div className="Credits">
                  <span>Huge credits to:</span>
                  <br />
                  <p>
                    Estrella, B. M. (2020). Modern Geometry. Bulacan State
                    University
                  </p>
                </div>
                <br />
                <br />
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
              </div>
            </div>
          </div>
          <div className="Bottom_Side">
            <img src={largeLogo} alt="Large Logo" />
          </div>
        </div>
        <span className="Navbar_Toggle" onClick={() => handleNavbarClose()}>
          <span>i</span>
        </span>
      </div>
    </section>
  );
}

export default Navbar;

import React, { useContext } from "react";
import "../styles/sidebar.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PlaneEuclideanSidebar from "./PlaneEuclideanLessons/PlaneEuclideanSidebar";
import NonEuclideanSidebar from "./NonEuclideanLessons/NonEuclideanSidebar";
import { SidebarContext } from "../context/context";

import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import QuizSidebar from "./Quiz/QuizSidebar";
function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { toggleSidebar, setToggleSidebar } = useContext(SidebarContext);
  const convertLessonName = (name) => {
    if (name.includes("PlaneEuclideanGeometry")) {
      return "Plane Euclidean Geometry";
    } else if (name.includes("NonEuclideanGeometry")) {
      return "Non-Euclidean Geometry";
    }
  };

  const redirect = () => {
    if (location.pathname.includes("PlaneEuclideanGeometry")) {
      navigate("/Lesson/PlaneEuclideanGeometry");
    } else if (location.pathname.includes("NonEuclideanGeometry")) {
      navigate("/Lesson/NonEuclideanGeometry");
    }
  };

  const redirectQuiz = () => {
    setToggleSidebar(false);
    if (location.pathname.includes("PlaneEuclideanGeometry")) {
      navigate("/Lesson/Quiz/PlaneEuclideanGeometry");
    } else if (location.pathname.includes("NonEuclideanGeometry")) {
      navigate("/Lesson/Quiz/NonEuclideanGeometry");
    }
  };
  const handleScroll = (id) => {
    const navbarHeight = 70; // Adjust this value according to the height of your fixed navbar
    const topic = document.getElementById(id);

    if (topic) {
      const topOffset =
        topic.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };
  return (
    <div id="Sidebar" className="Sidebar">
      <div className="Content">
        <div className="Close_Icon">
          <FaIcons.FaHome
            onClick={() => {
              setToggleSidebar(false);
              navigate("/LessonsList");
            }}
            className="home"
          />
          <IoIcons.IoMdClose onClick={() => setToggleSidebar(false)} />
        </div>
        {location.pathname && location.pathname.includes("/Lesson/Quiz") && (
          <p className="Title" style={{ pointerEvents: "none" }}>
            Questions
          </p>
        )}

        {location.pathname && !location.pathname.includes("/Lesson/Quiz") && (
          <p className="Title" onClick={() => redirect()}>
            {convertLessonName(location.pathname)}
          </p>
        )}

        <div className="List">
          {location.pathname &&
            location.pathname.includes("/Lesson/PlaneEuclideanGeometry") && (
              <PlaneEuclideanSidebar
                handleScrollClick={handleScroll}
                closeSidebar={setToggleSidebar}
              />
            )}
          {location.pathname &&
            location.pathname.includes("/Lesson/NonEuclideanGeometry") && (
              <NonEuclideanSidebar
                handleScrollClick={handleScroll}
                closeSidebar={setToggleSidebar}
              />
            )}

          {location.pathname && location.pathname.includes("/Lesson/Quiz") && (
            <QuizSidebar
              handleScrollClick={handleScroll}
              closeSidebar={setToggleSidebar}
            />
          )}
        </div>

        {location.pathname && !location.pathname.includes("/Lesson/Quiz") && (
          <div className="Quiz_Button" onClick={() => redirectQuiz()}>
            <button>Quiz</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;

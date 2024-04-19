import React, { useEffect, useState } from "react";

import "../../styles/lesson.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  NELesson1,
  NELesson2,
  PELesson1,
  PELesson2,
  PELesson3,
  PELesson4,
  PELesson5,
  PlaneEuclideanSidebar,
} from "../../components";
import { GetWindowWidth } from "../../utils";

import miniLogo from "../../assets/images/miniLogo.png";

//Icons
import * as IoIcons from "react-icons/io";

function Lesson() {
  const navigate = useNavigate();
  const location = useLocation();
  const { lessonName, lessonTitle } = useParams();
  const currentLocation = location.pathname;

  const [optionsOpen, setOptionsOpen] = useState(false);

  const redirectQuiz = () => {
    if (currentLocation.includes("PlaneEuclideanGeometry")) {
      navigate(`/Lesson/Quiz/PlaneEuclideanGeometry`);
    } else if (currentLocation.includes("NonEuclideanGeometry")) {
      navigate(`/Lesson/Quiz/NonEuclideanGeometry`);
    }
  };

  const convertLessonName = (name) => {
    if (name === "PlaneEuclideanGeometry") {
      return "Plane Euclidean Geometry";
    } else if (name === "NonEuclideanGeometry") {
      return "Non-Euclidean Geometry";
    } else if (name === "VectorsIn2Space3Space") {
      return "1. Vectors in 2-Space & 3-Space";
    } else if (name === "NormDistanceAndDotProduct") {
      return "2. Norm, Distance, and Dot Product";
    } else if (name === "Orthogonality") {
      return "3. Orthogonality";
    } else if (name === "EquationsOfLinesAndPlanes") {
      return "4. Equations of Lines and Planes";
    } else if (name === "CrossProduct") {
      return "5. Cross Product";
    } else if (name === "HyperbolicGeometry") {
      return "1. Hyperbolic Geometry";
    } else if (name === "SphericalGeometry") {
      return "2. Spherical Geometry";
    }
  };

  useEffect(() => {
    document.title = convertLessonName(lessonTitle);
  }, [location.pathname]);

  return (
    <section id="Lesson" className="Lesson">
      <div
        className="Bottom_Options Lesson"
        onMouseEnter={() => setOptionsOpen(true)}
        onMouseLeave={() => setOptionsOpen(false)}
        onClick={() => setOptionsOpen(!optionsOpen)}
      >
        <div className="Trigger">
          <IoIcons.IoIosArrowUp
            className={`Icon ${optionsOpen ? "open" : ""}`}
          />
        </div>
        <div className={`Options ${optionsOpen ? "open" : ""}`}>
          <Link
            to={`/Lesson/Quiz/${lessonTitle}`}
            className="Option"
            onClick={() => redirectQuiz()}
          >
            <span>Q?</span>
          </Link>
          <div className="Option" onClick={() => redirectQuiz()}>
            {lessonName === "PlaneEuclideanGeometry" && (
              <span className="Test">UNIT TEST I</span>
            )}

            {lessonName === "NonEuclideanGeometry" && (
              <span className="Test">UNIT TEST II</span>
            )}
          </div>

          {currentLocation.includes("PlaneEuclideanGeometry") && (
            <div
              className="Option"
              onClick={() => {
                navigate("/Lesson/NonEuclideanGeometry");
                setOptionsOpen(false);
              }}
            >
              <span>
                II. <IoIcons.IoMdListBox />
              </span>
            </div>
          )}
          {currentLocation.includes("NonEuclideanGeometry") && (
            <div
              className="Option"
              onClick={() => {
                navigate("/Lesson/PlaneEuclideanGeometry");
                setOptionsOpen(false);
              }}
            >
              <span>
                I. <IoIcons.IoMdListBox />
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="wrapper">
        <div className="Lesson_Title">
          <p>{convertLessonName(lessonTitle)}</p>
        </div>
        <div className="Lesson_Container">
          {location.pathname.includes("VectorsIn2Space3Space") && <PELesson1 />}
          {location.pathname.includes("NormDistanceAndDotProduct") && (
            <PELesson2 />
          )}
          {location.pathname.includes("Orthogonality") && <PELesson3 />}
          {location.pathname.includes("EquationsOfLinesAndPlanes") && (
            <PELesson4 />
          )}
          {location.pathname.includes("CrossProduct") && <PELesson5 />}
          {location.pathname.includes("HyperbolicGeometry") && <NELesson1 />}
          {location.pathname.includes("SphericalGeometry") && <NELesson2 />}
        </div>
      </div>
    </section>
  );
}

export default Lesson;

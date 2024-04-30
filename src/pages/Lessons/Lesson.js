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
import { Tooltip } from "@mui/material";

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
      return "Vectors in 2-Space & 3-Space";
    } else if (name === "NormDistanceAndDotProduct") {
      return "Norm, Distance, and Dot Product";
    } else if (name === "Orthogonality") {
      return "Orthogonality";
    } else if (name === "EquationsOfLinesAndPlanes") {
      return "Equations of Lines and Planes";
    } else if (name === "CrossProduct") {
      return "Cross Product";
    } else if (name === "HyperbolicGeometry") {
      return "Hyperbolic Geometry";
    } else if (name === "SphericalGeometry") {
      return "Spherical Geometry";
    }
  };

  useEffect(() => {
    document.title = convertLessonName(lessonTitle);
  }, [location.pathname]);

  return (
    <section id="Lesson" className="Lesson">
      <div
        className="Bottom_Options Lesson"
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
            <Tooltip
              title={
                <p style={{ fontSize: "14px" }}>
                  {lessonName === "NonEuclideanGeometry"
                    ? "NEG Unit Test"
                    : "PEG Unit Test"}
                </p>
              }
              placement="left"
            >
              <span className="Test">Unit Test</span>
            </Tooltip>
          </div>

          <div
            className="Option"
            onClick={() => {
              navigate(
                `/Lesson/${
                  lessonName === "NonEuclideanGeometry"
                    ? "PlaneEuclideanGeometry"
                    : "NonEuclideanGeometry"
                }`
              );
              setOptionsOpen(false);
            }}
          >
            <Tooltip
              title={
                <p style={{ fontSize: "14px" }}>
                  {lessonName === "NonEuclideanGeometry"
                    ? "Plane Euclidean Geometry"
                    : "Non-Euclidean Geometry"}
                </p>
              }
              placement="left"
            >
              {lessonName === "NonEuclideanGeometry" ? (
                <span>
                  I. <IoIcons.IoMdListBox />
                </span>
              ) : (
                <span>
                  II. <IoIcons.IoMdListBox />
                </span>
              )}
            </Tooltip>
          </div>
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

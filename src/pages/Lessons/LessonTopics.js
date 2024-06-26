import React, { useEffect, useState } from "react";
import "../../styles/lessontopics.css";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";

import miniLogo from "../../assets/images/miniLogo.png";

//Icons
import * as IoIcons from "react-icons/io";
import PlaneEuclideanTopics from "../../utils/PlaneEuclideanTopics";
import { NonEuclideanTopics } from "../../utils";
import { Tooltip } from "@mui/material";

function LessonTopics() {
  const { lessonName } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const currentLocation = location.pathname;

  const [optionsOpen, setOptionsOpen] = useState(false);

  const convertLessonName = (name) => {
    if (name === "PlaneEuclideanGeometry") {
      return "Plane Euclidean Geometry";
    } else if (name === "NonEuclideanGeometry") {
      return "Non-Euclidean Geometry";
    }
  };

  useEffect(() => {
    document.title = convertLessonName(lessonName);
  }, []);

  const redirectQuiz = () => {
    if (currentLocation.includes("PlaneEuclideanGeometry")) {
      navigate(`/Lesson/Quiz/PlaneEuclideanGeometry`);
    } else if (currentLocation.includes("NonEuclideanGeometry")) {
      navigate(`/Lesson/Quiz/NonEuclideanGeometry`);
    }
  };

  return (
    <section id="LessonTopics" className="LessonTopics">
      <div
        className="Bottom_Options"
        onClick={() => setOptionsOpen(!optionsOpen)}
      >
        <div className="Trigger">
          <IoIcons.IoIosArrowUp
            className={`Icon ${optionsOpen ? "open" : ""}`}
          />
        </div>
        <div className={`Options ${optionsOpen ? "open" : ""}`}>
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
        <img src={miniLogo} alt="" />
      </div>
      <div className="wrapper">
        <div className="LessonTopics_Container">
          <header>
            <Link to={"/LessonsList"} className="Back">
              <IoIcons.IoMdArrowBack />
            </Link>
            <p>{convertLessonName(lessonName)}</p>
          </header>
          <span className="reminder">Select a lesson to start.</span>
          <div className="LessonTopics_Content">
            {lessonName && lessonName === "PlaneEuclideanGeometry" && (
              <>
                {PlaneEuclideanTopics.map((topic) => (
                  <div key={topic.lessonNo} className="Topic">
                    <div className="Left_Side">
                      <Link to={topic.lessonPath} className="Title">
                        {topic.lessonTitle}
                      </Link>
                      <p className="Description">{topic.lessonDescription}</p>
                    </div>
                    <div className="Right_Side">
                      <Link to={topic.lessonPath} className="Image">
                        <img src={topic.lessonImage} alt="lesson Image" />
                      </Link>
                    </div>
                  </div>
                ))}
              </>
            )}

            {lessonName && lessonName === "NonEuclideanGeometry" && (
              <>
                {NonEuclideanTopics.map((topic) => (
                  <div key={topic.lessonNo} className="Topic">
                    <div className="Left_Side">
                      <Link to={topic.lessonPath} className="Title">
                        {topic.lessonTitle}
                      </Link>
                      <p className="Description">{topic.lessonDescription}</p>
                    </div>
                    <div className="Right_Side">
                      <Link to={topic.lessonPath} className="Image">
                        <img src={topic.lessonImage} alt="lesson Image" />
                      </Link>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LessonTopics;

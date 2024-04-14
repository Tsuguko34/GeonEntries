import React, { useEffect, useState } from "react";
import "../../styles/lessontopics.css";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";

import miniLogo from "../../assets/images/miniLogo.png";

//Icons
import * as IoIcons from "react-icons/io";
import PlaneEuclideanTopics from "../../utils/PlaneEuclideanTopics";
import { NonEuclideanTopics } from "../../utils";

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
  return (
    <section id="LessonTopics" className="LessonTopics">
      <div
        className="Bottom_Options"
        onMouseEnter={() => setOptionsOpen(true)}
        onMouseLeave={() => setOptionsOpen(false)}
      >
        <div className="Trigger">
          <IoIcons.IoIosArrowUp
            className={`Icon ${optionsOpen ? "open" : ""}`}
          />
        </div>
        <div className={`Options ${optionsOpen ? "open" : ""}`}>
          <div className="Option">
            <span>Q?</span>
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
          <span className="reminder">Click a title to start a lesson.</span>
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
                      <div className="Image">
                        <img src={topic.lessonImage} alt="lesson Image" />
                      </div>
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
                      <div className="Image">
                        <img src={topic.lessonImage} alt="lesson Image" />
                      </div>
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

import React, { useEffect } from "react";
import "../../styles/lessontopics.css";
import { useParams, Link } from "react-router-dom";

//Icons
import * as IoIcons from "react-icons/io";
import PlaneEuclideanTopics from "../../utils/PlaneEuclideanTopics";
import { NonEuclideanTopics } from "../../utils";

function LessonTopics() {
  const { lessonName } = useParams();

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
      <div className="wrapper">
        <div className="LessonTopics_Container">
          <header>
            <Link to={"/LessonsList"} className="Back">
              <IoIcons.IoMdArrowBack />
            </Link>
            <p>{convertLessonName(lessonName)}</p>
          </header>

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

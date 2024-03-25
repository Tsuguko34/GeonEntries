import React, { useEffect } from "react";

import "../../styles/lesson.css";
import { useLocation, useParams } from "react-router-dom";
import { PELesson1, PlaneEuclideanSidebar } from "../../components";

function Lesson() {
  const location = useLocation();
  const { lessonName, lessonTitle } = useParams();

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
      <div className="wrapper">
        <div className="Lesson_Title">
          <p>{convertLessonName(lessonTitle)}</p>
        </div>
        <div className="Lesson_Container">
          {location.pathname.includes("VectorsIn2Space3Space") && <PELesson1 />}
        </div>
      </div>
    </section>
  );
}

export default Lesson;
